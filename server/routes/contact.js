import dotenv from "dotenv";
dotenv.config();

import express from "express";
import nodemailer from "nodemailer";
import pool from "../db/connection.js";

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

transporter.verify((err) => {
  if (err) console.error("❌ Email transporter error:", err.message);
  else console.log("✅ Email transporter ready");
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/send-email", async (req, res) => {
  console.log("Received body:", req.body);
  const full_name = (req.body.full_name || "").trim();
  const email = (req.body.email || "").trim();
  const subject = (req.body.subject || "").trim();
  const message = (req.body.message || "").trim();

  // Validate all fields
  if (!full_name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Step 1: Check how many successful submissions this email already has
    const [rows] = await pool.query(
      "SELECT COUNT(*) AS cnt FROM contact_submissions WHERE gmail = ? AND email_status = 'sent'",
      [email]
    );
    const count = Number(rows[0].cnt);
    if (count >= 3) {
      return res.status(429).json({
        success: false,
        message: "You have already reached the 3-attempt limit for this email address.",
      });
    }

    // Step 2: Try to send email FIRST
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `[Portfolio] ${escapeHtml(subject)}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px; font-weight: bold;">Full Name:</td>
                <td style="padding: 8px 0;">${escapeHtml(full_name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0;">${escapeHtml(subject)}</td>
              </tr>
            </table>
            <h3 style="color: #374151;">Message:</h3>
            <div style="background: #f9fafb; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; white-space: pre-wrap;">${escapeHtml(message)}</div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">
              Reply to this email to respond to ${escapeHtml(full_name)}.
            </p>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error(`EMAIL FAILED:`, emailErr.message);
      return res.status(500).json({ success: false, message: "Failed to send email. Please try again." });
    }

    // Step 2: Email succeeded — save to database
    const [result] = await pool.query(
      "INSERT INTO contact_submissions (gmail, full_name, subject, message, email_status) VALUES (?, ?, ?, ?, 'sent')",
      [email, full_name, subject, message]
    );
    console.log(`SAVED: id=${result.insertId} | name=${full_name}`);

    return res.json({ success: true, message: "Email sent successfully!" });

  } catch (err) {
    console.error("Route error:", err.message);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

export default router;

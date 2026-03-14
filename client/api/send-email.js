import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const full_name = (req.body?.full_name || "").trim();
  const email    = (req.body?.email    || "").trim();
  const subject  = (req.body?.subject  || "").trim();
  const message  = (req.body?.message  || "").trim();

  if (!full_name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  // Count successful submissions for this email
  const { count, error: countErr } = await supabase
    .from("contact_submissions")
    .select("*", { count: "exact", head: true })
    .eq("gmail", email)
    .eq("email_status", "sent");

  if (countErr) {
    console.error("DB count error:", countErr.message);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }

  if (count >= 3) {
    return res.status(429).json({
      success: false,
      message: "You have already reached the 3-attempt limit for this email address.",
    });
  }

  // Send email via Resend
  const { error: emailErr } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.TO_EMAIL,
    reply_to: email,
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

  if (emailErr) {
    console.error("Email send error:", emailErr.message);
    return res.status(500).json({ success: false, message: "Failed to send email. Please try again." });
  }

  // Save to Supabase only after successful email
  const { error: insertErr } = await supabase
    .from("contact_submissions")
    .insert({ gmail: email, full_name, subject, message, email_status: "sent" });

  if (insertErr) {
    console.error("DB insert error:", insertErr.message);
    // Email was sent, just log the DB error but still return success
    return res.json({ success: true, message: "Email sent successfully!" });
  }

  return res.json({ success: true, message: "Email sent successfully!" });
}

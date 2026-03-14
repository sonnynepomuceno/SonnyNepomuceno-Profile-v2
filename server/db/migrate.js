import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function migrate() {
  // Connect without specifying a database first to create it if needed
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``
  );
  await connection.query(`USE \`${process.env.DB_NAME}\``);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id           INT AUTO_INCREMENT PRIMARY KEY,
      gmail        VARCHAR(255),
      full_name    VARCHAR(255) NOT NULL,
      subject      VARCHAR(255) NOT NULL,
      message      TEXT         NOT NULL,
      ip_address   VARCHAR(45),
      email_status ENUM('sent', 'failed') NOT NULL DEFAULT 'failed',
      email_error  TEXT,
      created_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Add columns to existing table if they don't exist yet
  await connection.query(`
    ALTER TABLE contact_submissions
      ADD COLUMN IF NOT EXISTS email_status ENUM('sent', 'failed') NOT NULL DEFAULT 'failed',
      ADD COLUMN IF NOT EXISTS email_error  TEXT
  `).catch(() => {});

  // Make gmail column nullable (no longer required from the form)
  await connection.query(`
    ALTER TABLE contact_submissions MODIFY COLUMN gmail VARCHAR(255) NULL
  `).catch(() => {});

  console.log("Migration complete: database and table are ready.");
  await connection.end();
}

migrate().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
});

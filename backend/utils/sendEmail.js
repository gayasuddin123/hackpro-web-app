// utils/sendEmail.js
const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // In development, just log
  if (process.env.NODE_ENV === "development") {
    console.log("\n" + "=".repeat(50));
    console.log("📧 EMAIL (Development Mode)");
    console.log("=".repeat(50));
    console.log(`To: ${options.email}`);
    console.log(`Subject: ${options.subject}`);
    console.log("=".repeat(50) + "\n");
    return;
  }

  // Production - send actual email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"HackPro Academy" <${process.env.SMTP_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html: options.html,
  });
};

module.exports = { sendEmail };
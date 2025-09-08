


const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Log Gmail user at startup (mask for safety)
if (process.env.GMAIL_USER) {
  const maskedUser = process.env.GMAIL_USER.replace(
    /(.{3})(.*)(@.*)/,
    (match, p1, p2, p3) => p1 + "*".repeat(p2.length) + p3
  );
  console.log("📧 Using Gmail user:", maskedUser);
} else {
  console.error("❌ GMAIL_USER not found in .env");
}

// API to handle contact form
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure Gmail SMTP with TLS (port 587)
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App Password (16 chars, no spaces)
      },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log("✅ Gmail SMTP connection successful");

    // Mail options
    let mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: ["AjayManthri@thepatternscompany.com", "lokeshm@thepatternscompany.com","manasareddy@thepatternscompany.com","info@thepatternscompany.com"], // multiple recipients
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("📩 Email sent successfully");
    res.status(200).json({ success: true, message: "Email sent successfully 🚀" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
});

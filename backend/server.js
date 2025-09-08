const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// API to handle contact form
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure Gmail SMTP
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App Password
      },
    });

    // Mail options
    let mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: "AjayManthri@thepatternscompany", // Recipient
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully 🚀" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
});

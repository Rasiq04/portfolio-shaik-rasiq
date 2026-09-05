import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required contact fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || 'shaikrasiq786@gmail.com',
        pass: process.env.SMTP_PASSWORD
      }
    });

    const mailOptions = {
      to: process.env.CONTACT_TO_EMAIL || 'shaikrasiq786@gmail.com',
      from: process.env.CONTACT_FROM_EMAIL || 'shaikrasiq786@gmail.com',
      replyTo: email, // Dynamic user's email submitted from contact form!
      subject: subject || `New Portfolio Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #38bdf8; margin-top: 0;">New Portfolio Contact Inquiry</h2>
          <p style="margin: 6px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 6px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #818cf8;">${email}</a></p>
          <p style="margin: 6px 0;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #334155; margin: 16px 0;" />
          <p style="margin-bottom: 8px;"><strong>Message Content:</strong></p>
          <div style="background-color: #020617; padding: 16px; border-radius: 8px; border: 1px solid #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #334155; margin: 16px 0;" />
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 0;">
            💡 <strong>Reply Flow Notice:</strong> Clicking "Reply" in your email client will automatically reply to <strong>${email}</strong>.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email delivered successfully to shaikrasiq786@gmail.com!' });
  } catch (error) {
    console.error('SMTP Delivery Error:', error);
    return res.status(500).json({
      success: false,
      message: 'SMTP delivery failed. Check your Gmail App Password in .env.local',
      error: error.message
    });
  }
}

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'contact-api-server',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res, next) => {
            if (req.method !== 'POST') {
              next();
              return;
            }

            let bodyStr = '';
            req.on('data', chunk => {
              bodyStr += chunk;
            });

            req.on('end', async () => {
              try {
                const body = JSON.parse(bodyStr || '{}');
                const { name, email, subject, message } = body;

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: 'Missing required fields' }));
                  return;
                }

                const smtpPass = env.SMTP_PASSWORD || process.env.SMTP_PASSWORD;
                if (!smtpPass || smtpPass === 'your_gmail_app_password_here') {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    success: false,
                    isAppPasswordMissing: true,
                    message: 'SMTP_PASSWORD is set to placeholder. Please set your Gmail App Password in .env.local'
                  }));
                  return;
                }

                const transporter = nodemailer.createTransport({
                  host: env.SMTP_HOST || 'smtp.gmail.com',
                  port: parseInt(env.SMTP_PORT || '587', 10),
                  secure: env.SMTP_SECURE === 'true',
                  auth: {
                    user: env.SMTP_USER || 'shaikrasiq786@gmail.com',
                    pass: smtpPass
                  }
                });

                await transporter.sendMail({
                  to: env.CONTACT_TO_EMAIL || 'shaikrasiq786@gmail.com',
                  from: env.CONTACT_FROM_EMAIL || 'shaikrasiq786@gmail.com',
                  replyTo: email, // Dynamic user's email submitted from contact form!
                  subject: subject || `New Portfolio Inquiry from ${name}`,
                  text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
                  html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                      <h2>New Portfolio Contact Form Submission</h2>
                      <p><strong>Name:</strong> ${name}</p>
                      <p><strong>Email:</strong> ${email}</p>
                      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                      <hr style="border: 1px solid #eee;" />
                      <p><strong>Message:</strong></p>
                      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                      <hr style="border: 1px solid #eee;" />
                      <p style="font-size: 12px; color: #888;">Replying to this email will send your response directly to ${email}.</p>
                    </div>
                  `
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: 'Email sent successfully!' }));
              } catch (err) {
                console.error('Local Dev Contact API Error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: err.message }));
              }
            });
          });
        }
      }
    ],
    server: {
      port: 3000,
      open: true
    }
  };
});

import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Github, Linkedin, Sparkles, Clock, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setIsError(false);
    setStatusMessage('');

    try {
      // POST payload to contact API route (/api/contact)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email, // Dynamic user's email
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setStatusMessage(`Message delivered successfully to ${personalDetails.email}! When replying, it will reply directly to ${formData.email}.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback or setup notice if SMTP_PASSWORD is not set yet in .env.local
        if (data.isAppPasswordMissing) {
          setIsError(true);
          setStatusMessage('SMTP App Password missing in .env.local. Opening your email app to complete delivery...');
        } else {
          setIsError(true);
          setStatusMessage(data.message || 'SMTP delivery failed. Launching default email client...');
        }

        // Open mailto fallback pre-filled
        const subject = encodeURIComponent(formData.subject || `New Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      // Fallback on network error: trigger mailto app
      const subject = encodeURIComponent(formData.subject || `New Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
      
      setSubmitted(true);
      setIsError(true);
      setStatusMessage('Network call fallback: Opening your email client to send message.');
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setSubmitted(false);
        setStatusMessage('');
      }, 7000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalDetails.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-4 h-4" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something <span className="gradient-text">Exceptional Together</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Open for remote software development roles (Outlier, Mercor, Upwork), full-time positions, and freelance client engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white">Contact Details</h3>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold">Direct Email</span>
                      <p className="text-xs font-semibold text-white font-mono">{personalDetails.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold">Mobile / Phone</span>
                      <p className="text-xs font-semibold text-white font-mono">{personalDetails.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-violet-400" />}
                  </button>
                </div>

                {/* Location & Timezone */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-4 h-4 text-cyan-400" /> {personalDetails.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-violet-400" /> {personalDetails.timezone}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-around">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition"
                >
                  <Github className="w-4 h-4 text-violet-400" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-800">
              <h3 className="text-xl font-bold text-white">Send Direct Message</h3>

              {submitted && (
                <div className={`p-4 rounded-xl text-xs flex items-center gap-2.5 ${
                  isError ? 'bg-amber-500/10 border border-amber-500/30 text-amber-300' : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                }`}>
                  {isError ? <AlertCircle className="w-5 h-5 shrink-0" /> : <CheckCircle2 className="w-5 h-5 shrink-0" />}
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-1 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-1 block">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. user@gmail.com (Dynamic user email)"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">Subject / Role Purpose</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Outlier AI Trainer Opportunity / Full-Stack Project"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your requirements or position..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition duration-200 disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending to shaikrasiq786@gmail.com...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Inquiry Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

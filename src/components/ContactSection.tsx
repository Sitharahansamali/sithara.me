import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, GraduationCap, Send, CheckCircle2, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sitharah.me@gmail.com',
    href: 'mailto:sitharah.me@gmail.com',
    color: '#58a6ff'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 77 520 9369',
    href: 'tel:+94775209369',
    color: '#a371ff'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Middeniya, Sri Lanka',
    href: '#',
    color: '#ff1493'
  },
  {
    icon: GraduationCap,
    label: 'Major & Graduation',
    value: 'AI & ML (BSc Hons) · 2027',
    href: '#',
    color: '#34d399'
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    internshipType: 'full-time',
    message: '',
    _gotcha: '' // Honeypot field for anti-spam
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData._gotcha) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xbdbpddq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          internshipType: formData.internshipType,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          internshipType: 'full-time',
          message: '',
          _gotcha: ''
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again or send an email directly.');
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#ff1493]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#ff1493]/30 bg-[#ff1493]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff1493]"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Orbitron, var(--font-display)' }}
          >
            Let's Build Something Intelligent.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            Open for AI & Software Engineering internship opportunities, collaborative research, and project inquiries.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="glass-panel rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Whether you have an internship opportunity, a project proposal, or simply want to connect, feel free to drop a message or reach out through social media.
              </p>

              <div className="space-y-4 pt-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0d1117]/80"
                        style={{ color: item.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400">{item.label}</h4>
                        {item.href !== '#' ? (
                          <a
                            href={item.href}
                            className="text-sm font-bold text-white hover:text-[#58a6ff] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-bold text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Social Profiles</h4>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://github.com/Sitharahansamali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d1117] text-slate-300 transition-all hover:border-[#58a6ff] hover:bg-[#58a6ff]/10 hover:text-[#58a6ff]"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sithara-hansamali-8663a1296/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d1117] text-slate-300 transition-all hover:border-[#58a6ff] hover:bg-[#58a6ff]/10 hover:text-[#58a6ff]"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Formspree Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel relative rounded-3xl p-8 sm:p-10 border border-[#58a6ff]/30">
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Send a Direct Message
              </h3>
              <p className="mt-1 text-xs text-slate-400">Powered by Formspree backend with anti-spam protection.</p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-2xl border border-[#34d399]/40 bg-[#34d399]/10 p-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#34d399]/20 text-[#34d399]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Thank you for reaching out. I have received your email and will respond as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-xl border border-white/20 bg-[#0d1117] px-6 py-2.5 text-xs font-bold text-white hover:bg-white/10"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Honeypot field (hidden from users) */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name Row */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-xs font-semibold text-slate-300">
                        First Name <span className="text-[#ff1493]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full rounded-xl border border-white/15 bg-[#0d1117]/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#58a6ff] focus:outline-none focus:ring-1 focus:ring-[#58a6ff]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-xs font-semibold text-slate-300">
                        Last Name <span className="text-[#ff1493]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full rounded-xl border border-white/15 bg-[#0d1117]/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#58a6ff] focus:outline-none focus:ring-1 focus:ring-[#58a6ff]"
                      />
                    </div>
                  </div>

                  {/* Email & Internship Type */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                        Email Address <span className="text-[#ff1493]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/15 bg-[#0d1117]/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#58a6ff] focus:outline-none focus:ring-1 focus:ring-[#58a6ff]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="internshipType" className="text-xs font-semibold text-slate-300">
                        Opportunity Type
                      </label>
                      <select
                        id="internshipType"
                        name="internshipType"
                        value={formData.internshipType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/15 bg-[#0d1117]/80 px-4 py-3 text-sm text-white focus:border-[#58a6ff] focus:outline-none focus:ring-1 focus:ring-[#58a6ff]"
                      >
                        <option value="full-time">Full-Time Internship</option>
                        <option value="part-time">Part-Time Internship</option>
                        <option value="remote">Remote Collaboration</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. AI Engineering Internship Opportunity"
                      className="w-full rounded-xl border border-white/15 bg-[#0d1117]/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#58a6ff] focus:outline-none focus:ring-1 focus:ring-[#58a6ff]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                      Message <span className="text-[#ff1493]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your team, project ideas, or opportunity details..."
                      className="w-full rounded-xl border border-white/15 bg-[#0d1117]/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#58a6ff] focus:outline-none focus:ring-1 focus:ring-[#58a6ff]"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-xs text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#58a6ff] via-[#a371ff] to-[#ff1493] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(88,166,255,0.4)] disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

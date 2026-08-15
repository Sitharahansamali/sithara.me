import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GraduationCap, Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sitharah.me@gmail.com',
    href: 'mailto:sitharah.me@gmail.com',
    color: '#E63946'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 77 520 9369',
    href: 'tel:+94775209369',
    color: '#F97316'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Middeniya, Sri Lanka',
    href: '#',
    color: '#FB923C'
  },
  {
    icon: GraduationCap,
    label: 'Major & Graduation',
    value: 'AI & ML (BSc Hons) · 2027',
    href: '#',
    color: '#E63946'
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
    _gotcha: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#E63946]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FB923C]"
          >
            <Mail className="h-3.5 w-3.5 text-[#E63946]" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-[#FAFAFA] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Get In <span className="text-gradient">Touch.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#A1A1AA]"
          >
            Open for AI & Software Engineering internship opportunities, collaborative research, and project inquiries.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="glass-panel rounded-3xl p-8 space-y-6 bg-[#18181B]">
              <h3 className="text-xl font-bold text-[#FAFAFA]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Contact Information
              </h3>
              <p className="text-sm leading-relaxed text-[#D4D4D8]">
                Whether you have an internship opportunity, a project proposal, or simply want to connect, feel free to drop a message or reach out through social media.
              </p>

              <div className="space-y-4 pt-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#121214]"
                        style={{ color: item.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-[#A1A1AA]">{item.label}</h4>
                        {item.href !== '#' ? (
                          <a
                            href={item.href}
                            className="text-sm font-bold text-[#FAFAFA] hover:text-[#F97316] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-bold text-[#FAFAFA]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">Social Profiles</h4>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://github.com/Sitharahansamali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#121214] text-[#D4D4D8] transition-all hover:border-[#E63946] hover:bg-[#E63946]/15 hover:text-white"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sithara-hansamali-8663a1296/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#121214] text-[#D4D4D8] transition-all hover:border-[#F97316] hover:bg-[#F97316]/15 hover:text-[#F97316]"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dark Aurora Formspree Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel relative rounded-3xl p-8 sm:p-10 border border-[#E63946]/30 bg-[#18181B]">
              <h3 className="text-2xl font-bold text-[#FAFAFA]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Send a Direct Message
              </h3>
              <p className="mt-1 text-xs text-[#A1A1AA]">Powered by Formspree backend with anti-spam protection.</p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-2xl border border-[#F97316]/40 bg-[#F97316]/10 p-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F97316]/20 text-[#F97316]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-[#FAFAFA]">Message Sent Successfully!</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#D4D4D8]">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-xl border border-white/20 bg-[#121214] px-6 py-2.5 text-xs font-bold text-white hover:bg-white/10"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                      <label htmlFor="firstName" className="text-xs font-semibold text-[#D4D4D8]">
                        First Name <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full rounded-xl border border-white/15 bg-[#121214] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#A1A1AA] focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-xs font-semibold text-[#D4D4D8]">
                        Last Name <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full rounded-xl border border-white/15 bg-[#121214] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#A1A1AA] focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Internship Type */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-[#D4D4D8]">
                        Email Address <span className="text-[#E63946]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/15 bg-[#121214] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#A1A1AA] focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="internshipType" className="text-xs font-semibold text-[#D4D4D8]">
                        Opportunity Type
                      </label>
                      <select
                        id="internshipType"
                        name="internshipType"
                        value={formData.internshipType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/15 bg-[#121214] px-4 py-3 text-sm text-[#FAFAFA] focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-all"
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
                    <label htmlFor="subject" className="text-xs font-semibold text-[#D4D4D8]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. AI Engineering Internship Opportunity"
                      className="w-full rounded-xl border border-white/15 bg-[#121214] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#A1A1AA] focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-[#D4D4D8]">
                      Message <span className="text-[#E63946]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your team, project ideas, or opportunity details..."
                      className="w-full rounded-xl border border-white/15 bg-[#121214] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#A1A1AA] focus:border-[#E63946] focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-all"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="rounded-xl border border-[#E63946]/40 bg-[#E63946]/10 p-4 text-xs text-[#E63946]">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E63946] to-[#F97316] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(230,57,70,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(230,57,70,0.55)] disabled:opacity-50"
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

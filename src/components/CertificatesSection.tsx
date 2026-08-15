import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const certificates = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    year: '2026',
    badge: 'AI & GenAI',
    link: 'https://www.coursera.org/account/accomplishments/specialization/18IL96JZM5UO',
    color: '#E63946'
  },
  {
    title: 'AWS Artificial Intelligence Practitioner Learning Plan',
    issuer: 'Amazon Web Services (AWS)',
    year: '2026',
    badge: 'Cloud AI',
    link: 'https://drive.google.com/file/d/1KBx2eJ3Dsk6qqQNMOeedrOCyfGJa3eGG/view?usp=sharing',
    color: '#F97316'
  },
  {
    title: 'IBM Python for Data Science, AI & Development',
    issuer: 'IBM',
    year: '2025',
    badge: 'Python & AI',
    link: 'https://www.coursera.org/account/accomplishments/verify/0U2ACFWQFAU7',
    color: '#FB923C'
  },
  {
    title: 'Exploratory Data Analysis with Python and Pandas',
    issuer: 'IBM',
    year: '2025',
    badge: 'Data Science',
    link: 'https://www.coursera.org/account/accomplishments/verify/0U2ACFWQFAU7',
    color: '#E63946'
  },
  {
    title: 'Linux Essentials Certification',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    badge: 'Systems & OS',
    link: 'https://drive.google.com/file/d/1gplms0i49eE1_14MApqmbDOfEWAeA6Ki/view?usp=sharing',
    color: '#F97316'
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft / ScholarHat',
    year: '2026',
    badge: 'Cloud Computing',
    link: 'https://drive.google.com/file/d/1p1SJ2tM2avX3fUr_3lKrPyTcvYSSZ0DA/view?usp=sharing',
    color: '#FB923C'
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    year: '2026',
    badge: 'LLM & AI Dev',
    link: 'https://verify.skilljar.com/c/uaz85bk2tsje',
    color: '#E63946'
  },
  {
    title: 'Get Started with Anaconda',
    issuer: 'Anaconda, Inc.',
    year: '2026',
    badge: 'Data Science Environment',
    link: 'https://learning.anaconda.com/certificates/xdfb4igyob',
    color: '#F97316'
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-[#E63946]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FB923C]"
          >
            <Award className="h-3.5 w-3.5 text-[#E63946]" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-[#FAFAFA] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Verified <span className="text-gradient">Certifications.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#A1A1AA]"
          >
            Professional certificates from Google, AWS, IBM, Anthropic, Cisco, and Microsoft.
          </motion.p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, idx) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 bg-[#18181B] transition-all hover:-translate-y-1.5 hover:border-[#E63946]/40"
            >
              {/* Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: cert.color }} />

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#A1A1AA]">{cert.year}</span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: cert.color }}
                  >
                    {cert.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#FAFAFA] group-hover:text-[#F97316] transition-colors leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#A1A1AA] flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#E63946]" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FB923C] hover:text-white transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

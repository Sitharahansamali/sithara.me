import React from 'react';
import { motion } from 'framer-motion';
import CounterAnimation from './motion/CounterAnimation';
import { Brain, Cpu, Code2, Rocket, Cloud, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

const interestTags = [
  { name: 'Artificial Intelligence', icon: Brain, color: '#7C3AED' },
  { name: 'Machine Learning', icon: Cpu, color: '#38BDF8' },
  { name: 'Deep Learning', icon: Layers, color: '#22D3EE' },
  { name: 'Computer Vision', icon: Sparkles, color: '#38BDF8' },
  { name: 'Natural Language Processing', icon: Code2, color: '#a855f7' },
  { name: 'Generative AI', icon: Brain, color: '#7C3AED' },
  { name: 'AI Agents', icon: Cpu, color: '#22C55E' },
  { name: 'Automation', icon: Rocket, color: '#F59E0B' },
  { name: 'MLOps', icon: Layers, color: '#6366F1' },
  { name: 'Cloud Deployment', icon: Cloud, color: '#38BDF8' },
  { name: 'Full Stack Development', icon: Code2, color: '#22D3EE' }
];

const stats = [
  { label: 'Current GPA', value: 3.61, suffix: '', isFloat: true },
  { label: 'Projects Built', value: 12, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#38BDF8]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Story & Engineering Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-[#F8FAFC] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            About <span className="text-gradient">Me.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#94A3B8]"
          >
            Connecting artificial intelligence research with scalable, production-ready software solutions.
          </motion.p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Story Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel relative flex flex-col justify-between rounded-3xl p-8 lg:col-span-7 bg-[#111827]"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#F8FAFC]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                The Story Behind My Engineering Journey
              </h3>
              <p className="text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
                I am a third-year Computer Science undergraduate specializing in Artificial Intelligence at the Faculty of Computing and Technology, University of Kelaniya, driven by a deep passion for transforming complex research ideas into intuitive, practical software applications.
              </p>
              <p className="text-sm leading-relaxed text-[#94A3B8] sm:text-base">
                My work spans the complete engineering lifecycle: from training deep learning models and architecting FastAPI/Next.js backends to managing Supabase databases and containerizing workflows with Docker for production cloud deployment.
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">Engineering Principles</h4>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0F172A]/80 p-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C3AED]" />
                    <span className="text-xs font-semibold text-[#F8FAFC]">End-to-End System Design</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0F172A]/80 p-3">
                    <CheckCircle2 className="h-5 w-5 text-[#38BDF8]" />
                    <span className="text-xs font-semibold text-[#F8FAFC]">Model Explainability & Ethics</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0F172A]/80 p-3">
                    <CheckCircle2 className="h-5 w-5 text-[#22D3EE]" />
                    <span className="text-xs font-semibold text-[#F8FAFC]">Production MLOps Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0F172A]/80 p-3">
                    <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                    <span className="text-xs font-semibold text-[#F8FAFC]">Clean, Scalable Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specializations & Stats Panel */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Specialization Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-3xl p-6 bg-[#111827]"
            >
              <h3 className="text-lg font-bold text-[#F8FAFC]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Core Focus Areas
              </h3>
              <p className="mt-1 text-xs text-[#94A3B8]">Domains I actively build and research in:</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {interestTags.map((tag) => {
                  const Icon = tag.icon;
                  return (
                    <div
                      key={tag.name}
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#0F172A]/90 px-3.5 py-1.5 text-xs font-semibold text-[#CBD5E1] transition-all hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/15 hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5 transition-transform group-hover:scale-110" style={{ color: tag.color }} />
                      <span>{tag.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="glass-panel rounded-2xl p-5 text-center bg-[#111827]"
                >
                  <p className="text-3xl font-black text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <CounterAnimation end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#94A3B8]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Rocket, Flag, Brain, Code, Cloud, Award } from 'lucide-react';

const milestones = [
  {
    step: '01',
    title: 'Started Computer Science',
    description: 'Enrolled in Computer Science at University of Kelaniya, building foundations in software engineering, data structures, and object-oriented programming.',
    icon: Code,
    color: '#7C3AED',
    status: 'Completed'
  },
  {
    step: '02',
    title: 'Learned Python & Data Science',
    description: 'Mastered Python syntax, data structures, NumPy array mathematics, Pandas tabular manipulation, and Matplotlib analytical visualizations.',
    icon: Code,
    color: '#7C3AED',
    status: 'Completed'
  },
  {
    step: '03',
    title: 'Built Full-Stack Web Applications',
    description: 'Developed full-stack web platforms using Java Spring Boot, React, Next.js, FastAPI, PostgreSQL, Supabase, and REST APIs.',
    icon: Rocket,
    color: '#7C3AED',
    status: 'Completed'
  },
  {
    step: '04',
    title: 'Started Machine Learning & Hackathons',
    description: 'Explored supervised and unsupervised ML algorithms, NLP text classifiers, and participated in the OCTAVE DataStorm Hackathon.',
    icon: Award,
    color: '#7C3AED',
    status: 'Completed'
  },
  {
    step: '05',
    title: 'Built Medical & AI Solutions',
    description: 'Constructed PyTorch deep learning models (EfficientNet-B0 with Grad-CAM explainability) and news credibility prediction platforms.',
    icon: Brain,
    color: '#7C3AED',
    status: 'Completed'
  },
  {
    step: '06',
    title: 'Cloud Deployment & DevOps Pipeline',
    description: 'Containerized AI applications with Docker, configured GitHub Actions CI/CD workflows, and deployed microservices to Azure & Render.',
    icon: Cloud,
    color: '#7C3AED',
    status: 'Completed'
  },
  {
    step: '07',
    title: 'Current AI Specialization',
    description: 'Specializing in Generative AI, LangGraph multi-agent frameworks, vector database RAG memory, and Whisper speech processing.',
    icon: Brain,
    color: '#7C3AED',
    status: 'Current Focus',
    isCurrent: true
  },
  {
    step: '08',
    title: 'Future Goal: AI Engineer',
    description: 'Aspiring to join an innovative technology team as an Artificial Intelligence & Machine Learning Engineer to build production software.',
    icon: Flag,
    color: '#22D3EE',
    status: 'Next Milestone',
    isFuture: true
  }
];

export default function JourneyTimeline() {
  return (
    <section id="journey" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#38BDF8]"
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Growth & Evolution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-[#F8FAFC] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            My <span className="text-gradient">Journey.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#94A3B8]"
          >
            The step-by-step milestone progression of my technical capabilities and specialization.
          </motion.p>
        </div>

        {/* Timeline List */}
        <div className="relative mx-auto max-w-4xl">
          {/* Animated Connecting Line */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-[#7C3AED] via-[#38BDF8] to-[#22D3EE] sm:left-1/2 sm:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Node */}
                  <div
                    className={`absolute left-6 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#08111F] text-white shadow-lg sm:left-1/2 ${
                      item.isCurrent
                        ? 'bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.8)] animate-pulse'
                        : item.isFuture
                        ? 'bg-[#22D3EE] text-black shadow-[0_0_15px_rgba(34,211,238,0.6)]'
                        : 'bg-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.5)]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Card Content */}
                  <div className={`ml-14 w-full sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto'}`}>
                    <div className="glass-panel group relative overflow-hidden rounded-3xl p-6 bg-[#111827] transition-all hover:border-[#7C3AED]/50 hover:-translate-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:justify-end">
                        <span className="font-mono text-xs font-bold text-[#94A3B8]">MILESTONE {item.step}</span>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            item.isFuture
                              ? 'bg-[#22D3EE] text-black'
                              : item.isCurrent
                              ? 'bg-[#7C3AED] text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]'
                              : 'bg-[#7C3AED]/20 text-[#38BDF8] border border-[#7C3AED]/30'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#CBD5E1]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2, Rocket, Flag, Brain, Code, Cloud } from 'lucide-react';

const milestones = [
  {
    step: '01',
    title: 'Started Computer Science',
    description: 'Enrolled in Computer Science at University of Kelaniya, building foundations in algorithms, OOP, and data structures.',
    icon: Code,
    color: '#58a6ff',
    status: 'Completed'
  },
  {
    step: '02',
    title: 'Learned Python & Data Science',
    description: 'Mastered Python programming, NumPy matrix math, Pandas data manipulation, and Matplotlib data visualization.',
    icon: Code,
    color: '#38bdf8',
    status: 'Completed'
  },
  {
    step: '03',
    title: 'Built Full-Stack Applications',
    description: 'Engineered web applications using Spring Boot, React, FastAPI, PostgreSQL, Supabase, and REST API architectures.',
    icon: Rocket,
    color: '#93c5fd',
    status: 'Completed'
  },
  {
    step: '04',
    title: 'Started Machine Learning',
    description: 'Dived into supervised & unsupervised ML, regression, decision trees, NLP text processing with Scikit-learn.',
    icon: Brain,
    color: '#a371ff',
    status: 'Completed'
  },
  {
    step: '05',
    title: 'Built Medical & NLP AI Projects',
    description: 'Constructed deep learning models using PyTorch EfficientNet with Grad-CAM explainability and fake news classifiers.',
    icon: Brain,
    color: '#ff1493',
    status: 'Completed'
  },
  {
    step: '06',
    title: 'Cloud Deployment & DevOps',
    description: 'Containerized AI microservices using Docker, configured GitHub Actions CI/CD, and deployed to Azure & Render.',
    icon: Cloud,
    color: '#34d399',
    status: 'Completed'
  },
  {
    step: '07',
    title: 'Current AI Specialization',
    description: 'Architecting stateful GenAI voice agents, LangGraph multi-agent orchestration, and vector-search RAG platforms.',
    icon: Brain,
    color: '#fbbf24',
    status: 'Current Focus'
  },
  {
    step: '08',
    title: 'Future Goal: AI Engineer',
    description: 'Eager to contribute as an AI/ML Engineer to build scalable, intelligent software systems with real-world impact.',
    icon: Flag,
    color: '#f43f5e',
    status: 'Next Milestone'
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
            className="inline-flex items-center gap-2 rounded-full border border-[#a371ff]/30 bg-[#a371ff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#a371ff]"
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Growth & Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Orbitron, var(--font-display)' }}
          >
            Engineering Journey Timeline.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            The step-by-step evolution of my skills, projects, and AI specialization.
          </motion.p>
        </div>

        {/* Timeline List */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Center Line */}
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-[#58a6ff] via-[#a371ff] to-[#ff1493] sm:left-1/2 sm:-translate-x-1/2" />

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
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-4 -translate-x-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#080b11] bg-[#0d1117] text-white shadow-[0_0_15px_rgba(88,166,255,0.4)] sm:left-1/2">
                    <Icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>

                  {/* Card Content */}
                  <div className={`ml-12 w-full sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto'}`}>
                    <div className="glass-panel group relative overflow-hidden rounded-2xl p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:justify-end">
                        <span className="font-mono text-xs font-bold text-slate-500">STEP {item.step}</span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-[#58a6ff] transition-colors">{item.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.description}</p>
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

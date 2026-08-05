import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

const courseworkChips = [
  'Machine Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Complex Systems & Agent Technology',
  'Computer Graphics',
  'Database Systems',
  'Software Engineering'
];

const educationTimeline = [
  {
    stage: '01',
    level: 'G.C.E. Ordinary Level',
    institution: 'H/Walasmulla National School',
    achievement: '9A Passes',
    details: 'Achieved top distinction (9A Passes) across all subjects, establishing a strong analytical, scientific, and mathematical foundation.',
    color: '#58a6ff'
  },
  {
    stage: '02',
    level: 'G.C.E. Advanced Level',
    institution: 'H/Walasmulla National School',
    stream: 'Physical Science Stream',
    achievement: 'Z-Score: 1.5287',
    details: 'Successfully completed Advanced Level examinations in Combined Mathematics, Physics, and Chemistry with a high competitive Z-Score of 1.5287, earning admission to university.',
    color: '#a371ff'
  },
  {
    stage: '03',
    level: 'Bachelor of Science (Honours) Computer Science',
    institution: 'Faculty of Computing and Technology, University of Kelaniya',
    specialization: 'Specialization in Artificial Intelligence',
    gpa: '3.61 / 4.00',
    details: 'Focusing on artificial intelligence, machine learning algorithms, computer vision, natural language processing, agent systems, and production software development.',
    color: '#ff1493'
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Lights */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#58a6ff]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#58a6ff]/30 bg-[#58a6ff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#58a6ff]"
          >
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            EDUCATION & <span className="text-gradient">SPECIALIZATION.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            My academic journey from school distinctions to university specialization in Artificial Intelligence.
          </motion.p>
        </div>

        {/* 3-Stage Vertical Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-[#58a6ff] via-[#a371ff] to-[#ff1493] sm:left-1/2 sm:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {/* Stage 1: Ordinary Level */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start"
            >
              <div className="absolute left-6 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#080b11] bg-[#58a6ff] text-black font-bold text-xs shadow-[0_0_15px_rgba(88,166,255,0.6)] sm:left-1/2">
                O/L
              </div>

              <div className="ml-14 sm:ml-0 sm:w-1/2 sm:pr-10 sm:text-right">
                <div className="glass-panel group relative overflow-hidden rounded-3xl p-6 transition-all hover:border-[#58a6ff]/50">
                  <div className="flex flex-wrap items-center gap-2 mb-2 sm:justify-end">
                    <span className="rounded-full border border-[#58a6ff]/40 bg-[#58a6ff]/10 px-3 py-0.5 text-xs font-bold text-[#58a6ff]">
                      9A Passes
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    G.C.E. Ordinary Level
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">H/Walasmulla National School</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Completed G.C.E. Ordinary Level examinations with top distinctions across all 9 subjects, establishing a strong analytical and scientific foundation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stage 2: Advanced Level */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start"
            >
              <div className="absolute left-6 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#080b11] bg-[#a371ff] text-black font-bold text-xs shadow-[0_0_15px_rgba(163,113,255,0.6)] sm:left-1/2">
                A/L
              </div>

              <div className="ml-14 sm:ml-auto sm:w-1/2 sm:pl-10">
                <div className="glass-panel group relative overflow-hidden rounded-3xl p-6 transition-all hover:border-[#a371ff]/50">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-full border border-[#a371ff]/40 bg-[#a371ff]/10 px-3 py-0.5 text-xs font-bold text-[#a371ff]">
                      Physical Science Stream
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-slate-300">
                      Z-Score: 1.5287
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    G.C.E. Advanced Level
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">H/Walasmulla National School</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Successfully completed G.C.E. Advanced Level in Combined Mathematics, Physics, and Chemistry, achieving a competitive Z-Score of 1.5287 and securing direct university entry.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stage 3: University of Kelaniya */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start"
            >
              <div className="absolute left-6 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#080b11] bg-gradient-to-tr from-[#58a6ff] via-[#a371ff] to-[#ff1493] text-black font-bold text-sm shadow-[0_0_20px_rgba(255,20,147,0.7)] sm:left-1/2">
                <GraduationCap className="h-6 w-6 text-black" />
              </div>

              <div className="ml-14 sm:ml-0 sm:w-1/2 sm:pr-10 sm:text-right">
                <div className="glass-panel group relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all hover:border-[#ff1493]/50">
                  <div className="flex flex-wrap items-center gap-2 mb-2 sm:justify-end">
                    <span className="rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 px-3 py-0.5 text-xs font-bold text-[#ff1493]">
                      Current GPA: 3.61 / 4.00
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Bachelor of Science (Honours) Computer Science
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#58a6ff]">
                    Specialization in Artificial Intelligence
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Faculty of Computing and Technology · University of Kelaniya
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    Comprehensive study in machine learning architectures, natural language processing, computer vision, autonomous AI agents, and production software engineering.
                  </p>

                  {/* Animated Coursework Chips */}
                  <div className="mt-5 pt-4 border-t border-white/10 text-left">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                      <BookOpen className="h-4 w-4 text-[#a371ff]" />
                      <span>Key Coursework</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {courseworkChips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-xl border border-white/10 bg-[#0d1117]/90 px-3 py-1 text-xs font-semibold text-slate-200 transition-all hover:border-[#58a6ff]/40 hover:bg-[#58a6ff]/10 hover:text-white"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Sparkles } from 'lucide-react';

const coursework = [
  'Machine Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Complex Systems & Agent Technology',
  'Computer Graphics',
  'Data Structures & Algorithms',
  'Software Engineering & OOP'
];

export default function EducationSection() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8">
      {/* Radial Background Light */}
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
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Orbitron, var(--font-display)' }}
          >
            Education & Specialization.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            Formal academic foundation in Computer Science and Artificial Intelligence.
          </motion.p>
        </div>

        {/* Education Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-10"
        >
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#58a6ff] via-[#a371ff] to-[#ff1493]" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Degree Details */}
            <div className="space-y-4 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#58a6ff]/40 bg-[#58a6ff]/10 px-3.5 py-1 text-xs font-bold text-[#58a6ff]">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>2023 - Present (Graduation: 2027)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-[#a371ff]" />
                  <span>Sri Lanka</span>
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white sm:text-3xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Bachelor of Science (Hons) in Computer Science
              </h3>

              <div className="flex items-center gap-2 text-base font-semibold text-[#58a6ff]">
                <Sparkles className="h-4 w-4" />
                <span>Specialization in Artificial Intelligence</span>
              </div>

              <p className="text-sm font-medium text-slate-300">
                University of Kelaniya, Sri Lanka
              </p>

              <p className="text-sm leading-relaxed text-slate-400">
                Rigorous four-year degree program emphasizing artificial intelligence algorithms, mathematical foundations of machine learning, computer vision architectures, agent-based systems, and software engineering.
              </p>

              {/* Coursework Tags */}
              <div className="pt-3">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <BookOpen className="h-4 w-4 text-[#a371ff]" />
                  <span>Key Coursework & Electives</span>
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-xl border border-white/10 bg-[#0d1117]/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right GPA & Academic Honor Card */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#1f293d] p-8 text-center shadow-xl lg:col-span-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#58a6ff] to-[#a371ff] text-black shadow-lg">
                <Award className="h-8 w-8" />
              </div>

              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Academic Standing</h4>
              <p className="mt-1 text-4xl font-extrabold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <span className="text-gradient">3.8+</span> <span className="text-lg font-normal text-slate-400">/ 4.0</span>
              </p>
              <p className="mt-2 text-xs text-slate-400">Consistently high performance in AI & CS modules</p>

              <div className="mt-6 rounded-xl border border-[#58a6ff]/30 bg-[#58a6ff]/10 px-4 py-2 text-xs font-semibold text-[#58a6ff]">
                3rd Year Undergraduate
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

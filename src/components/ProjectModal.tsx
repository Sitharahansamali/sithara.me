import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, AlertCircle, UserCheck, BookOpen, Award, Clock, BarChart3 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export type ProjectData = {
  id: string;
  title: string;
  badge?: string;
  status?: string;
  duration?: string;
  description: string;
  problem: string;
  solution?: string;
  keyFeatures: string[];
  technologies: string[];
  architecture: string[];
  challenges: string[];
  achievements?: string[];
  learnings?: string[];
  results?: string;
  role: string;
  github: string;
  demo: string;
  highlights?: string[];
  gradient: string;
  mockupBg: string;
  metrics?: Array<{ label: string; value: string }>;
};

type ProjectModalProps = {
  project: ProjectData | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080b11]/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="glass-panel relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#58a6ff]/30 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0d1117]/80 text-slate-300 transition-colors hover:border-[#58a6ff] hover:text-[#58a6ff]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 pr-12">
            <div className="flex flex-wrap items-center gap-2.5">
              {project.badge && (
                <span className="rounded-full border border-[#ff1493]/40 bg-[#ff1493]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ff1493]">
                  {project.badge}
                </span>
              )}
              {project.status && (
                <span className="rounded-full border border-[#58a6ff]/40 bg-[#58a6ff]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#58a6ff]">
                  {project.status}
                </span>
              )}
              {project.duration && (
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  <Clock className="h-3 w-3 text-[#a371ff]" />
                  <span>{project.duration}</span>
                </span>
              )}
              {project.highlights?.map((h) => (
                <span key={h} className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-medium text-slate-300">
                  {h}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 sm:text-base leading-relaxed">{project.description}</p>
          </div>

          <hr className="my-6 border-white/10" />

          {/* Modal Metrics Bar */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/10 bg-[#0d1117]/80 p-3 text-center">
                  <p className="text-xl font-bold text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {m.value}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Modal Body */}
          <div className="space-y-8">
            {/* Problem Solved */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-bold text-[#58a6ff]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <AlertCircle className="h-5 w-5" />
                <span>Problem Statement</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.problem}</p>
            </div>

            {/* Solution */}
            {project.solution && (
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold text-[#34d399]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Award className="h-5 w-5" />
                  <span>Proposed Solution</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.solution}</p>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-bold text-[#a371ff]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <CheckCircle2 className="h-5 w-5" />
                <span>Key Features</span>
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {project.keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0d1117]/80 p-3 text-xs font-semibold text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-[#a371ff]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architecture && project.architecture.length > 0 && (
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold text-[#38bdf8]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Layers className="h-5 w-5" />
                  <span>Architecture & Engineering Highlights</span>
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.architecture.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold text-[#ff1493]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Cpu className="h-5 w-5" />
                  <span>Key Technical Challenges Solved</span>
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff1493]" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements & Results */}
            {project.results && (
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold text-[#fbbf24]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <BarChart3 className="h-5 w-5" />
                  <span>Project Results & Impact</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.results}</p>
              </div>
            )}

            {/* My Role */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-bold text-[#34d399]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <UserCheck className="h-5 w-5" />
                <span>My Role & Contributions</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.role}</p>
            </div>

            {/* Key Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold text-[#c084fc]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <BookOpen className="h-5 w-5" />
                  <span>Key Learnings</span>
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.learnings.map((learning) => (
                    <li key={learning} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technology Stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-[#0d1117] px-3.5 py-1.5 text-xs font-semibold text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#58a6ff] to-[#a371ff] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(88,166,255,0.4)]"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Application</span>
                </a>
              )}

              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0d1117] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-[#58a6ff] hover:bg-[#58a6ff]/10"
                >
                  <GithubIcon className="h-4 w-4 text-[#58a6ff]" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

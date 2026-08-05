import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypingEffect from './motion/TypingEffect';
import { Download, FolderGit2, Mail, ArrowRight, Sparkles, BrainCircuit } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function HeroSection() {
  const [imgSrc, setImgSrc] = useState('/assets/sithara.jpg');

  const handleImageError = () => {
    // Fallback data URI SVG if file loading fails
    setImgSrc(
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><rect width='100%' height='100%' fill='%230d1117'/><circle cx='200' cy='150' r='60' fill='%2358a6ff'/><path d='M100,320 C100,240 300,240 300,320' fill='%2358a6ff'/></svg>"
    );
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background Radial Lights */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-radial from-[#58a6ff]/20 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-radial from-[#a371ff]/15 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-radial from-[#ff1493]/15 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Hero Content */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#58a6ff]/30 bg-[#58a6ff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#58a6ff] backdrop-blur-md shadow-[0_0_20px_rgba(88,166,255,0.15)]"
            >
              <BrainCircuit className="h-4 w-4 animate-pulse text-[#58a6ff]" />
              <span>Computer Science Undergraduate · AI Specialization</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Building Intelligent Software with{' '}
              <span className="text-gradient block mt-1">Artificial Intelligence.</span>
            </motion.h1>

            {/* Animated Typing Subhead */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base font-semibold text-slate-300 sm:text-lg"
            >
              Specializing in <TypingEffect />
            </motion.div>

            {/* Detailed Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
            >
              I am a Computer Science undergraduate specializing in Artificial Intelligence, passionate about building AI-powered applications, intelligent automation systems, and scalable full-stack solutions that solve real-world problems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 sm:w-auto sm:justify-start"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#58a6ff] via-[#a371ff] to-[#ff1493] px-6 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(88,166,255,0.5)]"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/assets/cv/Sithara Hansamali.pdf"
                download="Sithara Hansamali.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#58a6ff]/40 bg-[#0d1117]/80 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-[#58a6ff] hover:bg-[#58a6ff]/10 hover:shadow-[0_0_25px_rgba(88,166,255,0.25)]"
              >
                <Download className="h-4 w-4 text-[#58a6ff]" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#a371ff]" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Sitharahansamali"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0d1117]/70 text-slate-300 transition-all hover:border-[#58a6ff] hover:bg-[#58a6ff]/10 hover:text-[#58a6ff] hover:shadow-[0_0_15px_rgba(88,166,255,0.3)]"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sithara-hansamali-8663a1296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0d1117]/70 text-slate-300 transition-all hover:border-[#58a6ff] hover:bg-[#58a6ff]/10 hover:text-[#58a6ff] hover:shadow-[0_0_15px_rgba(88,166,255,0.3)]"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>

                <a
                  href="mailto:sitharah.me@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0d1117]/70 text-slate-300 transition-all hover:border-[#ff1493] hover:bg-[#ff1493]/10 hover:text-[#ff1493] hover:shadow-[0_0_15px_rgba(255,20,147,0.3)]"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Profile Image Frame */}
          <div className="flex justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Outer Pulsing Glow Aura Ring */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-[#58a6ff] via-[#a371ff] to-[#ff1493] opacity-75 blur-xl animate-pulse-glow" />

              {/* Profile Image Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#0d1117] p-3 shadow-2xl backdrop-blur-xl animate-float-slow">
                <div className="relative aspect-4/5 overflow-hidden rounded-[2rem]">
                  <img
                    src={imgSrc}
                    onError={handleImageError}
                    alt="Sithara Hansamali - AI Engineer"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Glass Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#0d1117]/90 p-3.5 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#58a6ff]/20 text-[#58a6ff]">
                      <Sparkles className="h-5 w-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        AI & ML Engineer
                      </h4>
                      <p className="text-[11px] text-slate-400">Open for Internships & Projects</p>
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

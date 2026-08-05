import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#08111F]"
        >
          {/* Ambient Glow */}
          <div className="absolute h-96 w-96 rounded-full bg-radial from-[#7C3AED]/25 via-transparent to-transparent blur-3xl" />

          <div className="relative flex flex-col items-center">
            {/* Animated Logo Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-transparent border-t-[#7C3AED] border-r-[#38BDF8] border-b-[#22D3EE]"
            >
              <div className="h-16 w-16 rounded-full border border-white/10 bg-[#0F172A]/90 backdrop-blur-md" />
            </motion.div>

            {/* Inner Brand Monogram */}
            <div className="absolute top-[26px] font-mono text-xl font-bold tracking-tighter text-[#F8FAFC]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              SH
            </div>

            {/* Title & Status */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-[#CBD5E1]"
            >
              Initializing Dark Aurora System
            </motion.h2>

            {/* Progress Bar Container */}
            <div className="mt-4 h-1.5 w-64 overflow-hidden rounded-full bg-white/10 p-0.5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#38BDF8] to-[#22D3EE]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Percentage text */}
            <span className="mt-2 font-mono text-xs text-[#94A3B8]">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

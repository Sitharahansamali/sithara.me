import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[10000] h-1 origin-left bg-gradient-to-r from-[#58a6ff] via-[#a371ff] to-[#ff1493] shadow-[0_0_12px_rgba(88,166,255,0.8)]"
      style={{ scaleX }}
    />
  );
}

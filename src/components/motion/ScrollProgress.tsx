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
      className="fixed top-0 left-0 right-0 z-[10000] h-1 origin-left bg-gradient-to-r from-[#7C3AED] via-[#38BDF8] to-[#22D3EE] shadow-[0_0_15px_rgba(124,58,237,0.8)]"
      style={{ scaleX }}
    />
  );
}

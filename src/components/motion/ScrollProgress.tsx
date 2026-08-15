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
      className="fixed top-0 left-0 right-0 z-[10000] h-1 origin-left bg-gradient-to-r from-[#E63946] via-[#F97316] to-[#FB923C] shadow-[0_0_15px_rgba(230,57,70,0.8)]"
      style={{ scaleX }}
    />
  );
}

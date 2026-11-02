import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #9a6d1b 0%, #dfaa3b 50%, #f7dfa5 100%)',
        boxShadow: '0 0 12px rgba(223, 170, 59, 0.8)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 100000
      }}
    />
  );
}


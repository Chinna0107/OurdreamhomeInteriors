import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Reveal: Animates in on scroll-down and un-reveals (resets) when scrolled out of view.
 */
export default function Reveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.7,
  distance = 35,
  className = ''
}) {
  const ref = useRef(null);
  // once: false ensures it re-animates and un-reveals as the user scrolls back up
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance };
      case 'down': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: distance };
      case 'right': return { opacity: 0, x: -distance };
      case 'none': return { opacity: 0, scale: 0.94 };
      default: return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'none': return { opacity: 1, scale: 1 };
      default: return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


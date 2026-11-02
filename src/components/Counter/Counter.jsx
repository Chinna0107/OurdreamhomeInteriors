import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({ value, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    duration: duration * 1000,
    bounce: 0
  });
  // isInView with once: false so it animates in and resets on scroll out
  const isInView = useInView(ref, { amount: 0.5, once: false });

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    } else {
      motionVal.set(0);
    }
  }, [isInView, motionVal, value]);

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springVal, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Smooth progress counter from 0 to 100%
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        // Organic easing speed
        const step = Math.floor(Math.random() * 6) + 3;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash-screen-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.04,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
          }}
        >
          {/* Ambient Gold Radial Flare */}
          <div className="splash-ambient-glow" />

          <div className="splash-center-stage">
            {/* Rotating Emblem Rings */}
            <motion.div 
              className="splash-ring-wrapper"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="splash-ring-outer" />
              <div className="splash-ring-inner" />
              <motion.img 
                src={logoImg} 
                alt="Our Dream Home Interiors" 
                className="splash-logo-image"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1 
              className="splash-brand-title"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            >
              Our Dream Home
            </motion.h1>

            {/* Subtitle */}
            <motion.div 
              className="splash-brand-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              INTERIORS
            </motion.div>

            {/* Expanding Divider Line with Center Diamond */}
            <motion.div 
              className="splash-divider-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              <motion.div 
                className="splash-line" 
                initial={{ width: 0 }}
                animate={{ width: 45 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
              <div className="splash-diamond" />
              <motion.div 
                className="splash-line" 
                initial={{ width: 0 }}
                animate={{ width: 45 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="splash-tagline"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              We Make Your Vision Into Reality
            </motion.p>

            {/* Progress Bar & Percentage */}
            <div className="splash-progress-track">
              <motion.div 
                className="splash-progress-fill"
                style={{ width: `${percent}%` }}
              />
            </div>

            <div className="splash-counter-text">
              Crafting Luxury · {percent}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


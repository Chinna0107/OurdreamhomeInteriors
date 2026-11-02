import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';
import './LogoReveal.css';

export default function LogoReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if shown in current session
    const hasShown = sessionStorage.getItem('odh_intro_shown');
    if (hasShown) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('odh_intro_shown', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="logo-reveal-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            className="logo-reveal-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } }}
          >
            <motion.img 
              src={logoImg} 
              alt="Our Dream Home Interiors" 
              className="logo-reveal-emblem"
              initial={{ scale: 0.8, filter: 'blur(8px)' }}
              animate={{ scale: 1, filter: 'blur(0px)', transition: { duration: 0.8 } }}
            />
            
            <motion.h1 
              className="logo-reveal-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.7 } }}
            >
              Our Dream Home
            </motion.h1>

            <motion.div 
              className="logo-reveal-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
            >
              INTERIORS
            </motion.div>

            <motion.div 
              className="logo-reveal-divider"
              initial={{ width: 0 }}
              animate={{ width: 60, transition: { delay: 0.7, duration: 0.6 } }}
            />

            <motion.p 
              className="logo-reveal-tagline"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.6 } }}
            >
              We Make Your Vision Into Reality
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ image, title, category, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="lightbox-modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close image">
            <X size={20} />
          </button>
          
          <img src={image} alt={title} className="lightbox-img" />

          <div className="lightbox-caption-bar">
            <div>
              <div className="lightbox-title">{title}</div>
              <div className="lightbox-sub">{category}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


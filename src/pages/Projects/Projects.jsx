import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Maximize2 } from 'lucide-react';
import heroProjectsImg from '../../assets/hero-projects.jpg';
import Lightbox from '../../components/Lightbox/Lightbox';
import Reveal from '../../components/Reveal';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const allProjects = [
    {
      title: 'Grand Living Hall & Lounge',
      category: 'Living',
      location: 'Chandragiri, Tirupati',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Modern Island Kitchen',
      category: 'Kitchen',
      location: 'MR Palli, Tirupati',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Master Bedroom with Ambient Glow',
      category: 'Bedroom',
      location: 'Korlagunta, Tirupati',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Minimalist Fluted TV Console',
      category: 'Living',
      location: 'Bhavani Nagar, Tirupati',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Smoked Glass Walk-in Wardrobe',
      category: 'Wardrobe',
      location: 'Padmavathi Puram, Tirupati',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxury Villa Turnkey Interiors',
      category: 'Complete',
      location: 'Renigunta Road, Tirupati',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = ['All', 'Living', 'Kitchen', 'Bedroom', 'Wardrobe', 'Complete'];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter((p) => p.category === filter);

  return (
    <div className="projects-page">
      {/* =====================================================================
          NEW HERO BANNER FOR PROJECTS PAGE
          ===================================================================== */}
      <section 
        className="page-hero-banner"
        style={{ backgroundImage: `url(${heroProjectsImg})` }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <motion.span 
            className="page-hero-eyebrow"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            PORTFOLIO OF EXCELLENCE
          </motion.span>

          <motion.h1 
            className="page-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            Crafted with Elegance
          </motion.h1>

          <motion.div 
            style={{ 
              width: '60px', 
              height: '2px', 
              background: 'linear-gradient(90deg, transparent, #dfaa3b, transparent)', 
              margin: '0 auto 1.2rem auto' 
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p 
            className="page-hero-desc"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            Explore our curated gallery of completed residential and commercial spaces, where timeless luxury meets modern functionality.
          </motion.p>

          <motion.div 
            className="page-hero-breadcrumbs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <Link to="/">Home</Link>
            <ChevronRight size={14} className="crumb-sep" />
            <span>Projects</span>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO GRID & FILTERS */}
      <div className="projects-page-wrapper">
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'Complete' ? 'Complete Home' : cat}
            </button>
          ))}
        </div>

        <div className="projects-portfolio-grid">
          {filteredProjects.map((item, idx) => (
            <div 
              key={idx} 
              className="portfolio-card clickable"
              onClick={() => setActiveLightbox(item)}
            >
              <img src={item.image} alt={item.title} className="portfolio-img" />
              <div className="portfolio-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <Maximize2 size={16} color="#dfaa3b" />
                </div>
                <span className="portfolio-meta">{item.category} • {item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activeLightbox && (
        <Lightbox 
          image={activeLightbox.image}
          title={activeLightbox.title}
          category={activeLightbox.category}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Calendar, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-brand">
          <img src={logoImg} alt="Our Dream Home Interiors" className="nav-logo-img" />
          <div className="nav-brand-text">
            <span className="brand-title">Our Dream Home</span>
            <span className="brand-subtitle">INTERIORS</span>
            <span className="brand-tagline">— We Make Your Vision Into Reality —</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About Us
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Services <ChevronDown size={14} />
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Projects
          </NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Testimonials
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact Us
          </NavLink>
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="nav-actions">
          <Link to="/contact" className="btn-quote">
            <Calendar size={16} />
            <span>Get a Free Quote</span>
          </Link>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer with Framer Motion slide */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-nav-header">
              <span className="brand-title" style={{ fontSize: '1.25rem' }}>Our Dream Home</span>
              <button 
                className="mobile-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                >
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <Link to="/contact" className="btn-gold-shimmer" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Get a Free Quote</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

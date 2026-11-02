import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../SocialIcons';
import logoImg from '../../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="luxury-footer">
      {/* Decorative Gold Glow Strip that draws across */}
      <motion.div 
        className="footer-top-accent"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Main Footer Content */}
      <div className="footer-main-container">
        <div className="footer-columns-grid">
          
          {/* Column 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-header">
              <img src={logoImg} alt="Our Dream Home Interiors" className="footer-brand-logo" />
              <div className="footer-brand-heading">
                <span className="brand-name">Our Dream Home</span>
                <span className="brand-sub">INTERIORS</span>
              </div>
            </Link>
            
            <p className="brand-motto">
              "We Make Your Vision Into Reality"
            </p>

            <p className="footer-about-text">
              Crafting bespoke luxury living spaces in Tirupati and across Andhra Pradesh. Turning concepts into timeless architectural elegance with unmatched attention to detail.
            </p>

            <div className="footer-badges">
              <div className="footer-badge">
                <Award size={15} className="badge-icon" />
                <span>Premium Quality</span>
              </div>
              <div className="footer-badge">
                <ShieldCheck size={15} className="badge-icon" />
                <span>10-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <div className="heading-separator"></div>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>About Our Studio</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Interior Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Featured Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Client Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Book Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Interior Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Specializations</h4>
            <div className="heading-separator"></div>
            <ul className="footer-nav-list">
              <li>
                <Link to="/services/modular-kitchens" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Modular Kitchens</span>
                </Link>
              </li>
              <li>
                <Link to="/services/bedrooms-wardrobes" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Luxury Wardrobes</span>
                </Link>
              </li>
              <li>
                <Link to="/services/living-tv-units" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Living & TV Feature Units</span>
                </Link>
              </li>
              <li>
                <Link to="/services/false-ceiling" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>POP & Gypsum False Ceiling</span>
                </Link>
              </li>
              <li>
                <Link to="/services/wall-panelling" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Wall Panelling & Louvers</span>
                </Link>
              </li>
              <li>
                <Link to="/services/complete-home-interiors" className="footer-nav-link">
                  <ChevronRight size={14} className="link-arrow" />
                  <span>Turnkey Villa Interiors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="heading-separator"></div>

            <div className="footer-contact-items">
              <div className="contact-line">
                <div className="contact-icon-bubble">
                  <Phone size={15} />
                </div>
                <div className="contact-line-details">
                  <a href="tel:+916300994464">+91 63009 94464</a>
                  <a href="tel:+917013676631">+91 70136 76631</a>
                </div>
              </div>

              <div className="contact-line">
                <div className="contact-icon-bubble">
                  <Mail size={15} />
                </div>
                <div className="contact-line-details">
                  <a href="mailto:ourdreamhomeinteriors@gmail.com">ourdreamhomeinteriors@gmail.com</a>
                </div>
              </div>

              <div className="contact-line">
                <div className="contact-icon-bubble">
                  <MapPin size={15} />
                </div>
                <div className="contact-line-details">
                  <span>Tirupati, Andhra Pradesh, India</span>
                </div>
              </div>

              <div className="contact-line">
                <div className="contact-icon-bubble">
                  <Clock size={15} />
                </div>
                <div className="contact-line-details">
                  <span>Mon – Sun: 9:00 AM – 8:30 PM</span>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="footer-social-wrap">
              <span className="social-follow-label">Follow Us:</span>
              <div className="footer-social-icons">
                <a 
                  href="https://instagram.com/ourdreamhomeinteriors" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn" 
                  aria-label="Instagram"
                >
                  <InstagramIcon size={17} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn" 
                  aria-label="Facebook"
                >
                  <FacebookIcon size={17} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn" 
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={17} />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-bar-left">
            <p>© {currentYear} <strong>Our Dream Home Interiors</strong>. All Rights Reserved.</p>
          </div>
          <div className="bottom-bar-center">
            <span className="signature-tagline">Crafted with Passion for Beautiful Homes</span>
          </div>
          <div className="bottom-bar-right">
            <Link to="/privacy-policy" className="bottom-link">Privacy Policy</Link>
            <span className="bottom-dot">•</span>
            <Link to="/terms-and-conditions" className="bottom-link">Terms & Conditions</Link>
            <span className="bottom-dot">•</span>
            <Link to="/support" className="bottom-link">Support</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button 
          className="back-to-top-btn" 
          onClick={scrollToTop} 
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}

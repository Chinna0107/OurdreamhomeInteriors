import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import Reveal from '../../components/Reveal';
import heroContactImg from '../../assets/hero-contact.jpg';
import './LegalPages.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      {/* Header Banner */}
      <section 
        className="page-hero-banner"
        style={{ backgroundImage: `url(${heroContactImg})` }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <motion.span 
            className="page-hero-eyebrow"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            TRANSPARENCY & DATA PROTECTION
          </motion.span>
          <motion.h1 
            className="page-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            How Our Dream Home Interiors respects, safeguards, and handles your personal information.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="legal-container">
        <div className="legal-card">
          <div className="legal-effective-date">
            <ShieldCheck size={18} color="#dfaa3b" />
            <span>Last Updated: November 2026 · Tirupati, Andhra Pradesh</span>
          </div>

          <p className="legal-lead">
            At <strong>Our Dream Home Interiors</strong>, we value the trust you place in us when sharing your contact details, floor plans, and lifestyle preferences. This Privacy Policy outlines our transparent approach to gathering, utilizing, and safeguarding your personal data across our website and consultation channels.
          </p>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">01</span>
              <h2>Information We Collect</h2>
            </div>
            <p>When you interact with our website, request a design quotation, or book an in-person site visit in Tirupati and surrounding regions, we may collect the following details:</p>
            <ul className="legal-list">
              <li><strong>Contact Information:</strong> Full name, phone/WhatsApp number, and email address.</li>
              <li><strong>Property & Design Details:</strong> Property type (Apartment, Villa, Independent Home), site location, approximate floor area, and scope of work.</li>
              <li><strong>Project Budget & Preferences:</strong> Estimated investment brackets, preferred finish aesthetics (acrylic, PU lacquer, laminate), and desired timelines.</li>
              <li><strong>Technical Data:</strong> Non-personally identifiable diagnostic information such as browser type, operating system, and anonymous interaction metrics to optimize performance.</li>
            </ul>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">02</span>
              <h2>How We Use Your Information</h2>
            </div>
            <p>Your information is used strictly to fulfill your interior design objectives:</p>
            <ul className="legal-list">
              <li>Providing customized 2D/3D design proposals and accurate modular woodwork estimations.</li>
              <li>Coordinating in-person site measurements, design consultations, and material selection walkthroughs.</li>
              <li>Direct project communication via WhatsApp, phone calls, or official email updates.</li>
              <li>Improving customer service and ensuring on-time project execution in accordance with your specifications.</li>
            </ul>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">03</span>
              <h2>Data Protection & Zero Third-Party Selling</h2>
            </div>
            <div className="legal-highlight-box">
              <Lock size={22} color="#dfaa3b" />
              <div>
                <strong>We Never Sell or Rent Your Data:</strong> Your personal contact details and architectural floor plans remain strictly confidential with Our Dream Home Interiors and our trusted on-site execution team. We do not sell, rent, or lease customer data to third-party telemarketers or advertisers.
              </div>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">04</span>
              <h2>WhatsApp & Direct Communication</h2>
            </div>
            <p>
              When submitting an enquiry or quotation form, you are connected directly with our senior designers via WhatsApp or telephone. You may request to opt out or update your preferred communication channel at any time simply by informing our support desk.
            </p>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">05</span>
              <h2>Contact Our Privacy Officer</h2>
            </div>
            <p>If you have any questions or concerns regarding our privacy practices, please contact us directly:</p>
            <div className="legal-contact-grid">
              <a href="tel:+916300994464" className="legal-contact-card">
                <div className="legal-contact-icon-bubble">
                  <Phone size={20} color="#dfaa3b" />
                </div>
                <div className="legal-contact-details">
                  <span className="legal-contact-label">Phone Enquiries</span>
                  <strong className="legal-contact-val">+91 63009 94464</strong>
                  <span className="legal-contact-sub">+91 70136 76631</span>
                </div>
              </a>

              <a href="mailto:ourdreamhomeinteriors@gmail.com" className="legal-contact-card">
                <div className="legal-contact-icon-bubble">
                  <Mail size={20} color="#dfaa3b" />
                </div>
                <div className="legal-contact-details">
                  <span className="legal-contact-label">Official Email</span>
                  <strong className="legal-contact-val">ourdreamhomeinteriors@gmail.com</strong>
                  <span className="legal-contact-sub">24/7 Monitored Inbox</span>
                </div>
              </a>

              <div className="legal-contact-card">
                <div className="legal-contact-icon-bubble">
                  <MapPin size={20} color="#dfaa3b" />
                </div>
                <div className="legal-contact-details">
                  <span className="legal-contact-label">Office & Studio</span>
                  <strong className="legal-contact-val">Tirupati, Andhra Pradesh</strong>
                  <span className="legal-contact-sub">India · By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


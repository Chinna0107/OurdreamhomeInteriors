import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileCheck, Shield, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import heroProjectsImg from '../../assets/hero-projects.jpg';
import '../PrivacyPolicy/LegalPages.css';

export default function TermsConditions() {
  return (
    <div className="legal-page">
      {/* Header Banner */}
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
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            STANDARDS & AGREEMENTS
          </motion.span>
          <motion.h1 
            className="page-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Clear terms governing consultations, custom interior fabrication, and site installations.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="legal-container">
        <div className="legal-card">
          <div className="legal-effective-date">
            <FileCheck size={18} color="#dfaa3b" />
            <span>Effective Date: November 2026 · Tirupati, Andhra Pradesh</span>
          </div>

          <p className="legal-lead">
            Welcome to <strong>Our Dream Home Interiors</strong>. By accessing our website, booking our design services, or commissioning custom residential or commercial interior woodwork, you agree to comply with and be bound by the terms detailed below.
          </p>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">01</span>
              <h2>Consultation & Quotation Scope</h2>
            </div>
            <p>
              Preliminary quotations provided via online enquiry, phone, or WhatsApp represent initial budgetary estimates based on client-submitted room dimensions and finish preferences. Final project contracts are finalized strictly after physical on-site millimeter laser measurement and physical material selection in Tirupati.
            </p>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">02</span>
              <h2>Design Approvals & Fabrication</h2>
            </div>
            <ul className="legal-list">
              <li><strong>Client Approvals:</strong> Factory fabrication commences only upon client sign-off on 2D dimensional drawings, material finishes (BWP marine ply, HDHMR, acrylic, laminates), and hardware selections (Hettich, Hafele, Ebco).</li>
              <li><strong>Modifications:</strong> Any structural or dimensional changes requested after factory cutting has commenced may involve additional material and fabrication lead time.</li>
            </ul>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">03</span>
              <h2>Payment Milestones & Financial Terms</h2>
            </div>
            <p>
              To maintain strict quality and timely sourcing of high-grade raw materials, our execution works operate on milestone-based disbursements (Initial Design Advance, Factory Fabrication Stage, and Final Site Installation & Handover), clearly specified in the project quotation.
            </p>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">04</span>
              <h2>Site Readiness & Installation Timelines</h2>
            </div>
            <p>
              Site installation requires unhindered electrical, water, and elevator/staircase access. While we strive to meet our standard 45-day handover commitment, timelines may adjust in instances of civil work delays, external builder constraints, or structural site unreadiness.
            </p>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">05</span>
              <h2>Warranty & After-Sales Support</h2>
            </div>
            <div className="legal-highlight-box">
              <Shield size={22} color="#dfaa3b" />
              <div>
                <strong>Guaranteed Material Warranty:</strong> Hardware and modular core boards carry direct manufacturer warranties (up to 10 years on select moisture-resistant cores and soft-close hinges). Our local Tirupati team provides prompt post-installation servicing and alignment support.
              </div>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">06</span>
              <h2>Jurisdiction & Dispute Resolution</h2>
            </div>
            <p>
              Any disputes arising in connection with services provided by Our Dream Home Interiors shall be subject to the exclusive jurisdiction of the competent courts in <strong>Tirupati, Andhra Pradesh, India</strong>.
            </p>
          </div>

          <div className="legal-section">
            <div className="legal-section-header">
              <span className="legal-step-num">07</span>
              <h2>Contact For Clarifications</h2>
            </div>
            <p>For questions or verification regarding these terms and project contracts:</p>
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
                  <span className="legal-contact-sub">Direct Project Desk</span>
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


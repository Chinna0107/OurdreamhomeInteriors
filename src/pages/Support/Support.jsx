import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  MapPin, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  Send,
  Wrench,
  ShieldAlert,
  Calendar
} from 'lucide-react';
import heroContactImg from '../../assets/hero-contact.jpg';
import '../PrivacyPolicy/LegalPages.css';

export default function Support() {
  const [openFaq, setOpenFaq] = useState(0);
  const [supportForm, setSupportForm] = useState({
    name: '',
    phone: '',
    projectRef: '',
    issueCategory: 'Site Measurement Query',
    message: ''
  });
  const [ticketSent, setTicketSent] = useState(false);

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    setTicketSent(true);

    const whatsappMessage = `*Hello Our Dream Home Interiors Support Desk!*
I need assistance with my interior project.

*Support Details:*
• *Customer Name:* ${supportForm.name}
• *Phone Number:* ${supportForm.phone}
• *Project Ref / Address:* ${supportForm.projectRef || 'N/A'}
• *Category:* ${supportForm.issueCategory}
• *Query / Issue:* ${supportForm.message}`;

    const url = `https://wa.me/916300994464?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const supportFaqs = [
    {
      q: 'How do I schedule an on-site design consultation in Tirupati?',
      a: 'You can call us directly at +91 63009 94464 or send a WhatsApp message. Our senior designer will confirm a suitable time slot for an on-site visit.'
    },
    {
      q: 'What is the average turnaround time for a project estimate?',
      a: 'Initial budgetary estimates based on floor plans are typically provided within 24 to 48 hours. Detailed 3D quotes following site measurement take 3 to 4 business days.'
    },
    {
      q: 'How does after-sales service and hinge re-alignment work?',
      a: 'We provide ongoing maintenance support. If your cabinet shutters, hydraulic lifts, or soft-close channels ever need re-alignment, submit a ticket below or WhatsApp our team.'
    },
    {
      q: 'Can I request design revisions during the 3D phase?',
      a: 'Yes, our design process includes dedicated revision cycles to ensure colors, lighting coves, and storage layouts precisely match your family lifestyle before factory manufacturing begins.'
    }
  ];

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
            DEDICATED CUSTOMER CARE
          </motion.span>
          <motion.h1 
            className="page-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Client Support & Service
          </motion.h1>
          <motion.p 
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are here to assist with project enquiries, site measurements, and post-installation service.
          </motion.p>
        </div>
      </section>

      {/* Main Support Grid */}
      <div className="legal-container">
        {/* Support Channels */}
        <div className="support-channels-grid">
          <div className="support-channel-card">
            <div className="support-channel-icon">
              <Phone size={24} color="#dfaa3b" />
            </div>
            <h3>Immediate Calling Support</h3>
            <p>Direct line to our customer assistance and project manager.</p>
            <div className="support-channel-value">+91 63009 94464</div>
            <a href="tel:+916300994464" className="support-channel-btn">Call Now</a>
          </div>

          <div className="support-channel-card">
            <div className="support-channel-icon" style={{ background: 'rgba(37, 211, 102, 0.15)' }}>
              <MessageCircle size={24} color="#25d366" />
            </div>
            <h3>WhatsApp Quick Desk</h3>
            <p>Send photos, site videos or queries for instant guidance.</p>
            <div className="support-channel-value">+91 63009 94464</div>
            <a 
              href="https://wa.me/916300994464?text=Hello%20Support%20Desk%20Our%20Dream%20Home%20Interiors,%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer" 
              className="support-channel-btn support-btn-wa"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="support-channel-card">
            <div className="support-channel-icon">
              <Mail size={24} color="#dfaa3b" />
            </div>
            <h3>Email Documentation</h3>
            <p>Submit architectural blueprints, AutoCAD files, or quotes.</p>
            <div className="support-channel-value" style={{ fontSize: '0.85rem' }}>ourdreamhomeinteriors@gmail.com</div>
            <a href="mailto:ourdreamhomeinteriors@gmail.com" className="support-channel-btn">Send Email</a>
          </div>
        </div>

        {/* Support Ticket / Request Form */}
        <div className="legal-card" style={{ marginTop: '3rem' }}>
          <div className="legal-section-header">
            <span className="legal-step-num">★</span>
            <h2>Submit a Support Request</h2>
          </div>
          <p className="legal-lead" style={{ marginBottom: '2rem' }}>
            Have a question about an ongoing site, material deliveries, or post-installation adjustments? Let us know and we will connect with you right away.
          </p>

          {ticketSent ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1.5rem', background: '#f5faf5', border: '1px solid #7cb342', borderRadius: '12px' }}>
              <CheckCircle2 size={48} color="#2e7d32" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#24170d', marginBottom: '0.5rem' }}>
                Support Ticket Dispatched!
              </h3>
              <p style={{ color: '#455a64', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Thank you, <strong>{supportForm.name}</strong>. Opening WhatsApp to connect directly with our support supervisor...
              </p>
              <a 
                href={`https://wa.me/916300994464?text=${encodeURIComponent(
                  `*Hello Our Dream Home Interiors Support Desk!*\nI need assistance with my interior project.\n\n*Support Details:*\n• *Customer Name:* ${supportForm.name}\n• *Phone Number:* ${supportForm.phone}\n• *Project Ref / Address:* ${supportForm.projectRef || 'N/A'}\n• *Category:* ${supportForm.issueCategory}\n• *Query / Issue:* ${supportForm.message}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-shimmer"
                style={{ display: 'inline-flex', width: 'auto', margin: '0 auto', textDecoration: 'none' }}
              >
                <span>Open WhatsApp Support</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSupportSubmit}>
              <div className="form-grid-2col">
                <div className="quote-input-group">
                  <label className="quote-input-label">Your Name</label>
                  <input 
                    type="text" 
                    className="quote-input-field" 
                    placeholder="e.g. S. Venkat"
                    required
                    value={supportForm.name}
                    onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })}
                  />
                </div>

                <div className="quote-input-group">
                  <label className="quote-input-label">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="quote-input-field" 
                    placeholder="+91 98765 43210"
                    required
                    value={supportForm.phone}
                    onChange={(e) => setSupportForm({ ...supportForm, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2col">
                <div className="quote-input-group">
                  <label className="quote-input-label">Project Location / Order ID</label>
                  <input 
                    type="text" 
                    className="quote-input-field" 
                    placeholder="e.g. Tirupati / Villa #14"
                    value={supportForm.projectRef}
                    onChange={(e) => setSupportForm({ ...supportForm, projectRef: e.target.value })}
                  />
                </div>

                <div className="quote-input-group">
                  <label className="quote-input-label">Category of Query</label>
                  <select 
                    className="quote-select-field"
                    value={supportForm.issueCategory}
                    onChange={(e) => setSupportForm({ ...supportForm, issueCategory: e.target.value })}
                  >
                    <option value="Site Measurement Query">Site Measurement Query</option>
                    <option value="Design & 3D Plan Revision">Design & 3D Plan Revision</option>
                    <option value="Factory Production Status">Factory Production Status</option>
                    <option value="Site Installation & Civil Works">Site Installation & Civil Works</option>
                    <option value="Hardware / Maintenance Request">Hardware / Maintenance Request</option>
                    <option value="General Support">General Support</option>
                  </select>
                </div>
              </div>

              <div className="quote-input-group">
                <label className="quote-input-label">Describe Your Query</label>
                <textarea 
                  className="quote-textarea-field" 
                  rows={4}
                  required
                  placeholder="Please describe how we can assist you..."
                  value={supportForm.message}
                  onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="btn-gold-shimmer" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '1.2rem' }}
              >
                <span>Send Support Request to WhatsApp</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Support FAQs */}
        <div className="legal-card" style={{ marginTop: '2.5rem' }}>
          <div className="legal-section-header">
            <span className="legal-step-num">?</span>
            <h2>Frequently Asked Support Questions</h2>
          </div>

          <div className="support-faq-stack">
            {supportFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`support-faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div className="support-faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="faq-chevron" />
                </div>
                {openFaq === idx && (
                  <p className="support-faq-answer">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


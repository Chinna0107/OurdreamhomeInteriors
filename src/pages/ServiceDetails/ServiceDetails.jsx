import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Check, 
  Send, 
  Copy,
  CheckCircle
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import Reveal from '../../components/Reveal';
import './ServiceDetails.css';

export default function ServiceDetails() {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

  // If slug doesn't match any service, redirect to services overview
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const [openFaq, setOpenFaq] = useState(0);
  const [copied, setCopied] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    phone: '',
    serviceRequired: service.heroTag,
    projectLocation: '',
    estimatedBudget: 'Not decided',
    requirements: ''
  });

  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);

    const message = `*Hello Our Dream Home Interiors!*
I would like to enquire about ${service.heroTag}.

*Enquiry Details:*
• *Full Name:* ${enquiryForm.fullName}
• *Phone Number:* ${enquiryForm.phone}
• *Service Required:* ${service.heroTag}
• *Project Location:* ${enquiryForm.projectLocation}
• *Estimated Budget:* ${enquiryForm.estimatedBudget}
• *Project Requirements:* ${enquiryForm.requirements || 'N/A'}`;

    const whatsappUrl = `https://wa.me/916300994464?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const whyChooseServiceList = [
    { title: 'Personalized Consultation', desc: 'Space-specific planning centered on your family routine.' },
    { title: 'Space-Specific Planning', desc: 'Optimizing square footage for seamless flow and ergonomic ease.' },
    { title: 'Material & Finish Selection', desc: 'Direct physical sample verification for texture, hue and durability.' },
    { title: 'Attention to Detail', desc: 'Millimeter-accurate alignments and seamless junction trims.' },
    { title: 'Functional & Attractive', desc: 'Combining stunning architectural visual appeal with daily practicality.' },
    { title: 'Professional Coordination', desc: 'Dedicated project manager ensuring on-time completion without stress.' }
  ];

  return (
    <div className="service-detail-page">
      {/* =====================================================================
          1. SERVICE HERO BANNER
          ===================================================================== */}
      <section 
        className="sd-hero"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="sd-hero-overlay" />
        <div className="sd-hero-content">
          <motion.div 
            className="sd-hero-tag"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            {service.heroTag}
          </motion.div>

          <motion.h1 
            className="sd-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            {service.heroTitle}
          </motion.h1>

          <motion.div 
            style={{ 
              width: '70px', 
              height: '2px', 
              background: 'linear-gradient(90deg, #dfaa3b, transparent)', 
              marginBottom: '1.2rem' 
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p 
            className="sd-hero-p1"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            {service.heroDesc}
          </motion.p>

          <motion.p 
            className="sd-hero-p2"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            {service.heroSubDesc}
          </motion.p>

          <motion.div 
            className="sd-hero-btns"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <a href="#service-enquiry-form" className="btn-gold-shimmer">
              <span>Get a Quote</span>
              <ArrowRight size={16} />
            </a>
            <a href="#service-solutions" className="btn-outline-gold-pill">
              Explore Solutions
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. TYPES & DESIGN OPTIONS (SOLUTIONS GRID)
          ===================================================================== */}
      <section className="sd-solutions-section" id="service-solutions">
        <div className="sd-section-header">
          <span className="sd-eyebrow">DESIGN OPTIONS</span>
          <h2 className="sd-title">{service.solutionsTitle}</h2>
          <p className="sd-subtext">
            Thoughtfully planned layouts tailored to your lifestyle and space specifications.
          </p>
        </div>

        <div className="sd-solutions-grid">
          {service.solutions.map((sol, idx) => (
            <div key={idx} className="sd-sol-card">
              <img src={sol.image} alt={sol.title} className="sd-sol-img" />
              <div className="sd-sol-body">
                <h3 className="sd-sol-title">{sol.title}</h3>
                <p className="sd-sol-desc">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. FEATURES & MATERIALS SECTION (SPLIT TWO COLUMNS)
          ===================================================================== */}
      <section className="sd-features-materials-section">
        <div className="sd-fm-container">
          {/* Key Features */}
          <div className="sd-fm-box">
            <h3 className="sd-fm-title">
              <Sparkles size={22} color="#dfaa3b" />
              <span>Key Features</span>
            </h3>
            <ul className="sd-fm-list">
              {service.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="sd-fm-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials & Finishes */}
          <div className="sd-fm-box">
            <h3 className="sd-fm-title">
              <Layers size={22} color="#dfaa3b" />
              <span>Materials & Finishes</span>
            </h3>
            <ul className="sd-fm-list">
              {service.materials.map((mat, idx) => (
                <li key={idx}>
                  <Check size={18} className="sd-fm-icon" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. OUR DESIGN & EXECUTION PROCESS
          ===================================================================== */}
      <section className="sd-process-section">
        <div className="sd-section-header">
          <span className="sd-eyebrow">STRUCTURED ROADMAP</span>
          <h2 className="sd-title">Our Design & Execution Process</h2>
          <p className="sd-subtext">
            Every step is managed with care to ensure high quality and complete peace of mind.
          </p>
        </div>

        <div className="sd-process-grid">
          {service.process.map((p, idx) => (
            <div key={idx} className="sd-process-card">
              <div className="sd-process-step">{p.step}</div>
              <h3 className="sd-step-title">{p.title}</h3>
              <p className="sd-step-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. RELATED PROJECT GALLERY
          ===================================================================== */}
      <section className="sd-gallery-section">
        <div className="sd-section-header">
          <span className="sd-eyebrow">PORTFOLIO SPOTLIGHT</span>
          <h2 className="sd-title">Explore Our Design Inspirations</h2>
          <p className="sd-subtext">
            Real spaces designed with elegance, precision finishes, and everyday comfort.
          </p>
        </div>

        <div className="sd-gallery-grid">
          {service.gallery.map((item, idx) => (
            <div key={idx} className="sd-gallery-card">
              <img src={item.img} alt={item.title} className="sd-gallery-img" />
              <div className="sd-gallery-overlay">
                <span className="sd-gallery-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. WHY CHOOSE US FOR THIS SERVICE?
          ===================================================================== */}
      <section className="sd-why-section">
        <div className="sd-section-header">
          <span className="sd-eyebrow light">OUR PROMISE</span>
          <h2 className="sd-title light">Designed Around Your Needs. Finished With Care.</h2>
          <p className="sd-subtext light">
            We hold ourselves to the highest standards of materials, hardware and personalized craftsmanship.
          </p>
        </div>

        <div className="sd-why-grid">
          {whyChooseServiceList.map((item, idx) => (
            <div key={idx} className="sd-why-card">
              <div className="sd-why-icon">
                <Award size={20} />
              </div>
              <h3 className="sd-why-title">{item.title}</h3>
              <p className="sd-why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          7. FREQUENTLY ASKED QUESTIONS
          ===================================================================== */}
      <section className="sd-faqs-section">
        <div className="sd-section-header">
          <span className="sd-eyebrow">GOT QUESTIONS?</span>
          <h2 className="sd-title">Frequently Asked Questions</h2>
        </div>

        <div className="sd-faq-wrapper">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="faq-accordion-card">
              <button 
                className="faq-toggle-btn"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`faq-toggle-icon ${openFaq === idx ? 'open' : ''}`} 
                />
              </button>
              {openFaq === idx && (
                <div className="faq-content-box">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. RELATED SERVICES
          ===================================================================== */}
      <section className="sd-related-section">
        <div className="sd-section-header">
          <span className="sd-eyebrow">EXPLORE MORE</span>
          <h2 className="sd-title">Complementary Solutions</h2>
          <p className="sd-subtext">
            Discover related interior services that pair harmoniously with this design.
          </p>
        </div>

        <div className="sd-related-grid">
          {service.related.map((relSlug) => {
            const relSrv = servicesData[relSlug];
            if (!relSrv) return null;
            return (
              <Link to={`/services/${relSlug}`} key={relSlug} className="sd-related-card">
                <img src={relSrv.heroImage} alt={relSrv.heroTag} className="sd-related-img" />
                <div className="sd-related-content">
                  <h3 className="sd-related-name">{relSrv.heroTag}</h3>
                  <p className="sd-related-desc">{relSrv.heroTitle}</p>
                  <span className="sd-related-link">
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          9. SERVICE ENQUIRY FORM
          ===================================================================== */}
      <section className="sd-enquiry-section" id="service-enquiry-form">
        <div className="sd-enquiry-card">
          <div className="sd-enquiry-header">
            <span className="sd-eyebrow">LET'S CONNECT</span>
            <h2 className="sd-enquiry-title">Let's Discuss Your Project</h2>
            <p className="sd-enquiry-sub">
              Tell us about your interior requirements. Our team will get in touch to discuss your project.
            </p>
          </div>

          {enquirySubmitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1.5rem', background: '#f5faf5', border: '1px solid #7cb342', borderRadius: '12px' }}>
              <CheckCircle2 size={48} color="#2e7d32" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#24170d', marginBottom: '0.5rem' }}>
                Service Enquiry Sent!
              </h3>
              <p style={{ color: '#455a64', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Thank you, <strong>{enquiryForm.fullName}</strong>. Opening WhatsApp to connect with our interior specialist for <strong>{service.heroTag}</strong>...
              </p>
              <a 
                href={`https://wa.me/916300994464?text=${encodeURIComponent(
                  `*Hello Our Dream Home Interiors!*\nI would like to enquire about ${service.heroTag}.\n\n*Enquiry Details:*\n• *Full Name:* ${enquiryForm.fullName}\n• *Phone Number:* ${enquiryForm.phone}\n• *Service Required:* ${service.heroTag}\n• *Project Location:* ${enquiryForm.projectLocation}\n• *Estimated Budget:* ${enquiryForm.estimatedBudget}\n• *Project Requirements:* ${enquiryForm.requirements || 'N/A'}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-shimmer"
                style={{ display: 'inline-flex', width: 'auto', margin: '0 auto', textDecoration: 'none' }}
              >
                <span>Open WhatsApp Directly</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit}>
              <div className="form-grid-2col">
                <div className="quote-input-group">
                  <label className="quote-input-label">Full Name</label>
                  <input 
                    type="text" 
                    className="quote-input-field" 
                    placeholder="e.g. Anand Kumar" 
                    required
                    value={enquiryForm.fullName}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                  />
                </div>

                <div className="quote-input-group">
                  <label className="quote-input-label">Phone Number</label>
                  <input 
                    type="tel" 
                    className="quote-input-field" 
                    placeholder="+91 98765 43210" 
                    required
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2col">
                <div className="quote-input-group">
                  <label className="quote-input-label">Service Required</label>
                  <input 
                    type="text" 
                    className="quote-input-field" 
                    readOnly
                    value={service.heroTag}
                  />
                </div>

                <div className="quote-input-group">
                  <label className="quote-input-label">Project Location</label>
                  <input 
                    type="text" 
                    className="quote-input-field" 
                    placeholder="e.g. Tirupati, Chandragiri" 
                    required
                    value={enquiryForm.projectLocation}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, projectLocation: e.target.value })}
                  />
                </div>
              </div>

              <div className="quote-input-group">
                <label className="quote-input-label">Estimated Budget</label>
                <select 
                  className="quote-select-field"
                  value={enquiryForm.estimatedBudget}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, estimatedBudget: e.target.value })}
                >
                  <option value="Not decided">Not decided</option>
                  <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                  <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
                  <option value="₹10 Lakhs - ₹20 Lakhs">₹10 Lakhs - ₹20 Lakhs</option>
                  <option value="Above ₹20 Lakhs">Above ₹20 Lakhs</option>
                </select>
              </div>

              <div className="quote-input-group">
                <label className="quote-input-label">Project Requirements</label>
                <textarea 
                  className="quote-textarea-field" 
                  rows={3} 
                  placeholder="Tell us about your floor dimensions, preferred style, timeline..."
                  value={enquiryForm.requirements}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, requirements: e.target.value })}
                />
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <button 
                  type="submit" 
                  className="btn-gold-shimmer" 
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Submit & Chat on WhatsApp</span>
                  <Send size={16} />
                </button>
              </div>

              <p className="sd-copy-notice">
                Submitting this form redirects your enquiry directly to our client WhatsApp desk at +91 63009 94464 for immediate review.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Layers,
  HeartHandshake,
  Compass,
  ArrowRight
} from 'lucide-react';
import { InstagramIcon } from '../../components/SocialIcons';
import heroContactImg from '../../assets/hero-contact.jpg';
import Reveal from '../../components/Reveal';
import './Contact.css';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectLocation: '',
    propertyType: 'Apartment',
    serviceRequired: 'Complete Home Interiors',
    estimatedBudget: '₹5–10 Lakhs',
    projectDescription: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*Hello Our Dream Home Interiors!*
I would like to enquire about your interior design services.

*Project Enquiry Details:*
• *Full Name:* ${formData.fullName}
• *Mobile Number:* ${formData.phone}
• *Email:* ${formData.email}
• *Project Location:* ${formData.projectLocation}
• *Property Type:* ${formData.propertyType}
• *Service Required:* ${formData.serviceRequired}
• *Estimated Budget:* ${formData.estimatedBudget}
• *Project Description:* ${formData.projectDescription || 'N/A'}`;

    const whatsappUrl = `https://wa.me/916300994464?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // 2. Contact Information Cards
  const contactChannels = [
    {
      title: 'Call Us',
      value: '+91 63009 94464',
      desc: 'For enquiries and project discussions.',
      btnText: 'Call Now',
      link: 'tel:+916300994464',
      icon: <Phone size={24} />
    },
    {
      title: 'Alternate Contact',
      value: '+91 70136 76631',
      desc: 'Connect with us for further assistance.',
      btnText: 'Call Now',
      link: 'tel:+917013676631',
      icon: <Phone size={24} />
    },
    {
      title: 'Email Us',
      value: 'ourdreamhomeinteriors@gmail.com',
      desc: 'Send your project requirements and floor plans.',
      btnText: 'Send Email',
      link: 'mailto:ourdreamhomeinteriors@gmail.com',
      icon: <Mail size={24} />
    },
    {
      title: 'Our Location',
      value: 'Tirupati, Andhra Pradesh',
      desc: 'Serving customers with luxury interior solutions.',
      btnText: 'Open Map',
      link: '#location-map',
      icon: <MapPin size={24} />
    },
    {
      title: 'Follow Us',
      value: '@ourdreamhomeinteriors',
      desc: 'Explore our design inspirations and site updates.',
      btnText: 'Visit Instagram',
      link: 'https://www.instagram.com/ourdreamhomeinteriors/',
      icon: <InstagramIcon size={24} color="#9f7524" />,
      external: true
    }
  ];

  // 4. Why Contact Us Features
  const whyContactReasons = [
    {
      title: 'Personalized Consultation',
      desc: 'Discuss your ideas and interior requirements with experienced designers.',
      icon: <HeartHandshake size={26} />
    },
    {
      title: 'Creative Design Ideas',
      desc: 'Explore contemporary layouts and possibilities tailored for your space.',
      icon: <Sparkles size={26} />
    },
    {
      title: 'Project Planning',
      desc: 'Discuss project scope, certified materials and realistic estimated budgets.',
      icon: <Layers size={26} />
    },
    {
      title: 'Customer-Focused Approach',
      desc: 'We take time to listen to your expectations and family lifestyle.',
      icon: <Compass size={26} />
    }
  ];

  // 7. FAQs
  const faqList = [
    {
      q: '1. How can I enquire about interior design services?',
      a: 'You can contact us by phone, WhatsApp, email or through the enquiry form on our website.'
    },
    {
      q: '2. Do you provide free consultations?',
      a: 'Contact our team to discuss consultation availability and any applicable charges for site visits.'
    },
    {
      q: '3. Can I request a quotation for a modular kitchen?',
      a: 'Yes. Share your kitchen dimensions, requirements and preferences so that we can discuss an estimate.'
    },
    {
      q: '4. Do you undertake complete home interior projects?',
      a: 'Yes. You can enquire about complete home interiors as well as individual services.'
    },
    {
      q: '5. Where are you located?',
      a: 'We are based in Tirupati, Andhra Pradesh.'
    },
    {
      q: '6. Can I share interior reference images?',
      a: 'Yes. You can share reference photographs, design inspirations and your requirements through WhatsApp or email.'
    }
  ];

  return (
    <div className="contact-page">
      {/* =====================================================================
          1. CONTACT HERO SECTION (WITH NEW HERO-CONTACT IMAGE)
          ===================================================================== */}
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
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            LET'S CONNECT · LET'S CREATE
          </motion.span>

          <motion.h1 
            className="page-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            Let's Bring Your Dream Home to Life.
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
            Every beautiful space starts with a conversation. Whether you are planning a new home, renovating your existing space or looking for customized interior solutions, we are here to help.
          </motion.p>

          <motion.div 
            className="page-hero-breadcrumbs" 
            style={{ marginBottom: '1.8rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <Link to="/">Home</Link>
            <ChevronRight size={14} className="crumb-sep" />
            <span>Contact Us</span>
          </motion.div>

          <motion.div 
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <a href="#contact-enquiry-form" className="btn-gold-shimmer">
              <span>Get a Free Consultation</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href="https://wa.me/916300994464?text=Hello%20Our%20Dream%20Home%20Interiors,%20I%20would%20like%20to%20connect%20for%20a%20consultation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-green"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. CONTACT INFORMATION SECTION (5 CARDS)
          ===================================================================== */}
      <section className="contact-info-grid-section">
        <div className="cp-section-header">
          <span className="cp-eyebrow">GET IN TOUCH</span>
          <h2 className="cp-title">We'd Love to Hear From You.</h2>
          <p className="cp-subtext">
            Have a question or planning your next interior project? Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="contact-info-cards-grid">
          {contactChannels.map((ch, idx) => (
            <div key={idx} className="contact-channel-card">
              <div className="channel-icon-bubble">{ch.icon}</div>
              <h3 className="channel-title">{ch.title}</h3>
              <div className="channel-value">{ch.value}</div>
              <p className="channel-desc">{ch.desc}</p>
              {ch.external ? (
                <a href={ch.link} target="_blank" rel="noopener noreferrer" className="channel-action-btn">
                  <span>{ch.btnText}</span>
                  <ExternalLink size={13} />
                </a>
              ) : (
                <a href={ch.link} className="channel-action-btn">
                  <span>{ch.btnText}</span>
                  <ChevronRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. CONTACT ENQUIRY FORM (TWO-COLUMN FORM + IMAGE)
          ===================================================================== */}
      <section className="contact-form-layout-section" id="contact-enquiry-form">
        <div className="contact-form-split-grid">
          {/* Form */}
          <div className="cp-form-card">
            <span className="cp-eyebrow">START YOUR INTERIOR JOURNEY</span>
            <h3>Tell Us About Your Dream Project.</h3>
            <p className="cp-form-intro">
              Have an idea for your home interiors? Share your requirements with us. Our team will connect with you to understand your vision and discuss suitable solutions.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f5faf5', border: '1px solid #7cb342', borderRadius: '12px' }}>
                <CheckCircle2 size={50} color="#2e7d32" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: '#24170d', marginBottom: '0.6rem' }}>
                  Enquiry Submitted Successfully!
                </h4>
                <p style={{ color: '#455a64', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.fullName}</strong>. Opening WhatsApp to connect with our senior designer in Tirupati...
                </p>
                <a 
                  href={`https://wa.me/916300994464?text=${encodeURIComponent(
                    `*Hello Our Dream Home Interiors!*\nI would like to enquire about your interior design services.\n\n*Project Enquiry Details:*\n• *Full Name:* ${formData.fullName}\n• *Mobile Number:* ${formData.phone}\n• *Email:* ${formData.email}\n• *Project Location:* ${formData.projectLocation}\n• *Property Type:* ${formData.propertyType}\n• *Service Required:* ${formData.serviceRequired}\n• *Estimated Budget:* ${formData.estimatedBudget}\n• *Project Description:* ${formData.projectDescription || 'N/A'}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="form-submit-btn-enhanced"
                  style={{ display: 'inline-flex', textDecoration: 'none', width: 'auto', padding: '0.9rem 2rem' }}
                >
                  <MessageCircle size={18} />
                  <span>Open WhatsApp Directly</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-row-2">
                  <div className="cp-field-group">
                    <label className="cp-field-label">Full Name</label>
                    <input 
                      type="text" 
                      className="cp-input-control" 
                      placeholder="e.g. Ramesh Reddy" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="cp-field-group">
                    <label className="cp-field-label">Mobile Number</label>
                    <input 
                      type="tel" 
                      className="cp-input-control" 
                      placeholder="+91 98765 43210" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-row-2">
                  <div className="cp-field-group">
                    <label className="cp-field-label">Email Address</label>
                    <input 
                      type="email" 
                      className="cp-input-control" 
                      placeholder="name@example.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="cp-field-group">
                    <label className="cp-field-label">Project Location</label>
                    <input 
                      type="text" 
                      className="cp-input-control" 
                      placeholder="e.g. Tirupati, Chandragiri" 
                      required
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-row-2">
                  <div className="cp-field-group">
                    <label className="cp-field-label">Property Type</label>
                    <select 
                      className="cp-select-control"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    >
                      <option value="Apartment">Apartment</option>
                      <option value="Independent House">Independent House</option>
                      <option value="Villa">Villa</option>
                      <option value="Commercial Space">Commercial Space</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="cp-field-group">
                    <label className="cp-field-label">Service Required</label>
                    <select 
                      className="cp-select-control"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    >
                      <option value="Modular Kitchens">Modular Kitchens</option>
                      <option value="Bedrooms & Wardrobes">Bedrooms & Wardrobes</option>
                      <option value="Living & TV Units">Living & TV Units</option>
                      <option value="False Ceiling (POP / Gypsum)">False Ceiling (POP / Gypsum)</option>
                      <option value="Wall Panelling & Cladding">Wall Panelling & Cladding</option>
                      <option value="Complete Home Interiors">Complete Home Interiors</option>
                      <option value="Other Requirements">Other Requirements</option>
                    </select>
                  </div>
                </div>

                <div className="cp-field-group">
                  <label className="cp-field-label">Estimated Budget</label>
                  <select 
                    className="cp-select-control"
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  >
                    <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                    <option value="₹1–3 Lakhs">₹1–3 Lakhs</option>
                    <option value="₹3–5 Lakhs">₹3–5 Lakhs</option>
                    <option value="₹5–10 Lakhs">₹5–10 Lakhs</option>
                    <option value="Above ₹10 Lakhs">Above ₹10 Lakhs</option>
                    <option value="Not Yet Decided">Not Yet Decided</option>
                  </select>
                </div>

                <div className="cp-field-group">
                  <label className="cp-field-label">Project Description</label>
                  <textarea 
                    className="cp-textarea-control" 
                    rows={4} 
                    placeholder="Tell us about your home floor plan, timeline, scope of work..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  />
                </div>

                <button type="submit" className="form-submit-btn-enhanced">
                  <span>Send Your Enquiry</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Side Image Frame */}
          <div className="cp-form-img-frame">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" 
              alt="Our Dream Home Interiors Consultation" 
              className="cp-form-img"
            />
            <div className="cp-form-badge">
              <div className="cp-form-badge-title">Our Dream Home Interiors</div>
              <div className="cp-form-badge-text">
                "We look forward to understanding your requirements and helping you plan your dream interiors."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. WHY CONTACT US SECTION (FOUR FEATURE CARDS)
          ===================================================================== */}
      <section className="why-contact-section">
        <div className="cp-section-header">
          <span className="cp-eyebrow">YOUR IDEAS MATTER TO US</span>
          <h2 className="cp-title">Your Vision Deserves the Right Attention.</h2>
          <p className="cp-subtext">
            We believe every successful interior project starts with understanding the customer's needs.
          </p>
        </div>

        <div className="why-contact-grid">
          {whyContactReasons.map((item, idx) => (
            <div key={idx} className="why-contact-card">
              <div className="why-contact-icon">{item.icon}</div>
              <h3 className="why-contact-title">{item.title}</h3>
              <p className="why-contact-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. OUR LOCATION / GOOGLE MAPS SECTION
          ===================================================================== */}
      <section className="location-map-section" id="location-map">
        <div className="cp-section-header">
          <span className="cp-eyebrow">FIND US</span>
          <h2 className="cp-title">Let's Connect in Tirupati.</h2>
          <p className="cp-subtext">
            Our Dream Home Interiors is based in Tirupati, Andhra Pradesh. Contact us to discuss your project and arrange a consultation.
          </p>
        </div>

        <div className="location-map-card">
          <div className="location-map-iframe-wrap">
            <iframe 
              title="Our Dream Home Interiors Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124116.36399119616!2d79.34008709323712!3d13.628807963339182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf95c1064e432d84!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="location-address-box">
            <div className="location-brand-name">OUR STUDIO</div>
            <h3>Our Dream Home Interiors</h3>
            <p className="location-address-text">
              Tirupati, Andhra Pradesh, India<br />
              Pincode: 517501<br /><br />
              <strong>Phone:</strong> +91 63009 94464 / +91 70136 76631<br />
              <strong>Email:</strong> ourdreamhomeinteriors@gmail.com
            </p>
            <a 
              href="https://maps.google.com/?q=Tirupati,Andhra+Pradesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-open-maps"
            >
              <span>Open Google Maps</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. QUICK CONTACT / WHATSAPP SECTION
          ===================================================================== */}
      <section className="quick-connect-section">
        <div className="cp-section-header">
          <span className="cp-eyebrow light">DIRECT ASSISTANCE</span>
          <h2 className="cp-title light">Have a Project in Mind? Let's Talk!</h2>
          <p className="cp-subtext light">
            Whether you need a modular kitchen, a beautiful bedroom or complete home interiors, we are just a message away.
          </p>
        </div>

        <div className="quick-connect-grid">
          <div className="quick-connect-box">
            <div className="quick-icon-wrap">
              <Phone size={26} />
            </div>
            <h3 className="quick-box-title">Call Our Team</h3>
            <p className="quick-box-desc">Speak directly with our project coordinators about your requirements.</p>
            <a href="tel:+916300994464" className="btn-gold-shimmer">
              <span>Call Now</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="quick-connect-box">
            <div className="quick-icon-wrap" style={{ color: '#25d366' }}>
              <MessageCircle size={26} />
            </div>
            <h3 className="quick-box-title">WhatsApp Us</h3>
            <p className="quick-box-desc">Send floor plans, reference photos or project questions directly.</p>
            <a 
              href="https://wa.me/916300994464?text=Hello%20Our%20Dream%20Home%20Interiors,%20I%20have%20an%20interior%20project%20enquiry" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-green"
            >
              <span>Chat Now</span>
              <Send size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ===================================================================== */}
      <section className="contact-faq-section">
        <div className="cp-section-header">
          <span className="cp-eyebrow">COMMON QUERIES</span>
          <h2 className="cp-title">Frequently Asked Questions</h2>
        </div>

        <div className="contact-faq-wrapper">
          {faqList.map((faq, idx) => (
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
          8. FINAL CTA SECTION
          ===================================================================== */}
      <section className="contact-final-cta-section">
        <div className="contact-final-cta-box">
          <span className="cp-eyebrow light">OUR DREAM HOME INTERIORS</span>
          <h2 className="cp-title light">Let's Make Your Dream a Beautiful Reality.</h2>
          <p className="contact-final-p">
            Your dream home deserves thoughtful design, beautiful details and a personal touch. Start your interior journey with us today.
          </p>
          <a href="#contact-enquiry-form" className="btn-gold-shimmer">
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

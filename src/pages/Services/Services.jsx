import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  Check, 
  Palette, 
  Maximize2, 
  Layers, 
  Sparkles, 
  Search, 
  SlidersHorizontal 
} from 'lucide-react';
import heroServicesImg from '../../assets/hero-services.jpg';
import Reveal from '../../components/Reveal';
import './Services.css';
import ia from '../../assets/1.png';
import ib from '../../assets/2.png';
import ic from '../../assets/3.png';
import id from '../../assets/4.png';
import ie from '../../assets/5.png';
import ij from '../../assets/6.png';
import ik from '../../assets/7.png';

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const servicesList = [
    {
      num: '01',
      slug: 'modular-kitchens',
      title: 'Modular Kitchens',
      subtitle: 'Designed for Cooking. Crafted for Living.',
      desc: 'Transform your kitchen into a stylish, organized and functional space with modern modular kitchen designs tailored to your home.',
      bullets: [
        'Modern cabinet designs',
        'Smart storage solutions',
        'Kitchen countertops',
        'Backsplash and finishes',
        'Space-efficient layouts'
      ],
      ctaText: 'Explore Modular Kitchens',
      image: ik
    },
    {
      num: '02',
      slug: 'bedrooms-wardrobes',
      title: 'Bedrooms & Wardrobes',
      subtitle: 'Your Personal Space of Comfort and Elegance.',
      desc: 'Create a relaxing bedroom with beautiful interiors, customized wardrobes and practical storage solutions.',
      bullets: [
        'Master bedroom interiors',
        'Customized wardrobes',
        'Sliding and hinged wardrobes',
        'Bed back panels',
        'Dressing units and storage'
      ],
      ctaText: 'Explore Bedrooms & Wardrobes',
      image: ie
    },
    {
      num: '03',
      slug: 'living-tv-units',
      title: 'Living & TV Units',
      subtitle: 'Make Every Gathering Special.',
      desc: 'Design a welcoming living room with elegant TV units, attractive wall features and coordinated interior elements.',
      bullets: [
        'Custom TV units',
        'Decorative wall panels',
        'Entertainment units',
        'Display and storage cabinets',
        'Living room space planning'
      ],
      ctaText: 'Explore Living & TV Units',
      image: ib
    },
    {
      num: '04',
      slug: 'false-ceiling',
      title: 'False Ceiling (POP / Gypsum)',
      subtitle: 'Elevate Your Interiors From Above.',
      desc: 'Enhance your rooms with modern false ceiling designs that add depth, character and beautiful lighting effects.',
      bullets: [
        'POP ceiling designs',
        'Gypsum board ceilings',
        'Cove lighting concepts',
        'Decorative ceiling patterns',
        'Lighting integration'
      ],
      ctaText: 'Explore False Ceilings',
      image: id
    },
    {
      num: '05',
      slug: 'wall-panelling',
      title: 'Wall Panelling & Cladding',
      subtitle: 'Give Your Walls a Signature Look.',
      desc: 'Turn plain walls into attractive design features using modern panelling, decorative finishes and elegant cladding.',
      bullets: [
        'Wooden wall panelling',
        'Fluted panels',
        'Decorative wall cladding',
        'Marble-look wall features',
        'TV and accent walls'
      ],
      ctaText: 'Explore Wall Panelling',
      image: ij
    },
    {
      num: '06',
      slug: 'complete-home-interiors',
      title: 'Complete Home Interiors',
      subtitle: 'One Vision. Every Corner Perfectly Designed.',
      desc: 'Bring your entire home together with coordinated interior solutions designed around your lifestyle, preferences and space.',
      bullets: [
        'Complete home interior planning',
        'Living and dining interiors',
        'Bedroom and kitchen designs',
        'Wardrobes and storage',
        'Ceiling and wall treatments'
      ],
      ctaText: 'Explore Complete Home Interiors',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const whyChooseApproach = [
    {
      title: 'Customized Solutions',
      desc: 'Designs based on your needs and preferences.',
      icon: <Palette size={24} />
    },
    {
      title: 'Smart Space Utilization',
      desc: 'Make the most of every available space.',
      icon: <Maximize2 size={24} />
    },
    {
      title: 'Material Selection',
      desc: 'Choose suitable materials, colours and finishes.',
      icon: <Layers size={24} />
    },
    {
      title: 'Modern Designs',
      desc: 'Contemporary concepts with timeless appeal.',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Detail-Oriented Work',
      desc: 'Focus on the little things that make a difference.',
      icon: <Search size={24} />
    },
    {
      title: 'Coordinated Interiors',
      desc: 'Maintain a consistent look throughout your home.',
      icon: <SlidersHorizontal size={24} />
    }
  ];

  const processSteps = [
    { num: '01', title: 'Initial Consultation', desc: 'Understand your requirements, space, preferences and budget.' },
    { num: '02', title: 'Site Measurement & Planning', desc: 'Review the available space and plan suitable layouts.' },
    { num: '03', title: 'Design & Material Selection', desc: 'Discuss design concepts, colours, finishes and materials.' },
    { num: '04', title: 'Approval & Execution', desc: 'Finalize the agreed scope and proceed with the work.' },
    { num: '05', title: 'Final Inspection & Handover', desc: 'Review the completed work and hand over the finished space.' }
  ];

  const faqItems = [
    {
      q: 'Can I choose individual interior services?',
      a: 'Yes. You can choose an individual service such as a modular kitchen, wardrobe or false ceiling, or enquire about complete home interiors.'
    },
    {
      q: 'Do you provide customized designs?',
      a: 'Yes. Designs can be discussed and customized according to your requirements and available space.'
    },
    {
      q: 'Can I select the materials and colours?',
      a: 'Yes. Material options, colours, textures and finishes can be discussed during the design process.'
    },
    {
      q: 'Can you work with my existing home interiors?',
      a: 'Yes. You can discuss specific renovation or interior improvement requirements with our team.'
    },
    {
      q: 'How can I get a quotation?',
      a: 'Contact us with your project details, location and requirements to discuss an estimate.'
    }
  ];

  return (
    <div className="services-page">
      {/* =====================================================================
          1. SERVICES HERO SECTION
          ===================================================================== */}
      <section 
        className="services-hero"
        style={{ backgroundImage: `url(${heroServicesImg})` }}
      >
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <motion.div 
            className="services-hero-tag"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            OUR EXPERTISE · OUR SERVICES
          </motion.div>

          <motion.h1 
            className="services-hero-heading"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            Thoughtfully Designed Interiors.<br />Beautifully Lived Spaces.
          </motion.h1>

          <motion.div 
            style={{ 
              width: '75px', 
              height: '2px', 
              background: 'linear-gradient(90deg, #dfaa3b, transparent)', 
              marginBottom: '1.2rem' 
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p 
            className="services-hero-p1"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            Discover complete interior solutions designed to bring elegance, functionality and comfort into every corner of your home.
          </motion.p>

          <motion.p 
            className="services-hero-p2"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            From modern modular kitchens to luxurious bedrooms and complete home interiors, we turn your ideas into beautifully designed spaces.
          </motion.p>

          <motion.div 
            className="services-hero-btns"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <a href="#all-services-grid" className="btn-gold-shimmer">
              <span>Explore Our Services</span>
              <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-outline-gold-pill">
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. SERVICES INTRODUCTION SECTION
          ===================================================================== */}
      <section className="services-intro-section">
        <div className="services-intro-box">
          <span className="services-eyebrow">DESIGNING EVERY DETAIL</span>
          <h2 className="services-main-title">Everything Your Dream Home Needs</h2>
          <p className="services-intro-para">
            Every space deserves thoughtful design. Our interior solutions combine modern aesthetics, smart space utilization and elegant finishing to create homes that reflect your personality.
          </p>
          <p className="services-intro-para">
            Whether you are designing a new home or upgrading your existing space, we help you discover the right interior solutions for your lifestyle.
          </p>
        </div>
      </section>

      {/* =====================================================================
          3. ALL SERVICES (6 LARGE PREMIUM CARDS)
          ===================================================================== */}
      <section className="all-services-grid-section" id="all-services-grid">
        <div className="services-header-box">
          <span className="services-eyebrow">PREMIUM SOLUTIONS</span>
          <h2 className="services-main-title">Tailored Interior Solutions</h2>
          <p className="services-sub-desc">
            Click on any service to explore detailed design options, material specifications and project galleries.
          </p>
        </div>

        <div className="services-master-grid">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="service-master-card">
              <div className="master-card-img-wrap">
                <img src={srv.image} alt={srv.title} className="master-card-img" />
                <span className="master-card-badge">{srv.num}</span>
              </div>
              <div className="master-card-content">
                <h3 className="master-card-title">{srv.num}. {srv.title}</h3>
                <div className="master-card-subtitle">{srv.subtitle}</div>
                <p className="master-card-desc">{srv.desc}</p>

                <ul className="master-card-bullets">
                  {srv.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <Check size={14} className="bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/services/${srv.slug}`} className="master-card-cta">
                  <span>{srv.ctaText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. WHY CHOOSE OUR INTERIOR SOLUTIONS?
          ===================================================================== */}
      <section className="services-why-section">
        <div className="services-header-box">
          <span className="services-eyebrow">THE OUR DREAM HOME DIFFERENCE</span>
          <h2 className="services-main-title">Thoughtful Design. Quality Finishing. Lasting Impressions.</h2>
          <p className="services-sub-desc">
            Every interior project deserves the right balance of design, functionality and attention to detail.
          </p>
        </div>

        <div className="services-why-grid">
          {whyChooseApproach.map((item, idx) => (
            <div key={idx} className="service-why-box">
              <div className="service-why-icon">{item.icon}</div>
              <h3 className="service-why-title">{item.title}</h3>
              <p className="service-why-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. OUR WORK PROCESS
          ===================================================================== */}
      <section className="services-process-section">
        <div className="services-header-box">
          <span className="services-eyebrow">HOW WE WORK</span>
          <h2 className="services-main-title">From Your First Idea to the Final Finish</h2>
          <p className="services-sub-desc">
            A structured, hassle-free roadmap ensuring transparency and timely execution.
          </p>
        </div>

        <div className="services-process-steps">
          {processSteps.map((step, idx) => (
            <div key={idx} className="service-step-item">
              <div className="step-circle-badge">{step.num}</div>
              <h3 className="step-card-name">{step.title}</h3>
              <p className="step-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. FREQUENTLY ASKED QUESTIONS
          ===================================================================== */}
      <section className="services-faq-section">
        <div className="services-header-box">
          <span className="services-eyebrow">GOT QUESTIONS?</span>
          <h2 className="services-main-title">Frequently Asked Questions</h2>
        </div>

        <div className="services-faq-wrapper">
          {faqItems.map((faq, idx) => (
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
          7. SERVICES CTA SECTION
          ===================================================================== */}
      <section className="services-cta-banner">
        <div className="services-cta-inner">
          <span className="services-eyebrow light">LET'S DESIGN YOUR DREAM HOME</span>
          <h2 className="services-main-title light">The Perfect Space Begins With the Right Design.</h2>
          <p className="services-cta-text">
            Tell us what you have in mind. Let's create an interior that feels uniquely yours.
          </p>
          <Link to="/contact" className="btn-gold-shimmer">
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

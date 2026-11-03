import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Home as HomeIcon,
  Bed,
  Tv,
  Sparkles,
  Columns,
  CheckCircle2,
  Award,
  Layers,
  Palette,
  Compass,
  FileCheck2,
  Hammer,
  Key,
  HelpCircle,
  ShieldCheck,
  Star,
  Send
} from 'lucide-react';
import { InstagramIcon } from '../../components/SocialIcons';
import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter/Counter';
import BeforeAfterSlider from '../../components/BeforeAfterSlider/BeforeAfterSlider';
import './Home.css';
import beforeLiving from '../../assets/before.jpg';
import afterLiving from '../../assets/after.jpg';
import beforeWardrobe from '../../assets/before-wardrobe.jpg';
import afterWardrobe from '../../assets/gallery4.jpg';
import beforeKitchen from '../../assets/before-kitchen.jpg';
import afterKitchen from '../../assets/gallery1.jpg';
import beforeBedroom from '../../assets/before-bedroom.jpg';
import afterBedroom from '../../assets/gallery2.jpg';
import ia from '../../assets/1.png';
import ib from '../../assets/2.png';
import ic from '../../assets/3.png';
import id from '../../assets/4.png';
import ie from '../../assets/5.png';
import ij from '../../assets/6.png';

import ik from '../../assets/7.png';

export default function Home() {
  // Hero Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80',
      caption: 'The Luxe Haven'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80',
      caption: 'Contemporary Bungalow Design'
    },
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
      caption: 'Luxury High-Rise Interior'
    }
  ];

  // Services (Section 4)
  const servicesList = [
    {
      num: '01',
      title: 'Modular Kitchens',
      desc: 'Modern, stylish and functional kitchens designed to make everyday cooking comfortable and enjoyable.',
      sublist: 'Modular cabinets • Storage solutions • Premium finishes',
      image: ik
    },
    {
      num: '02',
      title: 'Bedrooms & Wardrobes',
      desc: 'Beautifully designed bedrooms and customized wardrobes that combine elegance, comfort and smart storage.',
      sublist: 'Master bedrooms • Sliding wardrobes • Custom storage',
      image: ie
    },
    {
      num: '03',
      title: 'Living & TV Units',
      desc: 'Create welcoming living spaces with elegant TV units, decorative panels and contemporary furniture designs.',
      sublist: 'TV units • Wall units • Decorative furniture',
      image: ib
    },
    {
      num: '04',
      title: 'False Ceiling (POP / Gypsum)',
      desc: 'Enhance your interiors with stylish ceiling designs, modern lighting and beautiful finishing.',
      sublist: 'POP designs • Gypsum ceilings • Cove lighting',
      image: id
    },
    {
      num: '05',
      title: 'Wall Panelling & Cladding',
      desc: 'Give your walls a premium appearance with stylish textures, decorative panels and modern cladding.',
      sublist: 'Wooden panels • Decorative walls • Textured finishes',
      image: ij
    },
    {
      num: '06',
      title: 'Complete Home Interiors',
      desc: 'From concept to completion, we create coordinated interior designs for every room in your home.',
      sublist: 'Full home design • Space planning • Interior execution',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Why Choose Us (Section 5)
  const whyChooseReasons = [
    {
      title: 'Personalized Designs',
      desc: 'Every design is planned around your preferences and lifestyle.',
      icon: <Palette size={24} />
    },
    {
      title: 'Quality Materials',
      desc: 'We focus on materials and finishes that enhance the overall look and feel.',
      icon: <Award size={24} />
    },
    {
      title: 'Creative Ideas',
      desc: 'Modern concepts combined with timeless elegance.',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Functional Spaces',
      desc: 'Smart layouts and practical storage solutions.',
      icon: <Columns size={24} />
    },
    {
      title: 'Attention to Detail',
      desc: 'Careful consideration of every element and finishing.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Complete Solutions',
      desc: 'Interior solutions from initial planning to final execution.',
      icon: <HomeIcon size={24} />
    }
  ];

  // Featured Projects (Section 6)
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const projectCategories = [
    'All Projects',
    'Living Rooms',
    'Modular Kitchens',
    'Bedrooms',
    'Wardrobes',
    'Complete Home Interiors'
  ];

  const portfolioProjects = [
    {
      title: 'Modern Living Room',
      category: 'Living Rooms',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Elegant Modular Kitchen',
      category: 'Modular Kitchens',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxury Bedroom',
      category: 'Bedrooms',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Custom Wardrobes',
      category: 'Wardrobes',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredPortfolio = selectedCategory === 'All Projects'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  // Design Process (Section 7)
  const designSteps = [
    {
      num: '01',
      title: 'Consultation & Discussion',
      desc: 'We understand your requirements, lifestyle, preferences and budget.'
    },
    {
      num: '02',
      title: 'Design Planning',
      desc: 'We plan layouts, materials, colours and interior concepts based on your vision.'
    },
    {
      num: '03',
      title: 'Design Finalization',
      desc: 'We refine the design and finalize the details before execution.'
    },
    {
      num: '04',
      title: 'Execution & Installation',
      desc: 'We bring the approved designs to life with careful workmanship and finishing.'
    },
    {
      num: '05',
      title: 'Final Handover',
      desc: 'We complete the work and hand over your beautifully transformed space.'
    }
  ];

  // Testimonials (Section 9)
  const clientReviews = [
    {
      name: 'Sri Harsha & Family',
      project: '3BHK Complete Home Interiors',
      quote: 'Our Dream Home Interiors transformed our space into a modern sanctuary. Truly professional team in Tirupati and delivered right on schedule!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Rajesh Naidu',
      project: 'Modular Kitchen & Living Unit',
      quote: 'The acrylic kitchen finish, soft-close hardware, and ambient cove lighting have elevated our everyday living. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Kavitha & Ramesh',
      project: 'Master Bedroom & Wardrobe',
      quote: 'Exceptional transparency in pricing and meticulous craftsmanship on our fluted panel wall and wardrobe. Flawless execution.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  ];

  // FAQs (Section 10)
  const [openFaq, setOpenFaq] = useState(0);
  const faqList = [
    {
      q: '1. What interior design services do you offer?',
      a: 'We offer modular kitchens, bedroom interiors, wardrobes, living and TV units, false ceilings, wall panelling and complete home interior solutions.'
    },
    {
      q: '2. Do you provide customized interior designs?',
      a: 'Yes. We plan interior designs according to your space, requirements, preferences and budget.'
    },
    {
      q: '3. Can I choose my own materials and colours?',
      a: 'Yes. Material selections, colours, finishes and design elements can be discussed during the planning stage.'
    },
    {
      q: '4. Do you undertake complete home interior projects?',
      a: 'Yes. We offer complete home interior solutions covering different spaces throughout your home.'
    },
    {
      q: '5. How can I get an estimate for my interiors?',
      a: 'You can contact us through phone, WhatsApp or our enquiry form. Share your requirements to discuss a suitable estimate.'
    },
    {
      q: '6. Where are your services available?',
      a: 'We are based in Tirupati, Andhra Pradesh. Contact us to discuss your project location and service availability.'
    }
  ];

  // Contact / Quote Form (Section 11)
  const [quoteForm, setQuoteForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyLocation: '',
    serviceType: 'Complete Home Interiors',
    estimatedBudget: '₹5 Lakhs - ₹10 Lakhs',
    requirements: ''
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);

    const message = `*Hello Our Dream Home Interiors!*
I would like to request a Free Consultation & Quote.

*Enquiry Details:*
• *Full Name:* ${quoteForm.fullName}
• *Phone Number:* ${quoteForm.phone}
• *Email Address:* ${quoteForm.email}
• *Property Location:* ${quoteForm.propertyLocation}
• *Type of Service:* ${quoteForm.serviceType}
• *Estimated Budget:* ${quoteForm.estimatedBudget}
• *Project Requirements:* ${quoteForm.requirements || 'N/A'}`;

    const whatsappUrl = `https://wa.me/916300994464?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="home-page">
      {/* =====================================================================
          2. HERO SECTION – MAIN BANNER
          ===================================================================== */}
      <section className="hero-banner">
        <div 
          className="hero-bg-zoom" 
          style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
        />
        <div className="hero-overlay-dark" />

        <div className="hero-body">
          <motion.div 
            className="hero-small-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            YOUR DREAM SPACE. OUR DESIGN EXPERTISE.
          </motion.div>

          <motion.h1 
            className="hero-main-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            We Make Your Vision<br />Into Reality
          </motion.h1>

          <motion.div 
            style={{ 
              width: '80px', 
              height: '2px', 
              background: 'linear-gradient(90deg, #dfaa3b, transparent)', 
              marginBottom: '1.2rem' 
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p 
            className="hero-sub-para"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            Transform your house into a beautiful, comfortable and functional home with thoughtfully designed interiors that reflect your lifestyle and personality.
          </motion.p>

          <motion.p 
            className="hero-secondary-para"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            From elegant modular kitchens to luxurious bedrooms and complete home interiors, we bring every corner of your dream home to life.
          </motion.p>

          <motion.div 
            className="hero-actions-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link to="/projects" className="btn-gold-shimmer">
              <span>Explore Our Projects</span>
              <ArrowRight size={16} />
            </Link>
            <a href="#get-a-free-quote" className="btn-outline-gold-pill">
              Get a Free Quote
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div 
            className="hero-trust-bar"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>Customized Interior Designs</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>Quality Materials</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>Elegant Finishes</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>Complete Interior Solutions</span>
            </div>
          </motion.div>
        </div>

        {/* Carousel controls */}
        <div className="hero-slide-nav">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* =====================================================================
          3. INTRODUCTION SECTION – ABOUT OUR COMPANY
          ===================================================================== */}
      <section className="about-intro-section">
        <div className="about-intro-grid">
          <Reveal direction="right" duration={0.8}>
            <div className="about-intro-img-frame">
              <img 
                src={ia}
                alt="Welcome to Our Dream Home Interiors" 
                className="about-intro-img"
              />
              <div className="about-intro-badge">
                <Sparkles size={18} color="#dfaa3b" />
                <span>Bespoke Interior Studio</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" duration={0.8} delay={0.15}>
            <div className="about-intro-content">
              <span className="section-label">WELCOME TO OUR DREAM HOME INTERIORS</span>
              <h2 className="section-title">Designing Dreams,<br />Building Beautiful Spaces</h2>
              <p className="about-intro-para">
                At <strong>Our Dream Home Interiors</strong>, we believe every home deserves a unique identity. We specialize in transforming ordinary spaces into beautiful, functional and inspiring environments.
              </p>
              <p className="about-intro-para">
                Our approach combines creativity, thoughtful planning and attention to detail to deliver interiors that perfectly match your vision.
              </p>
              <p className="about-intro-para">
                Whether you are designing a new home or renovating your existing space, we are here to make your dream interiors a reality.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/about" className="btn-gold-shimmer">
                  <span>Discover Our Story</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          3B. BEFORE & AFTER TRANSFORMATIONS
          ===================================================================== */}
      <section className="transformations-section">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-label">TRANSFORMATIONS</span>
            <h2 className="section-title">Before & After Showcase</h2>
            <p className="section-desc">
              Drag the golden divider to see the conversion from bare rooms to customized designer living.
            </p>
          </div>
        </Reveal>

        <div className="transformations-grid">
          {[
            { title: 'Living Room TV Feature Wall', location: 'Tolichowki, Hyderabad', before: beforeWardrobe, after: afterWardrobe },
            { title: 'Modular Kitchen & Storage', location: 'Shaikpet, Hyderabad', before: beforeKitchen, after: afterKitchen },
            { title: 'Designer Living Lounge', location: 'Jubilee Hills, Hyderabad', before: beforeLiving, after: afterLiving },
            { title: 'Luxury Master Bedroom Suite', location: 'Tolichowki, Hyderabad', before: beforeBedroom, after: afterBedroom }
          ].map((item, index) => (
            <Reveal key={index} direction="up" delay={index * 0.08}>
              <div className="transformation-card">
                <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
                <div className="transformation-card-info">
                  <h3>{item.title}</h3>
                  <span>{item.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. OUR SERVICES SECTION (6 PREMIUM CARDS)
          ===================================================================== */}
      <section className="services-highlight-section">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-label">WHAT WE DO</span>
            <h2 className="section-title">Complete Interior Solutions for Every Home</h2>
            <p className="section-desc">
              Discover thoughtfully designed interior solutions that bring beauty, comfort and functionality together.
            </p>
          </div>
        </Reveal>

        <div className="services-six-grid">
          {servicesList.map((service, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.08}>
              <div className="service-premium-card">
                <div className="service-card-media">
                  <img src={service.image} alt={service.title} className="service-card-img" />
                  <span className="service-card-num">{service.num}</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.num}. {service.title}</h3>
                  <p className="service-card-text">{service.desc}</p>
                  <div className="service-card-sublist">{service.sublist}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="section-cta-center">
          <Link to="/services" className="btn-gold-shimmer">
            <span>Explore All Services</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* =====================================================================
          5. WHY CHOOSE US SECTION
          ===================================================================== */}
      <section className="why-choose-section">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-label">THE DIFFERENCE IS IN THE DETAILS</span>
            <h2 className="section-title">Why Choose Our Dream Home Interiors?</h2>
            <p className="section-desc">
              We focus on creating spaces that are not just beautiful but also comfortable, practical and meaningful.
            </p>
          </div>
        </Reveal>

        <div className="reasons-grid">
          {whyChooseReasons.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.07}>
              <div className="reason-card">
                <div className="reason-icon-bubble">{item.icon}</div>
                <h3 className="reason-title">{item.title}</h3>
                <p className="reason-desc">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. FEATURED PROJECTS / PORTFOLIO
          ===================================================================== */}
      <section className="featured-projects-section">
        <div className="section-header">
          <span className="section-label light">OUR WORK SPEAKS FOR ITSELF</span>
          <h2 className="section-title light">Crafted with Elegance, Designed for Living</h2>
          <p className="section-desc light">
            Explore our interior projects and discover how thoughtful design can transform everyday spaces into something extraordinary.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="portfolio-categories-bar">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`cat-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="featured-projects-grid">
          {filteredPortfolio.map((proj, idx) => (
            <Link to="/projects" key={idx} className="featured-project-card">
              <img src={proj.image} alt={proj.title} className="featured-proj-img" />
              <div className="featured-proj-overlay">
                <h4 className="featured-proj-title">{proj.title}</h4>
                <span className="featured-proj-category">{proj.category}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-cta-center">
          <Link to="/projects" className="btn-outline-gold-pill">
            <span>View All Projects</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* =====================================================================
          7. OUR DESIGN PROCESS (5-STEP TIMELINE)
          ===================================================================== */}
      <section className="design-process-section">
        <Reveal direction="up">
          <div className="section-header">
            <span className="section-label">SIMPLE. TRANSPARENT. PROFESSIONAL.</span>
            <h2 className="section-title">From Your Ideas to Your Dream Home</h2>
            <p className="section-desc">
              We make the interior design journey simple with a structured approach.
            </p>
          </div>
        </Reveal>

        <div className="process-timeline-grid">
          {designSteps.map((step, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="process-step-card">
                <div className="process-step-bubble">{step.num}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. OUR DESIGN PHILOSOPHY
          ===================================================================== */}
      <section 
        className="philosophy-section"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="philosophy-overlay" />
        <div className="philosophy-content">
          <h2 className="philosophy-title">Every Corner Tells a Story</h2>
          <p className="philosophy-para">
            A beautiful home is more than just furniture and decorations. It is a combination of comfort, creativity, functionality and personal expression.<br /><br />
            At <strong>Our Dream Home Interiors</strong>, we believe in designing spaces that reflect who you are and how you love to live.
          </p>
          <a href="#get-a-free-quote" className="btn-gold-shimmer">
            <span>Let's Design Your Dream Home</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* =====================================================================
          9. TESTIMONIALS SECTION (DARK LUXURY)
          ===================================================================== */}
      <section className="testimonials-luxury-section">
        <div className="section-header">
          <span className="section-label light">CLIENT EXPERIENCES</span>
          <h2 className="section-title light">What Our Clients Say</h2>
          <p className="section-desc light">
            Every successful project begins with understanding a customer's dream.
          </p>
        </div>

        <div className="testimonials-card-grid">
          {clientReviews.map((rev, idx) => (
            <div key={idx} className="testimonial-luxury-card">
              <div>
                <div className="test-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#dfaa3b" stroke="#dfaa3b" />
                  ))}
                </div>
                <p className="test-quote">"{rev.quote}"</p>
              </div>

              <div className="test-author-box">
                <img src={rev.avatar} alt={rev.name} className="test-avatar" />
                <div>
                  <div className="test-name">{rev.name}</div>
                  <div className="test-proj-type">{rev.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          10. FAQ SECTION (ACCORDION LAYOUT)
          ===================================================================== */}
      <section className="faqs-section">
        <div className="section-header">
          <span className="section-label">HAVE QUESTIONS?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-accordion-wrapper">
          {faqList.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button 
                className="faq-question-btn"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`faq-icon ${openFaq === idx ? 'open' : ''}`} 
                />
              </button>
              {openFaq === idx && (
                <div className="faq-answer-panel">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          11. CONTACT / GET A FREE QUOTE SECTION
          ===================================================================== */}
      <section className="quote-section" id="get-a-free-quote">
        <div className="quote-section-layout">
          <div className="quote-left-info">
            <span className="section-label light">LET'S CREATE SOMETHING BEAUTIFUL</span>
            <h2 className="section-title light">Ready to Transform Your Dream Home?</h2>
            <p className="quote-lead-para">
              Your dream home deserves thoughtful design and beautiful details. Get in touch with us today and let's start planning your perfect space.
            </p>

            <div className="quote-direct-contact">
              <div className="quote-contact-line">
                <div className="quote-icon-bubble">
                  <Phone size={18} />
                </div>
                <div>
                  <div>+91 63009 94464</div>
                  <div>+91 70136 76631</div>
                </div>
              </div>

              <div className="quote-contact-line">
                <div className="quote-icon-bubble">
                  <Mail size={18} />
                </div>
                <div>ourdreamhomeinteriors@gmail.com</div>
              </div>

              <div className="quote-contact-line">
                <div className="quote-icon-bubble">
                  <MapPin size={18} />
                </div>
                <div>Tirupati, Andhra Pradesh</div>
              </div>

              <div className="quote-contact-line">
                <div className="quote-icon-bubble">
                  <InstagramIcon size={18} color="#dfaa3b" />
                </div>
                <div>@ourdreamhomeinteriors</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="quote-form-card">
            {quoteSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="#2e7d32" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#24170d', marginBottom: '0.5rem' }}>
                  Consultation Request Received!
                </h3>
                <p style={{ color: '#63574c', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Thank you! Opening WhatsApp to connect with our lead interior designer in Tirupati...
                </p>
                <a 
                  href={`https://wa.me/916300994464?text=${encodeURIComponent(
                    `*Hello Our Dream Home Interiors!*\nI would like to request a Free Consultation & Quote.\n\n*Enquiry Details:*\n• *Full Name:* ${quoteForm.fullName}\n• *Phone Number:* ${quoteForm.phone}\n• *Email Address:* ${quoteForm.email}\n• *Property Location:* ${quoteForm.propertyLocation}\n• *Type of Service:* ${quoteForm.serviceType}\n• *Estimated Budget:* ${quoteForm.estimatedBudget}\n• *Project Requirements:* ${quoteForm.requirements || 'N/A'}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-shimmer"
                  style={{ display: 'inline-flex', width: 'auto', margin: '0 auto' }}
                >
                  <MessageCircle size={18} />
                  <span>Open WhatsApp Directly</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit}>
                <div className="form-grid-2col">
                  <div className="quote-input-group">
                    <label className="quote-input-label">Full Name</label>
                    <input 
                      type="text" 
                      className="quote-input-field" 
                      placeholder="e.g. Rahul Sharma" 
                      required
                      value={quoteForm.fullName}
                      onChange={(e) => setQuoteForm({ ...quoteForm, fullName: e.target.value })}
                    />
                  </div>

                  <div className="quote-input-group">
                    <label className="quote-input-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="quote-input-field" 
                      placeholder="+91 98765 43210" 
                      required
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="quote-input-group">
                    <label className="quote-input-label">Email Address</label>
                    <input 
                      type="email" 
                      className="quote-input-field" 
                      placeholder="name@example.com" 
                      required
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    />
                  </div>

                  <div className="quote-input-group">
                    <label className="quote-input-label">Property Location</label>
                    <input 
                      type="text" 
                      className="quote-input-field" 
                      placeholder="e.g. Tirupati, Chandragiri" 
                      required
                      value={quoteForm.propertyLocation}
                      onChange={(e) => setQuoteForm({ ...quoteForm, propertyLocation: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="quote-input-group">
                    <label className="quote-input-label">Type of Service</label>
                    <select 
                      className="quote-select-field"
                      value={quoteForm.serviceType}
                      onChange={(e) => setQuoteForm({ ...quoteForm, serviceType: e.target.value })}
                    >
                      <option value="Complete Home Interiors">Complete Home Interiors</option>
                      <option value="Modular Kitchens">Modular Kitchens</option>
                      <option value="Bedrooms & Wardrobes">Bedrooms & Wardrobes</option>
                      <option value="Living & TV Units">Living & TV Units</option>
                      <option value="False Ceiling (POP / Gypsum)">False Ceiling (POP / Gypsum)</option>
                      <option value="Wall Panelling & Cladding">Wall Panelling & Cladding</option>
                    </select>
                  </div>

                  <div className="quote-input-group">
                    <label className="quote-input-label">Estimated Budget</label>
                    <select 
                      className="quote-select-field"
                      value={quoteForm.estimatedBudget}
                      onChange={(e) => setQuoteForm({ ...quoteForm, estimatedBudget: e.target.value })}
                    >
                      <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                      <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="₹10 Lakhs - ₹20 Lakhs">₹10 Lakhs - ₹20 Lakhs</option>
                      <option value="Above ₹20 Lakhs">Above ₹20 Lakhs</option>
                    </select>
                  </div>
                </div>

                <div className="quote-input-group">
                  <label className="quote-input-label">Project Requirements</label>
                  <textarea 
                    className="quote-textarea-field" 
                    rows={3} 
                    placeholder="Tell us about your home floor plan, timeline or specific design preferences..."
                    value={quoteForm.requirements}
                    onChange={(e) => setQuoteForm({ ...quoteForm, requirements: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-gold-shimmer" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Request a Free Consultation</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

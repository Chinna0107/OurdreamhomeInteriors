import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Eye, 
  Target, 
  Lightbulb, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Clock, 
  Compass, 
  Check, 
  Layers, 
  Palette,
  Home as HomeIcon,
  ThumbsUp
} from 'lucide-react';
import heroAboutImg from '../../assets/hero-about.jpg';
import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter/Counter';
import './About.css';

export default function About() {
  // Core Values (Section 4)
  const coreValues = [
    {
      title: 'Creativity & Innovation',
      desc: 'Fresh ideas and thoughtful concepts for unique living spaces.',
      icon: <Lightbulb size={24} />
    },
    {
      title: 'Quality & Excellence',
      desc: 'A strong focus on materials, detailing and finishing.',
      icon: <Award size={24} />
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Understanding customer expectations and designing around their needs.',
      icon: <HeartHandshake size={24} />
    },
    {
      title: 'Trust & Transparency',
      desc: 'Clear communication and a professional approach throughout the project.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Attention to Detail',
      desc: 'Every corner, colour, texture and finish matters.',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Comfort & Functionality',
      desc: 'Beautiful spaces designed for everyday living.',
      icon: <Compass size={24} />
    }
  ];

  // What Makes Us Different (Section 5)
  const differences = [
    {
      title: 'Personalized Approach',
      desc: 'Designs that reflect your lifestyle and preferences.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Smart Space Planning',
      desc: 'Practical solutions that make every space useful.',
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Thoughtful Material Selection',
      desc: 'Carefully considered materials and finishes.',
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Beautiful Finishing',
      desc: 'Attention to the smallest details that complete a design.',
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Expertise items (Section 6)
  const expertiseList = [
    'Modular Kitchen Interiors',
    'Bedroom Interiors & Wardrobes',
    'Living Room & TV Units',
    'False Ceiling – POP / Gypsum',
    'Wall Panelling & Cladding',
    'Complete Home Interior Solutions'
  ];

  // Work Process (Section 7)
  const workProcess = [
    {
      num: '01',
      title: 'Understanding Your Vision',
      desc: 'We listen to your ideas, preferences, lifestyle and requirements.'
    },
    {
      num: '02',
      title: 'Planning & Designing',
      desc: 'We develop suitable design concepts, layouts and material selections.'
    },
    {
      num: '03',
      title: 'Customization & Approval',
      desc: 'We finalize the design details according to your expectations.'
    },
    {
      num: '04',
      title: 'Execution & Finishing',
      desc: 'We work towards bringing the approved design into reality.'
    },
    {
      num: '05',
      title: 'Final Delivery',
      desc: 'We complete the project with attention to quality and finishing.'
    }
  ];

  return (
    <div className="about-page">
      {/* =====================================================================
          1. ABOUT US HERO SECTION
          ===================================================================== */}
      <section 
        className="about-hero" 
        style={{ backgroundImage: `url(${heroAboutImg})` }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <motion.div 
            className="about-hero-tag"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            GET TO KNOW US
          </motion.div>

          <motion.h1 
            className="about-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            Creating Spaces That<br />Feel Like Home
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
            className="about-hero-p1"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            At <strong>Our Dream Home Interiors</strong>, we believe that every home tells a story. Our passion is to transform your ideas and imagination into beautiful, functional and elegant living spaces.
          </motion.p>

          <motion.p 
            className="about-hero-p2"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            From thoughtfully designed modular kitchens to luxurious bedrooms and complete home interiors, we bring creativity, comfort and sophistication together.
          </motion.p>

          <motion.div 
            className="about-hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link to="/services" className="btn-gold-shimmer">
              <span>Explore Our Services</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline-gold-pill">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. OUR STORY SECTION
          ===================================================================== */}
      <section className="our-story-section">
        <div className="our-story-container">
          <Reveal direction="right" duration={0.8}>
            <div className="story-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" 
                alt="Our Story - Turning Dreams into Beautiful Spaces" 
                className="story-img"
              />
            </div>
          </Reveal>

          <Reveal direction="left" duration={0.8} delay={0.15}>
            <div className="story-content-wrap">
              <span className="section-eyebrow">OUR STORY</span>
              <h2 className="section-main-heading">Turning Dreams Into<br />Beautiful Spaces</h2>
              <p className="story-para">
                <strong>Our Dream Home Interiors</strong> was established with a simple vision: to make beautiful and thoughtfully designed homes accessible to everyone.
              </p>
              <p className="story-para">
                We understand that a home is more than just a place to live. It is where memories are created, families grow and everyday moments become special.
              </p>
              <p className="story-para">
                Our approach focuses on understanding every customer's vision and translating it into interiors that balance aesthetics, functionality and comfort.
              </p>
              <p className="story-para">
                With creativity, careful planning and attention to detail, we aim to make every project a reflection of the people who live in it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          3. OUR VISION & MISSION
          ===================================================================== */}
      <section className="vision-mission-section">
        <div className="vision-mission-grid">
          <div className="vm-card">
            <div className="vm-card-icon">
              <Eye size={26} />
            </div>
            <h3 className="vm-card-title">Our Vision</h3>
            <p className="vm-card-text">
              To become a trusted name in interior design by creating inspiring, elegant and functional spaces that turn every customer's dream home into reality.
            </p>
          </div>

          <div className="vm-card">
            <div className="vm-card-icon">
              <Target size={26} />
            </div>
            <h3 className="vm-card-title">Our Mission</h3>
            <p className="vm-card-text">
              To deliver personalized interior solutions through creative designs, quality materials, thoughtful planning and dedicated workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. OUR CORE VALUES
          ===================================================================== */}
      <section className="core-values-section">
        <Reveal direction="up">
          <div className="section-center-head">
            <span className="section-eyebrow">WHAT DEFINES US</span>
            <h2 className="section-main-heading">The Values Behind Every Design</h2>
            <p className="section-subtext">
              Our work is guided by principles that help us create interiors customers can enjoy for years.
            </p>
          </div>
        </Reveal>

        <div className="values-icon-grid">
          {coreValues.map((val, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.08}>
              <div className="value-card-box">
                <div className="value-card-icon">{val.icon}</div>
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-desc">{val.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. WHAT MAKES US DIFFERENT?
          ===================================================================== */}
      <section className="experience-diff-section">
        <div className="section-center-head">
          <span className="section-eyebrow">THE OUR DREAM HOME EXPERIENCE</span>
          <h2 className="section-main-heading">More Than Interiors, We Create Experiences</h2>
          <p className="section-subtext">
            We believe great interior design is about understanding how people live and creating spaces that make everyday life better.
          </p>
        </div>

        <div className="diff-cards-grid">
          {differences.map((diff, idx) => (
            <div key={idx} className="diff-image-card">
              <div className="diff-card-media">
                <img src={diff.img} alt={diff.title} className="diff-card-img" />
              </div>
              <div className="diff-card-content">
                <h3 className="diff-card-title">{diff.title}</h3>
                <p className="diff-card-desc">{diff.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. OUR EXPERTISE SECTION
          ===================================================================== */}
      <section className="expertise-section">
        <div className="expertise-layout">
          <div className="expertise-image-wrap">
            <img 
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80" 
              alt="Our Expertise - Luxury Interiors" 
              className="expertise-img"
            />
          </div>

          <div className="expertise-content">
            <span className="section-eyebrow">OUR EXPERTISE</span>
            <h2 className="section-main-heading">Complete Interior Solutions<br />Under One Roof</h2>
            <p className="expertise-intro">
              We offer a range of interior design solutions to transform every part of your home.
            </p>

            <ul className="expertise-checklist">
              {expertiseList.map((item, idx) => (
                <li key={idx} className="expertise-item">
                  <CheckCircle2 size={18} className="expertise-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link to="/services" className="btn-gold-shimmer">
                <span>Explore Our Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. OUR WORK PROCESS (TIMELINE)
          ===================================================================== */}
      <section className="work-process-section">
        <div className="section-center-head">
          <span className="section-eyebrow">HOW WE WORK</span>
          <h2 className="section-main-heading">Bringing Your Dream Home to Life</h2>
          <p className="section-subtext">
            We follow a thoughtful process to make your interior journey smooth and organized.
          </p>
        </div>

        <div className="process-steps-row">
          {workProcess.map((step, idx) => (
            <div key={idx} className="process-step-box">
              <div className="step-num-bubble">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. OUR COMMITMENT SECTION (FULL-WIDTH BANNER)
          ===================================================================== */}
      <section 
        className="commitment-banner"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="commitment-overlay" />
        <div className="commitment-content">
          <h2 className="commitment-title">Your Dream Is Our Design Inspiration</h2>
          <p className="commitment-text">
            At <strong>Our Dream Home Interiors</strong>, every project is an opportunity to create something meaningful.<br /><br />
            We are committed to understanding your expectations, providing thoughtful design solutions and making your home a place where beauty and comfort come together.
          </p>
          <div className="commitment-tagline">
            "Your vision inspires us. Your satisfaction motivates us."
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. CALL TO ACTION SECTION (DARK BROWN + GOLD)
          ===================================================================== */}
      <section className="about-cta-section">
        <div className="about-cta-box">
          <span className="section-eyebrow light">LET'S CREATE TOGETHER</span>
          <h2 className="section-main-heading light">Your Dream Home Starts With a Vision.</h2>
          <p className="about-cta-para">
            Let's turn your ideas into beautiful spaces. Get in touch with Our Dream Home Interiors and take the first step towards your dream home.
          </p>

          <div className="about-cta-buttons">
            <a href="tel:+916300994464" className="btn-call-gold">
              <Phone size={18} />
              <span>Call Us Now</span>
            </a>
            <a 
              href="https://wa.me/916300994464?text=Hello%20Our%20Dream%20Home%20Interiors,%20I%20would%20like%20to%20discuss%20my%20interior%20project" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-green"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

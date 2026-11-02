import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  ChevronRight, 
  ChevronDown, 
  Play, 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import heroTestimonialsImg from '../../assets/hero-testimonials.jpg';
import BeforeAfterSlider from '../../components/BeforeAfterSlider/BeforeAfterSlider';
import Reveal from '../../components/Reveal';
import './Testimonials.css';

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState(0);

  // 3. Featured Testimonials
  const featuredReviews = [
    {
      name: 'Dr. Suresh & Dr. Sunitha',
      project: 'Residential Interior Project · Tirupati',
      quote: 'The design of our home turned out beautifully. We loved the attention to detail and the way our ideas were transformed into a comfortable living space.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Venkatesh Naidu',
      project: 'Modular Kitchen Project · MR Palli',
      quote: 'Our kitchen looks modern, elegant and much more organized. The overall design feels practical and suits our everyday needs perfectly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Anand & Divya',
      project: 'Bedroom & Wardrobe Project · Korlagunta',
      quote: 'We wanted a beautiful and functional bedroom, and the final design reflects exactly what we had imagined. The finishing and overall look are wonderful.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  ];

  // 4. Testimonials by Service
  const serviceReviews = [
    {
      title: 'Modular Kitchens',
      desc: 'Customer experiences with ergonomic kitchen design, quartz countertops, pantry units and soft-close storage solutions.',
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Bedrooms & Wardrobes',
      desc: 'Feedback on personalized master bedroom suites, tinted glass sliding wardrobes and integrated vanity dressing tables.',
      img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Living & TV Units',
      desc: 'Experiences with statement entertainment units, fluted charcoal wall panelling and warm concealed cable management.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'False Ceilings',
      desc: 'Feedback on architectural gypsum board ceilings, cove ambient lighting, and elegant chandelier integration.',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Wall Panelling',
      desc: 'Customer experiences with natural wood veneers, acoustic padded walls and marble-look composite accent cladding.',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Complete Home Interiors',
      desc: 'Stories from 360-degree turnkey interior projects covering 2BHK, 3BHK and luxury duplex villas in Andhra Pradesh.',
      img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // 6. Video Testimonials
  const videoStories = [
    {
      title: 'A Luxury 3BHK Transformation in Tirupati',
      client: 'Sri Harsha & Family · Complete Interiors',
      thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Modern Island Kitchen Tour & Experience',
      client: 'Kavitha Reddy · Modular Kitchen',
      thumb: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Master Bedroom & Walk-in Wardrobe Walkthrough',
      client: 'Rajesh & Swathi · Bedroom Interiors',
      thumb: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // 7. What Customers Appreciate About Us
  const appreciationCards = [
    {
      title: 'Creative Designs',
      desc: 'Thoughtful designs that reflect individual preferences and contemporary trends.',
      icon: <Sparkles size={26} />
    },
    {
      title: 'Clear Communication',
      desc: 'Understanding requirements and keeping customers informed at every milestone.',
      icon: <MessageCircle size={26} />
    },
    {
      title: 'Attention to Quality',
      desc: 'Careful selection of certified boards, German hardware and flawless finishing.',
      icon: <ShieldCheck size={26} />
    },
    {
      title: 'Customer Focus',
      desc: 'Keeping customer comfort, daily lifestyle and budget at the centre of every project.',
      icon: <Heart size={26} />
    }
  ];

  // 9. FAQs
  const faqList = [
    {
      q: 'Are these genuine customer reviews?',
      a: 'Yes. Our published testimonials represent genuine customer experiences and are shared with appropriate permission from our clients in Tirupati and surrounding areas.'
    },
    {
      q: 'Can I see completed interior projects?',
      a: 'Yes. Visit our Projects page to explore available interior design photographs, walkthroughs and finished site work.'
    },
    {
      q: 'Can I speak with previous customers?',
      a: 'You can contact our team to discuss available customer references, subject to their consent and convenience.'
    },
    {
      q: 'How can I share my feedback?',
      a: 'You can share your experience through our contact channels, WhatsApp support or our official Google Business Profile review link.'
    }
  ];

  return (
    <div className="testimonials-page">
      {/* =====================================================================
          1. TESTIMONIALS HERO SECTION (WITH NEW HERO IMAGE)
          ===================================================================== */}
      <section 
        className="page-hero-banner"
        style={{ backgroundImage: `url(${heroTestimonialsImg})` }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <motion.span 
            className="page-hero-eyebrow"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            CUSTOMER EXPERIENCES · REAL STORIES
          </motion.span>

          <motion.h1 
            className="page-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            Our Clients. Their Stories. Our Inspiration.
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
            Every beautiful home begins with a dream. At Our Dream Home Interiors, we are proud to be part of our customers' journeys in creating spaces they love.
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
            <span>Testimonials</span>
          </motion.div>

          <motion.div 
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <a href="#featured-testimonials" className="btn-gold-shimmer">
              <span>Explore Client Stories</span>
              <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-outline-gold-pill">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. CUSTOMER SATISFACTION INTRODUCTION
          ===================================================================== */}
      <section className="test-intro-section">
        <div className="test-intro-card">
          <span className="test-eyebrow">A HOME IS OUR GREATEST TESTIMONIAL</span>
          <h2>Relationships Built on Trust & Beauty</h2>
          <p>
            Our greatest achievement is seeing our customers enjoy the spaces we help create. Every project represents a relationship built through communication, creativity and a shared vision. From the initial 3D sketch to the final handover, our goal is to exceed expectations and create enduring comfort.
          </p>
        </div>
      </section>

      {/* =====================================================================
          3. FEATURED TESTIMONIALS (LARGE PREMIUM CARDS)
          ===================================================================== */}
      <section className="featured-reviews-section" id="featured-testimonials">
        <div className="test-section-head">
          <span className="test-eyebrow">WORDS THAT INSPIRE US</span>
          <h2 className="test-title">Hear It From Our Happy Customers</h2>
          <p className="test-subtext">
            Authentic feedback from homeowners who experienced our turnkey interior transformation.
          </p>
        </div>

        <div className="featured-reviews-grid">
          {featuredReviews.map((rev, idx) => (
            <div key={idx} className="feat-review-card">
              <div>
                <div className="feat-review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#dfaa3b" stroke="#dfaa3b" />
                  ))}
                </div>
                <p className="feat-review-quote">"{rev.quote}"</p>
              </div>

              <div className="feat-review-author">
                <img src={rev.avatar} alt={rev.name} className="feat-author-avatar" />
                <div>
                  <div className="feat-author-name">{rev.name}</div>
                  <div className="feat-author-proj">{rev.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. TESTIMONIALS BY SERVICE
          ===================================================================== */}
      <section className="service-reviews-section">
        <div className="test-section-head">
          <span className="test-eyebrow">EXPERIENCES ACROSS OUR SERVICES</span>
          <h2 className="test-title">Every Space Has a Story to Tell</h2>
          <p className="test-subtext">
            Explore customer feedback based on the type of interior service we deliver.
          </p>
        </div>

        <div className="service-reviews-grid">
          {serviceReviews.map((srv, idx) => (
            <div key={idx} className="srv-review-box">
              <img src={srv.img} alt={srv.title} className="srv-review-img" />
              <div className="srv-review-content">
                <h3 className="srv-review-title">{srv.title}</h3>
                <p className="srv-review-desc">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. BEFORE & AFTER – INTERACTIVE DRAGGABLE SLIDER
          ===================================================================== */}
      <section className="transformations-section">
        <Reveal direction="up">
          <div className="test-section-head">
            <span className="test-eyebrow light">THE POWER OF GOOD DESIGN</span>
            <h2 className="test-title light">From Empty Spaces to Beautiful Places</h2>
            <p className="test-subtext light">
              Drag the golden slider below to reveal the actual transformation from bare concrete to luxury finished living.
            </p>
          </div>
        </Reveal>

        <Reveal direction="none" duration={0.9}>
          <div style={{ maxWidth: '960px', margin: '0 auto 2rem auto' }}>
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
              afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
              beforeLabel="Before (Bare-Shell)"
              afterLabel="After (Luxury Turnkey)"
            />
          </div>
        </Reveal>

        <p className="ba-supporting-text">
          Every transformation begins with an idea. Through thoughtful planning and carefully selected design elements, we help turn ordinary spaces into beautiful environments that feel like home.
        </p>
      </section>

      {/* =====================================================================
          6. CUSTOMER VIDEO TESTIMONIALS
          ===================================================================== */}
      <section className="video-testimonials-section">
        <div className="test-section-head">
          <span className="test-eyebrow">REAL VOICES · REAL EXPERIENCES</span>
          <h2 className="test-title">Listen to Their Stories</h2>
          <p className="test-subtext">
            Sometimes, the best way to understand a customer's experience is to hear it directly from them.
          </p>
        </div>

        <div className="video-grid">
          {videoStories.map((vid, idx) => (
            <div key={idx} className="video-card" onClick={() => alert(`Playing video tour: ${vid.title}`)}>
              <img src={vid.thumb} alt={vid.title} className="video-thumb" />
              <div className="video-overlay">
                <div className="video-play-btn">
                  <Play size={20} fill="#170d06" color="#170d06" />
                </div>
              </div>
              <div className="video-info-strip">
                <div className="video-title">{vid.title}</div>
                <div className="video-client">{vid.client}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn-gold-shimmer" onClick={() => alert('More video tours are being uploaded to our YouTube channel!')}>
            <span>Watch More Customer Stories</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* =====================================================================
          7. WHAT CUSTOMERS APPRECIATE ABOUT US
          ===================================================================== */}
      <section className="appreciate-section">
        <div className="test-section-head">
          <span className="test-eyebrow">OUR PILLARS</span>
          <h2 className="test-title">Built on Trust. Inspired by Customer Satisfaction.</h2>
        </div>

        <div className="appreciate-grid">
          {appreciationCards.map((item, idx) => (
            <div key={idx} className="appreciate-card">
              <div className="appreciate-icon">{item.icon}</div>
              <h3 className="appreciate-title">{item.title}</h3>
              <p className="appreciate-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. SHARE YOUR EXPERIENCE SECTION
          ===================================================================== */}
      <section className="share-review-section">
        <div className="share-review-card">
          <span className="test-eyebrow light">YOUR FEEDBACK MATTERS</span>
          <h2 className="test-title light">Have We Created Your Dream Space?</h2>
          <p className="share-review-p">
            We would love to hear about your experience with Our Dream Home Interiors. Your feedback helps us improve and inspires future homeowners to create their ideal sanctuary.
          </p>
          <a 
            href="https://g.page/r/your-google-review-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gold-shimmer"
            onClick={(e) => {
              e.preventDefault();
              alert('Review link: You can connect your direct Google Review Link or submit feedback via WhatsApp at +91 63009 94464');
            }}
          >
            <span>Share Your Review</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* =====================================================================
          9. FREQUENTLY ASKED QUESTIONS
          ===================================================================== */}
      <section className="testimonials-faq-section">
        <div className="test-section-head">
          <span className="test-eyebrow">HAVE QUESTIONS?</span>
          <h2 className="test-title">Frequently Asked Questions</h2>
        </div>

        <div className="test-faq-wrapper">
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
          10. FINAL CTA – START YOUR OWN STORY
          ===================================================================== */}
      <section 
        className="testimonials-final-cta"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="final-cta-overlay" />
        <div className="final-cta-content">
          <h2 className="final-cta-title">Your Dream Home Could Be Our Next Beautiful Story.</h2>
          <p className="final-cta-desc">
            Let us help transform your vision into a space you will love every single day.
          </p>
          <div className="final-cta-btns">
            <Link to="/contact" className="btn-gold-shimmer">
              <span>Get a Free Quote</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline-gold-pill">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

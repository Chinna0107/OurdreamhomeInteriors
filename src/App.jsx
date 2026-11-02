import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import SplashScreen from './components/SplashScreen/SplashScreen';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import FloatingActions from './components/FloatingActions/FloatingActions';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Projects from './pages/Projects/Projects';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import Support from './pages/Support/Support';
import './App.css';

// Dedicated ScrollToTop component handling both native window and Lenis instance
function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Immediately reset window and document scroll position
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. If Lenis instance exists, force it to scroll to top immediately without lerp delay
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenisRef]);

  return null;
}

function App() {
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop lenisRef={lenisRef} />
      
      {/* Top Reading Scroll Progress Line (Gold Laser) */}
      <ScrollProgress />

      {/* Ultra-Luxury Splash Screen with Progress & Animations */}
      <SplashScreen />

      {/* Desktop Custom Gold Cursor */}
      <CustomCursor />

      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
        {/* Global Floating Call & WhatsApp Buttons */}
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;

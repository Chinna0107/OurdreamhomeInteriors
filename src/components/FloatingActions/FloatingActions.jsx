import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import './FloatingActions.css';

export default function FloatingActions() {
  const whatsappNumber = '916300994464';
  const callNumber = '+916300994464';
  const whatsappMessage = encodeURIComponent(
    'Hello Our Dream Home Interiors! I would like to enquire about your interior design services.'
  );

  return (
    <aside className="floating-actions-container" aria-label="Direct Contact Actions">
      {/* Call Button */}
      <a 
        href={`tel:${callNumber}`} 
        className="floating-action-btn floating-call-btn"
        aria-label="Call Our Dream Home Interiors"
      >
        <span className="floating-tooltip">Call Us Directly</span>
        <div className="floating-icon-wrap">
          <Phone size={22} strokeWidth={2.2} />
        </div>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-action-btn floating-wa-btn"
        aria-label="Chat with Our Dream Home Interiors on WhatsApp"
      >
        <span className="floating-tooltip">Chat on WhatsApp</span>
        <div className="floating-icon-wrap">
          <MessageCircle size={24} strokeWidth={2.2} />
        </div>
        <span className="floating-wa-badge" />
      </a>
    </aside>
  );
}


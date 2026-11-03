import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({
  beforeImage = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  afterImage = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  beforeLabel = 'Before (Bare Shell)',
  afterLabel = 'After (Luxury Finish)'
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, percent)));
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="ba-interactive-container"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* After image (Base full width) */}
      <div className="ba-image-layer">
        <img src={afterImage} alt={afterLabel} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onDragStart={(e) => e.preventDefault()} />
      </div>

      {/* Before image (Clipped to slider percentage) */}
      <div
        className="ba-before-layer"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={beforeImage} alt={beforeLabel} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onDragStart={(e) => e.preventDefault()} />
      </div>

      {/* Divider Gold Handle */}
      <div className="ba-divider-handle-line" style={{ left: `${sliderPos}%` }}>
        <div className="ba-divider-handle-knob">
          <ChevronsLeftRight size={18} />
        </div>
      </div>

      {/* Badges */}
      <span className="ba-badge-pill before">{beforeLabel}</span>
      <span className="ba-badge-pill after">{afterLabel}</span>
    </div>
  );
}


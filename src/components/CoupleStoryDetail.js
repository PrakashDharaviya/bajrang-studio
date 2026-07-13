'use client';
import { useState, useEffect, useRef } from 'react';
import couplesData from '@/data/couples.json';
import Link from 'next/link';

// Animated gallery item with intersection observer
function AnimatedItem({ children, className, onClick, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`${className} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function CoupleStoryDetail({ slug }) {
  const couple = couplesData.find(c => c.slug === slug);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [loadedImages, setLoadedImages] = useState({});

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === 'Escape') setLightbox({ open: false, index: 0 });
      if (e.key === 'ArrowRight') setLightbox(prev => ({ ...prev, index: (prev.index + 1) % couple.images.length }));
      if (e.key === 'ArrowLeft') setLightbox(prev => ({ ...prev, index: (prev.index - 1 + couple.images.length) % couple.images.length }));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.open, couple?.images?.length]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    if (lightbox.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox.open]);

  if (!couple) {
    return (
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Story Not Found</h1>
          <Link href="/couple-stories" className="btn btn-gold" style={{ marginTop: '20px' }}>Back to Stories</Link>
        </div>
      </div>
    );
  }

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      {/* Hero Banner with Couple Cover Image */}
      <div className="couple-detail-hero" style={{ backgroundImage: `url(${couple.coverImage})` }}>
        <div className="couple-detail-hero-overlay" />
        <div className="couple-detail-hero-content">
          <Link href="/couple-stories" className="couple-detail-back-link">
            ← Back to Stories
          </Link>
          <h4 className="couple-detail-subtitle">Wedding Memories</h4>
          <h1 className="couple-detail-title">{couple.names}</h1>
          <div className="couple-detail-meta">
            <span className="couple-detail-meta-item">📍 {couple.location}</span>
            <span className="couple-detail-meta-divider">•</span>
            <span className="couple-detail-meta-item">📅 {new Date(couple.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="couple-detail-meta-divider">•</span>
            <span className="couple-detail-meta-item">📸 {couple.images.length} Photos</span>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <section className="couple-detail-section">
        <div className="couple-detail-container">
          <div className="couple-detail-section-header">
            <h4 className="couple-detail-section-accent">Capturing The Moments</h4>
            <p className="couple-detail-section-desc">{couple.description}</p>
          </div>

          {/* Masonry Photo Grid */}
          <div className="couple-detail-gallery">
            {couple.images.map((img, i) => (
              <AnimatedItem
                key={i}
                className="couple-detail-gallery-item reveal"
                onClick={() => setLightbox({ open: true, index: i })}
                index={i}
              >
                <div className="couple-detail-img-wrapper">
                  {!loadedImages[i] && (
                    <div className="couple-detail-img-skeleton">
                      <div className="couple-detail-img-skeleton-shimmer" />
                    </div>
                  )}
                  <img
                    src={img}
                    alt={`${couple.names} - Photo ${i + 1}`}
                    loading="lazy"
                    ref={(el) => {
                      if (el && el.complete && !loadedImages[i]) {
                        handleImageLoad(i);
                      }
                    }}
                    onLoad={() => handleImageLoad(i)}
                    style={{ opacity: loadedImages[i] ? 1 : 0 }}
                  />
                  <div className="couple-detail-img-overlay">
                    <div className="couple-detail-zoom-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="couple-detail-bottom-nav">
            <Link href="/couple-stories" className="btn btn-outline">
              ← Back to All Stories
            </Link>
            <Link href="/contact" className="btn btn-gold">
              Book Your Shoot ✨
            </Link>
          </div>
        </div>
      </section>

      {/* Full-screen Lightbox */}
      <div className={`couple-detail-lightbox ${lightbox.open ? 'open' : ''}`} onClick={() => setLightbox({ open: false, index: 0 })}>
        <button className="couple-detail-lightbox-close" onClick={() => setLightbox({ open: false, index: 0 })}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <button
          className="couple-detail-lightbox-nav couple-detail-lightbox-prev"
          onClick={(e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index - 1 + couple.images.length) % couple.images.length })); }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>

        {lightbox.open && couple.images[lightbox.index] && (
          <img
            className="couple-detail-lightbox-image"
            src={couple.images[lightbox.index]}
            alt={`${couple.names} - Photo ${lightbox.index + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        <button
          className="couple-detail-lightbox-nav couple-detail-lightbox-next"
          onClick={(e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index + 1) % couple.images.length })); }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>

        {lightbox.open && (
          <div className="couple-detail-lightbox-counter" onClick={(e) => e.stopPropagation()}>
            {lightbox.index + 1} / {couple.images.length}
          </div>
        )}
      </div>
    </>
  );
}

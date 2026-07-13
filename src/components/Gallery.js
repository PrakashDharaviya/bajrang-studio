'use client';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import galleryData from '@/data/gallery.json';
import siteConfig from '@/data/siteConfig.json';
import DigitalCard from '@/components/DigitalCard';

// Hydration-safe animated item component using React state
function AnimatedGalleryItem({ children, className, onClick, index }) {
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
      style={{ transitionDelay: `${index * 0.05}s` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function GalleryContent({ limit, showFilters = true }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams ? searchParams.get('category') : null;
  const [filter, setFilter] = useState(categoryParam || 'all');

  useEffect(() => {
    if (categoryParam) {
      const timer = setTimeout(() => {
        setFilter(categoryParam);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [categoryParam]);

  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const ref = useRef(null);

  const allCategories = ['all', ...new Set(galleryData.map(img => img.category))];
  const filtered = filter === 'all' ? galleryData : galleryData.filter(img => img.category === filter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === 'Escape') setLightbox({ open: false, index: 0 });
      if (e.key === 'ArrowRight') setLightbox(prev => ({ ...prev, index: (prev.index + 1) % displayed.length }));
      if (e.key === 'ArrowLeft') setLightbox(prev => ({ ...prev, index: (prev.index - 1 + displayed.length) % displayed.length }));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.open, displayed.length]);

  return (
    <>
      <div ref={ref}>
        {showFilters && (
          <div className="gallery-filters">
            {allCategories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All' : cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        )}
        <div className="gallery-grid">
          {displayed.map((img, i) => (
            <AnimatedGalleryItem
              key={img.src}
              className="gallery-item reveal"
              onClick={() => setLightbox({ open: true, index: i })}
              index={i}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <div className="gallery-zoom-icon">⊕</div>
              </div>
            </AnimatedGalleryItem>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${lightbox.open ? 'open' : ''}`} onClick={() => setLightbox({ open: false, index: 0 })}>
        <button className="lightbox-close" onClick={() => setLightbox({ open: false, index: 0 })}>✕</button>
        <button
          className="lightbox-nav lightbox-prev"
          onClick={(e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index - 1 + displayed.length) % displayed.length })); }}
        >‹</button>
        {lightbox.open && displayed[lightbox.index] && (
          <img
            className="lightbox-image"
            src={displayed[lightbox.index].src}
            alt={displayed[lightbox.index].alt}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <button
          className="lightbox-nav lightbox-next"
          onClick={(e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index + 1) % displayed.length })); }}
        >›</button>

        {lightbox.open && (
          <div className="lightbox-card-wrapper" onClick={(e) => e.stopPropagation()}>
            <DigitalCard />
          </div>
        )}
      </div>
    </>
  );
}

export default function Gallery(props) {
  return (
    <Suspense fallback={<div className="preloader-spinner" style={{ margin: '40px auto' }}></div>}>
      <GalleryContent {...props} />
    </Suspense>
  );
}

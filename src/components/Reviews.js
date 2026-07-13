'use client';
import { useRef, useEffect } from 'react';
import reviewsData from '@/data/reviews.json';
import siteConfig from '@/data/siteConfig.json';

export default function Reviews() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let isPaused = false;
    
    carousel.style.scrollBehavior = 'smooth';

    const intervalId = setInterval(() => {
      if (!isPaused) {
        const card = carousel.querySelector('.review-card');
        if (card) {
           const cardWidth = card.offsetWidth + 24; // Card width + gap
           if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 50) {
             carousel.style.scrollBehavior = 'auto';
             carousel.scrollLeft = 0;
             carousel.style.scrollBehavior = 'smooth';
           } else {
             carousel.scrollLeft += cardWidth;
           }
        }
      }
    }, 5000);

    let timeoutId = null;

    const pause = () => { 
      isPaused = true; 
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };
    const resume = () => { 
      isPaused = false; 
    };
    const delayResume = () => { 
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => { isPaused = false; }, 3000); 
    };

    carousel.addEventListener('mouseenter', pause);
    carousel.addEventListener('mouseleave', resume);
    carousel.addEventListener('touchstart', pause);
    carousel.addEventListener('touchend', delayResume);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      carousel.removeEventListener('mouseenter', pause);
      carousel.removeEventListener('mouseleave', resume);
      carousel.removeEventListener('touchstart', pause);
      carousel.removeEventListener('touchend', delayResume);
    };
  }, []);

  const stars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

  return (
    <section className="section" id="reviews" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-wide">
        <div className="section-title">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-heading">{siteConfig.googleReview.totalReviews} Google Reviews</h2>
          <div className="section-divider" />
        </div>
        <div className="reviews-header">
          <div className="reviews-rating">
            <span className="reviews-score">{siteConfig.googleReview.rating}</span>
            <span className="reviews-stars">{stars(5)}</span>
          </div>
          <p className="reviews-count">Based on {siteConfig.googleReview.totalReviews} reviews on Google</p>
        </div>
        <div className="reviews-carousel" ref={carouselRef}>
          {[...reviewsData, ...reviewsData].map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.name.charAt(0)}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
              <div className="review-stars">{stars(review.rating)}</div>
              <p className="review-text">&quot;{review.text}&quot;</p>
              <div className="review-google-icon">Google Review ✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

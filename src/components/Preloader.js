'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Wait for everything to load, or at least a short timeout for the animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    
    const handleLoad = () => {
      setTimeout(() => setLoaded(true), 500);
    };
    
    if (document.readyState === 'complete') {
      setTimeout(() => setLoaded(true), 500);
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">Bajrang Studio</div>
        <div className="preloader-spinner"></div>
      </div>
    </div>
  );
}

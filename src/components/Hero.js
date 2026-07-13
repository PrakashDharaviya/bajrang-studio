'use client';
import { useState, useEffect, useRef } from 'react';

const heroImages = [
  '/images/hero/slide1.jpg',
  '/images/hero/slide2.jpg',
  '/images/hero/slide3.jpg',
  '/images/hero/slide4.jpg',
  '/images/hero/slide5.webp',
  '/images/hero/slide6.webp',
  '/images/hero/slide7.webp',
];

function GoldParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 3 + 1;
        this.speedY = -(Math.random() * 1.5 + 0.5);
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        if (this.life > this.maxLife || this.y < -10) this.reset();
      }
      draw() {
        const progress = this.life / this.maxLife;
        const alpha = progress < 0.1 ? progress * 10 : progress > 0.9 ? (1 - progress) * 10 : 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 83, ${this.opacity * alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" />;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-slider">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <GoldParticles />
      <div className="hero-content">
        <div className="hero-badge">✦ Since 2002 ✦</div>
        <h1 className="hero-title">
          Capturing <span className="gold">Moments</span>,<br />
          Creating <span className="gold">Memories</span>
        </h1>
        <p className="hero-description">
          Bringing Dreams to Life: Ensuring Your Success, One Moment at a Time.
          Best Photography & Videography in Jamnagar.
        </p>
        <div className="hero-buttons">
          <a href="/gallery" className="btn btn-gold">View Our Work ✦</a>
          <a href="/contact" className="btn btn-outline">Book Now →</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-icon">
          <div className="hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

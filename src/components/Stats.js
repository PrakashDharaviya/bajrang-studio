'use client';
import { useState, useEffect, useRef } from 'react';
import statsData from '@/data/stats.json';

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    let timerId = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          timerId = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              if (timerId) clearInterval(timerId);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timerId) clearInterval(timerId);
    };
  }, [target]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count.toLocaleString()}{suffix}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <div key={i}>
              <Counter target={stat.count} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

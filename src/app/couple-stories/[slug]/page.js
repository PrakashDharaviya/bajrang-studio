import couplesData from '@/data/couples.json';
import Link from 'next/link';

export function generateStaticParams() {
  return couplesData.map((couple) => ({
    slug: couple.slug,
  }));
}

export function generateMetadata({ params }) {
  const couple = couplesData.find(c => c.slug === params.slug);
  if (!couple) return { title: 'Story Not Found' };
  
  return {
    title: `${couple.names} - Pre Wedding`,
    description: couple.description,
  };
}

export default function CoupleStorySingle({ params }) {
  const couple = couplesData.find(c => c.slug === params.slug);
  
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

  return (
    <>
      <div className="page-hero" style={{ backgroundImage: `url(${couple.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.9) 100%)'}} />
        <div className="page-hero-content reveal" style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>{couple.names}</h1>
          <p style={{ color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
            {couple.date} • {couple.location}
          </p>
        </div>
      </div>
      
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '60px' }}>
            {couple.description}
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {couple.images.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`${couple.names} photo ${i+1}`} 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} 
                loading="lazy"
              />
            ))}
          </div>
          
          <div style={{ marginTop: '60px' }}>
            <Link href="/couple-stories" className="btn btn-outline">← Back to All Stories</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import About from '@/components/About';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Bajrang Studio and our passion for capturing beautiful moments since 2002.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content reveal">
          <h1>Our Story</h1>
          <p>Passionate about preserving your most precious memories.</p>
        </div>
      </div>
      
      <div style={{ paddingTop: '60px' }}>
        <About />
      </div>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title">
            <p className="section-subtitle">Our Promise</p>
            <h2 className="section-heading">Why Choose Us?</h2>
            <div className="section-divider" />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '60px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem' }}>20+ Years Experience</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Since 2002, we have photographed hundreds of weddings, giving us the expertise to handle any situation and lighting condition effortlessly.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem' }}>Premium Equipment</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We use the latest high-end cameras, drones, and lighting equipment to ensure your photos and videos are of the highest cinematic quality.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem' }}>Creative Vision</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We don&apos;t just take pictures; we tell stories. Our creative approach ensures your wedding album is unique, emotional, and timeless.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

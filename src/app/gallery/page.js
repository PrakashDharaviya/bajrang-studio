import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Gallery',
  description: 'View our stunning photography portfolio including wedding, pre-wedding, bridal, and kids photography.',
};

export default function GalleryPage() {
  return (
    <>
      <div 
        className="page-hero page-hero-banner" 
        style={{ 
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          minHeight: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          padding: '120px 24px 40px 24px',
          position: 'relative'
        }}
      >
        <div className="page-hero-content reveal" style={{ textAlign: 'center', margin: '0', zIndex: 2 }}>
          <h1 style={{ color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 5vw, 3rem)' }}>
            Our Portfolio
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '520px', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
            A collection of our finest moments captured through the lens.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container-wide">
          <Gallery />
        </div>
      </section>
    </>
  );
}

import Pricing from '@/components/Pricing';
import Categories from '@/components/Categories';

export const metadata = {
  title: 'Services & Pricing',
  description: 'Explore our photography and videography services and packages.',
};

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content reveal">
          <h1>Services & Pricing</h1>
          <p>Premium photography services tailored to your needs.</p>
        </div>
      </div>
      
      <div style={{ paddingTop: '60px' }}>
        <Categories />
      </div>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title">
            <p className="section-subtitle">Packages</p>
            <h2 className="section-heading">Wedding Packages</h2>
            <div className="section-divider" />
          </div>
          <Pricing />
        </div>
      </section>
    </>
  );
}

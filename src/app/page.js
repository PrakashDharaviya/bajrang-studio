import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Stats from '@/components/Stats';
import Gallery from '@/components/Gallery';
import Films from '@/components/Films';
import CoupleStories from '@/components/CoupleStories';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Stats />
      
      {/* Featured Gallery */}
      <section className="section">
        <div className="container-wide">
          <div className="section-title">
            <p className="section-subtitle">Portfolio</p>
            <h2 className="section-heading">Featured Works</h2>
            <div className="section-divider" />
          </div>
          <Gallery limit={6} showFilters={false} />
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/gallery" className="btn btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Featured Films */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-wide">
          <div className="section-title">
            <p className="section-subtitle">Cinematography</p>
            <h2 className="section-heading">Pre-Wedding Films</h2>
            <div className="section-divider" />
          </div>
          <Films limit={3} />
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/films" className="btn btn-outline">Watch All Films</Link>
          </div>
        </div>
      </section>

      {/* Couple Stories */}
      <section className="section">
        <div className="container-wide">
          <div className="section-title">
            <p className="section-subtitle">Love Stories</p>
            <h2 className="section-heading">Happy Couples</h2>
            <div className="section-divider" />
          </div>
          <CoupleStories limit={4} />
        </div>
      </section>

      {/* Banner */}
      <section className="banner-section">
        <div className="container">
          <h2 className="banner-text">&quot;Photography takes an instant out of time, altering life by holding it still.&quot;</h2>
        </div>
      </section>

      <About />
      <Reviews />

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <p className="section-subtitle">Get In Touch</p>
            <h2 className="section-heading">Let&apos;s Create Magic Together</h2>
            <div className="section-divider" />
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

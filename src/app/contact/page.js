import ContactForm from '@/components/ContactForm';
import siteConfig from '@/data/siteConfig.json';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Bajrang Studio to book your photography session in Jamnagar.',
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content reveal">
          <h1>Contact Us</h1>
          <p>Let&apos;s discuss how we can make your special day unforgettable.</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div className="contact-info-top" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px', 
            marginBottom: '80px' 
          }}>
            
            <div className="contact-card reveal" style={{ 
              background: 'var(--bg-card)', 
              padding: '40px 20px', 
              textAlign: 'center', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--gold-glow)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✉️</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '12px' }}>Email Us</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </div>
            
            <div className="contact-card reveal" style={{ 
              background: 'var(--bg-card)', 
              padding: '40px 20px', 
              textAlign: 'center', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--gold-glow)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📍</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '12px' }}>Address</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{siteConfig.address}</p>
            </div>
            
            <div className="contact-card reveal" style={{ 
              background: 'var(--bg-card)', 
              padding: '40px 20px', 
              textAlign: 'center', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--gold-glow)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📞</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '12px' }}>Call Now</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                <a href={`tel:${siteConfig.phone[0].replace(/\s/g, '')}`}>{siteConfig.phone[0]}</a><br />
                <a href={`tel:${siteConfig.phone[1].replace(/\s/g, '')}`}>{siteConfig.phone[1]}</a>
              </p>
            </div>
            
          </div>
          
          <div className="section-title text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-accent)', textTransform: 'capitalize', fontSize: '2.5rem' }}>Have Any Query?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '16px auto 0' }}>
              Need more information? Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="contact-form-wrapper reveal" style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            background: 'var(--bg-card)', 
            padding: '40px', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--border-subtle)' 
          }}>
            <ContactForm />
          </div>

        </div>
        
        <div className="map-container reveal" style={{ marginTop: '80px' }}>
          <iframe 
            src={siteConfig.googleMapsEmbed}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: '100%', height: '400px', border: 'none', filter: 'grayscale(0.3) brightness(0.9)' }}
          ></iframe>
        </div>
      </section>
    </>
  );
}

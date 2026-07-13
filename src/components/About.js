import siteConfig from '@/data/siteConfig.json';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal-left">
            <div className="about-image-frame" />
            <img 
              src="/images/about/founder.png" 
              alt="Girdhar Parmar - Founder" 
              style={{ objectPosition: 'top' }}
            />
          </div>
          <div className="about-text reveal-right">
            <h3>About The Founder</h3>
            <h2>Capturing Your Beautiful Moments Since 2002</h2>
            <p>
              Founded by <strong>{siteConfig.owner}</strong>, Bajrang Studio has been a pioneer in 
              wedding photography and videography in Jamnagar for over two decades.
            </p>
            <p>
              We believe that every love story is unique and deserves to be told in the most 
              beautiful way possible. Our team of passionate photographers and cinematographers 
              work tirelessly to capture the raw emotions, fleeting glances, and joyous celebrations 
              that make your special day truly magical.
            </p>
            <p>
              With state-of-the-art equipment and a keen eye for detail, we blend traditional 
              aesthetics with contemporary styles to create timeless memories that you will 
              cherish forever.
            </p>
            <div className="about-signature">{siteConfig.owner}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

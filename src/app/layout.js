import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Preloader from '@/components/Preloader';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: {
    default: 'Bajrang Studio — Best Wedding Photography in Jamnagar',
    template: '%s | Bajrang Studio'
  },
  description: 'Bajrang Studio: Making Every Moment of Your Wedding Magical. Best Photography & Videography in Jamnagar since 2002. Wedding, Pre-Wedding, Bridal, Events & Kids Photography.',
  keywords: ['wedding photography jamnagar', 'bajrang studio', 'best photographer jamnagar', 'pre wedding shoot', 'bridal photography', 'videography jamnagar', 'wedding videography'],
  authors: [{ name: 'Bajrang Studio' }],
  creator: 'Bajrang Studio',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bajrangstudio.com',
    siteName: 'Bajrang Studio',
    title: 'Bajrang Studio — Best Wedding Photography in Jamnagar',
    description: 'Capturing Moments, Creating Memories. Best Photography & Videography in Jamnagar since 2002.',
    images: [{ url: 'https://bajrangstudio.com/wp-content/uploads/2023/09/01-1-scaled.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bajrang Studio — Best Wedding Photography in Jamnagar',
    description: 'Capturing Moments, Creating Memories since 2002.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Photographer"],
    "name": "Bajrang Studio",
    "description": "Best Wedding Photography & Videography in Jamnagar since 2002",
    "url": "https://bajrangstudio.com",
    "telephone": "+919824840032",
    "email": "bajrangstudio.jam@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No.14, Madhusudan Complex, nr. Jakat Naka Road",
      "addressLocality": "Jamnagar",
      "addressRegion": "Gujarat",
      "postalCode": "361001",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    },
    "sameAs": [
      "https://www.facebook.com/people/Bajrang-Studio-Jamnagar/100090185957533/",
      "https://www.instagram.com/bajrangstudiojamnagar/",
      "https://www.youtube.com/@BAJRANGSTUDIOJAMNAGAR"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

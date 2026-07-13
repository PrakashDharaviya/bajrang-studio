import CoupleStories from '@/components/CoupleStories';

export const metadata = {
  title: 'Couple Stories',
  description: 'Read the beautiful love stories of the couples we have photographed.',
};

export default function CoupleStoriesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content reveal">
          <h1>Love Stories</h1>
          <p>Every couple has a unique story. Here are some we&apos;ve had the honor to capture.</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container-wide">
          <CoupleStories />
        </div>
      </section>
    </>
  );
}

import Films from '@/components/Films';

export const metadata = {
  title: 'Pre-Wedding Films',
  description: 'Watch our cinematic pre-wedding and wedding films capturing beautiful love stories.',
};

export default function FilmsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content reveal">
          <h1>Cinematography</h1>
          <p>Cinematic films that tell your unique love story.</p>
        </div>
      </div>
      <section className="section">
        <div className="container-wide">
          <Films />
        </div>
      </section>
    </>
  );
}

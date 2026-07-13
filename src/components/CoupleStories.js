import Link from 'next/link';
import couplesData from '@/data/couples.json';

export default function CoupleStories({ limit }) {
  const displayed = limit ? couplesData.slice(0, limit) : couplesData;

  return (
    <div className="couples-grid">
      {displayed.map((couple) => (
        <Link href={`/couple-stories/${couple.slug}`} key={couple.slug} className="couple-card">
          <img src={couple.coverImage} alt={couple.names} loading="lazy" />
          <div className="couple-card-content">
            <h3 className="couple-card-names">{couple.names}</h3>
            <p className="couple-card-location">📍 {couple.location}</p>
            <p className="couple-card-photos">📸 {couple.images.length} Photos</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

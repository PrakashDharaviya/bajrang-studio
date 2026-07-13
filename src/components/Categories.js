import Link from 'next/link';
import categories from '@/data/categories.json';

export default function Categories() {
  return (
    <section className="section" id="categories">
      <div className="container-wide">
        <div className="section-title">
          <p className="section-subtitle">Our Expertise</p>
          <h2 className="section-heading">Photography Categories</h2>
          <div className="section-divider" />
        </div>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <Link 
              href={cat.link} 
              key={cat.id} 
              className="category-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img src={cat.image} alt={cat.title} loading="lazy" />
              <div className="category-card-overlay">
                <h3 className="category-card-title">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

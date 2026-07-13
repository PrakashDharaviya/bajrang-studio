import pricingData from '@/data/pricing.json';

export default function Pricing() {
  return (
    <div className="pricing-grid">
      {pricingData.map((plan) => (
        <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
          {plan.popular && <div className="pricing-badge">Most Popular</div>}
          <h3 className="pricing-name">{plan.name}</h3>
          <p className="pricing-desc">{plan.description}</p>
          <div className="pricing-price">{plan.price}</div>
          <ul className="pricing-features">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <a
            href={`https://wa.me/919824840032?text=Hi! I'm interested in the ${plan.name} package`}
            className="btn btn-gold"
            style={{ width: '100%', justifyContent: 'center' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book {plan.name} ✦
          </a>
        </div>
      ))}
    </div>
  );
}

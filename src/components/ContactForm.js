'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello Bajrang Studio!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0AAddress: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919824840032?text=${msg}`, '_blank');
    setStatus('Message sent via WhatsApp!');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} style={{ padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <input
          style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }}
          type="text" required placeholder="Your Name"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }}
          type="email" required placeholder="Your Email"
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <input
          style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }}
          type="text" required placeholder="Address"
          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
        />
        <select 
          style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-secondary)', outline: 'none', appearance: 'none' }}
          value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
        >
          <option value="">—Please choose an option—</option>
          <option value="Wedding Photography">Wedding Photography</option>
          <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
          <option value="Bridal Photography">Bridal Photography</option>
          <option value="Kids Photography">Kids Photography</option>
          <option value="Maternity Shoot">Maternity Shoot</option>
          <option value="Event Coverage">Event Coverage</option>
        </select>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <textarea
          style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none', minHeight: '120px', resize: 'vertical' }}
          required placeholder="Message..."
          value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-primary)', padding: '15px 20px', border: '1px solid var(--border-subtle)', maxWidth: '300px', marginBottom: '30px' }}>
        <input type="checkbox" id="robot" required style={{ width: '24px', height: '24px', marginRight: '12px' }} />
        <label htmlFor="robot" style={{ color: 'var(--text-secondary)' }}>I&apos;m not a robot</label>
      </div>
      <button 
        type="submit" 
        style={{ width: '100%', padding: '18px', background: '#D2A89F', color: '#ffffff', border: 'none', fontSize: '1rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.3s' }}
        onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
        onMouseOut={e => e.currentTarget.style.opacity = '1'}
      >
        GET IN TOUCH
      </button>
      {status && <p style={{ color: 'var(--gold)', marginTop: '16px', textAlign: 'center' }}>{status}</p>}
    </form>
  );
}

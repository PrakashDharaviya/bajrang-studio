'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/films', label: 'Films' },
    { href: '/couple-stories', label: 'Couple Stories' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
  ];

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const timer = setTimeout(() => {
      setTheme(savedTheme);
    }, 0);
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    }
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">Bajrang Studio</Link>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme" style={{
              background: 'transparent', border: '1px solid var(--border-gold)', color: 'var(--gold)',
              borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginLeft: '12px'
            }}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
          <li>
            <Link href="/contact" className="navbar-cta" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={toggleTheme} className="theme-toggle-btn mobile-only" aria-label="Toggle theme" style={{
            background: 'transparent', border: '1px solid var(--border-gold)', color: 'var(--gold)',
            borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer',
            alignItems: 'center', justifyContent: 'center', fontSize: '1rem', display: 'none'
          }}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {menuOpen && <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',background:'rgba(0,0,0,0.5)',zIndex:999}} onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}

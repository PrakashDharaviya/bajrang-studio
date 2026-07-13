'use client';
import { useState } from 'react';
import siteConfig from '@/data/siteConfig.json';

export default function DigitalCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = (e) => {
    e.stopPropagation();
    window.open(`tel:${siteConfig.phone[0].replace(/\s/g, '')}`, '_self');
  };

  const handleWebsite = (e) => {
    e.stopPropagation();
    window.open('/', '_blank');
  };

  const handleSocial = (platform, e) => {
    e.stopPropagation();
    let url = '#';
    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/919824840032?text=Hello%20Bajrang%20Studio!`;
        break;
      case 'facebook':
        url = 'https://www.facebook.com/people/Bajrang-Studio-Jamnagar/100090185957533/';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/bajrangstudiojamnagar/';
        break;
      case 'youtube':
        url = 'https://www.youtube.com/@BAJRANGSTUDIOJAMNAGAR';
        break;
      case 'maps':
        url = 'https://maps.app.goo.gl/3JzNzHux82vPq4gJ8';
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Small Floating Advertisement Card */}
      <div 
        className="adv-small-card reveal" 
        onClick={() => setIsOpen(true)}
      >
        <div className="adv-small-left">
          <div className="adv-logo-circle">
            <svg viewBox="0 0 100 100" className="adv-logo-svg">
              <circle cx="50" cy="45" r="30" fill="#f0c674" />
              {/* Photographer Silhouette */}
              <path d="M42 75 L45 55 L42 45 L48 35 L52 35 L58 45 L55 55 L58 75 Z" fill="#333" />
              <circle cx="50" cy="30" r="6" fill="#333" />
              {/* Camera */}
              <path d="M56 42 L64 42 L64 48 L56 48 Z" fill="#111" />
              <circle cx="60" cy="45" r="2" fill="#fff" />
              {/* Tripod */}
              <path d="M45 55 L35 85 M55 55 L65 85 M50 55 L50 85" stroke="#333" strokeWidth="2" />
            </svg>
          </div>
          <div className="adv-logo-text">Photography</div>
        </div>
        <div className="adv-small-right">
          <h4>Bajrang Studio</h4>
          <span className="adv-view-link">View Portfolio ➔</span>
        </div>
      </div>

      {/* Expanded Digital Business Card Modal */}
      {isOpen && (
        <div className="adv-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="adv-card-expanded" onClick={(e) => e.stopPropagation()}>
            <button className="adv-close-btn" onClick={() => setIsOpen(false)}>✕</button>
            
            {/* Logo area */}
            <div className="adv-exp-header">
              <div className="adv-logo-container">
                <svg viewBox="0 0 100 100" className="adv-logo-svg-large">
                  <circle cx="50" cy="42" r="28" fill="#f0c674" />
                  <path d="M42 70 L45 52 L42 42 L48 32 L52 32 L58 42 L55 52 L58 70 Z" fill="#333" />
                  <circle cx="50" cy="27" r="5" fill="#333" />
                  <path d="M55 38 L62 38 L62 44 L55 44 Z" fill="#111" />
                  <circle cx="58.5" cy="41" r="1.5" fill="#fff" />
                  <path d="M45 52 L35 80 M55 52 L65 80 M50 52 L50 80" stroke="#333" strokeWidth="2" />
                </svg>
                <div className="adv-logo-subtext">Bajrang Studio</div>
              </div>
              
              <h2 className="adv-title">Bajrang Studio</h2>
              
              {/* Call & Link Actions */}
              <div className="adv-actions">
                <button className="adv-action-btn" onClick={handleCall} title="Call Now">
                  <svg viewBox="0 0 24 24" className="adv-btn-icon">
                    <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content box */}
            <div className="adv-exp-content">
              <h4 className="adv-section-title">Services available:</h4>
              <div className="adv-tags-container">
                <span className="adv-tag">Wedding Shoot</span>
                <span className="adv-tag">Pre Wedding Shoot</span>
                <span className="adv-tag">Candid Shoot</span>
                <span className="adv-tag">Baby Shoot</span>
                <span className="adv-tag">Maternity Shoot</span>
                <span className="adv-tag">Event Shoot</span>
              </div>
              
              <p className="adv-promo-text">All Type Of Photography & Videography</p>
            </div>

            {/* Social Icons Footer */}
            <div className="adv-social-footer">
              <button className="adv-social-btn whatsapp" onClick={(e) => handleSocial('whatsapp', e)} title="WhatsApp">
                <svg viewBox="0 0 24 24" className="adv-social-icon">
                  <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.4-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.219 8.219 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.9 3.93c-.22 0-.47.08-.68.3-.2.22-.79.77-.79 1.88s.8 2.19.92 2.34c.11.15 1.58 2.41 3.82 3.38.53.23.95.37 1.28.47.54.17 1.03.15 1.41.09.43-.06 1.32-.54 1.51-1.04.19-.5.19-.93.13-1.02-.05-.09-.2-.15-.43-.27-.22-.11-1.32-.65-1.52-.72-.2-.07-.35-.11-.5.11-.15.22-.58.72-.71.87-.13.15-.22-.26.17-.49.06a6.22 6.22 0 0 1-1.83-1.13c-.6-.53-1.01-1.18-1.13-1.38-.12-.22-.01-.34.1-.45.1-.1.22-.26.33-.38.11-.13.15-.22.22-.37.07-.15.03-.28-.02-.38-.05-.11-.5-1.21-.69-1.65-.19-.46-.39-.39-.53-.4h-.45z" />
                </svg>
              </button>
              <button className="adv-social-btn facebook" onClick={(e) => handleSocial('facebook', e)} title="Facebook">
                <svg viewBox="0 0 24 24" className="adv-social-icon">
                  <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.95 14.22 5.95C15.31 5.95 16.45 6.15 16.45 6.15V8.62H15.19C13.94 8.62 13.55 9.4 13.55 10.19V12.06H16.33L15.89 14.96H13.55V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </button>
              <button className="adv-social-btn instagram" onClick={(e) => handleSocial('instagram', e)} title="Instagram">
                <svg viewBox="0 0 24 24" className="adv-social-icon">
                  <path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4A3.6,3.6 0 0,0 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6A3.6,3.6 0 0,0 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </button>
              <button className="adv-social-btn youtube" onClick={(e) => handleSocial('youtube', e)} title="YouTube">
                <svg viewBox="0 0 24 24" className="adv-social-icon">
                  <path fill="currentColor" d="M10,15L15.19,11.8L10,8.6V15M21.56,7.11C21.72,7.69 21.8,8.4 21.84,9.25C21.87,10.1 21.89,10.96 21.89,11.8C21.89,12.64 21.87,13.5 21.84,14.35C21.8,15.2 21.72,15.91 21.56,16.49C21.35,17.29 20.71,17.93 19.91,18.14C19.33,18.3 18.62,18.38 17.77,18.42C16.92,18.46 16.06,18.48 15.22,18.48C14.38,18.48 13.52,18.46 12.67,18.42C11.82,18.38 11.11,18.3 10.53,18.14C9.73,17.93 9.09,17.29 8.88,18.14C8.88,18.14 8.88,18.14 8.88,18.14C8.72,17.56 8.64,16.85 8.6,16C8.57,15.15 8.55,14.29 8.55,13.45C8.55,12.61 8.57,11.75 8.6,10.9C8.64,10.05 8.72,9.34 8.88,8.76C9.09,7.96 9.73,7.32 10.53,7.11C11.11,6.95 11.82,6.87 12.67,6.83C13.52,6.79 14.38,6.77 15.22,6.77C16.06,6.77 16.92,6.79 17.77,6.83C18.62,6.87 19.33,6.95 19.91,7.11C20.71,7.32 21.35,7.96 21.56,7.11Z" />
                </svg>
              </button>
              <button className="adv-social-btn maps" onClick={(e) => handleSocial('maps', e)} title="Google Maps">
                <svg viewBox="0 0 24 24" className="adv-social-icon">
                  <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

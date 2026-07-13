'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeNewElements = () => {
      const elements = document.querySelectorAll(
        '.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-up:not(.visible), .reveal-down:not(.visible)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    let mutationObserver = null;
    let timer = setTimeout(() => {
      observeNewElements();

      // Re-observe when DOM updates (dynamic items)
      mutationObserver = new MutationObserver(() => {
        observeNewElements();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

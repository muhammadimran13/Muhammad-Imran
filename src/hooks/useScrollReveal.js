import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all elements with .reveal
 * and adds .visible when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger delay for sibling reveals
            entry.target.style.transitionDelay = `${(i % 5) * 0.1}s`;
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

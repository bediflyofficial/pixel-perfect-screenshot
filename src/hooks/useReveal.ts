import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealEls = el.classList.contains('reveal')
      ? [el, ...el.querySelectorAll<HTMLElement>('.reveal')]
      : Array.from(el.querySelectorAll<HTMLElement>('.reveal'));

    if (revealEls.length === 0) return;

    if (typeof IntersectionObserver === 'undefined') {
      revealEls.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    revealEls.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return ref;
}

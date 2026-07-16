'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Watches content sections and reveals them (adds `.reveal-in`) as they scroll
// into view. Re-scans on client-side route changes. The hidden state itself is
// applied via CSS (html.reveal-js), so this only ever *shows* things — if it
// never runs, content stays visible.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('main section, [data-reveal]')
    );

    if (reduce || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('reveal-in'));
      return;
    }

    let firstBatch = true;
    const io = new IntersectionObserver(
      (entries, obs) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement);
        if (!visible.length) return;

        if (firstBatch) {
          visible.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
        }
        visible.forEach((el, i) => {
          if (firstBatch) {
            el.style.transitionDelay = `${i * 0.13}s`;
            window.setTimeout(() => {
              el.style.transitionDelay = '';
            }, 1400);
          }
          el.classList.add('reveal-in');
          obs.unobserve(el);
        });
        firstBatch = false;
      },
      { root: null, rootMargin: '0px 0px -15% 0px', threshold: 0 }
    );

    targets.forEach((el) => {
      if (!el.classList.contains('reveal-in')) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}

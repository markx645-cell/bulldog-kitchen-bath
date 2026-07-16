'use client';

import { useCallback, useEffect, useState } from 'react';

type Step = { n: string; id: string; title: string };

// Sticky step nav with scroll-spy, mirroring the production page: the active
// step highlights as you scroll, clicking scrolls with the sticky-stack offset
// accounted for, and an initial #hash is honoured on load.
export default function StepNav({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState<string>(steps[0].id);

  const getOffset = useCallback(() => {
    if (typeof window === 'undefined') return 180;
    const header = document.querySelector('header');
    const stepNav = document.getElementById('step-nav');
    return (
      (header?.getBoundingClientRect().height ?? 100) +
      (stepNav?.getBoundingClientRect().height ?? 56) +
      8
    );
  }, []);

  const scrollToStep = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - getOffset();
      window.scrollTo({ top, behavior: 'smooth' });
      setActive(id);
      if (history.replaceState) history.replaceState(null, '', `#${id}`);
    },
    [getOffset],
  );

  useEffect(() => {
    const offset = getOffset();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: `-${offset + 1}px 0px -55% 0px`, threshold: [0, 0.25, 0.5, 1] },
    );
    steps.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      if (steps.some((s) => s.id === id)) setTimeout(() => scrollToStep(id), 50);
    }

    return () => observer.disconnect();
  }, [getOffset, scrollToStep, steps]);

  return (
    <section
      id="step-nav"
      className="sticky top-[88px] z-30 border-y border-ink/10 bg-bone/90 backdrop-blur-xl md:top-[96px] lg:top-[104px]"
    >
      <div className="container-x flex flex-wrap justify-center gap-x-8 gap-y-2 py-4 font-sans text-xs uppercase tracking-[0.25em]">
        {steps.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToStep(s.id);
              }}
              aria-current={isActive ? 'true' : undefined}
              className={`flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                isActive
                  ? 'border-crimson text-crimson'
                  : 'border-transparent text-ink hover:text-crimson'
              }`}
            >
              <span className={isActive ? 'text-crimson' : 'text-ink/50'}>{s.n}</span>
              {s.title}
            </a>
          );
        })}
      </div>
    </section>
  );
}

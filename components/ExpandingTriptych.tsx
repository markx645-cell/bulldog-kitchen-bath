'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export type TriptychImage = { src: string; alt: string };

/**
 * Three portrait images.
 *
 * Desktop (md+): they start stacked as one and fan out into a triptych when
 * scrolled into view. The closed state translates the outer two inward by
 * exactly their own width plus the gap, so they sit directly behind the centre
 * card — that's what makes it read as one image splitting into three rather
 * than three sliding in. The centre keeps the highest z-index so the others
 * emerge from behind it.
 *
 * Mobile: the same markup becomes a centred carousel — one card in focus with
 * the neighbours peeking either side, plus tappable dots. The container's side
 * padding is what lets the first and last card reach centre. The fan-out
 * transforms are md-only so they can't fight the scroll container.
 *
 * Honours prefers-reduced-motion. The hidden state is applied only after mount,
 * so if JS never runs the images stay visible rather than stuck offscreen.
 */
export default function ExpandingTriptych({
  images,
  className = '',
}: {
  images: [TriptychImage, TriptychImage, TriptychImage];
  className?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1); // centre card starts in focus

  useEffect(() => {
    setMounted(true);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setOpen(true);
      return;
    }

    const el = scroller.current;
    if (!el) {
      setOpen(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setOpen(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Start the mobile carousel on the centre card so both neighbours peek.
  useEffect(() => {
    const el = scroller.current;
    if (!el || window.innerWidth >= 768) return;
    const mid = el.children[1] as HTMLElement | undefined;
    if (mid) el.scrollLeft = mid.offsetLeft - (el.clientWidth - mid.offsetWidth) / 2;
  }, [mounted]);

  // Which card is nearest the centre of the scrollport.
  const syncActive = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((node, i) => {
      const c = node as HTMLElement;
      const dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  const goTo = (i: number) => {
    const el = scroller.current;
    if (!el) return;
    const c = el.children[i] as HTMLElement | undefined;
    if (!c) return;
    el.scrollTo({
      left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2,
      behavior: 'smooth',
    });
  };

  // Before mount (and for no-JS), render the open layout so nothing is hidden.
  const shown = !mounted || open;

  // Mobile: 78% wide slides, centred by the container's side padding.
  // Desktop: equal thirds — the centre differs in height only, never width.
  const card =
    'relative w-[78%] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/50 bg-white/30 p-1.5 shadow-[0_18px_45px_-12px_rgba(22,24,26,0.3),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-md transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:w-[30%]';

  const [left, center, right] = images;

  return (
    <div className={className}>
      <div
        ref={scroller}
        onScroll={syncActive}
        className="flex snap-x snap-mandatory items-center gap-4 overflow-x-auto px-[11%] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:snap-none md:justify-center md:gap-6 md:overflow-visible md:px-0 md:pb-0"
      >
        {/* Left — on desktop, slides out from behind the centre */}
        <div
          className={`${card} z-10 ${
            shown
              ? 'md:translate-x-0 md:scale-100 md:opacity-100'
              : 'md:translate-x-[calc(100%+1.5rem)] md:scale-90 md:opacity-0'
          }`}
          style={{ transitionDelay: shown ? '200ms' : '0ms' }}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
            <Image
              src={left.src}
              alt={left.alt}
              fill
              sizes="(max-width:768px) 78vw, 22vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Centre — same width as the others, taller frame on desktop */}
        <div className={`${card} z-20 ${shown ? 'md:scale-100' : 'md:scale-[0.97]'}`}>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl md:aspect-[3/4.6]">
            <Image
              src={center.src}
              alt={center.alt}
              fill
              sizes="(max-width:768px) 78vw, 22vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right — mirrors the left */}
        <div
          className={`${card} z-10 ${
            shown
              ? 'md:translate-x-0 md:scale-100 md:opacity-100'
              : 'md:-translate-x-[calc(100%+1.5rem)] md:scale-90 md:opacity-0'
          }`}
          style={{ transitionDelay: shown ? '200ms' : '0ms' }}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
            <Image
              src={right.src}
              alt={right.alt}
              fill
              sizes="(max-width:768px) 78vw, 22vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Dots — mobile only; desktop shows all three at once */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show image ${i + 1} of ${images.length}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'w-7 bg-crimson' : 'w-2 bg-ink/25 hover:bg-ink/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

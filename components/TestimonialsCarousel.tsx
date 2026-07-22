'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Photo from '@/components/Photo';
import { testimonials } from '@/content/testimonials';

/**
 * Homepage video-testimonial carousel.
 *
 * Data comes from content/testimonials.ts. Tiles with no `thumbnail` render the
 * branded placeholder frame (never a fabricated face); tiles with no `videoUrl`
 * have an inert play button. When a real `videoUrl` is present the tile opens it
 * in a lightbox. If the data array is empty the whole section removes itself.
 *
 * A scroll-snap row rather than a JS-driven slider: it works without hydration,
 * the arrows just scroll it, and the dots track scroll position.
 */
export default function TestimonialsCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState<number | null>(null);

  if (testimonials.length === 0) return null;

  // Scroll by roughly one card so the arrows advance a tile at a time.
  const nudge = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // Keep the active dot in sync with the scroll position.
  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const step = card ? card.offsetWidth + 16 : 1;
    setActive(Math.round(el.scrollLeft / step));
  };

  const scrollToIndex = (i: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollTo({ left: i * step, behavior: 'smooth' });
  };

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">In their own words</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Video testimonials from our customers
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Read enough five-star reviews and they blur. A video is harder to fake. These are
            Tri-State homeowners in their own homes, telling you how the job went.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Prev / next — hidden on small screens where the row just swipes. */}
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Previous testimonials"
            className="absolute -left-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-lift transition hover:bg-ink-700 lg:flex"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Next testimonials"
            className="absolute -right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-lift transition hover:bg-ink-700 lg:flex"
          >
            <ChevronRight className="size-5" />
          </button>

          <div
            ref={scroller}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => {
              const canPlay = Boolean(t.videoUrl);
              return (
                <div
                  key={i}
                  data-card
                  className="w-[240px] shrink-0 snap-start sm:w-[260px]"
                >
                  <div className="group relative aspect-[3/5] overflow-hidden rounded-2xl shadow-lift">
                    {playing === i && t.videoUrl ? (
                      <iframe
                        src={t.videoUrl}
                        title={t.name ?? 'Customer video testimonial'}
                        allow="accelerated-motion; autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    ) : (
                      <>
                        <Photo
                          src={t.thumbnail}
                          alt={t.alt ?? t.name ?? 'Customer video testimonial'}
                          label={t.name ?? 'Video Testimonial'}
                          rounded="rounded-2xl"
                          className="absolute inset-0 h-full w-full"
                          sizes="260px"
                        />
                        <button
                          type="button"
                          onClick={() => canPlay && setPlaying(i)}
                          aria-label={canPlay ? `Play ${t.name ?? 'testimonial'}` : 'Video coming soon'}
                          disabled={!canPlay}
                          className="absolute inset-0 flex items-center justify-center focus:outline-none"
                        >
                          <span
                            className={`flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lift backdrop-blur transition ${
                              canPlay ? 'group-hover:scale-110' : 'opacity-70'
                            }`}
                          >
                            <Play className="ml-0.5 size-6 fill-crimson text-crimson" />
                          </span>
                        </button>
                      </>
                    )}
                    {t.name && (
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 font-sans text-sm font-semibold text-white">
                        {t.name}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot pagination */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? 'w-6 bg-crimson' : 'w-2 bg-ink/20 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

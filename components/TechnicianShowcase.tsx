'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * "The crew behind the work" — a 6-slide showcase of real Bulldog technicians
 * on the job. Vertical dots on the left change the slide; the heading/body sit
 * in the middle and the photo on the right. Client component for the active
 * slide state.
 *
 * Each slide's copy describes what the photo actually shows (consultation,
 * framing, drywall, tile, kitchen install, exterior) — no invented claims.
 */
const SLIDES = [
  {
    title: 'In-Home Consultations',
    heading: 'No pressure, no surprises',
    body: 'Every project begins with an in-home consultation — one accountable person who listens, measures, and lays out exactly what’s involved before anything is signed.',
    src: '/assets/technician-consultation.webp',
    alt: 'Bulldog Remodel Group team member meeting homeowners at their front door for a consultation',
  },
  {
    title: 'Kitchen Remodels',
    heading: 'Kitchens that actually work',
    body: 'Cabinets, counters, lighting and hardware — designed around how you cook and live, and installed by the same in-house team from demo to the final drawer pull.',
    src: '/assets/technician-kitchen.webp',
    alt: 'Bulldog Remodel Group technician in a kitchen mid-remodel with cabinets being installed',
  },
  {
    title: 'Bathroom Remodels',
    heading: 'Bathrooms done to the last tile',
    body: 'Showers, tubs, tile and vanities — set by hand, level and true. From a simple refresh to a full gut, we build the bathroom the way it should have been the first time.',
    src: '/assets/technician-tile.webp',
    alt: 'Bulldog Remodel Group tile setter installing floor tile in a subway-tiled bathroom remodel',
  },
  {
    title: 'Walk-In Showers & Tubs',
    heading: 'Glass showers and soaking tubs',
    body: 'Curbless walk-in showers, custom tile and niches, frameless glass, and freestanding soaking tubs — the centerpiece of a bathroom, plumbed and set by our own crew.',
    src: '/assets/technician-shower-tub.webp',
    alt: 'Bulldog Remodel Group technician installing a shower fixture in a tiled walk-in shower beside a freestanding tub',
  },
  {
    title: 'Barndominiums',
    heading: 'A barn outside, a home inside',
    body: 'Post-frame shells framed and finished by our own carpenters — open spans, a shop under the same roof, and interiors built to the standard of a house.',
    src: '/assets/technician-framing.webp',
    alt: 'Bulldog Remodel Group carpenter cutting lumber on a miter saw inside a barndominium build',
  },
  {
    title: 'Accessory Dwelling Units',
    heading: 'A second home in the backyard',
    body: 'Detached cottages, garage conversions and in-law suites — a complete, self-contained home with its own kitchen and bath, designed and built by one team on the land you already own.',
    src: '/assets/technician-exterior.webp',
    alt: 'Bulldog Remodel Group technician installing wood siding on an accessory dwelling unit (ADU) exterior',
  },
  {
    title: 'Basement Remodels',
    heading: 'The best room in the house',
    body: 'Raw, unfinished basements turned into family rooms, suites, and bars — framing, drywall, egress and finishes, dry and warm and built to the same standard as the floors above.',
    src: '/assets/technician-drywall.webp',
    alt: 'Bulldog Remodel Group technician framing and finishing drywall during a basement remodel',
  },
  {
    title: 'Custom Homes',
    heading: 'Built around how you live',
    body: 'Ground-up homes designed and built by one accountable team — from the foundation and framing to the final fixture, with one fixed price and a lifetime workmanship warranty.',
    src: '/assets/technician-custom-home.webp',
    alt: 'Bulldog Remodel Group carpenter cutting lumber in front of a modern custom home under construction',
  },
];

export default function TechnicianShowcase() {
  const [active, setActive] = useState(0);
  const s = SLIDES[active];

  // Wrap-around navigation so prev/next loop past the ends.
  const go = (dir: 1 | -1) => setActive((a) => (a + dir + SLIDES.length) % SLIDES.length);

  // Auto-advance every 10s. Depending on `active` restarts the timer after any
  // change (manual or auto), so each slide gets a full 10 seconds on screen.
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 10000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Bulldog Crew</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            We bring your vision to life
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            No rotating subcontractors — the same in-house team designs, builds, and finishes your
            home. Here’s what that looks like on the job.
          </p>
        </div>

        {/* Content keeps full width; arrows overlay the side corners (absolute,
            so they don't shrink the content). */}
        <div className="relative mt-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Text */}
          <div className="min-w-0 lg:order-1">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-crimson">
              {s.title}
            </p>
            <h3 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              {s.heading}
            </h3>
            <p className="mt-4 leading-relaxed text-ink/75">{s.body}</p>
          </div>

          {/* Image */}
          <div className="w-full lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/50 bg-white/40 shadow-lift">
              {SLIDES.map((slide, i) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width:1024px) 100vw, 45vw"
                  className={`object-cover transition-opacity duration-500 ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
          </div>

          {/* Prev / next — absolute, tucked into the side gutters (on top of the
              content edges, not consuming layout width). Loop past the ends. */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous service"
            className="absolute -left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center glass rounded-full text-ink transition hover:text-crimson sm:-left-4 sm:size-12 lg:-left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next service"
            className="absolute -right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center glass rounded-full text-ink transition hover:text-crimson sm:-right-4 sm:size-12 lg:-right-6"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Slide counter, above the first thumbnail */}
        <p className="mt-8 font-sans text-sm font-bold tracking-wide text-ink/45">
          <span className="text-crimson">{String(active + 1).padStart(2, '0')}</span> /{' '}
          {String(SLIDES.length).padStart(2, '0')}
        </p>

        {/* Thumbnail navigation — full-width grid; the selected one has a
            crimson border. Four across on mobile, all eight across from sm up. */}
        <div
          className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8 sm:gap-3"
          role="tablist"
          aria-label="Choose a service"
        >
          {SLIDES.map((slide, i) => {
            const on = i === active;
            return (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={on}
                aria-label={slide.title}
                onClick={() => setActive(i)}
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 transition ${
                  on ? 'border-crimson' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  sizes="(max-width:640px) 33vw, 190px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

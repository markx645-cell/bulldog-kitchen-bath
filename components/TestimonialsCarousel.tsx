'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Play, Quote, Star, User } from 'lucide-react';
import { testimonials } from '@/content/testimonials';

/**
 * Video testimonials — round clickable face frames on the left, the selected
 * person's name and words in the middle, and their video on the right.
 *
 * Data comes from content/testimonials.ts. A face with no `thumbnail` shows a
 * person-icon frame; a testimonial with no `videoUrl` shows the video area as a
 * placeholder. If the array is empty the whole section removes itself.
 */
export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  // Direction of the last switch: 1 = a later face (content enters from below),
  // -1 = an earlier face (enters from above). Drives the slide animation.
  const [dir, setDir] = useState(1);

  // Whether the active testimonial's video is playing. Faces start on their
  // poster thumbnail; the real <video> only loads once play is clicked.
  const [playing, setPlaying] = useState(false);

  const select = (i: number) => {
    if (i === active) return;
    setDir(i > active ? 1 : -1);
    setActive(i);
    setPlaying(false);
  };

  if (testimonials.length === 0) return null;
  const t = testimonials[active];
  const slide = dir === 1 ? 'animate-slide-in-up' : 'animate-slide-in-down';

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">In their own words</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Hear it from our customers
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            A video is harder to fake than a five-star rating. These are Tri-State homeowners in
            their own homes, telling you how the job went.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Round face frames — click to switch. Row on mobile, column on desktop. */}
          <div
            className="flex shrink-0 flex-row justify-center gap-3 lg:flex-col lg:gap-4"
            role="tablist"
            aria-label="Choose a customer"
          >
            {testimonials.map((item, i) => {
              const on = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-label={item.name ?? `Testimonial ${i + 1}`}
                  onClick={() => select(i)}
                  className={`relative size-14 shrink-0 overflow-hidden rounded-full border-2 transition sm:size-16 ${
                    on
                      ? 'border-crimson'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  {item.thumbnail ? (
                    <Image src={item.thumbnail} alt={item.alt ?? item.name ?? ''} fill sizes="64px" className="object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-white/40 text-ink/40 backdrop-blur-md">
                      <User className="size-7" strokeWidth={1.75} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Name + testimonial text, framed by quote marks and a dash flourish.
              Keyed by `active` so it remounts and replays the slide on each click. */}
          <div key={`text-${active}`} className={`min-w-0 flex-1 ${slide}`}>
            {/* Opening quote mark */}
            <Quote className="size-9 rotate-180 fill-ink text-ink" strokeWidth={0} aria-hidden="true" />

            {/* Location · project on the left, star rating on the right */}
            <div className="mt-4 flex items-start justify-between gap-4">
              <div className="min-w-0">
                {(t.location || t.project) && (
                  <p className="text-sm text-ink/55">
                    {[t.location, t.project].filter(Boolean).join(' · ')}
                  </p>
                )}
                {t.name && (
                  <p className="mt-1 font-display text-2xl uppercase leading-tight text-crimson md:text-3xl">
                    {t.name}
                  </p>
                )}
              </div>
              {t.rating ? (
                <div
                  className="flex shrink-0 gap-0.5 pt-1"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-crimson text-crimson" strokeWidth={0} />
                  ))}
                </div>
              ) : null}
            </div>

            {t.quote && (
              <blockquote className="mt-4 leading-relaxed text-ink/80">{t.quote}</blockquote>
            )}

            {/* Dash flourish on the left, closing quote mark on the right */}
            <div className="mt-6 flex items-end justify-between gap-4">
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-[3px] w-7 rounded bg-crimson" />
                <span className="h-[3px] w-3 rounded bg-crimson" />
                <span className="h-[3px] w-3 rounded bg-crimson" />
                <span className="h-[3px] w-3 rounded bg-crimson" />
              </span>
              <Quote className="size-9 fill-ink text-ink" strokeWidth={0} aria-hidden="true" />
            </div>
          </div>

          {/* Video (portrait) — same keyed slide so it moves with the text */}
          <div key={`video-${active}`} className={`w-full max-w-[270px] shrink-0 lg:w-[270px] ${slide}`}>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/50 bg-ink shadow-lift">
              {t.videoUrl && playing ? (
                // Once play is clicked, load the real video. object-contain so the
                // footage is never cropped (it may letterbox — that's fine here,
                // the resting state is the full-bleed poster below).
                <video
                  key={t.videoUrl}
                  autoPlay
                  controls
                  playsInline
                  poster={t.poster ?? t.thumbnail}
                  className="h-full w-full object-contain"
                >
                  <source src={t.videoUrl} type="video/mp4" />
                </video>
              ) : t.videoUrl ? (
                // Resting state: the poster thumbnail fills the frame (object-cover,
                // no black bars) with a play button. Click loads/plays the video.
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play ${t.name ?? 'testimonial'} video`}
                  className="group absolute inset-0 h-full w-full"
                >
                  {(t.poster || t.thumbnail) && (
                    <Image
                      src={(t.poster ?? t.thumbnail) as string}
                      alt={t.alt ?? t.name ?? ''}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/10 transition group-hover:bg-ink/25">
                    <span className="flex size-16 items-center justify-center rounded-full bg-white/85 text-crimson shadow-lift transition group-hover:scale-105">
                      <Play className="ml-1 size-7 fill-current" strokeWidth={0} />
                    </span>
                  </span>
                </button>
              ) : (
                // No video yet — a neutral placeholder with an inert play badge.
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/60">
                  <span className="flex size-14 items-center justify-center rounded-full bg-white/15">
                    <Play className="ml-0.5 size-6" />
                  </span>
                  <span className="text-xs uppercase tracking-widest">Video coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Play, Quote, Star } from 'lucide-react';
import { testimonials, type Testimonial } from '@/content/testimonials';

/**
 * The dedicated /video-testimonials page: every testimonial listed as a full-
 * width row, with the video alternating left/right down the page. Same styling
 * as the homepage face-selector (TestimonialsCarousel) — quote marks, location,
 * crimson name, stars, quote, dash flourish, and a click-to-play video — just
 * laid out as a static list instead of a selector.
 */
export default function TestimonialsList() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">In their own words</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Hear it from our customers
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Real Tri-State homeowners, in their own homes, telling you how the job went.
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {testimonials.map((t, i) => (
            <Row key={i} t={t} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ t, flip }: { t: Testimonial; flip: boolean }) {
  // Each row's video is its own click-to-play facade.
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12 ${
        flip ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Name + testimonial text, framed by quote marks and a dash flourish */}
      <div className="min-w-0 flex-1">
        <Quote className="size-9 rotate-180 fill-ink text-ink" strokeWidth={0} aria-hidden="true" />

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
            <div className="flex shrink-0 gap-0.5 pt-1" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-crimson text-crimson" strokeWidth={0} />
              ))}
            </div>
          ) : null}
        </div>

        {t.quote && <blockquote className="mt-4 leading-relaxed text-ink/80">{t.quote}</blockquote>}

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

      {/* Video (portrait), click-to-play */}
      <div className="w-full max-w-[270px] shrink-0 lg:w-[270px]">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/50 bg-ink shadow-lift">
          {t.videoUrl && playing ? (
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
                  sizes="270px"
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
  );
}

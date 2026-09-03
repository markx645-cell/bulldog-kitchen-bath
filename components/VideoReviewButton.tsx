'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Play, X } from 'lucide-react';

/**
 * The "Watch their video" button on a review card whose reviewer also recorded a
 * testimonial. Plays the recording in a lightbox on the page rather than sending
 * the reader off to /video-testimonials. Client component for the open state;
 * one instance per card, so each owns its own lightbox.
 */
export default function VideoReviewButton({
  name,
  videoUrl,
  poster,
}: {
  name?: string;
  videoUrl: string;
  poster?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-6 inline-flex items-center gap-3 self-start rounded-full bg-crimson py-2 pl-2 pr-6 text-white shadow-lift transition hover:bg-crimson-600"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-white text-crimson transition group-hover:scale-105">
          <Play className="ml-0.5 size-4 fill-current" strokeWidth={0} />
        </span>
        <span className="font-display text-base uppercase tracking-wide">Watch their video</span>
      </button>

      {/* Portalled to <body>: the reveal animation leaves will-change on the
          surrounding section, which makes it the containing block for
          position:fixed — the overlay would otherwise cover only the section
          and paint under the sticky header. */}
      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${name ?? 'Customer'} video review`}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
            >
              <X className="size-6" />
            </button>
            <video
              controls
              autoPlay
              playsInline
              poster={poster}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-auto rounded-2xl bg-ink"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>,
          document.body,
        )}
    </>
  );
}

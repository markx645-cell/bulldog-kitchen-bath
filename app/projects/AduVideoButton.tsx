'use client';

import { useEffect, useState } from 'react';
import { PlayCircle, X } from 'lucide-react';

/**
 * Full-width button above the projects filter bar that opens the ADU build reel
 * (the same video as the homepage/ADU showcase) in a lightbox. Client component
 * for the open/close state and Escape-to-close.
 */
export default function AduVideoButton() {
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
        className="group flex w-full items-center gap-4 rounded-2xl border border-white/50 bg-white/40 p-4 text-left shadow-lift backdrop-blur-md transition hover:bg-white/60 sm:p-5"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-crimson text-white transition group-hover:scale-105">
          <PlayCircle className="size-7" strokeWidth={1.75} />
        </span>
        <span className="min-w-0">
          <span className="block font-display text-lg leading-tight text-ink sm:text-xl">
            A beautiful 2-bed ADU we recently built
          </span>
          <span className="mt-0.5 block text-sm text-ink/60">Tap to watch the walkthrough</span>
        </span>
        <span className="ml-auto hidden shrink-0 font-sans text-xs font-bold uppercase tracking-widest text-crimson sm:block">
          Watch video →
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="ADU build video"
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
            poster="/assets/adu-remodel-poster.webp"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto rounded-2xl bg-ink"
          >
            <source src="/assets/adu-remodel.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
}

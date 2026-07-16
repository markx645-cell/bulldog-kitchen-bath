'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectPhoto } from '@/content/projects';

// Hero photo + gallery grid, both opening a full-size lightbox — the
// production project pages make every photo clickable.
export default function Gallery({ photos }: { photos: ProjectPhoto[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const open = lightbox !== null;

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );

  // Keyboard control + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  if (!photos.length) return null;
  const [hero] = photos;

  return (
    <>
      {/* Hero photo */}
      <section className="section">
        <div className="container-x">
          <button
            type="button"
            onClick={() => setLightbox(0)}
            aria-label="View photo full-size"
            className="glass group block w-full overflow-hidden p-2"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                priority
                sizes="(max-width:1024px) 100vw, 1160px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </button>
        </div>
      </section>

      {/* Project gallery */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow">Finished Project</p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">Project Gallery</h2>
            <p className="mt-4 text-ink/75">Click any photo to view it full-size.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`View ${g.alt} full-size`}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/40 bg-white/20"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project photo"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10"
          >
            <X className="size-5" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous photo"
                className="absolute left-4 rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
                className="absolute right-4 rounded-full border border-white/30 p-2 text-white transition hover:bg-white/10"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          )}

          <figure
            className="relative flex max-h-[90vh] w-full max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-full">
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center font-sans text-sm text-white/70">
              {photos[lightbox].alt} · {lightbox + 1} / {photos.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Stars from '@/components/Stars';
import type { Review } from '@/content/reviews';

function MoreArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Card({ r }: { r: Review }) {
  return (
    <figure className="flex flex-col rounded-xl border border-ink-700 bg-ink p-6 shadow-lift">
      <div className="flex items-center justify-between">
        <Stars count={r.rating} />
        <span className="font-display text-[11px] font-bold uppercase tracking-wide text-sage-400">
          {r.service}
        </span>
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-white/90">“{r.quote}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-ink-700 pt-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-vermilion font-display text-lg font-bold text-white">
          {r.name.charAt(0)}
        </span>
        <span>
          <span className="block font-display font-bold text-white">{r.name}</span>
          <span className="block text-xs text-white/70">{r.location}</span>
        </span>
      </figcaption>
    </figure>
  );
}

const INITIAL = 6;
const STEP = 3;

export default function ReviewsList({
  reviews,
  moreHref,
}: {
  reviews: Review[];
  moreHref?: string;
}) {
  const [visible, setVisible] = useState(INITIAL);
  const shown = reviews.slice(0, visible);
  const hasMore = visible < reviews.length;

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => (
          <Card key={r.name + r.quote} r={r} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          {moreHref ? (
            <Link href={moreHref} className="btn-dark">
              See more reviews
              <MoreArrow />
            </Link>
          ) : (
            <button type="button" onClick={() => setVisible((v) => v + STEP)} className="btn-dark">
              See more reviews
              <MoreArrow />
            </button>
          )}
        </div>
      )}
    </>
  );
}

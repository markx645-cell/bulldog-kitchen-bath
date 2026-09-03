'use client';

import { Children, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PER_PAGE = 10;

/**
 * Pages the /reviews list ten cards at a time, with the count and the
 * previous/next controls sitting under the list.
 *
 * The cards are built on the server and handed in as children; this only
 * decides which are on screen. Every review stays in the HTML — hidden rather
 * than dropped — so the page still carries all of them for search engines and
 * for the browser's own find-on-page.
 */
export default function ReviewsPager({
  children,
  total,
}: {
  children: ReactNode;
  /** The count shown beside the controls, e.g. "600+ reviews". */
  total: string;
}) {
  const items = Children.toArray(children);
  const pages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const [page, setPage] = useState(0);
  const top = useRef<HTMLDivElement>(null);

  // Back to the top of the list on a page change, or the reader lands in the
  // middle of the new page. scroll-mt clears the sticky header.
  const go = (next: number) => {
    setPage(next);
    top.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <div ref={top} className="mx-auto mt-12 max-w-4xl scroll-mt-32">
      <div className="flex flex-col gap-4">
        {items.map((child, i) => (
          <div key={i} className={i >= page * PER_PAGE && i < (page + 1) * PER_PAGE ? '' : 'hidden'}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
        <p className="font-sans text-sm text-ink/70">{total}</p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 0}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-ink/60 transition hover:border-ink/40 hover:text-ink disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft className="size-4" /> Previous
          </button>
          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page >= pages - 1}
            className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-crimson-600 disabled:pointer-events-none disabled:opacity-40"
          >
            Next <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

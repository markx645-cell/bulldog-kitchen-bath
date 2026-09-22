'use client';

import { Fragment, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, Search, X } from 'lucide-react';
import { projects, categoryOf, type Project } from '@/content/projects';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'bath', label: 'Bathrooms' },
  { id: 'basement', label: 'Basements' },
  { id: 'laundry', label: 'Laundry & Mudrooms' },
] as const;

const GROUPS = [
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'bath', label: 'Bathrooms' },
  { id: 'basement', label: 'Basements' },
  { id: 'laundry', label: 'Laundry & Mudrooms' },
  { id: 'other', label: 'More Projects' },
] as const;

/** The 800px card copy of a photo, made by scripts/make-card-thumbs.mjs. */
function thumbSrc(src: string) {
  return src.replace(/^\/assets\//, '/assets/thumbs/').replace(/\.\w+$/, '.webp');
}

function Card({ p, className = '' }: { p: Project; className?: string }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className={`group glass glass-hover flex flex-col overflow-hidden ${className}`}
    >
      {p.photos[0] && (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={thumbSrc(p.photos[0].src)}
            alt={p.photos[0].alt}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {p.type && (
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-crimson">
            {p.type}
          </p>
        )}
        <h3 className="mt-2 font-display text-xl text-ink">{p.title}</h3>
        {p.loc && <p className="mt-1 font-sans text-sm text-ink/60">{p.loc}</p>}
        {p.description && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{p.description}</p>
        )}
      </div>
    </Link>
  );
}

/** Cards a phone shows per grid before "View more" — and how many each tap adds. */
const MOBILE_STEP = 10;

/** What the "View more …" button calls each category's projects. */
const MORE_LABEL: Record<string, string> = {
  kitchen: 'kitchen remodels',
  bath: 'bathroom remodels',
  basement: 'basement remodels',
  laundry: 'laundry & mudroom remodels',
};

/**
 * A category's grid on the unfiltered view. On phones only it shows the first
 * ten cards and a "View more" button that adds ten at a time; from sm up every
 * card shows. A filtered or searched list skips this and shows every match.
 * Cards past the limit are hidden with CSS rather than dropped, so they stay in
 * the HTML for search engines, and a hidden card's lazy image never loads.
 */
function CardGrid({ items, category }: { items: Project[]; category: string }) {
  const [shown, setShown] = useState(MOBILE_STEP);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Card key={p.slug} p={p} className={i >= shown ? 'max-sm:hidden' : ''} />
        ))}
      </div>
      {shown < items.length && (
        <button
          type="button"
          onClick={() => setShown((n) => n + MOBILE_STEP)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-ink/25 bg-transparent px-4 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-ink transition hover:border-ink/50 sm:hidden"
        >
          <ArrowDown className="size-4" />
          View more {MORE_LABEL[category] ?? 'projects'} by Bulldog
        </button>
      )}
    </>
  );
}

export default function ProjectsBrowser() {
  const [category, setCategory] = useState<string>('all');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== 'all' && categoryOf(p.type) !== category) return false;
      if (!needle) return true;
      return (
        p.title.toLowerCase().includes(needle) ||
        p.loc.toLowerCase().includes(needle) ||
        p.type.toLowerCase().includes(needle) ||
        p.description.toLowerCase().includes(needle)
      );
    });
  }, [category, q]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };
    for (const p of projects) {
      const k = categoryOf(p.type);
      c[k] = (c[k] ?? 0) + 1;
    }
    return c;
  }, []);

  return (
    <>
      {/* Filter + search bar — scrolls with the page. It sits mid-page rather
          than under the header, so it needs no clearance for the overhanging
          logo and starts at the normal gutter, in line with the grid below. */}
      <section className="border-y border-ink/10 bg-bone/90">
        {/* xl:flex-nowrap keeps the filters and search on one line once there's
            room; below that it still wraps rather than overflowing. */}
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-3 xl:flex-nowrap">
          {/* On phones, two set rows — All, Kitchens, Bathrooms on top;
              Basements and Laundry below — each stretched to the full width,
              rather than wrapping wherever the widths happen to break. From sm
              up they flow as one row. The row spacing is a margin on the
              buttons, not gap-y, which would also space out the zero-height
              line break and push the second row down. */}
          <div className="flex w-full flex-wrap gap-x-2 max-sm:-mb-2 sm:w-auto sm:gap-y-2 xl:flex-nowrap">
            {CATEGORIES.map((c, i) => {
              const active = category === c.id;
              return (
                <Fragment key={c.id}>
                  {i === 3 && <span aria-hidden className="basis-full sm:hidden" />}
                  <button
                    type="button"
                    onClick={() => setCategory(c.id)}
                    aria-pressed={active}
                    className={`flex-auto whitespace-nowrap rounded-md max-sm:mb-2 border px-2 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.04em] transition-colors min-[380px]:text-[11px] sm:flex-none sm:px-4 sm:text-xs sm:tracking-[0.12em] ${
                      active
                        ? 'border-ink bg-ink text-white'
                        : 'border-ink/15 bg-white/40 text-ink hover:border-ink/40'
                    }`}
                  >
                    {c.label}{' '}
                    <span className={active ? 'text-white/60' : 'text-ink/45'}>
                      ({counts[c.id] ?? 0})
                    </span>
                  </button>
                </Fragment>
              );
            })}
          </div>

          {/* Flexes into whatever space the filters leave, rather than holding a
              fixed 320px that forced it onto its own line. */}
          <div className="relative w-full sm:w-80 xl:w-auto xl:min-w-[13rem] xl:max-w-xs xl:flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink/40" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, city..."
              aria-label="Search projects"
              className="w-full rounded-md border border-ink/15 bg-white/60 py-2.5 pl-9 pr-9 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* data-no-reveal: this section can run tens of thousands of px tall. The
          scroll reveal's will-change turns it into one giant compositing
          layer, which mobile Safari struggles to paint. */}
      <section data-no-reveal className="pb-14 pt-8 sm:pb-16 sm:pt-10">
        <div className="container-x">
          <p className="mb-5 font-sans text-sm text-ink/60">
            Showing <strong className="text-ink">{filtered.length}</strong> of {projects.length}{' '}
            projects
          </p>

          {filtered.length === 0 ? (
            <div className="glass mx-auto max-w-lg p-10 text-center">
              <h2 className="font-display text-2xl text-ink">No projects match that search</h2>
              <p className="mt-3 text-ink/75">Try a different name, city or category.</p>
              <button
                type="button"
                onClick={() => {
                  setCategory('all');
                  setQ('');
                }}
                className="btn-primary mt-8 !bg-crimson hover:!bg-crimson-600"
              >
                Reset filters
              </button>
            </div>
          ) : category === 'all' && !q.trim() ? (
            // Grouped by category, as production does on the unfiltered view
            GROUPS.map((g) => {
              const items = filtered.filter((p) => categoryOf(p.type) === g.id);
              if (!items.length) return null;
              return (
                <div key={g.id} className="mb-12 last:mb-0">
                  <div className="mb-6 flex items-end justify-between border-b border-ink/10 pb-2">
                    <h2 className="font-display text-3xl text-ink md:text-4xl">{g.label}</h2>
                    <span className="font-sans text-xs uppercase tracking-[0.18em] text-ink/50">
                      {items.length} Projects
                    </span>
                  </div>
                  <CardGrid items={items} category={g.id} />
                </div>
              );
            })
          ) : (
            // A chosen category or a search shows every match, on phones too
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <Card key={p.slug} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

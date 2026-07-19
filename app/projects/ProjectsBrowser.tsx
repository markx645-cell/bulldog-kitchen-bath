'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
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

function Card({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="group glass glass-hover flex flex-col overflow-hidden">
      {p.photos[0] && (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={p.photos[0].src}
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
      {/* Filter + search bar */}
      <section className="sticky top-[88px] z-30 border-y border-ink/10 bg-bone/90 backdrop-blur-xl md:top-[96px] lg:top-[104px]">
        {/* lg:pl-36 clears the header logo, which overhangs the bar on desktop
            and sits above this bar (header z-40 > z-30). */}
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-4 lg:pl-36">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const active = category === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.id)}
                  aria-pressed={active}
                  className={`rounded-md border px-4 py-2 font-sans text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
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
              );
            })}
          </div>

          <div className="relative w-full sm:w-80">
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

      <section className="section">
        <div className="container-x">
          <p className="mb-8 font-sans text-sm text-ink/60">
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
                <div key={g.id} className="mb-16 last:mb-0">
                  <div className="mb-8 flex items-end justify-between border-b border-ink/10 pb-3">
                    <h2 className="font-display text-3xl text-ink md:text-4xl">{g.label}</h2>
                    <span className="font-sans text-xs uppercase tracking-[0.18em] text-ink/50">
                      {items.length} Projects
                    </span>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((p) => (
                      <Card key={p.slug} p={p} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
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

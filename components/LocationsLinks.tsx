import Link from 'next/link';
import { locations, type Location } from '@/content/locations';
import { serviceAreas } from '@/content/site';

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

type Group = { region: string; items: Location[] };

export default function LocationsLinks({ showHeader = true }: { showHeader?: boolean }) {
  const byCity = new Map(locations.map((l) => [norm(l.city), l]));
  const used = new Set<string>();

  const groups: Group[] = serviceAreas
    .map((g): Group => {
      const items = g.cities
        .map((c) => byCity.get(norm(c.split(',')[0])))
        .filter((x): x is Location => Boolean(x));
      items.forEach((i) => used.add(i.slug));
      return { region: g.region, items };
    })
    .filter((g) => g.items.length > 0);

  const leftover = locations.filter((l) => !used.has(l.slug));
  if (leftover.length) groups.push({ region: 'More Communities We Serve', items: leftover });

  return (
    <section className="section bg-cream-200">
      <div className="container-x">
        {showHeader && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Service area</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Kitchen &amp; Bath Remodeling by Community
            </h2>
            <p className="mt-4 text-steel">
              We remodel kitchens and bathrooms across Greater Cincinnati and Northern Kentucky —{' '}
              {locations.length} communities and counting. Find yours below.
            </p>
          </div>
        )}

        <details
          className={`group mx-auto max-w-5xl overflow-hidden rounded-xl border border-steel-200 bg-cream-50 shadow-card ${
            showHeader ? 'mt-8' : ''
          }`}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-display text-sm font-bold uppercase tracking-wide text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            View all {locations.length} communities we serve
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e73213"
              strokeWidth="2.5"
              className="shrink-0 transition-transform group-open:rotate-180"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <div className="border-t border-steel-200 px-6 py-6">
            {groups.map((g) => (
              <div key={g.region} className="mb-7 last:mb-0">
                <p className="mb-3 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-sage-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {g.region}
                </p>
                <div className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((it) => (
                    <Link
                      key={it.slug}
                      href={`/kitchen-bath-remodeling/${it.slug}`}
                      className="text-sm text-steel transition-colors hover:text-vermilion hover:underline"
                    >
                      Remodeling in {it.city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { ChevronDown, MapPin } from 'lucide-react';
import { groupLocations, locations as allLocations } from '@/content/locations';

/**
 * "Where we work" for the HOMEPAGE.
 *
 * Deliberately different from components/AreasWeServe.tsx, the service-hub
 * version:
 *
 *   AreasWeServe (hub pages)  — every neighborhood is a LINK down to that
 *     service's location page. That internal linking is the entire reason the
 *     1,727 location pages are discoverable, so those links must stay.
 *
 *   ServiceAreaSection (home) — the same names as PLAIN TEXT, no links. The
 *     homepage should not carry 170 extra outbound links: it dilutes how link
 *     equity reaches the pages that actually need it, and there is no single
 *     service to link to from here anyway. This section shows coverage; it
 *     does not route traffic. Do not "fix" it by making these links.
 *
 * ⚠️ FEATURED_CITIES is checked against content/locations.ts — every slug must
 * exist there and its county must match. Do not add a city we have no location
 * data for: this block is a claim about where we work.
 */

/**
 * A recognisable handful per county for the summary block. Curated for name
 * recognition rather than taken alphabetically, but every entry is a real
 * slug in locations.ts (verified — see the note above).
 */
const FEATURED_CITIES: { county: string; extra?: string[]; slugs: string[] }[] = [
  // Cincinnati is the parent city of 52 neighborhoods rather than its own
  // entry, so it is listed as a label rather than a slug.
  { county: 'Hamilton County, OH', extra: ['Cincinnati'], slugs: ['blue-ash', 'norwood', 'montgomery'] },
  { county: 'Butler County, OH', slugs: ['west-chester', 'hamilton', 'fairfield'] },
  { county: 'Warren County, OH', slugs: ['mason', 'south-lebanon', 'maineville'] },
  { county: 'Clermont County, OH', slugs: ['milford', 'batavia', 'new-richmond'] },
  { county: 'Kenton County, KY', slugs: ['covington', 'fort-mitchell', 'erlanger'] },
  { county: 'Campbell County, KY', slugs: ['newport', 'fort-thomas', 'bellevue'] },
  { county: 'Boone County, KY', slugs: ['florence', 'union', 'burlington'] },
  { county: 'Dearborn County, IN', slugs: ['lawrenceburg', 'aurora', 'greendale'] },
];

export default function ServiceAreaSection() {
  const bySlug = Object.fromEntries(allLocations.map((l) => [l.slug, l]));
  const groups = groupLocations(allLocations);
  const total = allLocations.length;

  const featured = FEATURED_CITIES.map(({ county, extra = [], slugs }) => ({
    county,
    cities: [
      ...extra,
      ...slugs
        .map((s) => bySlug[s])
        .filter(Boolean)
        .map((l) => `${l.neighborhood}, ${l.state}`),
    ],
  }));

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Where We Work</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Proudly serving the Tri-State
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Greater Cincinnati, Northern Kentucky and southeastern Indiana — {total} communities
            across {featured.length} counties, covered by our own crews.
          </p>
        </div>

        {/* Map and county list side by side from lg up, split 37/63. An explicit
            fr template rather than column spans because twelfths cannot express
            37% — 4/12 is 33% and 5/12 is 42%. fr units divide what's left after
            the gap, so the two never overflow the row. Below lg they stack, map
            first, since a third of a phone screen is unreadable. */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[37fr_63fr] lg:items-start lg:gap-12">
          <figure className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md">
              <Image
                src="/assets/service-area-map.webp"
                alt="Map of the Greater Cincinnati region covering our service area across southwest Ohio, Northern Kentucky and southeastern Indiana"
                width={768}
                height={768}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 24rem, 37vw"
              />
            </div>
            {/* Attribution for the map data. Remove only if the map is replaced
                with one whose licence does not require it. */}
            <figcaption className="mt-3 text-center text-xs text-ink/50">
              Map data © OpenStreetMap contributors
            </figcaption>
          </figure>

          {/* ---------- COUNTIES & CITIES ---------- */}
          <div>
            <p className="text-center font-sans text-sm font-bold uppercase tracking-wide text-ink lg:text-left">
              Counties &amp; cities we serve
            </p>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((f) => (
                <div key={f.county}>
                  <h3 className="font-sans text-sm font-bold text-ink">{f.county}</h3>
                  <ul className="mt-2 space-y-1">
                    {f.cities.map((c) => (
                      <li key={c} className="font-sans text-sm text-ink/70">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collapsed by default — 170 names would otherwise dominate the page.
            <details> keeps the text in the static HTML either way, and needs no JS. */}
        <details className="group glass mt-14 overflow-hidden">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-sans text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-crimson [&::-webkit-details-marker]:hidden"
            aria-label={`View all ${total} neighborhoods we serve`}
          >
            <span>View all {total} neighborhoods we serve</span>
            <ChevronDown className="size-5 shrink-0 text-crimson transition-transform duration-300 group-open:rotate-180" />
          </summary>

          <div className="space-y-10 border-t border-white/40 p-5 sm:p-6">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wide text-ink">
                  <MapPin className="size-4 shrink-0 text-crimson" />
                  {group.label}
                  <span className="font-normal normal-case tracking-normal text-ink/45">
                    ({group.locations.length})
                  </span>
                </h3>
                {/* Plain text, not links — see the note at the top of this file. */}
                <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
                  {group.locations.map((l) => (
                    <li key={l.slug} className="font-sans text-sm text-ink/80">
                      {l.neighborhood}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

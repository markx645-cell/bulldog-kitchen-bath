import Link from 'next/link';
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react';
import { groupLocations, type Location } from '@/content/locations';

/**
 * Collapsed "areas we serve" list for a service hub page.
 *
 * Uses <details> deliberately rather than conditional rendering: the neighborhood
 * links must stay in the static HTML even while collapsed, because the hub
 * linking down to every location page is what makes those pages discoverable.
 * `{open && ...}` would strip them from the export and break the mesh.
 *
 * It also means no JavaScript is required to open it.
 */
export default function AreasWeServe({
  locations,
  hrefBase,
  serviceLabel,
  heading = 'Bathroom remodeling near you',
  intro = 'The housing stock changes what a remodel involves. Here’s what that means where you live.',
}: {
  locations: Location[];
  /** e.g. "/bathroom-remodel" */
  hrefBase: string;
  /** e.g. "Bathroom Remodeling" — used in each link label */
  serviceLabel: string;
  heading?: string;
  intro?: string;
}) {
  if (!locations.length) return null;

  const groups = groupLocations(locations);

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Areas We Serve</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">{intro}</p>
        </div>

        <details className="group glass mt-12 overflow-hidden">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-sans text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-crimson [&::-webkit-details-marker]:hidden"
            aria-label={`View all ${locations.length} neighborhoods we serve`}
          >
            <span>View all {locations.length} neighborhoods we serve</span>
            <ChevronDown className="size-5 shrink-0 text-crimson transition-transform duration-300 group-open:rotate-180" />
          </summary>

          {/* Grouped by city / county — a flat run of 170 links is unreadable,
              and people scan for their county before their neighborhood. */}
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
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.locations.map((l) => (
                    <Link
                      key={l.slug}
                      href={`${hrefBase}/${l.slug}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/50 bg-white/40 px-4 py-3 transition-colors hover:border-crimson/40 hover:bg-white/60"
                    >
                      <span className="font-sans text-sm text-ink">
                        {serviceLabel} in {l.neighborhood}
                      </span>
                      <ArrowRight className="size-4 shrink-0 text-crimson" />
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

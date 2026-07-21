import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { walkInTubsCopy } from '@/content/location-copy/walk-in-tubs';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['walk-in-tubs'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'walk-in-tubs',
  hubHref: '/walk-in-tubs',
  hubLabel: 'Walk-In Tubs',
  schemaServiceType: 'Bathtub Installation',
  // Carries the hub's argument rather than a flat "Why a walk-in tub in X?" —
  // the hub's Why section merges into this one on location pages.
  localHeading: 'Staying in your {neighborhood} home, comfortably.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
    { label: 'Walk-In Showers', href: '/walk-in-showers' },
    { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
    { label: 'Tub Shower Combos', href: '/tub-shower-combos' },
    { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written.
const publishedSlugs = locations
  .filter((l) => walkInTubsCopy[l.slug])
  .map((l) => l.slug);

export function generateStaticParams() {
  return publishedSlugs.map((location) => ({ location }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc || !walkInTubsCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Walk-In Tubs in ${loc.neighborhood}, ${loc.state}`,
    description: `Walk-in tub installation in ${place}. One in-house team, fixed pricing and a lifetime workmanship warranty. Call ${site.phone}.`,
    alternates: { canonical: `/walk-in-tubs/${loc.slug}` },
    openGraph: {
      title: `Walk-In Tubs in ${place} | ${site.name}`,
      description: `Walk-in tubs in ${place} — designed, built and backed by one accountable team.`,
      url: `${site.url}/walk-in-tubs/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = walkInTubsCopy[loc.slug];
  if (!copy) notFound();

  return (
    <ServiceLocationPage
      service={service}
      config={config}
      loc={loc}
      copy={copy}
      nearby={getNearby(loc, publishedSlugs)}
    />
  );
}

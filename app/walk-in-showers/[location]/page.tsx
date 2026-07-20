import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { walkInShowersCopy } from '@/content/location-copy/walk-in-showers';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['walk-in-showers'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'walk-in-showers',
  hubHref: '/walk-in-showers',
  hubLabel: 'Walk-In Showers',
  schemaServiceType: 'Shower Installation',
  // Carries the hub's headline ("From Dreadful Tub to Walk-In Shower in 1 Day")
  // rather than a flat "Why a walk-in shower in X?" — the hub's Why section is
  // merged into this one on location pages, so this heading has to do both jobs.
  localHeading: 'From dreadful tub to walk-in shower in {neighborhood} — in 1 day',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Walk-In Showers', href: '/walk-in-showers' },
    { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
    { label: 'Tub Shower Combos', href: '/tub-shower-combos' },
    { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
    { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written. Adding a
// neighborhood to content/locations.ts does not publish a thin page for it.
const publishedSlugs = locations
  .filter((l) => walkInShowersCopy[l.slug])
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
  if (!loc || !walkInShowersCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Walk-In Showers in ${loc.neighborhood}, ${loc.state}`,
    description: `Walk-in shower installation in ${place}. One in-house team, fixed pricing and a lifetime workmanship warranty. Call ${site.phone}.`,
    alternates: { canonical: `/walk-in-showers/${loc.slug}` },
    openGraph: {
      title: `Walk-In Showers in ${place} | ${site.name}`,
      description: `Walk-in showers in ${place} — designed, built and backed by one accountable team.`,
      url: `${site.url}/walk-in-showers/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = walkInShowersCopy[loc.slug];
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

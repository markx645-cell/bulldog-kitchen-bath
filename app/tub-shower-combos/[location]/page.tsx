import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { tubShowerCombosCopy } from '@/content/location-copy/tub-shower-combos';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['tub-shower-combos'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'tub-shower-combos',
  hubHref: '/tub-shower-combos',
  hubLabel: 'Tub Shower Combos',
  schemaServiceType: 'Bathtub Installation',
  // Carries the hub's argument ("The Best of Both Worlds") rather than a flat
  // "Why a tub shower combo in X?" — the hub's Why section merges into this one
  // on location pages, so this heading has to do both jobs.
  localHeading: 'The best of both worlds in {neighborhood}.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Tub Shower Combos', href: '/tub-shower-combos' },
    { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
    { label: 'Walk-In Showers', href: '/walk-in-showers' },
    { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
    { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written. Adding a
// neighborhood to content/locations.ts does not publish a thin page for it.
const publishedSlugs = locations
  .filter((l) => tubShowerCombosCopy[l.slug])
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
  if (!loc || !tubShowerCombosCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Tub Shower Combos in ${loc.neighborhood}, ${loc.state}`,
    description: `Tub and shower combination installation in ${place}. One in-house team, fixed pricing and a lifetime workmanship warranty. Call ${site.phone}.`,
    alternates: { canonical: `/tub-shower-combos/${loc.slug}` },
    openGraph: {
      title: `Tub Shower Combos in ${place} | ${site.name}`,
      description: `Tub and shower combinations in ${place} — designed, built and backed by one accountable team.`,
      url: `${site.url}/tub-shower-combos/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = tubShowerCombosCopy[loc.slug];
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

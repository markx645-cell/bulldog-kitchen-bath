import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { bathroomFlooringCopy } from '@/content/location-copy/bathroom-flooring';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['bathroom-flooring'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'bathroom-flooring',
  hubHref: '/bathroom-flooring',
  hubLabel: 'Bathroom Flooring',
  schemaServiceType: 'Flooring Installation',
  // Carries the hub's argument rather than a flat "Why flooring in X?" — the
  // hub's Why section merges into this one on location pages.
  localHeading: 'The foundation of every {neighborhood} bathroom.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
    { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
    { label: 'Walk-In Showers', href: '/walk-in-showers' },
    { label: 'Tub Shower Combos', href: '/tub-shower-combos' },
    { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written.
const publishedSlugs = locations
  .filter((l) => bathroomFlooringCopy[l.slug])
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
  if (!loc || !bathroomFlooringCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Bathroom Flooring in ${loc.neighborhood}, ${loc.state}`,
    description: `Bathroom floor installation in ${place}. One in-house team, fixed pricing and a lifetime workmanship warranty. Call ${site.phone}.`,
    alternates: { canonical: `/bathroom-flooring/${loc.slug}` },
    openGraph: {
      title: `Bathroom Flooring in ${place} | ${site.name}`,
      description: `Bathroom flooring in ${place} — installed over a substrate built to last, by one accountable team.`,
      url: `${site.url}/bathroom-flooring/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = bathroomFlooringCopy[loc.slug];
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

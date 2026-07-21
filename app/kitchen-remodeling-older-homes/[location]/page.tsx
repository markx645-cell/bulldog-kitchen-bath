import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { olderHomesCopy } from '@/content/location-copy/kitchen-remodeling-older-homes';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['kitchen-remodeling-older-homes'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'kitchen-remodeling-older-homes',
  hubHref: '/kitchen-remodeling-older-homes',
  hubLabel: 'Kitchen Remodels for Older Homes',
  schemaServiceType: 'Kitchen Remodeling',
  localHeading: 'Older kitchens in {neighborhood}.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Kitchen Remodels for Older Homes', href: '/kitchen-remodeling-older-homes' },
    { label: 'Kitchen Remodels', href: '/kitchens' },
    { label: 'Bathroom Remodeling', href: '/bathroom-remodel' },
    { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
    { label: 'Basement Remodels', href: '/basement-remodel' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written.
const publishedSlugs = locations
  .filter((l) => olderHomesCopy[l.slug])
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
  if (!loc || !olderHomesCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Older Home Kitchen Remodeling in ${loc.neighborhood}, ${loc.state}`,
    description: `Kitchen remodels for older homes in ${place}. We open the walls knowing what is behind them. Call ${site.phone}.`,
    alternates: { canonical: `/kitchen-remodeling-older-homes/${loc.slug}` },
    openGraph: {
      title: `Kitchen Remodeling for Older Homes in ${place} | ${site.name}`,
      description: `Older-home kitchens in ${place} — the wiring, the plaster and the out-of-square walls handled by one team.`,
      url: `${site.url}/kitchen-remodeling-older-homes/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = olderHomesCopy[loc.slug];
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

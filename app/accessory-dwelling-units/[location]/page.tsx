import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { aduCopy } from '@/content/location-copy/accessory-dwelling-units';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['accessory-dwelling-units'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'accessory-dwelling-units',
  hubHref: '/accessory-dwelling-units',
  hubLabel: 'Accessory Dwelling Units (ADU)',
  schemaServiceType: 'General Contractor',
  localHeading: 'A second home on your {neighborhood} lot.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Accessory Dwelling Units', href: '/accessory-dwelling-units' },
    { label: 'Custom Homes', href: '/custom-homes' },
    { label: 'Barndominiums', href: '/barndominiums' },
    { label: 'Basement Remodels', href: '/basement-remodel' },
    { label: 'Kitchen Remodels', href: '/kitchens' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written.
const publishedSlugs = locations
  .filter((l) => aduCopy[l.slug])
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
  if (!loc || !aduCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `ADU Builders in ${loc.neighborhood}, ${loc.state}`,
    description: `Accessory dwelling units in ${place}. Zoning reviewed first, then one contract and one accountable team. Call ${site.phone}.`,
    alternates: { canonical: `/accessory-dwelling-units/${loc.slug}` },
    openGraph: {
      title: `Accessory Dwelling Units in ${place} | ${site.name}`,
      description: `ADUs in ${place} — zoning feasibility first, then designed and built by one team.`,
      url: `${site.url}/accessory-dwelling-units/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = aduCopy[loc.slug];
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

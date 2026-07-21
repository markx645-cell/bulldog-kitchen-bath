import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { customHomesCopy } from '@/content/location-copy/custom-homes';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['custom-homes'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'custom-homes',
  hubHref: '/custom-homes',
  hubLabel: 'Custom Homes',
  schemaServiceType: 'General Contractor',
  localHeading: 'Building new in {neighborhood}.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Custom Homes', href: '/custom-homes' },
    { label: 'Barndominiums', href: '/barndominiums' },
    { label: 'Accessory Dwelling Units', href: '/accessory-dwelling-units' },
    { label: 'Kitchen Remodels', href: '/kitchens' },
    { label: 'Basement Remodels', href: '/basement-remodel' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written.
const publishedSlugs = locations
  .filter((l) => customHomesCopy[l.slug])
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
  if (!loc || !customHomesCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Custom Home Builders in ${loc.neighborhood}, ${loc.state}`,
    description: `Custom homes in ${place}. The lot gets reviewed before you commit, then one contract and one accountable team. Call ${site.phone}.`,
    alternates: { canonical: `/custom-homes/${loc.slug}` },
    openGraph: {
      title: `Custom Home Builders in ${place} | ${site.name}`,
      description: `Ground-up homes in ${place} — lot feasibility first, then designed and built by one team.`,
      url: `${site.url}/custom-homes/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = customHomesCopy[loc.slug];
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

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { barndominiumCopy } from '@/content/location-copy/barndominiums';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['barndominiums'];

// Written once, reused across every community. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'barndominiums',
  hubHref: '/barndominiums',
  hubLabel: 'Barndominiums',
  schemaServiceType: 'General Contractor',
  localHeading: 'Building a barndominium near {neighborhood}.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Barndominiums', href: '/barndominiums' },
    { label: 'Custom Homes', href: '/custom-homes' },
    { label: 'Accessory Dwelling Units', href: '/accessory-dwelling-units' },
    { label: 'Kitchen Remodels', href: '/kitchens' },
    { label: 'Financing', href: '/financing' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists ONLY where a barndominium is genuinely a realistic proposition
// — see the note at the top of content/location-copy/barndominiums.ts. This is
// 27 communities with real acreage, not all 170. Do not widen this without
// widening the copy file for the right reasons.
const publishedSlugs = locations
  .filter((l) => barndominiumCopy[l.slug])
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
  if (!loc || !barndominiumCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Barndominium Builders near ${loc.neighborhood}, ${loc.state}`,
    description: `Barndominiums near ${place}. We review the land and confirm what the jurisdiction allows before design. Call ${site.phone}.`,
    alternates: { canonical: `/barndominiums/${loc.slug}` },
    openGraph: {
      title: `Barndominium Builders near ${place} | ${site.name}`,
      description: `Barn-style homes near ${place} — land and zoning reviewed first, then designed and built by one team.`,
      url: `${site.url}/barndominiums/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = barndominiumCopy[loc.slug];
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

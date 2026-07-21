import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { basementRemodelCopy } from '@/content/location-copy/basement-remodel';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['basement-remodel'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'basement-remodel',
  hubHref: '/basement-remodel',
  hubLabel: 'Basement Remodels',
  schemaServiceType: 'Basement Remodeling',
  localHeading: 'The square footage your {neighborhood} home already owns.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Basement Remodels', href: '/basement-remodel' },
    { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
    { label: 'Kitchen Remodels', href: '/kitchens' },
    { label: 'Accessory Dwelling Units', href: '/accessory-dwelling-units' },
    { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written.
const publishedSlugs = locations
  .filter((l) => basementRemodelCopy[l.slug])
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
  if (!loc || !basementRemodelCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Basement Remodeling in ${loc.neighborhood}, ${loc.state}`,
    description: `Basement finishing in ${place}. One in-house team, fixed pricing and a lifetime workmanship warranty. Call ${site.phone}.`,
    alternates: { canonical: `/basement-remodel/${loc.slug}` },
    openGraph: {
      title: `Basement Remodeling in ${place} | ${site.name}`,
      description: `Basement remodels in ${place} — moisture handled first, then a space worth being in.`,
      url: `${site.url}/basement-remodel/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = basementRemodelCopy[loc.slug];
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

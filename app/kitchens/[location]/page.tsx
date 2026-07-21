import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationPage, {
  type ServiceLocationConfig,
} from '@/components/ServiceLocationPage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { kitchensCopy } from '@/content/location-copy/kitchens';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['kitchens'];

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  serviceSlug: 'kitchens',
  hubHref: '/kitchens',
  hubLabel: 'Kitchen Remodels',
  schemaServiceType: 'Kitchen Remodeling',
  localHeading: 'The kitchen your {neighborhood} home should have.',
  relatedServices: [
    // Keeps a contextual link up to the hub.
    { label: 'Kitchen Remodels', href: '/kitchens' },
    { label: 'Kitchen Remodels for Older Homes', href: '/kitchen-remodeling-older-homes' },
    { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
    { label: 'Basement Remodels', href: '/basement-remodel' },
    { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written.
const publishedSlugs = locations
  .filter((l) => kitchensCopy[l.slug])
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
  if (!loc || !kitchensCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Kitchen Remodeling in ${loc.neighborhood}, ${loc.state}`,
    description: `Kitchen remodels in ${place}. One in-house team, fixed pricing and a lifetime workmanship warranty. Call ${site.phone}.`,
    alternates: { canonical: `/kitchens/${loc.slug}` },
    openGraph: {
      title: `Kitchen Remodeling in ${place} | ${site.name}`,
      description: `Kitchen remodels in ${place} — designed, built and backed by one accountable team.`,
      url: `${site.url}/kitchens/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = kitchensCopy[loc.slug];
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

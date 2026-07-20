import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, {
  type ServiceLocationConfig,
} from '@/components/LocationServicePage';
import { getLocation, getNearby, locations, placeName } from '@/content/locations';
import { bathroomRemodelCopy } from '@/content/location-copy/bathroom-remodel';
import { site } from '@/content/site';

// Written once, reused across every neighborhood. Tokens: {neighborhood}, {place}, {brand}.
const config: ServiceLocationConfig = {
  slug: 'bathroom-remodel',
  serviceName: 'Bathroom Remodeling',
  eyebrow: 'Full Bathroom Remodels',
  hubHref: '/bathroom-remodel',
  hubLabel: 'Full Bathroom Remodels',
  schemaServiceType: 'Bathroom Remodeling',
  heroImage: '/assets/bathroom-hero.webp',
  localHeading: 'Why a full bathroom remodel in {neighborhood}?',
  sharedFaqs: [
    {
      q: 'How long does a full bathroom remodel take?',
      a: 'Most full bathroom remodels are completed on site in 2–5 days. The full process — first design meeting to final walkthrough — typically runs 4–8 weeks, and most of that is design, selections and material lead times rather than work in your house.',
    },
    {
      q: 'What does a full bathroom remodel cost?',
      a: 'Our budget tiers run from around $15K for a gutted hall bath to $40K+ for a primary suite with a reconfigured layout. Where you land depends on size, whether walls move, and finish level. You get one itemised, fixed-price contract before we start.',
    },
    {
      q: 'Is the price really fixed?',
      a: 'Yes. What you sign for is what you pay. We plan and stage everything before demolition, which is what makes that possible — most change orders in this trade come from decisions that were never actually made up front.',
    },
    {
      q: 'Do you use subcontractors?',
      a: 'No. Our own in-house installers handle the job from demo through final trim, with a dedicated project manager overseeing it. That is why we can back the work with a Lifetime Workmanship Warranty.',
    },
  ],
  relatedServices: [
    // Keeps a contextual link up to the hub now that the standalone hub card
    // has been removed from the mesh.
    { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
    { label: 'Walk-In Showers', href: '/walk-in-showers' },
    { label: 'Tub Shower Combos', href: '/tub-shower-combos' },
    { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
    { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
    { label: 'Pricing Guide', href: '/pricing-guide' },
  ],
};

// A page exists only where genuinely local copy has been written. Adding a
// neighborhood to content/locations.ts does not publish a thin page for it.
const publishedSlugs = locations
  .filter((l) => bathroomRemodelCopy[l.slug])
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
  if (!loc || !bathroomRemodelCopy[loc.slug]) return {};
  const place = placeName(loc);
  return {
    title: `Bathroom Remodeling in ${loc.neighborhood}, ${loc.state}`,
    description: `Full bathroom remodels in ${place}. One in-house team, fixed pricing and a lifetime workmanship warranty. Call ${site.phone}.`,
    alternates: { canonical: `/bathroom-remodel/${loc.slug}` },
    openGraph: {
      title: `Bathroom Remodeling in ${place} | ${site.name}`,
      description: `Full bathroom remodels in ${place} — designed, built and backed by one accountable team.`,
      url: `${site.url}/bathroom-remodel/${loc.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const copy = bathroomRemodelCopy[loc.slug];
  if (!copy) notFound();

  return (
    <LocationServicePage
      config={config}
      loc={loc}
      copy={copy}
      nearby={getNearby(loc, publishedSlugs)}
    />
  );
}

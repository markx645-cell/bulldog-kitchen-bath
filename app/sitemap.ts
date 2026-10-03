import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { serviceList } from '@/content/services';
import { projects } from '@/content/projects';
import { locations } from '@/content/locations';
import { aduCopy } from '@/content/location-copy/accessory-dwelling-units';
import { barndominiumCopy } from '@/content/location-copy/barndominiums';
import { basementRemodelCopy } from '@/content/location-copy/basement-remodel';
import { bathroomFlooringCopy } from '@/content/location-copy/bathroom-flooring';
import { bathroomRemodelCopy } from '@/content/location-copy/bathroom-remodel';
import { customHomesCopy } from '@/content/location-copy/custom-homes';
import { olderHomesCopy } from '@/content/location-copy/kitchen-remodeling-older-homes';
import { kitchensCopy } from '@/content/location-copy/kitchens';
import { tubShowerCombosCopy } from '@/content/location-copy/tub-shower-combos';
import { walkInShowersCopy } from '@/content/location-copy/walk-in-showers';
import { walkInTubsCopy } from '@/content/location-copy/walk-in-tubs';

export const dynamic = 'force-static';

// Each service's neighborhood pages, keyed by route. A page is published only
// where local copy exists (see each [location]/page.tsx), so the sitemap uses
// the same test.
const locationCopyByService: Record<string, Record<string, unknown>> = {
  'accessory-dwelling-units': aduCopy,
  barndominiums: barndominiumCopy,
  'basement-remodel': basementRemodelCopy,
  'bathroom-flooring': bathroomFlooringCopy,
  'bathroom-remodel': bathroomRemodelCopy,
  'custom-homes': customHomesCopy,
  'kitchen-remodeling-older-homes': olderHomesCopy,
  kitchens: kitchensCopy,
  'tub-shower-combos': tubShowerCombosCopy,
  'walk-in-showers': walkInShowersCopy,
  'walk-in-tubs': walkInTubsCopy,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date('2026-10-03');

  const staticPaths = [
    { path: '/', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/our-process', priority: 0.8 },
    { path: '/pricing-guide', priority: 0.8 },
    { path: '/kitchen-remodel-cost-cincinnati', priority: 0.8 },
    { path: '/financing', priority: 0.7 },
    { path: '/projects', priority: 0.7 },
    { path: '/reviews', priority: 0.6 },
    { path: '/video-testimonials', priority: 0.6 },
    { path: '/contact', priority: 0.7 },
    { path: '/consult', priority: 0.8 },
  ];

  const servicePaths = serviceList.map((s) => ({ path: `/${s.slug}`, priority: 0.9 }));
  const projectPaths = projects.map((p) => ({ path: `/projects/${p.slug}`, priority: 0.6 }));

  const locationPaths = Object.entries(locationCopyByService).flatMap(([service, copy]) =>
    locations
      .filter((l) => copy[l.slug])
      .map((l) => ({ path: `/${service}/${l.slug}`, priority: 0.7 })),
  );

  // trailingSlash is on, so every URL ends in "/" to match the canonical.
  return [...staticPaths, ...servicePaths, ...projectPaths, ...locationPaths].map((p) => ({
    url: `${base}${p.path === '/' ? '/' : `${p.path}/`}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p.priority,
  }));
}

import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { serviceList } from '@/content/services';
import { locations } from '@/content/locations';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date('2026-07-15');

  const staticPaths = [
    { path: '/', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/our-process', priority: 0.8 },
    { path: '/pricing-guide', priority: 0.8 },
    { path: '/kitchen-remodel-cost-cincinnati', priority: 0.8 },
    { path: '/financing', priority: 0.7 },
    { path: '/projects', priority: 0.7 },
    { path: '/reviews', priority: 0.7 },
    { path: '/service-areas', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/consult', priority: 0.8 },
  ];

  const servicePaths = serviceList.map((s) => ({ path: `/${s.slug}`, priority: 0.9 }));
  const locationPaths = locations.map((l) => ({
    path: `/kitchen-bath-remodeling/${l.slug}`,
    priority: 0.7,
  }));

  return [...staticPaths, ...servicePaths, ...locationPaths].map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p.priority,
  }));
}

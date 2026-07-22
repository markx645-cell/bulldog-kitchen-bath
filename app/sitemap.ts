import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { serviceList } from '@/content/services';
import { projects } from '@/content/projects';
import { locations } from '@/content/locations';
import { bathroomRemodelCopy } from '@/content/location-copy/bathroom-remodel';

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
    { path: '/reviews', priority: 0.6 },
    { path: '/video-testimonials', priority: 0.6 },
    { path: '/blog', priority: 0.6 },
    { path: '/contact', priority: 0.7 },
    { path: '/consult', priority: 0.8 },
  ];

  const servicePaths = serviceList.map((s) => ({ path: `/${s.slug}`, priority: 0.9 }));
  const projectPaths = projects.map((p) => ({ path: `/projects/${p.slug}`, priority: 0.6 }));

  // Service × neighborhood pages — only those we have written local copy for.
  const bathroomLocationPaths = locations
    .filter((l) => bathroomRemodelCopy[l.slug])
    .map((l) => ({ path: `/bathroom-remodel/${l.slug}`, priority: 0.8 }));

  return [...staticPaths, ...servicePaths, ...projectPaths, ...bathroomLocationPaths].map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p.priority,
  }));
}

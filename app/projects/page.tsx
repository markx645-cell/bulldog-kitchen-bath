import type { Metadata } from 'next';
import { site, ogImage } from '@/content/site';
import { projects } from '@/content/projects';
import ProjectsBrowser from './ProjectsBrowser';
import AduVideoButton from './AduVideoButton';
import SpotOurCar from '@/components/SpotOurCar';
import Reviews from '@/components/Reviews';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Featured Projects in Cincinnati, OH',
  description:
    'Kitchen, bath, basement and laundry remodels by Bulldog Remodel Group across Greater Cincinnati and Northern Kentucky.',
  alternates: { canonical: '/projects' },
  openGraph: {
    url: '/projects',
    title: 'Featured Projects | Bulldog Remodel Group',
    description: 'Kitchen, bath and basement remodels across Greater Cincinnati and Northern Kentucky.',
    images: [ogImage],
  },
};

export default function ProjectsPage() {
  // ItemList structured data, as the production route emits.
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${site.url}/projects/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Featured Projects</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-ink md:text-7xl">
            Transformations That Speak For Themselves
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/75">
            Kitchens, bathrooms, basements, laundry rooms and more.
          </p>

          {/* Video button, close under the heading */}
          <div className="mt-8">
            <AduVideoButton />
          </div>

          {/* Intro to the browsable grid, above the filter/search bar */}
          <h2 className="mt-12 font-display text-3xl text-ink sm:text-4xl">
            Go through all our projects
          </h2>
        </div>
      </section>

      {/* ---------- FILTER + SEARCH + GRID ---------- */}
      <ProjectsBrowser />

      <Reviews variant="grid" />

      <TestimonialsCarousel />

      <SpotOurCar />

      <CTASection withForm heading="Want yours featured next?" />
    </>
  );
}

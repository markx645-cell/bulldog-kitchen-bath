import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';
import { projects } from '@/content/projects';
import ProjectsBrowser from './ProjectsBrowser';

export const metadata: Metadata = {
  title: 'Featured Projects — Bulldog Kitchen & Bath | Cincinnati, OH',
  description:
    'Recent kitchen, bath, basement, and laundry remodels from Bulldog Kitchen & Bath across Cincinnati neighborhoods.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Featured Projects — Bulldog Kitchen & Bath',
    description: 'Real Cincinnati homes. Real homeowners. Real results.',
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
            Real Cincinnati homes. Real homeowners. Real results.
          </p>
        </div>
      </section>

      {/* ---------- FILTER + SEARCH + GRID ---------- */}
      <ProjectsBrowser />

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-2xl p-12 text-center">
            <h2 className="mb-6 font-display text-4xl text-ink md:text-5xl">
              Want Yours Featured Next?
            </h2>
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

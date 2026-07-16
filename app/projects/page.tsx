import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/content/projects';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Featured Projects — Cincinnati Kitchen & Bath Remodels',
  description:
    'Browse Bulldog Kitchen & Bath’s featured kitchen, bathroom, basement and whole-home remodels. Real projects, built by one in-house team and backed for life.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Projects', href: '/projects' }]} className="mb-6" />
          <p className="eyebrow">Our work</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl  leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Featured Projects
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
            {projects.length} kitchens, bathrooms, basements and whole-home remodels — every one
            designed and installed by one in-house team, and backed by our Lifetime Workmanship
            Warranty.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group glass glass-hover flex flex-col overflow-hidden"
              >
                {p.photos[0] && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={p.photos[0].src}
                      alt={p.photos[0].alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl text-ink">{p.title}</h2>
                  {p.description && (
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{p.description}</p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink">
                    View project
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection withForm />
    </>
  );
}

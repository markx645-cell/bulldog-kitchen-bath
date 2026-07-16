import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/content/projects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Photo from '@/components/Photo';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Projects — Cincinnati Kitchen & Bath Remodels',
  description:
    'Browse a portfolio of Bulldog Kitchen & Bath remodels across Greater Cincinnati and Northern Kentucky — kitchens, bathrooms, walk-in showers, and finished basements, all built by one team.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sage">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Projects', href: '/projects' }]} className="mb-6" />
          <p className="eyebrow">Our work</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Cincinnati kitchens &amp; baths we’ve transformed
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/75">
            A sample of the homes we’ve remodeled across Greater Cincinnati and Northern Kentucky —
            every one designed, priced, and built by one accountable team.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2" data-reveal data-reveal-stagger>
            {projects.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-sage shadow-card"
              >
                <Photo label={`${p.type} · ${p.location}`} src={p.image} alt={p.title} className="aspect-[16/10] w-full" rounded="rounded-none" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-[11px] font-bold uppercase tracking-widest text-sage-600">
                    {p.type} · {p.location}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold text-ink">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{p.blurb}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-ink">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-steel">
            Want to see work like this in your own home?{' '}
            <Link href="/consult" className="font-semibold text-vermilion hover:underline">
              Book a free consultation
            </Link>{' '}
            and we’ll bring the ideas.
          </p>
        </div>
      </section>

      <CTASection withForm />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';
import { serviceList } from '@/content/services';
import Breadcrumbs from '@/components/Breadcrumbs';
import Photo from '@/components/Photo';
import ProcessSteps from '@/components/ProcessSteps';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Services — Kitchen & Bath Remodeling in Cincinnati',
  description:
    'Explore Bulldog Kitchen & Bath’s full-service remodeling: kitchens, bathrooms, walk-in showers, walk-in tubs, tub-to-shower conversions, bathroom flooring, and finished basements across Greater Cincinnati.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sage">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} className="mb-6" />
          <p className="eyebrow">Our turnkey services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Everything for your kitchen &amp; bath, under one roof
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/75">
            Design, materials, trades, and project management — all handled by one accountable team,
            with fixed pricing and a lifetime workmanship warranty on every job.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/consult" className="btn-primary">Book a Free Consult</Link>
            <a href={site.phoneHref} className="btn-ghost !border-ink/30 !bg-transparent !text-ink hover:!border-ink">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
            {serviceList.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-sage shadow-card transition-all hover:-translate-y-1 hover:border-sage hover:shadow-lift"
              >
                <Photo label={s.name} src={s.image} alt={`${s.name} in Cincinnati`} className="aspect-[16/10] w-full" rounded="rounded-none" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-[11px] font-bold uppercase tracking-widest text-sage-600">
                    {s.eyebrow}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold text-ink group-hover:text-vermilion">
                    {s.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-vermilion">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSteps />
      <CTASection withForm />
    </>
  );
}

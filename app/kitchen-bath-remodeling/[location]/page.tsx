import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { site } from '@/content/site';
import { locations, locationBySlug } from '@/content/locations';
import { serviceList } from '@/content/services';
import ProcessSteps from '@/components/ProcessSteps';
import WhyChooseUs from '@/components/WhyChooseUs';
import Faq from '@/components/Faq';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = locationBySlug[location];
  if (!loc) return {};
  return {
    title: `Kitchen & Bath Remodeling in ${loc.city}, ${loc.state}`,
    description: `Full-service kitchen and bath remodeling in ${loc.longName}, ${loc.state}. One in-house team, fixed pricing, and a Lifetime Workmanship Warranty. In-home estimates available.`,
    alternates: { canonical: `/kitchen-bath-remodeling/${loc.slug}` },
  };
}

const HERO_POOL = [
  '/assets/hero-kitchen.webp',
  '/assets/bathroom-hero.webp',
  '/assets/service-kitchen.webp',
  '/assets/service-walk-in-shower.webp',
  '/assets/about-kitchen.webp',
  '/assets/bathroom-detail-1.webp',
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = locationBySlug[location];
  if (!loc) notFound();

  const heroImage = HERO_POOL[locations.findIndex((l) => l.slug === loc.slug) % HERO_POOL.length];
  const nearby = loc.nearby.join(' and ');

  const faqs = [
    {
      q: `Do you remodel kitchens and bathrooms in ${loc.city}?`,
      a: `Yes — ${loc.longName} is in our service area, along with nearby ${nearby}. We handle full bathroom remodels, walk-in showers, tub/shower combos, walk-in tubs, bathroom flooring, kitchens and basements, all with one in-house team.`,
    },
    {
      q: `How long does a remodel take in ${loc.city}?`,
      a: 'Most full bathroom remodels are completed on-site in 2–5 days, and kitchens in about 7 days. The full process — from initial design meeting to final walkthrough — typically takes 4–8 weeks depending on selections and lead times.',
    },
    {
      q: `What does a remodel cost in ${loc.city}?`,
      a: 'It depends on the room, the materials and the layout. Walk-in showers start around $8K, and kitchen remodels generally run $35K and up depending on scope and finish level. Every project is quoted line-by-line and locked with our Price Guarantee — what you sign for is what you pay.',
    },
    {
      q: `Can I finance my ${loc.city} remodel?`,
      a: 'Yes. We partner with top home-improvement lenders to offer 0% intro APR plans, fixed monthly payments up to 120 months, and same-as-cash options. Pre-qualification takes 60 seconds with a soft credit pull only — no impact to your score.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">
                {loc.longName} · {loc.state}
              </p>
              <h1 className="mt-3 font-display text-4xl  leading-[1.04] text-ink sm:text-5xl">
                Kitchen &amp; Bath Remodeling in {loc.city}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
                {loc.blurb ??
                  `Full-service kitchen and bath remodeling for ${loc.longName} and nearby ${nearby} — one in-house team handling design, demo and installation.`}
              </p>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/70">
                Fixed pricing, licensed trades, and a Lifetime Workmanship Warranty on every project.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Let’s Discuss Your Project</Link>
                <a href={site.phoneHref} className="btn-ghost">Call {site.phone}</a>
              </div>
            </div>
            <div className="glass overflow-hidden p-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={heroImage}
                  alt={`Kitchen and bath remodeling in ${loc.city}, ${loc.state}`}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we remodel in {loc.city}</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              Everything for your dream space, handled by one team
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
            {serviceList.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="group glass glass-hover flex flex-col p-6">
                <h3 className="font-display text-lg text-ink">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{s.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSteps compact />

      <Faq faqs={faqs} heading={`Remodeling in ${loc.city}: your questions`} />

      <CTASection withForm heading={`Ready to remodel your ${loc.city} home?`} />
    </>
  );
}

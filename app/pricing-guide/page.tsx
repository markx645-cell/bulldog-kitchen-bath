import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Remodeling Pricing Guide | Bulldog Remodel Group — Cincinnati, OH',
  description:
    'Honest cost ranges for kitchen remodels, bathroom remodels and walk-in showers across Cincinnati and the Ohio, Kentucky, Indiana tri-state area.',
  alternates: { canonical: '/pricing-guide' },
  openGraph: {
    title: 'Remodeling Pricing Guide | Bulldog Remodel Group',
    description:
      'What does a kitchen or bathroom remodel actually cost in Cincinnati? Real budget ranges from Bulldog Remodel Group.',
    url: `${site.url}/pricing-guide`,
    images: ['/assets/service-kitchen.webp'],
  },
};

// Ported from the production pricing guide (TILES).
const TILES = [
  {
    title: 'What is the Cost of a Kitchen Remodel?',
    label: 'Kitchen Pricing',
    href: '/kitchens',
    range: '$35K – $120K+',
    img: '/assets/service-kitchen.webp',
    blurb:
      'From cabinet refreshes to full gut renovations with custom cabinetry, quartz countertops and new layouts.',
  },
  {
    title: 'What is the Cost of a Bathroom Remodel?',
    label: 'Bathroom Pricing',
    href: '/bathroom-remodel',
    range: '$15K – $55K+',
    img: '/assets/bathroom-hero.webp',
    blurb:
      'Hall baths, primary suites, walk-in showers, walk-in tubs and tub/shower combos — finished by our W-2 craftsmen.',
  },
  {
    title: 'What Does a Walk-In Shower Cost?',
    label: 'Walk-In Shower Pricing',
    href: '/walk-in-showers',
    range: '$8K – $20K+',
    img: '/assets/service-walk-in-shower.webp',
    blurb:
      'Most one-day shower conversions, plus fully custom tile showers with frameless glass and curbless entries.',
  },
];

function Callout({
  eyebrow,
  heading,
  body,
  href,
  cta,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <section className="section">
      <div className="container-x mx-auto max-w-2xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">{heading}</h2>
        <p className="mt-4 text-ink/75">{body}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-crimson hover:opacity-80"
        >
          {cta} <ArrowRight className="size-3" />
        </Link>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="section">
        <div className="container-x text-center">
          <p className="eyebrow">Bulldog Remodel Group · Cincinnati, OH</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-ink md:text-6xl">
            Remodeling Pricing Guide
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            Honest cost ranges for projects we complete every week across Ohio, Kentucky and
            Indiana. Pick a project type below to see real-world budget ranges, what drives the
            price, and what’s included.
          </p>
        </div>
      </section>

      {/* ---------- TILES ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
            {TILES.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group glass glass-hover flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-crimson px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                    {t.range}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <h2 className="font-display text-2xl leading-tight">{t.title}</h2>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 flex-1 leading-relaxed text-ink/75">{t.blurb}</p>
                  <div className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-crimson">
                    {t.label}
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THE DOLLARS AND CENTS ---------- */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Straight Talk</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              The Dollars and Cents
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/75 lg:col-span-8">
            <p>
              We know how big any remodeling project feels — financially and emotionally. That’s why
              we won’t prescribe quick fixes or use cut-rate materials. Getting it right takes time,
              and we wouldn’t have it any other way.
            </p>
            <p>
              Pricing varies project to project, mostly driven by your goals, the size of the space,
              and the level of finishes you choose. During our first conversation we’ll tell you
              straight up what ideas will work inside your budget — and what won’t.
            </p>
            <p>
              The figures above are real ranges from past projects we’ve completed across the
              Cincinnati tri-state area. Every home is unique, and so is every quote. The only way to
              know your project’s exact number is a free in-home consultation.
            </p>
            <p className="pt-2 font-sans text-sm uppercase tracking-widest text-ink/80">
              * What you sign for is what you pay. Bulldog Price Guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- COST GUIDE CALLOUT ---------- */}
      <Callout
        eyebrow="2026 Cost Guide"
        heading="How much does a kitchen remodel cost in Cincinnati?"
        body="Typical price ranges by project level, what drives the cost, and how to budget without surprises."
        href="/kitchen-remodel-cost-cincinnati"
        cta="Read the 2026 Cincinnati Cost Guide"
      />

      {/* ---------- PROCESS CALLOUT ---------- */}
      <Callout
        eyebrow="Our Process"
        heading="See exactly how we work"
        body="From the first phone call to the lifetime workmanship warranty — here’s the Bulldog way of remodeling."
        href="/our-process"
        cta="Read Our Remodeling Process"
      />

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-3xl p-12 text-center">
            <p className="eyebrow">Ready When You Are</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Get a real number for your project.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Free, no-pressure in-home consultations across Cincinnati and the surrounding OH, KY
              and IN tri-state area.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
                Book Free Estimate
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-white"
              >
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/content/site';
import FinancingBand from '@/components/FinancingBand';
import Faq from '@/components/Faq';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Remodeling Pricing Guide — Cincinnati, OH',
  description:
    'What a kitchen, bathroom or walk-in shower remodel actually costs in Cincinnati. Real ranges, what drives them, and the Price Guarantee that locks your number.',
  alternates: { canonical: '/pricing-guide' },
};

// Ported from the production pricing guide (TILES).
const tiles = [
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

const pricingFaqs = [
  {
    q: 'What’s included in your fixed pricing?',
    a: 'Everything: design, cabinetry, countertops, tile, fixtures, lighting, electrical, plumbing, painting, project management, post-project cleaning, and our Lifetime Workmanship Warranty.',
  },
  {
    q: 'Why are the ranges so wide?',
    a: 'Because size, layout changes, materials and finish level genuinely move the number. A one-day acrylic shower conversion and a curbless custom tile shower are different projects. Your exact price comes from a free in-home estimate.',
  },
  {
    q: 'Will the price change once you start?',
    a: 'No. What you sign for is what you pay — that’s our Price Guarantee. We plan and stage everything before demo day, so there are no mid-project change orders.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes. We partner with top home-improvement lenders to offer 0% intro APR plans, fixed monthly payments up to 120 months, and same-as-cash options. Pre-qualification takes 60 seconds with a soft credit pull only — no impact to your score.',
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-x relative py-14 lg:py-20">
          <p className="eyebrow">Pricing Guide · Cincinnati, OH</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl  leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            What Does a Remodel Actually Cost?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
            No “call for pricing” runaround. Here are the real ranges Cincinnati homeowners invest —
            and every project is quoted line-by-line and locked with our Price Guarantee.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3" data-reveal data-reveal-stagger>
            {tiles.map((t) => (
              <Link key={t.label} href={t.href} className="group glass glass-hover flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink/60">
                    {t.label}
                  </p>
                  <h2 className="mt-2 font-display text-2xl text-ink">{t.title}</h2>
                  <p className="mt-3 font-display text-3xl text-ink">{t.range}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{t.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink">
                    See details
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/60">
            Ranges reflect typical Cincinnati-area projects. Larger or non-standard layouts are quoted
            individually — call {site.phone} and we’ll talk it through.
          </p>
        </div>
      </section>

      <FinancingBand />
      <Faq faqs={pricingFaqs} heading="Pricing questions, answered" />
      <CTASection withForm heading="Want your exact number?" />
    </>
  );
}

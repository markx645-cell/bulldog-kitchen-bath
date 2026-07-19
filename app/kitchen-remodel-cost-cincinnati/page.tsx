import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { site } from '@/content/site';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title:
    'How Much Does a Kitchen Remodel Cost in Cincinnati? (2026 Guide)',
  description:
    'What a kitchen remodel really costs in Cincinnati in 2026: typical price ranges by project level, what drives the cost, timelines, and how fixed pricing prevents surprises. Call (513) 657-3750.',
  alternates: { canonical: '/kitchen-remodel-cost-cincinnati' },
  openGraph: {
    title: 'How Much Does a Kitchen Remodel Cost in Cincinnati? (2026 Guide)',
    description:
      'Typical Cincinnati kitchen remodel price ranges, cost drivers, timelines, and how to budget — from a local fixed-price remodeler.',
    type: 'article',
    url: `${site.url}/kitchen-remodel-cost-cincinnati`,
  },
};

const tiers = [
  {
    level: 'Cosmetic refresh',
    range: '$15,000–$30,000',
    includes:
      'New countertops, backsplash, hardware, lighting, paint, and either refacing or keeping existing cabinet boxes.',
  },
  {
    level: 'Mid-range full remodel',
    range: '$30,000–$60,000',
    includes:
      'New cabinetry, countertops, flooring, backsplash, fixtures, lighting, and updated plumbing/electrical within the existing footprint.',
  },
  {
    level: 'High-end / layout change',
    range: '$60,000–$100,000+',
    includes:
      'Premium cabinetry and stone, moved walls, relocated plumbing/gas, islands, custom features, and designer finishes.',
  },
];

const drivers = [
  {
    n: '1',
    title: 'Cabinetry',
    body: 'Usually the largest single line item. Stock, semi-custom, and fully custom cabinetry can swing the budget by tens of thousands of dollars.',
  },
  {
    n: '2',
    title: 'Countertops',
    body: 'Quartz, granite, and natural stone each carry different material and fabrication costs. Square footage and edge details add up.',
  },
  {
    n: '3',
    title: 'Layout changes',
    body: 'Keeping the existing footprint is the most cost-effective path. Removing walls or relocating the sink, range, or gas line means new plumbing, electrical, and sometimes structural work.',
  },
  {
    n: '4',
    title: 'Older Cincinnati homes',
    body: 'Many local homes are 50+ years old. Behind-the-wall surprises — outdated wiring, plumbing, or framing that needs to meet current code — can add cost. A thorough upfront assessment prevents most of these from becoming “surprises.”',
    link: {
      href: '/kitchen-remodeling-older-homes',
      label: 'See kitchen remodeling for older homes →',
    },
  },
  {
    n: '5',
    title: 'Finishes and fixtures',
    body: 'Lighting, faucets, hardware, tile, and appliances range from budget to luxury and are where personal taste moves the number the most.',
  },
];

const faqs = [
  {
    q: 'What is the average cost of a kitchen remodel in Cincinnati?',
    a: 'Most full remodels fall between $30,000 and $60,000, with cosmetic refreshes lower and high-end or larger kitchens running $60,000+. Size, layout changes, cabinetry, and finishes determine where you land.',
  },
  {
    q: 'What’s the most expensive part?',
    a: 'Cabinetry, then countertops and labor. Moving plumbing, gas, or electrical and removing walls add cost.',
  },
  {
    q: 'Can I get a quote without a surprise mid-project bill?',
    a: 'Yes — that’s the point of our fixed-price contract. Book an estimate and we’ll itemize everything before work begins.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes. See our financing options page for current plans and pre-qualification.',
  },
];

const prose = [
  {
    eyebrow: 'Timeline',
    heading: 'How long does a kitchen remodel take?',
    body: 'On-site installation is often around a week for our process. The full timeline — from your first design meeting through final walkthrough — typically runs four to eight weeks depending on your selections and material lead times.',
  },
  {
    eyebrow: 'No Surprises',
    heading: 'Why our pricing is fixed, not “from”',
    body: 'Most budget overruns come from change orders: the price climbs once demolition reveals what’s behind the walls, or selections creep upward without a clear contract. We work differently. After design is finalized, you receive an itemized, fixed-price contract that includes every material, finish, and scope detail — so the number you approve is the number you pay. Every install is backed by a lifetime workmanship warranty.',
  },
  {
    eyebrow: 'Return on Investment',
    heading: 'Does a kitchen remodel add value?',
    body: 'Kitchen remodels are consistently among the highest-return home improvements. Beyond resale, a well-designed kitchen changes how you use your home every day. Quality workmanship is what protects that value over time — which is why our warranty matters.',
  },
];

const related = [
  { href: '/kitchens', label: 'Kitchen Remodeling' },
  { href: '/kitchen-remodeling-older-homes', label: 'Kitchens for Older Homes' },
  { href: '/pricing-guide', label: 'Pricing Guide' },
  { href: '/financing', label: 'Financing' },
  { href: '/projects', label: 'Projects' },
];

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Does a Kitchen Remodel Cost in Cincinnati? (2026 Guide)',
  author: { '@type': 'Organization', name: site.name },
  publisher: { '@type': 'Organization', name: site.name },
  about: 'Kitchen remodel cost in Cincinnati, Ohio',
  mainEntityOfPage: `${site.url}/kitchen-remodel-cost-cincinnati`,
};

// Mirrors production: the structured-data FAQ set is broader than the visible accordion.
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average cost of a kitchen remodel in Cincinnati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most full kitchen remodels in the Cincinnati area fall between $30,000 and $60,000, with cosmetic refreshes starting lower and high-end or larger kitchens running $60,000 and up. Your exact cost depends on size, layout changes, cabinetry, and finishes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a kitchen remodel take in Cincinnati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On-site installation is often around a week, while the full process from first design meeting to final walkthrough typically runs four to eight weeks depending on selections and lead times.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most expensive part of a kitchen remodel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cabinetry is usually the single largest line item, followed by countertops and labor. Moving plumbing, gas, or electrical and structural changes like removing walls also add cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a kitchen remodel add value to my home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kitchen remodels are among the highest-return home improvements. A well-executed remodel improves daily function and resale appeal, and quality workmanship protects that value over time.',
      },
    },
  ],
};

export default function CostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* ---------- HERO / INTRO ---------- */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Cincinnati Cost Guide · Updated 2026</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-6xl">
            How Much Does a Kitchen Remodel Cost in Cincinnati?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Short answer: most full kitchen remodels in the Greater Cincinnati area land between{' '}
            <strong className="text-ink">$30,000 and $60,000</strong>, with simpler refreshes costing
            less and larger or high-end kitchens running $60,000 and up. Here’s what drives the
            number — and how to avoid the surprise costs that derail most projects.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            See our complete{' '}
            <Link href="/kitchens" className="text-crimson underline hover:opacity-80">
              kitchen remodeling services in Cincinnati
            </Link>{' '}
            for design options, timelines, and photos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Get a Fixed-Price Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-white"
            >
              <Phone className="size-4" /> Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- PRICE TABLE ---------- */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Typical Price Ranges</p>
          <h2 className="mb-8 mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            Kitchen remodel price ranges in Cincinnati
          </h2>
          <div className="glass overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="px-5 py-4 font-display text-sm font-normal text-ink md:text-base">
                    Project level
                  </th>
                  <th className="px-5 py-4 font-display text-sm font-normal text-ink md:text-base">
                    Typical range
                  </th>
                  <th className="px-5 py-4 font-display text-sm font-normal text-ink md:text-base">
                    What it usually includes
                  </th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t, i) => (
                  <tr key={t.level} className={i < tiers.length - 1 ? 'border-b border-ink/10' : ''}>
                    <td className="px-5 py-5 align-top font-semibold text-ink">{t.level}</td>
                    <td className="whitespace-nowrap px-5 py-5 align-top font-medium text-crimson">
                      {t.range}
                    </td>
                    <td className="px-5 py-5 align-top text-ink/75">{t.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink/60">
            Ranges are typical for the Cincinnati metro and vary with kitchen size and selections. We
            provide an exact, itemized fixed price after an in-home consultation.
          </p>
        </div>
      </section>

      {/* ---------- COST DRIVERS ---------- */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">What Moves the Number</p>
          <h2 className="mb-12 mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            What actually drives your cost
          </h2>
          <div className="space-y-10">
            {drivers.map((d) => (
              <div key={d.title} className="grid gap-6 border-t border-ink/10 pt-8 md:grid-cols-12">
                <div className="font-display text-4xl text-crimson md:col-span-2">{d.n}</div>
                <div className="md:col-span-10">
                  <h3 className="mb-3 font-display text-2xl text-ink">{d.title}</h3>
                  <p className="text-lg leading-relaxed text-ink/75">{d.body}</p>
                  {d.link && (
                    <Link
                      href={d.link.href}
                      className="mt-3 inline-flex items-center gap-2 border-b border-crimson pb-0.5 text-sm tracking-wide text-crimson transition-all hover:gap-3"
                    >
                      {d.link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE + FIXED PRICING + VALUE ---------- */}
      <section className="section">
        <div className="container-x max-w-3xl space-y-14">
          {prose.map((p) => (
            <div key={p.heading}>
              <p className="eyebrow">{p.eyebrow}</p>
              <h2 className="mb-4 mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
                {p.heading}
              </h2>
              <p className="text-lg leading-relaxed text-ink/75">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mb-12 mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            Frequently asked questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-2xl p-12 text-center">
            <h2 className="mb-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Get your exact number
            </h2>
            <p className="mb-10 text-lg text-ink/75">
              Ranges are a starting point — your kitchen deserves a real quote. We’ll measure,
              design, and give you a fixed price with no surprises.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
                Let’s Discuss Your Project
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-white"
              >
                <Phone className="size-4" /> Call {site.phone}
              </a>
            </div>
            <p className="mt-10 text-sm text-ink/70">
              Related:{' '}
              {related.map((r, i) => (
                <span key={r.href}>
                  <Link href={r.href} className="underline hover:text-crimson">
                    {r.label}
                  </Link>
                  {i < related.length - 1 && ' · '}
                </span>
              ))}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-ink/60">
              <ArrowRight className="size-3" /> Updated for 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { Maximize2, Wrench, LayoutGrid, ShieldCheck, Hammer, House, Warehouse } from 'lucide-react';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych, { type TriptychImage } from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['barndominiums'];

const gallery: [TriptychImage, TriptychImage, TriptychImage] = [
  {
    src: '/assets/service-barndominium-1.webp',
    alt: 'Barn-style home exterior with standing-seam metal roof and sliding barn doors',
  },
  {
    src: '/assets/service-barndominium-2.webp',
    alt: 'Open-plan barndominium interior with vaulted ceiling and exposed timber trusses',
  },
  {
    src: '/assets/service-barndominium-3.webp',
    alt: 'Modern farmhouse kitchen with exposed beam, custom cabinetry and professional range',
  },
];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/barndominiums' },
};

// Why people choose this over a conventional build.
const reasons = [
  {
    icon: Maximize2,
    title: 'More Space Per Dollar',
    body: 'A simple envelope and clear spans are efficient to build, so you can enclose more square footage for the money than a conventional house. The finishes inside still cost what finishes cost — but the shell buys you room to work with.',
  },
  {
    icon: Wrench,
    title: 'Home And Shop In One',
    body: 'A workshop, garage or equipment bay under the same roof as the kitchen, with fire separation and its own heating. No separate outbuilding, no second slab, no second roof to maintain.',
  },
  {
    icon: LayoutGrid,
    title: 'A Floor Plan That’s Actually Yours',
    body: 'Posts or steel columns carry the roof, not interior walls. That means the layout answers to how you live rather than to structure — wide-open great rooms, tall ceilings, and rooms placed where you want them.',
  },
  {
    icon: ShieldCheck,
    title: 'Built To Shrug Off Weather',
    body: 'A standing-seam metal roof and steel or engineered siding handle Ohio Valley winters with far less upkeep than shingles and lap siding — and they keep looking right for decades.',
  },
];

// The three routes in, depending on what's already on the land.
const types = [
  {
    icon: Hammer,
    title: 'Turnkey New Build',
    body: 'Bare land to finished home. Site and zoning review, foundation, shell, utilities and every interior finish — one contract, one project manager, start to walkthrough.',
  },
  {
    icon: House,
    title: 'Shell Finish-Out',
    body: 'You already have the building up. We assess what’s standing, then handle insulation, moisture control, utilities, and the full kitchen, baths and living space inside it.',
  },
  {
    icon: Warehouse,
    title: 'Barn Conversion',
    body: 'An existing barn or outbuilding turned into a legal dwelling. Structure and code compliance come first, then the envelope, then the finishes — with the character worth keeping left intact.',
  },
];

export default function Page() {
  // Service + FAQ structured data, matching our other FAQ-carrying service pages.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Barndominium Design and Construction',
    provider: {
      '@type': 'GeneralContractor',
      name: site.name,
      telephone: '+1-513-657-3750',
      areaServed: 'Greater Cincinnati, OH and the surrounding OH, KY & IN region',
      url: site.url,
    },
    areaServed: { '@type': 'City', name: 'Cincinnati' },
    description:
      'Design and construction of barndominiums in the Greater Cincinnati region, including turnkey post-frame builds, shell finish-outs and barn-to-residence conversions.',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePage service={service}>
        {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
        <section className="section">
          <div className="container-x">
            <ExpandingTriptych images={gallery} />
          </div>
        </section>

        {/* ---------- WHY BUILD ONE ---------- */}
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Why Build One</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                Why people choose a barndominium
              </h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                It isn’t only about cost. The structure itself buys you things a conventional
                stick-built house can’t easily give you.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2" data-reveal data-reveal-stagger>
              {reasons.map((r) => (
                <article key={r.title} className="glass glass-hover flex flex-col gap-4 p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/50 bg-white/40 text-crimson backdrop-blur-md">
                    <r.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl text-ink">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/75">{r.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- THREE WAYS IN ---------- */}
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Three Ways In</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                Build it, finish it, or convert it
              </h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                Where you start depends on what’s already on the land. All three end the same way —
                one fixed price and a lifetime workmanship warranty.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal data-reveal-stagger>
              {types.map((t) => (
                <article key={t.title} className="glass glass-hover flex flex-col gap-4 p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/50 bg-white/40 text-crimson backdrop-blur-md">
                    <t.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl text-ink">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/75">{t.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}

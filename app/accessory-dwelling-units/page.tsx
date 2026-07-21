import type { Metadata } from 'next';
import {
  Banknote,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  House,
  Building2,
  Warehouse,
} from 'lucide-react';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { serviceGalleries } from '@/content/serviceGalleries';
import AreasWeServe from '@/components/AreasWeServe';
import { locations } from '@/content/locations';
import { aduCopy } from '@/content/location-copy/accessory-dwelling-units';

const service = services['accessory-dwelling-units'];

// Only the neighborhoods we've written real local copy for.
const aduLocations = locations.filter((l) => aduCopy[l.slug]);

// Why homeowners actually build one. These are the four motivations we hear
// most; the rental-income note stays honest about local rules.
const reasons = [
  {
    icon: Banknote,
    title: 'Rental Income',
    body: 'A second unit on land you already own can bring in steady monthly income. What kind of letting is permitted varies by municipality, so we confirm the rules for your address during the zoning review — before you commit to anything.',
  },
  {
    icon: HeartHandshake,
    title: 'Aging Parents',
    body: 'Keep family close without moving anyone into a spare bedroom. A single-level unit with a step-free entry, a walk-in shower and grab bars gives them independence and privacy, and puts you a few steps away instead of across town.',
  },
  {
    icon: GraduationCap,
    title: 'Adult Children',
    body: 'A first place of their own that isn’t a rental across the city. Their own entrance, kitchen and bath — the independence of moving out, without the cost of moving away.',
  },
  {
    icon: Briefcase,
    title: 'Guests, Work, or Both',
    body: 'A proper guest suite over the holidays, a home office with a door that actually closes, or a studio. Because it’s a full dwelling, it can change jobs as your family does.',
  },
];

// The three builds, and what each one really involves.
const types = [
  {
    icon: House,
    title: 'Detached',
    body: 'A standalone cottage in the back yard. The most private option and the most involved build — foundation, framing, roofing and siding, plus utilities run out from the house.',
  },
  {
    icon: Building2,
    title: 'Attached',
    body: 'An addition sharing a wall with your home, but with its own entrance and no interior door. Cheaper than detached because one wall and part of the roofline already exist.',
  },
  {
    icon: Warehouse,
    title: 'Conversion',
    body: 'A garage or basement turned into a legal dwelling. Usually the most cost-effective route: the shell is already standing, so the work is insulation, moisture control, utilities, egress and finishes.',
  },
];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/accessory-dwelling-units' },
};

export default function Page() {
  // Service + FAQ structured data, matching the pattern on our other
  // FAQ-carrying service pages.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Accessory Dwelling Unit (ADU) Construction',
    provider: {
      '@type': 'GeneralContractor',
      name: site.name,
      telephone: '+1-513-657-3750',
      areaServed: 'Greater Cincinnati, OH (25-mile radius)',
      url: site.url,
    },
    areaServed: { '@type': 'City', name: 'Cincinnati' },
    description:
      'Design and construction of accessory dwelling units in the Greater Cincinnati area, including detached guest houses, garage conversions and attached in-law suites.',
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
            <ExpandingTriptych images={serviceGalleries['accessory-dwelling-units']} />
          </div>
        </section>

        {/* ---------- WHY BUILD ONE ---------- */}
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Why Build One</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                Four reasons Cincinnati homeowners add an ADU
              </h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                Most people arrive with one of these in mind — and often end up using the space for
                two or three of them over the years.
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

        {/* ---------- THREE WAYS TO BUILD ---------- */}
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Three Ways To Build</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                Detached, attached, or a conversion
              </h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                Which of these your lot supports is the first thing we check. Where more than one
                works, we price them side by side so you can compare real numbers.
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

      {/* ---------- AREAS WE SERVE — collapsed, but the links stay in the
          static HTML so the location pages remain discoverable. ---------- */}
      <AreasWeServe
        locations={aduLocations}
        hrefBase="/accessory-dwelling-units"
        serviceLabel="ADU Builders"
        heading="ADU builders near you"
        intro="Whether an ADU is possible depends on your lot and your jurisdiction. Here’s what that means where you live."
      />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ShieldCheck,
  Sparkles,
  Hammer,
  BadgeCheck,
  Clock,
  Home as HomeIcon,
  Users,
  CheckCircle2,
  Sofa,
  Bath,
  Wine,
  BedDouble,
  ArrowRight,
} from 'lucide-react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import FaqAccordion from '@/components/FaqAccordion';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { serviceGalleries } from '@/content/serviceGalleries';
import InvestSection from '@/components/InvestSection';
import { serviceInvest } from '@/content/serviceInvest';
import AreasWeServe from '@/components/AreasWeServe';
import { locations } from '@/content/locations';
import { basementRemodelCopy } from '@/content/location-copy/basement-remodel';

const service = services['basement-remodel'];

// Only the neighborhoods we've written real local copy for.
const basementLocations = locations.filter((l) => basementRemodelCopy[l.slug]);

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/basement-remodel' },
};

const serviceCards = [
  {
    icon: Sofa,
    title: 'Finished living spaces',
    body: 'Family rooms, home theaters, playrooms, home gyms, and offices designed around how your family actually uses the space.',
  },
  {
    icon: Bath,
    title: 'Basement bathrooms',
    body: 'Full or half baths added below grade — our core trade strength. Plumbing and waterproofing managed in-house.',
  },
  {
    icon: Wine,
    title: 'Wet bars & kitchenettes',
    body: 'Entertaining bars, beverage centers, and second kitchens with cabinetry, countertops, and plumbing to match.',
  },
  {
    icon: BedDouble,
    title: 'Guest & in-law suites',
    body: 'Private bedroom-and-bath suites that add real, livable square footage and resale value.',
  },
];

// the export's `why` array
const why = service.includes;

const steps = [
  { n: '01', t: 'Discovery & design', d: 'We meet at your home to discuss your vision, take measurements, and explore layouts.' },
  { n: '02', t: 'Design refinement', d: 'We refine layouts and selections together until everything fits your style and budget.' },
  { n: '03', t: 'Final approval', d: 'You sign off on selections and we issue your fixed-price contract. No scope creep.' },
  { n: '04', t: 'Planning & staging', d: 'We order and stage all materials and coordinate every licensed trade before Day 1.' },
  { n: '05', t: 'Installation', d: 'Your Project Manager oversees framing, electrical, plumbing, finishing — with daily updates.' },
  { n: '06', t: 'Final walkthrough', d: 'We complete fine-tuning and professionally clean your entire home.' },
  { n: '07', t: 'Lifetime warranty', d: 'You receive your warranty packet — we stand behind our work for life.' },
];

const faqs = service.faqs;

const trustBadges = [
  { icon: HomeIcon, label: 'Locally Owned' },
  { icon: ShieldCheck, label: 'Lifetime Warranty' },
  { icon: Users, label: 'In-House Installers' },
  { icon: BadgeCheck, label: 'Best Price Guarantee' },
  { icon: Sparkles, label: 'In-Home Estimates' },
  { icon: Clock, label: 'Rapid Turnaround' },
];

export default function BasementRemodelPage() {
  // Service + FAQ structured data, as the production route emits.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Basement Remodeling',
    provider: {
      '@type': 'GeneralContractor',
      name: site.name,
      telephone: '+1-513-657-3750',
      areaServed: 'Greater Cincinnati, OH (25-mile radius)',
      url: site.url,
    },
    areaServed: { '@type': 'City', name: 'Cincinnati' },
    description:
      'Full-service basement remodeling and finishing in the Greater Cincinnati area, including finished living spaces, basement bathrooms, wet bars and kitchenettes.',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image
          src="/assets/basement-hero.webp"
          alt="Finished basement family room remodel in Cincinnati with sectional, wet bar and recessed lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/30" />
        <div className="container-x relative flex min-h-[80vh] flex-col justify-end py-24 text-white">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-crimson">
            Basement Remodeling in Cincinnati, OH
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Turn Your Unfinished Basement Into the Best Room in the House
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            A finished basement is the most cost-effective square footage you can add to a Cincinnati
            home. We design, build, and finish it with one in-house team, a fixed price, and a
            lifetime workmanship warranty.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Let’s Discuss Your Project
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-ink"
            >
              <Phone className="size-4" /> Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- ONE TEAM ---------- */}
      <section className="section">
        <div className="container-x grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">The Bulldog Way</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              One team, one contract, one accountable result.
            </h2>
          </div>
          <div className="text-lg leading-relaxed text-ink/75 lg:col-span-7">
            <p>
              Most basement projects stall because homeowners are left coordinating a framer, an
              electrician, a plumber, a flooring crew, and a finish carpenter on their own. We handle
              all of it. Your project is led by a dedicated on-site Project Manager, guided by an
              in-house interior designer, and built by licensed trades — all under a single
              fixed-price contract. You get daily updates, dust barriers, floor protection, and a
              professional cleaning at the end.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE BUILD DOWNSTAIRS ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow">What we build downstairs</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Every square foot, finished to the same standard.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2" data-reveal data-reveal-stagger>
            {serviceCards.map((c) => (
              <article key={c.title} className="glass glass-hover flex flex-col gap-4 p-10">
                <c.icon className="size-9 text-crimson" strokeWidth={1.25} />
                <h3 className="font-display text-2xl text-ink">{c.title}</h3>
                <p className="leading-relaxed text-ink/75">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
      <section className="section">
        <div className="container-x">
          <ExpandingTriptych images={serviceGalleries['basement-remodel']} />
        </div>
      </section>

      {/* ---------- INVEST IN YOUR FUTURE ----------
          Shared with every other service page. The trust badges are already
          covered by this page's own "why homeowners choose us" block below, so
          TrustedPartnerSection is deliberately not added here — it would be a
          second run at the same argument. */}
      <InvestSection copy={serviceInvest['basement-remodel']} />

      {/* ---------- WHY HOMEOWNERS CHOOSE US ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow">Why homeowners choose us</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Why Cincinnati homeowners finish their basement with us.
            </h2>
          </div>
          <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2" data-reveal data-reveal-stagger>
            {why.map((w) => (
              <li key={w.title} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-crimson" />
                <div>
                  <h3 className="mb-1 font-display text-xl text-ink">{w.title}</h3>
                  <p className="leading-relaxed text-ink/75">{w.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass p-10 sm:p-14">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="eyebrow">Our basement remodeling process</p>
              <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
                How your basement comes to life
              </h2>
              <p className="mt-4 text-ink/75">
                A proven, step-by-step process designed for clarity, confidence, and speed.
              </p>
            </div>
            <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
              {steps.map((s) => (
                <li key={s.n} className="border-t border-ink/15 pt-6">
                  <div className="mb-3 font-sans text-xs font-medium tracking-[0.3em] text-crimson">
                    STEP {s.n}
                  </div>
                  <h3 className="mb-3 font-display text-xl text-ink">{s.t}</h3>
                  <p className="text-sm leading-relaxed text-ink/75">{s.d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 text-center">
              <Link
                href="/our-process"
                className="inline-flex items-center gap-2 border-b border-crimson pb-1 font-sans text-sm tracking-wide text-ink transition-all hover:gap-3"
              >
                See the full step-by-step process <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE AREA ---------- */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Serving the Greater Cincinnati area</p>
          <h2 className="mb-6 mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Local, licensed, and at your door.
          </h2>
          <p className="text-lg leading-relaxed text-ink/75">
            We remodel basements within roughly 25 miles of Cincinnati, including Hyde Park, Oakley,
            Montgomery, Blue Ash, Mason, West Chester, Loveland, Milford, and Wyoming — plus Northern
            Kentucky communities like Crestview Hills, Fort Mitchell, and Edgewood.
          </p>
        </div>
      </section>

      {/* ---------- TRUST BADGES ---------- */}
      <section className="section">
        <div className="container-x">
          <div
            className="glass grid grid-cols-2 gap-8 p-8 md:grid-cols-3 lg:grid-cols-6"
            data-reveal
            data-reveal-stagger
          >
            {trustBadges.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-center">
                <t.icon className="size-7 text-crimson" />
                <div className="font-sans text-xs uppercase tracking-widest text-ink">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Basement remodeling FAQs</p>
          <h2 className="mb-12 mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Questions, answered.
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-2xl p-12 text-center">
            <Hammer className="mx-auto mb-6 size-10 text-crimson" strokeWidth={1.25} />
            <h2 className="mb-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Ready to reclaim your lower level?
            </h2>
            <p className="mb-10 text-lg text-ink/75">
              From design to done, without the stress of juggling contractors. Let’s plan your
              basement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
                Let’s Discuss Your Project
              </Link>
              <a href={site.phoneHref} className="btn-ghost inline-flex items-center gap-2">
                <Phone className="size-4" /> Call {site.phone}
              </a>
            </div>
            <p className="mt-10 text-sm text-ink/70">
              Related:{' '}
              <Link href="/kitchens" className="underline hover:text-crimson">Kitchen Remodeling</Link> ·{' '}
              <Link href="/bathroom-remodel" className="underline hover:text-crimson">Bathroom Remodeling</Link> ·{' '}
              <Link href="/our-process" className="underline hover:text-crimson">Our Process</Link> ·{' '}
              <Link href="/projects" className="underline hover:text-crimson">Featured Projects</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- AREAS WE SERVE — collapsed, but the links stay in the
          static HTML so the location pages remain discoverable. ---------- */}
      <AreasWeServe
        locations={basementLocations}
        hrefBase="/basement-remodel"
        serviceLabel="Basement Remodeling"
        heading="Basement finishing near you"
        intro="Whether a basement can be finished depends on what is happening below grade. Here’s what that means where you live."
      />
    </>
  );
}

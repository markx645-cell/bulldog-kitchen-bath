import Link from 'next/link';
import Image from 'next/image';
import SharedInvestSection from '@/components/InvestSection';
import { serviceInvest } from '@/content/serviceInvest';
import {
  Phone,
  ShieldCheck,
  Wrench,
  Sparkles,
  Hammer,
  Droplets,
  BadgeCheck,
  Clock,
  Home as HomeIcon,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import BathroomInterestForm from '@/components/BathroomInterestForm';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { serviceGalleries } from '@/content/serviceGalleries';

/**
 * The Full Bathroom Remodel master-page sections, extracted so the hub page and
 * every /bathroom-remodel/[location] page render the same components.
 *
 * Location pages carry the full master experience; only the hero, the local
 * relevance block, the common-situations lead-in, the FAQ and the nearby-areas
 * mesh differ. Keeping these here is what stops the two drifting apart.
 */

const service = services['bathroom-remodel'];
const includes = service.includes;
const budget = service.budget!;

const replacements = [
  'Shower & Tub',
  'Vanity & Countertops',
  'Toilet',
  'Tile & Flooring',
  'Drywall & Paint',
  'Lighting & Accessories',
];

const objections = [
  {
    q: 'It sounds expensive.',
    a: 'A full remodel is an investment, but it’s one that pays back. We’re priced competitively for the region, and bathroom remodels consistently rank among the highest-ROI projects you can make to a home — most of our clients recover a meaningful share of the cost at resale.',
  },
  {
    q: 'How long will my bathroom be out of commission?',
    a: 'Most full bathroom remodels are completed on-site in just 2–5 days. Our team works efficiently and tells you up front what to expect, so you always know how much longer you’ll be sharing the hall bath.',
  },
  {
    q: 'The disruption sounds like a lot.',
    a: 'We hear this often. Our crew handles demo through final touches in-house — no rotating subs, no strangers in your home for months. We keep the workspace clean every day and are out by 6pm so your evenings stay yours.',
  },
];

const reimagine = [
  {
    icon: Hammer,
    title: 'A complete reinvention',
    body: 'More than fixture swaps — we re-plan layouts, update plumbing and electrical, and rebuild every surface so the finished room feels intentional from corner to corner.',
  },
  {
    icon: Wrench,
    title: 'Designed around how you live',
    body: 'Every project starts with an in-depth conversation about how you actually use the space. Then we translate that into precise plans that improve flow, storage and light.',
  },
  {
    icon: Droplets,
    title: 'Built to outlast trends',
    body: 'Premium tile, fixtures and cabinetry installed by licensed plumbers, electricians and tile setters who care that the floor is level and the grout lines are straight.',
  },
];

const trustBadges = [
  { icon: HomeIcon, label: 'Locally Owned' },
  { icon: ShieldCheck, label: 'Lifetime Warranty' },
  { icon: Users, label: 'In-House Installers' },
  { icon: BadgeCheck, label: 'Best Price Guarantee' },
  { icon: Sparkles, label: 'In-Home Estimates' },
  { icon: Clock, label: 'Rapid Turnaround' },
];

export const otherServices = [
  { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
  { label: 'Walk-In Showers', href: '/walk-in-showers' },
  { label: 'Tub & Shower Combos', href: '/tub-shower-combos' },
  { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
  { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
  { label: 'Kitchens', href: '/kitchens' },
];

/**
 * The "gut it & start fresh" prose and the Installation & Replacement list,
 * without a section wrapper or heading — so it can either stand alone on the
 * hub (GutItSection) or fold into the local-relevance section on a location
 * page, which shares the same two-column layout.
 */
export function GutItBody() {
  return (
    <>
      <p>
        A wet-space refresh is wonderful — but a full remodel goes further. We take the room all the
        way down to the studs and rebuild from scratch, so nothing gets patched, hidden, or left to
        become next year’s problem.
      </p>
      <p>
        No subcontractor handoffs. No vanishing project manager. The same crew is in your home from
        demo day to the last fixture, and they answer to us.
      </p>
      <div>
        <h3 className="mb-4 font-display text-2xl text-ink">Installation &amp; Replacement</h3>
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {replacements.map((r) => (
            <li key={r} className="flex items-center gap-3 text-ink">
              <CheckCircle2 className="size-4 shrink-0 text-crimson" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/** "Gut it & start fresh" — why a full remodel rather than a refresh. */
export function GutItSection() {
  return (
    <section className="section">
      <div className="container-x grid items-start gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Gut it &amp; start fresh</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Why a full bathroom remodel?
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-ink/75 lg:col-span-7">
          <GutItBody />
        </div>
      </div>
    </section>
  );
}

/**
 * "The package" — the nine things every project includes.
 * Pass `neighborhood` on a location page to localise the eyebrow.
 */
export function PackageSection({ neighborhood }: { neighborhood?: string }) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow">{neighborhood ? `The package in ${neighborhood}` : 'The package'}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Our Full Bathroom Remodel includes everything above — plus the work most contractors
            quietly skip.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
          {includes.map((item) => (
            <div key={item.title} className="glass glass-hover p-10">
              <div className="mb-6 flex size-10 items-center justify-center border border-crimson">
                <CheckCircle2 className="size-5 text-crimson" />
              </div>
              <h3 className="mb-3 font-display text-2xl text-ink">{item.title}</h3>
              <p className="leading-relaxed text-ink/75">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Budget tiers, from content/services.ts. */
export function BudgetSection({ neighborhood }: { neighborhood?: string }) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">
            {neighborhood ? `Budget ranges in ${neighborhood}` : 'Budget ranges'}
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            {neighborhood ? `${budget.title} in ${neighborhood}` : budget.title}
          </h2>
          {budget.intro && <p className="mt-4 leading-relaxed text-ink/75">{budget.intro}</p>}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal data-reveal-stagger>
          {budget.tiers.map((t) => (
            <div
              key={t.name}
              className={`glass flex flex-col p-8 ${t.highlight ? 'ring-2 ring-crimson/40' : ''}`}
            >
              {t.highlight && (
                <span className="mb-3 w-fit rounded-full bg-crimson px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl text-ink">{t.name}</h3>
              <p className="mt-2 font-display text-3xl text-crimson">{t.range}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{t.tagline}</p>
              <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
                {t.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2 text-sm text-ink/85">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-crimson" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {budget.footnote && (
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/60">{budget.footnote}</p>
        )}
      </div>
    </section>
  );
}

/** The three-image expanding triptych. */
export function TriptychSection() {
  return (
    <section className="section">
      <div className="container-x">
        <ExpandingTriptych images={serviceGalleries['bathroom-remodel']} />
      </div>
    </section>
  );
}

/** "Invest in your future" — ROI, plus the two detail photos. */
/**
 * Delegates to the shared component so the bathroom pages and every other
 * service render the same section. The copy lives in content/serviceInvest.ts.
 */
export function InvestSection({ neighborhood }: { neighborhood?: string }) {
  return <SharedInvestSection copy={serviceInvest['bathroom-remodel']} neighborhood={neighborhood} />;
}

/** "Honest answers" — the three objections we actually hear. */
export function HonestAnswersSection({ neighborhood }: { neighborhood?: string }) {
  return (
    <section className="section">
      <div className="container-x max-w-4xl">
        <p className="eyebrow">
          {neighborhood ? `Honest answers for ${neighborhood} homeowners` : 'Honest answers'}
        </p>
        <h2 className="mb-12 mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
          Is a full bathroom remodel right for me?
        </h2>
        <p className="mb-12 text-lg text-ink/75">
          A full remodel is a bigger commitment than a tub or shower swap — and we get that. Here are
          the hesitations we hear most:
        </p>
        <div className="space-y-10">
          {objections.map((o) => (
            <div key={o.q} className="border-t border-ink/10 pt-8">
              <h3 className="mb-4 font-display text-2xl text-ink md:text-3xl">“{o.q}”</h3>
              <p className="text-lg leading-relaxed text-ink/75">{o.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "From outdated to outstanding" — the three-up reimagine block. */
export function OutdatedSection({ neighborhood }: { neighborhood?: string }) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="eyebrow">
            {neighborhood
              ? `From outdated to outstanding in ${neighborhood}`
              : 'From outdated to outstanding'}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Reimagine your entire bathroom space.
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3" data-reveal data-reveal-stagger>
          {reimagine.map((r) => (
            <div key={r.title}>
              <r.icon className="mb-6 size-8 text-crimson" />
              <h3 className="mb-4 font-display text-2xl text-ink">{r.title}</h3>
              <p className="leading-relaxed text-ink/75">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "Your trusted partner" — why homeowners choose us, plus the six badges. */
export function TrustedPartnerSection({ neighborhood }: { neighborhood?: string }) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="glass grid items-center gap-16 p-10 sm:p-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">
              {neighborhood ? `Your trusted partner in ${neighborhood}` : 'Your trusted partner'}
            </p>
            <h2 className="mb-8 mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              {neighborhood ? `Why ${neighborhood} homeowners choose us.` : 'Why homeowners choose us.'}
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                We’re a local team that knows the homes in our area — their quirks, their codes,
                their architecture. That means tailored solutions that feel right at home, not
                cookie-cutter installs forced into the wrong space.
              </p>
              <p>
                A remodel can be disruptive. We make it the opposite. Clear communication, clean
                worksites, honest timelines and a single project manager who actually picks up the
                phone.
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-10 !bg-crimson hover:!bg-crimson-600">
              Let’s Discuss Your Project
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4" data-reveal data-reveal-stagger>
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center gap-4 rounded-xl border border-white/50 bg-white/30 p-10 text-center backdrop-blur-md transition-colors hover:bg-white/45"
              >
                <b.icon className="size-7 text-crimson" />
                <span className="font-display text-xl text-ink">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Contact block with the qualifying interest form. */
export function ContactSection({
  place,
  neighborhood,
}: {
  place?: string;
  neighborhood?: string;
}) {
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">
            {neighborhood ? `Serving ${neighborhood} — contact us today` : 'Contact Us Today'}
          </p>
          <h2 className="mb-6 mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Tell us about your project — we’ll take it from there.
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-ink/75">
            Share a few details and a member of our team will reach out to get the ball rolling
            {place ? ` in ${place}` : ''}. There’s no obligation and no pressure to move forward.
          </p>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 font-display text-2xl text-ink transition hover:text-crimson"
          >
            <Phone className="size-5 text-crimson" /> {site.phone}
          </a>
        </div>

        <div className="glass max-w-3xl p-6 md:p-10">
          <BathroomInterestForm />
        </div>
      </div>
    </section>
  );
}

/** "Explore more" — the other services list. */
export function OtherServicesSection() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <p className="eyebrow">Explore More</p>
        <h2 className="mb-10 mt-4 font-display text-3xl text-ink md:text-4xl">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {otherServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="border-b border-transparent pb-1 font-display text-lg text-ink transition hover:border-crimson hover:text-crimson"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

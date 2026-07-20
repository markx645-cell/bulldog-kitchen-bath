import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Check,
  Wrench,
  Ruler,
  Zap,
  Droplets,
  Hammer,
  FileCheck,
} from 'lucide-react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { serviceGalleries } from '@/content/serviceGalleries';
import InvestSection from '@/components/InvestSection';
import { serviceInvest } from '@/content/serviceInvest';
import { TrustedPartnerSection } from '@/components/bathroom/Sections';

const service = services['kitchen-remodeling-older-homes'];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/kitchen-remodeling-older-homes' },
};

const signs = [
  {
    icon: Ruler,
    title: 'Two people can’t pass',
    body: 'Original floor plans assumed one cook. If the fridge door blocks the stove, no new countertop fixes that — the layout itself has to change.',
  },
  {
    icon: Zap,
    title: 'Lights flicker with the microwave',
    body: 'A sign the kitchen is still sharing one or two original circuits. Modern appliances need dedicated lines and a panel that can carry them.',
  },
  {
    icon: Droplets,
    title: 'Slow drains, low pressure',
    body: 'Galvanized supply lines corrode from the inside. We almost always recommend swapping them for PEX or copper while the walls are open.',
  },
  {
    icon: Hammer,
    title: 'Bouncy or sloping floors',
    body: 'Subfloor rot or undersized joists. Quartz and porcelain are heavy — uneven floors have to be addressed before new cabinets go in.',
  },
  {
    icon: Wrench,
    title: 'Cabinets you can’t actually use',
    body: 'Shallow uppers, dead corners, no pull-outs. Refinishing keeps the same problem — a redesigned cabinet plan solves it.',
  },
  {
    icon: FileCheck,
    title: 'No GFCI, no range hood vent',
    body: 'Pre-1980 kitchens rarely meet current code. Anything more than a like-for-like swap triggers updates — better to plan them in.',
  },
];

const keep = [
  'Original hardwood floors — almost always refinishable',
  'Solid plaster walls with crisp original trim and casing',
  'Built-in china cabinets, breakfast nooks, butler’s pantries',
  'Quarter-sawn oak or maple cabinets if the layout still works',
  'Wide original baseboards and door casings',
  'Period light fixtures that can be rewired',
];

const replace = [
  'Cabinets with shallow uppers, dead corners and no soft-close',
  'Galvanized supply lines and old gate-valve shut-offs',
  'Fuse boxes, knob-and-tube runs, two-prong outlets',
  'Recirculating hoods with no exterior vent',
  'Single-pane casement windows over the sink (with permits)',
  'Worn vinyl or laminate flooring over rotted subfloor',
];

const timeline = [
  {
    title: 'Design & selections — 3 to 5 weeks',
    body: 'Field measure, cabinet layout, plumbing and electrical plan, and material selections. Custom or semi-custom cabinetry adds 4–8 weeks of lead time, so we order early and stage everything before demo.',
  },
  {
    title: 'Permits — 1 to 3 weeks',
    body: 'Cincinnati and Hamilton County require permits for any work that touches structure, electrical or plumbing. We pull and coordinate them so you’re not chasing inspectors.',
  },
  {
    title: 'Construction — 6 to 10 weeks on-site',
    body: 'Demo, rough-in electrical and plumbing, inspections, drywall, flooring, cabinets, counters, backsplash, paint, hardware, final inspection. In an older home, plan for a few days of unknowns once the walls open — almost always resolvable inside the same week.',
  },
];

const tiers = [
  {
    name: 'Refresh + Systems',
    range: '$40K – $60K',
    tag: 'Same footprint, updated wiring and plumbing, new cabinets and counters.',
  },
  {
    name: 'Layout Reset',
    range: '$60K – $85K',
    tag: 'Wall removed or relocated, fully replumbed and rewired, semi-custom cabinetry.',
    highlight: true,
  },
  {
    name: 'Full Restoration',
    range: '$85K – $120K+',
    tag: 'Structural work, custom cabinetry, restored period details, premium finishes.',
  },
];

const checklist = [
  'Electrical panel capacity and existing circuit load',
  'Wiring type — knob-and-tube, cloth-jacket, aluminum, modern romex',
  'Supply lines — galvanized, copper, PEX',
  'Drain and vent layout under the kitchen floor',
  'Subfloor and joist condition (moisture, rot, span)',
  'Load-bearing wall locations and header sizing',
  'Existing ventilation and ductwork routing',
  'Insulation, air sealing, and any signs of pest or mold',
];

const faqs = [
  {
    q: 'How much does it cost to remodel a kitchen in an older Cincinnati home?',
    a: 'Most projects we take on fall between $40,000 and $95,000. The wider range vs. a newer home reflects what we usually find behind the walls — electrical, plumbing and minor structural work that almost always needs updating.',
  },
  {
    q: 'How long will my kitchen be out of service?',
    a: 'Plan on 6–10 weeks on-site once demo begins, plus 4–6 weeks of design and material lead time before we start. We stage everything in advance so the days the room is unusable are as few as possible.',
  },
  {
    q: 'Do I always need to upgrade my electrical panel?',
    a: 'Not always — but if your panel is 100A or smaller, or still has fuses, we’ll typically recommend an upgrade so the new kitchen circuits have room to live. We’ll tell you straight after the walk-through.',
  },
  {
    q: 'Can I keep my original hardwood floors and trim?',
    a: 'Almost always yes. Original oak floors usually refinish beautifully, and period trim and built-ins can be carefully removed, stored, and reinstalled. That kind of detail is what makes an older kitchen feel like it belongs in the house.',
  },
  {
    q: 'Do you pull the permits?',
    a: 'Yes. We pull every required Cincinnati and Hamilton County permit and meet the inspectors on-site. You don’t deal with the building department at all.',
  },
];

export default function OlderHomesPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={service.image}
          alt="Remodeled kitchen in an older Cincinnati home"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/40" />
        <div className="container-x relative flex min-h-[70vh] flex-col justify-end py-24 text-white">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-crimson">
            Older Home Specialists · Cincinnati, OH
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight md:text-6xl lg:text-7xl">
            Kitchen Remodeling for Older Homes in Cincinnati
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Pre-war bungalows, mid-century ranches, century-old farmhouses — they all share one
            thing: a kitchen built for a very different way of living. Here’s how we bring them into
            the present without erasing the character that made you love the house.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Let’s Discuss Your Project
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-ink"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- QUICK TAKE ---------- */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Quick Take</p>
          <p className="mt-3 text-lg leading-relaxed text-ink/75 md:text-xl">
            Older-home kitchen remodels in Cincinnati typically run{' '}
            <strong className="text-ink">$40K–$95K</strong> and take{' '}
            <strong className="text-ink">6–10 weeks</strong> on-site once demo begins. The biggest
            variables aren’t finishes — they’re the wiring, plumbing and structural surprises hiding
            behind the plaster. A team that opens up the walls early, prices the unknowns honestly,
            and pulls the right Cincinnati permits is the difference between a project that lands on
            budget and one that doesn’t.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Looking for a broader overview? See our{' '}
            <Link href="/kitchens" className="text-crimson underline hover:opacity-80">
              kitchen remodeling services in Cincinnati
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---------- WHY IT'S DIFFERENT ---------- */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Why It’s Different</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              An older kitchen is really three projects in one.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/75 lg:col-span-8">
            <p>
              In a 1990s build, a kitchen remodel is mostly a finish job — pull cabinets, set new
              ones, swap counters, paint. In a 1925 Hyde Park bungalow or a 1955 Cheviot ranch, the
              same scope of work is layered on top of two other projects that have to happen first:
              an electrical update so your appliances stop tripping breakers, and a plumbing update
              so the new sink and dishwasher don’t fail in three years.
            </p>
            <p>
              The good news is that older Cincinnati homes were built with materials and framing you
              just can’t buy anymore. Once we sort out what’s behind the walls, the bones are usually
              excellent — and the finished kitchen feels like it belonged there all along.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SIGNS ---------- */}
      <section className="section">
        <div className="container-x">
          <h2 className="mb-10 font-display text-3xl text-ink md:text-4xl">
            Signs your older kitchen is past a cosmetic refresh
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
            {signs.map((it) => (
              <div key={it.title} className="glass glass-hover flex flex-col gap-3 p-8">
                <div className="flex items-center gap-3">
                  <it.icon className="size-5 shrink-0 text-crimson" />
                  <h3 className="font-display text-xl text-ink">{it.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink/75">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BEHIND THE WALLS ---------- */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">What We Find Behind the Walls</p>
          <h2 className="mb-10 mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            The four issues we plan for on every pre-1980 Cincinnati kitchen
          </h2>

          <div className="space-y-10 text-lg leading-relaxed">
            <div>
              <h3 className="mb-2 font-display text-2xl text-ink">1. Undersized electrical</h3>
              <p className="text-ink/75">
                Most older Cincinnati kitchens were wired with two general-purpose circuits and a
                handful of outlets. Today’s code calls for dedicated circuits for the range, fridge,
                dishwasher, microwave and disposal, plus GFCI and AFCI protection along the counter.
                Panel upgrades and a sub-panel run typically add{' '}
                <strong className="text-ink">$2,500–$6,000</strong> depending on how much rewiring
                the rest of the house needs.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-display text-2xl text-ink">2. Aging supply and drain lines</h3>
              <p className="text-ink/75">
                Galvanized supply lines, cast-iron drains and old shut-offs that fuse open. We
                replumb the kitchen back to a main accessible shut-off using PEX or copper, swap
                drains where rot is visible, and re-vent the sink correctly. Most kitchen replumbs
                run <strong className="text-ink">$1,500–$4,500</strong>.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-display text-2xl text-ink">
                3. Settled floors and out-of-square walls
              </h3>
              <p className="text-ink/75">
                A century of settling means very few older homes have a perfectly level floor or a
                truly plumb wall. We shim cabinets in 1/16&quot; increments and scribe end panels so
                the finished install looks tight everywhere — even when the room itself isn’t.
                Significant subfloor or joist work is quoted separately and only when we find it.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-display text-2xl text-ink">4. No exterior range vent</h3>
              <p className="text-ink/75">
                Recirculating hoods were standard for decades and they don’t actually remove moisture
                or grease. Cutting in a proper exterior vent — through a sidewall or up through the
                roof — is one of the highest-impact upgrades in an older kitchen, and it’s now
                required by code for most range installs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- KEEP VS REPLACE ---------- */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="glass p-10">
            <p className="eyebrow">Keep</p>
            <h3 className="mb-6 mt-3 font-display text-3xl text-ink">What’s usually worth saving</h3>
            <ul className="space-y-3 text-ink/75">
              {keep.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-crimson" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-10">
            <p className="eyebrow">Replace</p>
            <h3 className="mb-6 mt-3 font-display text-3xl text-ink">
              What’s usually worth changing
            </h3>
            <ul className="space-y-3 text-ink/75">
              {replace.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-crimson" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- PERMITS & TIMELINE ---------- */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Permits &amp; Timeline</p>
          <h2 className="mb-10 mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            How long an older-home kitchen actually takes
          </h2>
          <div className="space-y-8">
            {timeline.map((t) => (
              <div key={t.title} className="border-l-2 border-crimson pl-6">
                <h3 className="mb-2 font-display text-2xl text-ink">{t.title}</h3>
                <p className="text-ink/75">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
      <section className="section">
        <div className="container-x">
          <ExpandingTriptych images={serviceGalleries['kitchen-remodeling-older-homes']} />
        </div>
      </section>

      {/* ---------- INVEST IN YOUR FUTURE — shared with every service page ---------- */}
      <InvestSection copy={serviceInvest['kitchen-remodeling-older-homes']} />

      {/* ---------- BUDGET RANGES ---------- */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow text-center">Budget Ranges</p>
          <h2 className="mb-12 mt-3 text-center font-display text-4xl text-ink md:text-5xl">
            What older-home kitchens actually cost in Cincinnati
          </h2>
          <div className="grid gap-6 md:grid-cols-3" data-reveal data-reveal-stagger>
            {tiers.map((t) => (
              <div key={t.name} className={`glass p-8 ${t.highlight ? 'ring-2 ring-crimson/40' : ''}`}>
                <h3 className="mb-2 font-display text-2xl text-ink">{t.name}</h3>
                <div className="mb-3 font-display text-xl font-semibold text-crimson">{t.range}</div>
                <p className="text-sm leading-relaxed text-ink/75">{t.tag}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/60">
            Every number above is line-itemed in your proposal and locked with our Price Guarantee —
            what you sign is what you pay, even when we find surprises behind the plaster.
          </p>
        </div>
      </section>

      {/* ---------- PRE-CONSTRUCTION CHECKLIST ---------- */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <h2 className="mb-8 font-display text-3xl text-ink md:text-4xl">
            What we inspect before we quote your project
          </h2>
          <ul className="grid gap-4 text-ink/75 md:grid-cols-2">
            {checklist.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-crimson" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- YOUR TRUSTED PARTNER ----------
          Replaces the four-icon trust band that used to sit here: it carries the
          same badges plus Locally Owned and In-Home Estimates, along with the
          copy and CTA, so the band was a strict subset of it. */}
      <TrustedPartnerSection />

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <h2 className="mb-10 text-center font-display text-4xl text-ink md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="mb-2 font-display text-xl text-ink">{f.q}</h3>
                <p className="leading-relaxed text-ink/75">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-3xl p-12 text-center">
            <h2 className="mb-6 font-display text-4xl text-ink md:text-5xl">
              Ready to bring your older Cincinnati kitchen into this century?
            </h2>
            <p className="mb-10 text-lg text-ink/75">
              We’ll walk the space with you, open up the questions that matter, and put a real,
              line-itemed number on the table — backed by our Price Guarantee and lifetime
              workmanship warranty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
                Let’s Discuss Your Project
              </Link>
              <a href={site.phoneHref} className="btn-ghost inline-flex items-center gap-2">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

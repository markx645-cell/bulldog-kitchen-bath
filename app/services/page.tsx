import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Full bathroom remodels, walk-in showers, tub shower combos, bathroom flooring, walk-in tubs, kitchen remodels, basements and accessory dwelling units — built by one in-house team and backed for life.',
  alternates: { canonical: '/services' },
};

// The production hub lists only the first six, with its own blurbs (which
// differ from each service page's own copy). Older-homes and basement are
// appended here deliberately: both pages exist and are in the nav, so leaving
// them off the hub only hid them. Their blurbs come from each page's own copy.
const services = [
  {
    title: 'Full Bathroom Remodels',
    to: '/bathroom-remodel',
    image: '/assets/service-bathroom.webp',
    blurb:
      'Down-to-the-studs bathroom remodels handled by one in-house team. Custom vanities, tile, fixtures and finishes — completed in 2–5 days.',
  },
  {
    title: 'Walk-In Showers',
    to: '/walk-in-showers',
    image: '/assets/service-walk-in-shower.webp',
    blurb:
      'From dreadful tub to stunning walk-in shower in as little as one day. Anti-slip ADA bases, Triple-Lock Seam backerboard, lifetime warranty.',
  },
  {
    title: 'Tub Shower Combos',
    to: '/tub-shower-combos',
    image: '/assets/service-tub-combo.webp',
    blurb:
      'The best of both worlds. Handcrafted insulated tubs paired with custom wall systems — depths from 13″ to 22″ to fit any household.',
  },
  {
    title: 'Bathroom Flooring',
    to: '/bathroom-flooring',
    image: '/assets/service-flooring.webp',
    blurb:
      'Premier flooring installation — luxury vinyl, porcelain tile and natural stone. Waterproof prep, slip-resistant finishes, lifetime warranty.',
  },
  {
    title: 'Walk-In Tubs',
    to: '/walk-in-tubs',
    image: '/assets/service-walk-in-tub.webp',
    blurb:
      'Custom-fabricated walk-in tubs with whirlpool, air spa, in-line heaters and aromatherapy. Accessible bathing without sacrificing luxury.',
  },
  {
    title: 'Kitchen Remodels',
    to: '/kitchens',
    image: '/assets/service-kitchen.webp',
    blurb:
      'Full kitchen remodels — cabinets, countertops, flooring, backsplash and plumbing. Most kitchens completed in about 7 days.',
  },
  {
    title: 'Kitchen Remodels for Older Homes',
    to: '/kitchen-remodeling-older-homes',
    image: '/assets/about-kitchen.webp',
    blurb:
      'Pre-war bungalows, mid-century ranches and century farmhouses. We update the wiring, plumbing and layout without erasing the character that made you love the house.',
  },
  {
    title: 'Basement Remodels',
    to: '/basement-remodel',
    image: '/assets/basement-hero.webp',
    blurb:
      'A finished basement is the most cost-effective square footage you can add. Living spaces, basement bathrooms, wet bars and guest suites — designed and built by one in-house team.',
  },
  {
    title: 'Accessory Dwelling Units (ADU)',
    to: '/accessory-dwelling-units',
    image: '/assets/service-adu.webp',
    blurb:
      'Detached guest houses, garage conversions and in-law suites. Zoning reviewed and permits managed up front, then designed and built by one accountable team.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Cincinnati · Northern Kentucky · Southeast Indiana</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
            Built By One Team. Backed For Life.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            Whether it’s a single shower swap or a full kitchen remodel, every Bulldog project is
            handled by our in-house crew — design, demo, and install under one roof, with a lifetime
            workmanship warranty.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Let’s Discuss Your Project
            </Link>
            <a href={site.phoneHref} className="btn-ghost inline-flex items-center gap-2">
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- GRID ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
            {services.map((s) => (
              <Link
                key={s.to}
                href={s.to}
                className="group glass glass-hover flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 font-display text-2xl text-ink">{s.title}</h2>
                  <p className="flex-1 text-sm leading-relaxed text-ink/75">{s.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-crimson">
                    Learn More
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA BAND ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass grid items-center gap-10 p-10 sm:p-14 md:grid-cols-[2fr_1fr]">
            <div>
              <p className="eyebrow">Ready When You Are</p>
              <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
                Get Your In-Home Estimate
              </h2>
              <p className="mt-4 max-w-xl text-ink/75">
                Real numbers, real timelines, no pressure. We’ll walk your space, talk through
                options, and follow up with a fixed-price quote.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="btn-primary !bg-crimson hover:!bg-crimson-600 inline-flex items-center justify-center gap-2"
              >
                <Phone className="size-4" /> Call {site.phone}
              </a>
              <Link href="/" className="btn-ghost text-center">
                ← Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

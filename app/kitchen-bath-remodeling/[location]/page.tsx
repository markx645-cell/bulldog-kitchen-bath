import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/content/site';
import { locations, locationBySlug } from '@/content/locations';
import { serviceList } from '@/content/services';
import { reviews } from '@/content/reviews';
import Breadcrumbs from '@/components/Breadcrumbs';
import Photo from '@/components/Photo';
import ProcessSteps from '@/components/ProcessSteps';
import WhyChooseUs from '@/components/WhyChooseUs';
import Faq from '@/components/Faq';
import ReviewsList from '@/components/ReviewsList';
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
    description: `Bulldog Kitchen & Bath remodels kitchens and bathrooms in ${loc.city}, ${loc.state}. Fixed pricing, in-house design, one accountable team, and a lifetime workmanship warranty. Book a free consult.`,
    alternates: { canonical: `/kitchen-bath-remodeling/${loc.slug}` },
  };
}

const HERO_POOL = [
  '/photos/home-hero.jpg',
  '/photos/bathroom-spa.jpg',
  '/photos/kitchen-island.jpg',
  '/photos/walk-in-shower.jpg',
  '/photos/kitchen-open.jpg',
  '/photos/bathroom.jpg',
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

  const faqs = [
    { q: `Do you remodel kitchens and bathrooms in ${loc.city}?`, a: `Yes — ${loc.city} is right in our service area. We remodel kitchens, bathrooms, and basements throughout ${loc.city} and the surrounding ${loc.region} communities, all with fixed pricing and a lifetime workmanship warranty.` },
    { q: `How long does a remodel take in ${loc.city}?`, a: `Most full bathrooms in ${loc.city} finish on-site in 2–5 days and kitchens in about a week. You get a firm schedule in your fixed-price proposal before we start.` },
    { q: `What does a remodel cost in ${loc.city}?`, a: `It depends on the room, materials, and the age of your ${loc.city} home. Most Cincinnati-area bathroom remodels run $12k–$55k and kitchens $18k–$120k+. We give you one honest, itemized fixed price at your free consultation.` },
    { q: `Can I finance my ${loc.city} remodel?`, a: `Yes — including 0% interest for 18 months on approved credit, up to $100,000. Checking your rate is a soft pull that won’t affect your credit score.` },
  ];

  const localReviews = reviews.filter((r) => r.location.startsWith(loc.city));
  const shownReviews = (localReviews.length ? localReviews : reviews).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="glass-sheen absolute inset-0" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 22%, rgba(176,141,87,0.5), transparent 45%), radial-gradient(circle at 85% 70%, rgba(200,16,46,0.35), transparent 42%)',
          }}
        />
        <div className="container-x relative py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: loc.city, href: `/kitchen-bath-remodeling/${loc.slug}` },
            ]}
            className="mb-6"
          />
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">{loc.region} · {loc.state}</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.03] tracking-tight text-white sm:text-5xl">
                Kitchen &amp; Bath Remodeling in{' '}
                <span className="text-brass-400">{loc.city}</span>
              </h1>
              <p className="mt-5 max-w-xl leading-relaxed text-white/85">
                {loc.character} Bulldog Kitchen &amp; Bath brings one organized team, fixed pricing, and
                a lifetime workmanship warranty to every {loc.city} remodel.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/consult" className="btn-primary">Book a Free Consult</Link>
                <a href={site.phoneHref} className="btn-ghost !border-ink-700 !bg-transparent !text-white hover:!border-white">
                  Call {site.phone}
                </a>
              </div>
            </div>
            <Photo label={`${loc.city} Remodel`} src={heroImage} alt={`Kitchen and bath remodeling in ${loc.city}`} className="aspect-[4/3] w-full shadow-lift" priority sizes="(max-width:1024px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Local expertise</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Remodels built for {loc.city} homes
            </h2>
            <p className="mt-4 leading-relaxed text-steel">
              From {loc.homeStyles}, {loc.city} has its own mix of homes — and its own remodeling
              quirks. Our designers and crews know how to modernize the function of these homes while
              respecting what makes them worth living in. One team handles design, materials, trades,
              and management, so your {loc.city} project stays on schedule and on budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="section bg-stone">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we remodel in {loc.city}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Full-service kitchen &amp; bath
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
            {serviceList.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex flex-col rounded-xl border border-steel-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brass hover:shadow-lift"
              >
                <h3 className="font-display text-base font-bold text-ink group-hover:text-crimson">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{s.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-display text-xs font-bold uppercase tracking-wide text-crimson">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
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

      {/* Local reviews */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Near {loc.city}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              What your neighbors say
            </h2>
          </div>
          <ReviewsList reviews={shownReviews} moreHref="/reviews" />
        </div>
      </section>

      <Faq faqs={faqs} heading={`Remodeling in ${loc.city}: your questions`} />

      <CTASection withForm heading={`Ready to remodel your ${loc.city} home?`} />
    </>
  );
}

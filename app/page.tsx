import Link from 'next/link';
import type { Metadata } from 'next';
import { site, stats, faqs } from '@/content/site';
import { serviceList } from '@/content/services';
import { reviews } from '@/content/reviews';
import { projects } from '@/content/projects';
import Stars from '@/components/Stars';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import WarrantyHighlight from '@/components/WarrantyHighlight';
import FinancingBand from '@/components/FinancingBand';
import OffersGrid from '@/components/OffersGrid';
import ReviewsList from '@/components/ReviewsList';
import Faq from '@/components/Faq';
import LocationsLinks from '@/components/LocationsLinks';
import CTASection from '@/components/CTASection';
import Photo from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Kitchen & Bath Remodeling in Cincinnati & Northern Kentucky',
  description:
    'Bulldog Kitchen & Bath — Cincinnati’s most organized remodeler. Full-service kitchen and bath remodeling with fixed pricing, in-house design, and a lifetime workmanship warranty. Book a free consult.',
  alternates: { canonical: '/' },
};

const heroChips = serviceList.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-ink">
        <div className="glass-sheen absolute inset-0" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(176,141,87,0.55), transparent 45%), radial-gradient(circle at 85% 65%, rgba(200,16,46,0.3), transparent 42%)',
          }}
        />
        <div className="container-x relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">Cincinnati · Northern Kentucky · One accountable team</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Beautiful kitchens &amp; baths.
                <span className="block text-brass-400">Built by one team.</span>
              </h1>
              <p className="mt-5 max-w-xl leading-relaxed text-white/85">
                Full-service kitchen and bath remodeling with fixed pricing, in-house design, and
                concierge-level care — from the first sketch to a lifetime workmanship warranty.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Stars count={5} />
                  <span className="text-sm font-semibold text-white">{stats.googleRating}/5</span>
                  <span className="text-sm text-white/70">· {stats.reviewsLabel}</span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/consult" className="btn-primary">Book Your Free Consult</Link>
                <a href={site.phoneHref} className="btn-ghost !border-ink-700 !bg-transparent !text-white hover:!border-white">
                  Call {site.phone}
                </a>
              </div>

              {/* Service selector chips */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {heroChips.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="group rounded-lg border border-ink-700 bg-ink-800 px-4 py-3 text-center transition-all hover:border-brass hover:bg-ink-700"
                  >
                    <span className="font-display text-xs font-semibold uppercase tracking-wide text-white group-hover:text-brass-400">
                      {c.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Photo
              label="Cincinnati Kitchen Remodel"
              src="/photos/home-hero.jpg"
              alt="Luxury kitchen remodel by Bulldog Kitchen & Bath in Cincinnati"
              className="aspect-[4/3] w-full shadow-lift"
              priority
              sizes="(max-width:1024px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      <ServicesGrid />

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="section bg-stone">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl text-center sm:text-left">
              <p className="eyebrow">Featured projects</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                Cincinnati-area homes we’ve transformed
              </h2>
            </div>
            <Link href="/projects" className="btn-ghost shrink-0">View all projects</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
            {projects.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                href="/projects"
                className="group flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <Photo label={p.type} src={p.image} alt={p.title} className="aspect-[4/3] w-full" rounded="rounded-none" sizes="(max-width:640px) 100vw, 25vw" />
                <div className="p-5">
                  <p className="font-display text-[11px] font-bold uppercase tracking-widest text-brass-600">
                    {p.type} · {p.location}
                  </p>
                  <h3 className="mt-1 font-display text-base font-bold text-ink group-hover:text-crimson">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <ProcessSteps />

      <WarrantyHighlight />

      <FinancingBand />

      <OffersGrid />

      {/* ---------- SERVICE AREA ---------- */}
      <LocationsLinks />

      {/* ---------- REVIEWS ---------- */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">In their words</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              <Link href="/reviews" className="transition-colors hover:text-crimson">
                What Cincinnati homeowners say
              </Link>
            </h2>
            <p className="mt-4 text-steel">
              A sample of the reviews homeowners leave after their Bulldog kitchen or bath is finished.
            </p>
          </div>
          <ReviewsList reviews={reviews} moreHref="/reviews" />
        </div>
      </section>

      <Faq faqs={faqs} />

      <CTASection withForm />
    </>
  );
}

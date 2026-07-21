import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import AreasWeServe from '@/components/AreasWeServe';
import { locations } from '@/content/locations';
import { bathroomRemodelCopy } from '@/content/location-copy/bathroom-remodel';
import {
  GutItSection,
  PackageSection,
  BudgetSection,
  TriptychSection,
  InvestSection,
  HonestAnswersSection,
  OutdatedSection,
  TrustedPartnerSection,
  ContactSection,
  OtherServicesSection,
} from '@/components/bathroom/Sections';

const service = services['bathroom-remodel'];

// Only the neighborhoods we've written real local copy for.
const bathroomLocations = locations.filter((l) => bathroomRemodelCopy[l.slug]);

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/bathroom-remodel' },
};

export default function BathroomRemodelPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/assets/bathroom-hero.webp"
          alt="Luxury full bathroom remodel with marble shower, freestanding tub and custom vanity"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/50" />
        <div className="container-x relative flex min-h-[88vh] flex-col justify-end py-24 text-white">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-crimson">
            Full Bathroom Remodels
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Reimagined down to the studs.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            One in-house team. One signed price. One bathroom built from scratch — the way it should
            have been the first time.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
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

      {/* Shared with every /bathroom-remodel/[location] page — see
          components/bathroom/Sections.tsx */}
      <GutItSection />
      <PackageSection />
      <BudgetSection />
      <TriptychSection />
      <InvestSection />
      <HonestAnswersSection />
      <OutdatedSection />
      <TrustedPartnerSection />
      <ContactSection service={service.name} />

      {/* ---------- AREAS WE SERVE — collapsed, but links stay in the HTML ---------- */}
      <AreasWeServe
        locations={bathroomLocations}
        hrefBase="/bathroom-remodel"
        serviceLabel="Bathroom Remodeling"
        heading="Bathroom remodeling near you"
        intro="The housing stock changes what a bathroom remodel involves. Here’s what that means where you live."
      />

      <OtherServicesSection />
    </>
  );
}

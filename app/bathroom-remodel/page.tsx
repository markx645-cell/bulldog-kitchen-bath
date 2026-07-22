import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { site } from '@/content/site';
import Photo from '@/components/Photo';
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
      {/* ---------- HERO ----------
          The homepage hero design (two-column, text left, rounded Photo card
          right), matching the 8 shared-hero hubs. Keeps this page's own copy
          and image. */}
      <section className="relative overflow-hidden">
        <div className="container-x relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">Full Bathroom Remodels</p>
              <h1 className="mt-3 font-display text-4xl leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
                Reimagined down to the studs.
              </h1>
              <p className="mt-5 max-w-xl leading-relaxed text-ink/75">
                One in-house team. One signed price. One bathroom built from scratch — the way it
                should have been the first time.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Let’s Discuss Your Project <ArrowRight className="size-4" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="btn-ghost inline-flex items-center gap-2 !border-ink/30 !bg-transparent !text-ink hover:!border-ink"
                >
                  <Phone className="size-4" /> {site.phone}
                </a>
              </div>
            </div>

            <Photo
              label="Full Bathroom Remodel"
              src="/assets/bathroom-hero.webp"
              alt="Luxury full bathroom remodel with marble shower, freestanding tub and custom vanity"
              className="aspect-[4/3] w-full shadow-lift"
              priority
              sizes="(max-width:1024px) 100vw, 48vw"
            />
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

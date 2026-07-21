import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import KitchenInterestForm from '@/components/KitchenInterestForm';
import { services } from '@/content/services';
import { serviceGalleries } from '@/content/serviceGalleries';
import AreasWeServe from '@/components/AreasWeServe';
import { locations } from '@/content/locations';
import { kitchensCopy } from '@/content/location-copy/kitchens';

const service = services['kitchens'];

// Only the neighborhoods we've written real local copy for.
const kitchenLocations = locations.filter((l) => kitchensCopy[l.slug]);

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/kitchens' },
};

export default function Page() {
  return (
    <>
      <ServicePage service={service}>
        {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
        <section className="section">
          <div className="container-x">
            <ExpandingTriptych images={serviceGalleries['kitchens']} />
          </div>
        </section>
      </ServicePage>

      {/* Cross-links to the cost guide + older-home guide, as production has */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-2xl space-y-3 p-10 text-center">
            <p className="text-ink/75">
              Want the deeper breakdown? See our{' '}
              <Link
                href="/kitchen-remodel-cost-cincinnati"
                className="font-medium text-crimson hover:underline"
              >
                2026 Cincinnati kitchen remodel cost guide
              </Link>{' '}
              for typical price ranges, cost drivers, and timelines.
            </p>
            <Link
              href="/kitchen-remodel-cost-cincinnati"
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-crimson hover:opacity-80"
            >
              Read the Cost Guide <ArrowRight className="size-3" />
            </Link>
            <p className="border-t border-ink/10 pt-4 text-ink/75">
              Remodeling a pre-1980 home? Check out our{' '}
              <Link
                href="/kitchen-remodeling-older-homes"
                className="font-medium text-crimson hover:underline"
              >
                kitchen remodeling guide for older Cincinnati homes
              </Link>{' '}
              — covering wiring, plumbing, permits and realistic budgets.
            </p>
            <Link
              href="/kitchen-remodeling-older-homes"
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-crimson hover:opacity-80"
            >
              Older Home Guide <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- KITCHEN INTEREST FORM ---------- */}
      <section id="kitchen-interest" className="section">
        <div className="container-x max-w-3xl">
          <p className="eyebrow text-center">Kitchen Interest Form</p>
          <h2 className="mb-4 mt-3 text-center font-display text-4xl text-ink md:text-5xl">
            Tell Us About Your Kitchen Project
          </h2>
          <p className="mb-12 text-center text-ink/75">
            The more you share, the more accurate your estimate will be.
          </p>
          <div className="glass p-6 md:p-10">
            <KitchenInterestForm />
          </div>
        </div>
      </section>

      {/* ---------- AREAS WE SERVE — collapsed, but the links stay in the
          static HTML so the location pages remain discoverable. ---------- */}
      <AreasWeServe
        locations={kitchenLocations}
        hrefBase="/kitchens"
        serviceLabel="Kitchen Remodeling"
        heading="Kitchen remodeling near you"
        intro="What a kitchen project involves depends on the house it goes into. Here’s what that means where you live."
      />
    </>
  );
}

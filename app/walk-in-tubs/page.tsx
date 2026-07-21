import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { serviceGalleries } from '@/content/serviceGalleries';
import AreasWeServe from '@/components/AreasWeServe';
import { locations } from '@/content/locations';
import { walkInTubsCopy } from '@/content/location-copy/walk-in-tubs';

const service = services['walk-in-tubs'];

// Only the neighborhoods we've written real local copy for.
const tubLocations = locations.filter((l) => walkInTubsCopy[l.slug]);

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/walk-in-tubs' },
};

export default function Page() {
  return (
    <>
      <ServicePage service={service}>
        {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
        <section className="section">
          <div className="container-x">
            <ExpandingTriptych images={serviceGalleries['walk-in-tubs']} />
          </div>
        </section>
      </ServicePage>

      {/* ---------- AREAS WE SERVE — collapsed, but the links stay in the
          static HTML so the location pages remain discoverable. ---------- */}
      <AreasWeServe
        locations={tubLocations}
        hrefBase="/walk-in-tubs"
        serviceLabel="Walk-In Tubs"
        heading="Walk-in tubs near you"
        intro="Whether a walk-in tub fits depends on the room, the floor and the water heater. Here’s what that means where you live."
      />
    </>
  );
}

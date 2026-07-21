import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { serviceGalleries } from '@/content/serviceGalleries';
import AreasWeServe from '@/components/AreasWeServe';
import { locations } from '@/content/locations';
import { bathroomFlooringCopy } from '@/content/location-copy/bathroom-flooring';

const service = services['bathroom-flooring'];

// Only the neighborhoods we've written real local copy for.
const flooringLocations = locations.filter((l) => bathroomFlooringCopy[l.slug]);

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/bathroom-flooring' },
};

export default function Page() {
  return (
    <>
      <ServicePage service={service}>
        {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
        <section className="section">
          <div className="container-x">
            <ExpandingTriptych images={serviceGalleries['bathroom-flooring']} />
          </div>
        </section>
      </ServicePage>

      {/* ---------- AREAS WE SERVE — collapsed, but the links stay in the
          static HTML so the location pages remain discoverable. ---------- */}
      <AreasWeServe
        locations={flooringLocations}
        hrefBase="/bathroom-flooring"
        serviceLabel="Bathroom Flooring"
        heading="Bathroom flooring near you"
        intro="What a bathroom floor needs depends on what is under it. Here’s what that means where you live."
      />
    </>
  );
}

import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { serviceGalleries } from '@/content/serviceGalleries';
import AreasWeServe from '@/components/AreasWeServe';
import { locations } from '@/content/locations';
import { tubShowerCombosCopy } from '@/content/location-copy/tub-shower-combos';

const service = services['tub-shower-combos'];

// Only the neighborhoods we've written real local copy for.
const tubLocations = locations.filter((l) => tubShowerCombosCopy[l.slug]);

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/tub-shower-combos' },
};

export default function Page() {
  return (
    <>
      <ServicePage service={service}>
        {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
        <section className="section">
          <div className="container-x">
            <ExpandingTriptych images={serviceGalleries['tub-shower-combos']} />
          </div>
        </section>
      </ServicePage>

      {/* ---------- AREAS WE SERVE — collapsed, but the links stay in the
          static HTML so the location pages remain discoverable. ---------- */}
      <AreasWeServe
        locations={tubLocations}
        hrefBase="/tub-shower-combos"
        serviceLabel="Tub Shower Combos"
        heading="Tub and shower combinations near you"
        intro="What a tub replacement involves depends on the house it goes into. Here’s what that means where you live."
      />
    </>
  );
}

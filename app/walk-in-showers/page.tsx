import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { serviceGalleries } from '@/content/serviceGalleries';
import AreasWeServe from '@/components/AreasWeServe';
import { locations } from '@/content/locations';
import { walkInShowersCopy } from '@/content/location-copy/walk-in-showers';

const service = services['walk-in-showers'];

// Only the neighborhoods we've written real local copy for.
const showerLocations = locations.filter((l) => walkInShowersCopy[l.slug]);

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/walk-in-showers' },
};

export default function Page() {
  return (
    <>
      <ServicePage service={service}>
        {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
        <section className="section">
          <div className="container-x">
            <ExpandingTriptych images={serviceGalleries['walk-in-showers']} />
          </div>
        </section>
      </ServicePage>

      {/* ---------- AREAS WE SERVE — renders after the hub body, as the
          bathroom-remodel hub does. Collapsed, but the links stay in the
          static HTML so the location pages remain discoverable. ---------- */}
      <AreasWeServe
        locations={showerLocations}
        hrefBase="/walk-in-showers"
        serviceLabel="Walk-In Showers"
        heading="Walk-in showers near you"
        intro="What a shower conversion involves depends on the house it goes into. Here’s what that means where you live."
      />
    </>
  );
}

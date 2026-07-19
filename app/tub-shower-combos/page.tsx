import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { serviceGalleries } from '@/content/serviceGalleries';

const service = services['tub-shower-combos'];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/tub-shower-combos' },
};

export default function Page() {
  return (
    <ServicePage service={service}>
      {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
      <section className="section">
        <div className="container-x">
          <ExpandingTriptych images={serviceGalleries['tub-shower-combos']} />
        </div>
      </section>
    </ServicePage>
  );
}

import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { serviceGalleries } from '@/content/serviceGalleries';

const service = services['walk-in-tubs'];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/walk-in-tubs' },
};

export default function Page() {
  return (
    <ServicePage service={service}>
      {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
      <section className="section">
        <div className="container-x">
          <ExpandingTriptych images={serviceGalleries['walk-in-tubs']} />
        </div>
      </section>
    </ServicePage>
  );
}

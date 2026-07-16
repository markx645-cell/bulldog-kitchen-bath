import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { services } from '@/content/services';

const service = services['walk-in-tubs'];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/walk-in-tubs' },
};

export default function Page() {
  return <ServicePage service={service} />;
}

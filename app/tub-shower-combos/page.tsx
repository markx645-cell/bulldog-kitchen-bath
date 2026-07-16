import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { services } from '@/content/services';

const service = services['tub-shower-combos'];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/tub-shower-combos' },
};

export default function Page() {
  return <ServicePage service={service} />;
}

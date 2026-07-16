import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { services } from '@/content/services';

const service = services['bathroom-flooring'];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/bathroom-flooring' },
};

export default function Page() {
  return <ServicePage service={service} />;
}

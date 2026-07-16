import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { tubShower as service } from '@/content/services';

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/${service.slug}` },
};

export default function Page() {
  return <ServicePage service={service} />;
}

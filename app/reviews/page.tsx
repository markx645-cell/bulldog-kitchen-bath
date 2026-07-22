import type { Metadata } from 'next';
import Reviews from '@/components/Reviews';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description:
    'What Tri-State homeowners say about their Bulldog Remodel Group project — reviews from Cincinnati, Northern Kentucky and Southeast Indiana.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <Reviews />
      <CTASection withForm />
    </>
  );
}

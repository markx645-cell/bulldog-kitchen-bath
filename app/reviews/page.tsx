import type { Metadata } from 'next';
import Reviews from '@/components/Reviews';
import CTASection from '@/components/CTASection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description:
    'What Tri-State homeowners say about their Bulldog Remodel Group project — written and video reviews from Cincinnati, Northern Kentucky and Southeast Indiana.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <Reviews />
      <TestimonialsCarousel />
      <CTASection withForm />
    </>
  );
}

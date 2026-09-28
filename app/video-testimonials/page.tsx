import type { Metadata } from 'next';
import TestimonialsList from '@/components/TestimonialsList';
import CTASection from '@/components/CTASection';
import SpotOurCar from '@/components/SpotOurCar';

export const metadata: Metadata = {
  title: 'Video Testimonials',
  description:
    'Watch Tri-State homeowners talk about their Bulldog Remodel Group project in their own words — real Cincinnati-area remodels.',
  alternates: { canonical: '/video-testimonials' },
};

export default function VideoTestimonialsPage() {
  return (
    <>
      <TestimonialsList />
      <SpotOurCar />

      <CTASection withForm />
    </>
  );
}

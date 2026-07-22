import type { Metadata } from 'next';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Video Testimonials',
  description:
    'Watch Tri-State homeowners talk about their Bulldog Remodel Group project in their own words — real Cincinnati-area remodels.',
  alternates: { canonical: '/video-testimonials' },
};

export default function VideoTestimonialsPage() {
  return (
    <>
      <TestimonialsCarousel />
      <CTASection withForm />
    </>
  );
}

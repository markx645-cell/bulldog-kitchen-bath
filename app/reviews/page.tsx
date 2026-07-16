import type { Metadata } from 'next';
import { stats } from '@/content/site';
import { reviews } from '@/content/reviews';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewsList from '@/components/ReviewsList';
import Stars from '@/components/Stars';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Reviews — What Cincinnati Homeowners Say',
  description:
    'Read reviews from Greater Cincinnati and Northern Kentucky homeowners who trusted Bulldog Kitchen & Bath with their kitchen, bathroom, and basement remodels. 4.9-star average across hundreds of reviews.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Reviews', href: '/reviews' }]} className="mb-6" />
          <p className="eyebrow">In their words</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Hundreds of Cincinnati homeowners, one team they trust
          </h1>
          <div className="mt-5 flex items-center gap-3">
            <Stars count={5} />
            <span className="font-display text-lg font-bold text-white">{stats.googleRating}/5</span>
            <span className="text-white/70">· {stats.reviewsLabel}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {stats.ratings.map((r) => (
              <span key={r.platform} className="rounded-full border border-ink-700 bg-ink-800 px-4 py-2 font-display text-sm font-semibold text-white">
                {r.platform} <span className="text-sage-400">{r.score}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-x">
          <ReviewsList reviews={reviews} />
        </div>
      </section>

      <CTASection withForm heading="Join hundreds of happy homeowners" />
    </>
  );
}

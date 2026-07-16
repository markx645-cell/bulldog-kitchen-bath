import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles, tips, and inspiration from Bulldog Kitchen & Bath.',
  alternates: { canonical: '/blog' },
};

// The production blog reads from a Supabase `articles` table. That table is
// currently empty (verified: public-read RLS policy, exact count = 0), so the
// live blog renders no posts either. This route is the same empty shell.
//
// To light it up: point this at the `articles` table (id, slug, title,
// metadescription, thumbnail, thumbnail_alt_text, created_at, content_markdown)
// with the Supabase URL + anon key in Vercel env vars, and add app/blog/[slug].
const posts: { slug: string; title: string; metadescription: string }[] = [];

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} className="mb-6" />
          <p className="eyebrow">From the team</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl  leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Blog
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
            Articles, tips, and inspiration from Bulldog Kitchen &amp; Bath.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          {posts.length === 0 ? (
            <div className="glass mx-auto max-w-2xl p-10 text-center">
              <h2 className="font-display text-2xl text-ink">
                New articles are on the way
              </h2>
              <p className="mt-3 leading-relaxed text-ink/75">
                We’re putting together guides on planning a remodel, choosing materials, and what to
                expect day-to-day. In the meantime, our{' '}
                <Link href="/pricing-guide" className="font-medium text-ink underline underline-offset-4">
                  pricing guide
                </Link>{' '}
                and{' '}
                <Link href="/our-process" className="font-medium text-ink underline underline-offset-4">
                  process
                </Link>{' '}
                answer most questions — or just call {site.phone}.
              </p>
              <Link href="/projects" className="btn-primary mt-8">
                Browse our projects instead
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <CTASection withForm />
    </>
  );
}

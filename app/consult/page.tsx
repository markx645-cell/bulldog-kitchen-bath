import type { Metadata } from 'next';
import { site, estimateSteps } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import Stars from '@/components/Stars';
import { stats } from '@/content/site';

export const metadata: Metadata = {
  title: 'Book a Free Design Consultation',
  description:
    'Book your free, no-obligation kitchen or bath design consultation with Bulldog Kitchen & Bath. Meet your designer, see a 3D rendering, and get one honest fixed price. Serving Greater Cincinnati.',
  alternates: { canonical: '/consult' },
};

export default function ConsultPage() {
  return (
    <section className="relative overflow-hidden bg-sage">
      <div className="glass-sheen absolute inset-0" />
      <div className="container-x relative py-12 lg:py-16">
        <Breadcrumbs items={[{ label: 'Book a Consult', href: '/consult' }]} className="mb-6" />
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="lg:pt-2">
            <p className="eyebrow">Free · No obligation</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Book your free design consultation
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <Stars count={5} />
              <span className="text-sm font-semibold text-ink">{stats.googleRating}/5</span>
              <span className="text-sm text-ink/65">· {stats.reviewsLabel}</span>
            </div>
            <p className="mt-5 max-w-lg leading-relaxed text-ink/75">
              Here’s exactly what happens — no high-pressure sales, no “today-only” games. Just a plan
              and an honest number.
            </p>

            <div className="mt-8 space-y-5">
              {estimateSteps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-vermilion font-display text-sm font-bold text-ink">
                    {s.step}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-ink">{s.title}</h2>
                    <p className="mt-1 text-sm text-ink/75">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={site.phoneHref}
              className="btn-ghost mt-8 !border-ink/30 !bg-transparent !text-ink hover:!border-ink"
            >
              Prefer to call? {site.phone}
            </a>
          </div>
          <div className="lg:justify-self-end">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

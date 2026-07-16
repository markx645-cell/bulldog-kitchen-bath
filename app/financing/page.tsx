import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, ShieldCheck, Calculator, CheckCircle2 } from 'lucide-react';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Financing — Bulldog Kitchen & Bath | Cincinnati, OH',
  description:
    'Flexible financing plans for your Cincinnati kitchen or bath remodel. 0% intro APR, low fixed monthly payments, and same-as-cash options. 60-second pre-qualification, soft pull only.',
  alternates: { canonical: '/financing' },
};

const plans = [
  {
    title: '0% Intro APR',
    term: 'Up to 18 months',
    body: 'Pay no interest if the balance is paid in full within the promotional window. Ideal for shorter-term projects.',
  },
  {
    title: 'Low Fixed Monthly',
    term: '60–120 months',
    body: 'Predictable, budget-friendly monthly payments with a fixed APR. Spread the cost of a full remodel over time.',
  },
  {
    title: 'Same-As-Cash',
    term: '12 months',
    body: 'Use the full project amount today and pay it back interest-free within 12 months. Subject to credit approval.',
  },
];

const perks = [
  {
    icon: Clock,
    title: '60-Second Pre-Qualification',
    body: 'Soft pull only — checking your rate won’t impact your credit score.',
  },
  {
    icon: ShieldCheck,
    title: 'No Hidden Fees',
    body: 'No prepayment penalties, no application fees, no surprises at closing.',
  },
  {
    icon: Calculator,
    title: 'Bundled Into Your Quote',
    body: 'Your fixed-price contract and your monthly payment, side by side. One number to plan around.',
  },
];

const steps = [
  { n: '01', t: 'Book your free estimate', d: 'We design your space and lock in a fixed-price quote.' },
  { n: '02', t: 'Pre-qualify online', d: '60-second soft credit check. See your rate and term options instantly.' },
  { n: '03', t: 'Sign and start', d: 'Approve your loan and we begin work. Most projects start within 2–3 weeks.' },
];

const ctaPoints = [
  'No obligation',
  'Soft credit pull only',
  'Fixed monthly payments',
  'Approval in minutes',
];

export default function FinancingPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Affordable Remodel Financing</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-ink md:text-7xl">
            Build Now. Pay Over Time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            Don’t put your dream kitchen or bath on hold. Bulldog partners with top home-improvement
            lenders to get you flexible financing — fast approvals, fixed rates, and no impact to
            your credit to check.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Get Pre-Qualified
            </Link>
            <a href={site.phoneHref} className="btn-ghost inline-flex items-center gap-2">
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- PLANS ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow">Financing Options</p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">Plans Built Around You</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3" data-reveal data-reveal-stagger>
            {plans.map((p) => (
              <div key={p.title} className="glass glass-hover flex flex-col p-8">
                <div className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-crimson">
                  {p.term}
                </div>
                <h3 className="mb-3 font-display text-2xl text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink/75">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink/60">
            All financing offered through third-party lenders. Rates and terms subject to credit
            approval.
          </p>
        </div>
      </section>

      {/* ---------- PERKS ---------- */}
      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title}>
              <p.icon className="mb-4 size-8 text-crimson" strokeWidth={1.5} />
              <h3 className="mb-3 font-display text-xl text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink/75">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">How It Works</p>
          <h2 className="mb-10 mt-3 font-display text-4xl text-ink md:text-5xl">
            Three Steps To A Funded Project
          </h2>
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-6 border-t border-ink/10 pt-6">
                <div className="w-12 shrink-0 font-display text-3xl text-crimson">{s.n}</div>
                <div>
                  <h3 className="mb-2 font-display text-xl text-ink">{s.t}</h3>
                  <p className="text-sm leading-relaxed text-ink/75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-2xl p-12 text-center">
            <h2 className="mb-4 font-display text-4xl text-ink md:text-5xl">
              Ready To Run The Numbers?
            </h2>
            <p className="mb-8 text-ink/75">
              Tell us about your project and we’ll send over financing options tailored to your
              remodel and budget.
            </p>
            <ul className="mx-auto mb-10 grid max-w-md gap-3 text-left text-sm sm:grid-cols-2">
              {ctaPoints.map((i) => (
                <li key={i} className="flex items-center gap-2 text-ink/85">
                  <CheckCircle2 className="size-4 shrink-0 text-crimson" /> {i}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Start My Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

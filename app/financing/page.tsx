import type { Metadata } from 'next';
import { site, financing } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Financing — Pay for Your Remodel Over Time',
  description:
    'Bulldog Kitchen & Bath financing makes your Cincinnati remodel affordable: 0% interest for 18 months on approved credit, up to $100,000, with a soft-pull application that won’t affect your credit score.',
  alternates: { canonical: '/financing' },
};

const steps = [
  { step: '01', title: 'Check your rate', body: 'A quick soft-pull application shows your options in minutes and will not affect your credit score.' },
  { step: '02', title: 'Pick your plan', body: 'Choose 0% for 18 months, low-payment long terms, or same-as-cash — whatever keeps the monthly comfortable.' },
  { step: '03', title: 'Start your remodel', body: 'With financing set, we lock your fixed price and get your project on the schedule.' },
];

const financingFaqs = [
  { q: 'Will checking my rate affect my credit?', a: 'No. The initial application is a soft pull that shows your options without affecting your credit score. A hard pull only happens if you choose to move forward with a plan.' },
  { q: 'How much can I finance?', a: 'Financing is available up to $100,000 on approved credit, which covers everything from a single bathroom to a whole-home remodel.' },
  { q: 'Is 0% interest really available?', a: 'Yes — 0% interest for 18 months is available on approved credit. We also offer longer low-payment terms and same-as-cash options for larger projects.' },
  { q: 'Can I pay it off early?', a: 'Yes. Our financing plans allow early payoff without penalty, so you can pay ahead or clear the balance during a promotional period.' },
];

export default function FinancingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Financing', href: '/financing' }]} className="mb-6" />
          <p className="eyebrow">Financing</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {financing.headline}
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/85">{financing.lead}</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
            {financing.points.map((p) => (
              <div key={p.small} className="rounded-xl border border-steel-200 bg-stone p-6 text-center shadow-card">
                <p className="font-display text-4xl font-extrabold text-crimson">{p.big}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-stone">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Simple &amp; fast</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">How financing works</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal data-reveal-stagger>
            {steps.map((s) => (
              <div key={s.step} className="rounded-xl border border-steel-200 bg-white p-6 shadow-card">
                <span className="font-display text-3xl font-bold text-brass">{s.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-steel">
            Financing is provided by third-party lenders on approved credit. Terms, rates, and
            promotional periods are subject to lender approval. Ask your Bulldog consultant for current
            offers or call {site.phone}.
          </p>
        </div>
      </section>

      <Faq faqs={financingFaqs} heading="Financing questions, answered" />
      <CTASection withForm heading="Let’s make it affordable" />
    </>
  );
}

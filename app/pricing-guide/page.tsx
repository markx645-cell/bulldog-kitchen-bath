import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import FinancingBand from '@/components/FinancingBand';
import Faq from '@/components/Faq';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Pricing Guide — Kitchen & Bath Remodel Costs in Cincinnati',
  description:
    'Honest 2026 pricing for kitchen, bathroom, and basement remodels in Greater Cincinnati. See typical ranges by project, understand what drives cost, and learn how our fixed-price guarantee works.',
  alternates: { canonical: '/pricing-guide' },
};

const rows = [
  { project: 'Guest / hall bathroom remodel', range: '$12k – $25k' },
  { project: 'Primary suite bathroom remodel', range: '$25k – $55k' },
  { project: 'Tub-to-shower conversion', range: '$8k – $18k' },
  { project: 'Walk-in shower (custom tile)', range: '$10k – $22k' },
  { project: 'Walk-in tub install', range: '$12k – $25k' },
  { project: 'Bathroom flooring (with heat)', range: '$3k – $9k' },
  { project: 'Kitchen refresh', range: '$18k – $35k' },
  { project: 'Mid-range kitchen remodel', range: '$35k – $65k' },
  { project: 'Full-gut / open-concept kitchen', range: '$65k – $120k+' },
  { project: 'Basement finish', range: '$35k – $90k' },
];

const pricingFaqs = [
  { q: 'How does your fixed-price guarantee work?', a: 'After your design consultation, we provide one itemized, all-in price. Barring scope you choose to add mid-project — which you approve in writing first — the number in your contract is exactly what you pay.' },
  { q: 'Why are these ranges so wide?', a: 'Because materials, layout, and the age of your home genuinely move the number. Cabinetry, countertops, tile, and fixtures all span a wide range, and older Cincinnati homes sometimes need electrical or plumbing updates. The only way to know your exact price is a free consultation.' },
  { q: 'Do you charge for the consultation and design?', a: 'The initial design consultation is free. For larger, design-intensive projects we may use a design agreement that credits toward your build — we will always tell you up front.' },
  { q: 'Can I finance the whole project?', a: 'Yes — including 0% interest for 18 months on approved credit, with financing available up to $100,000. Checking your rate is a soft pull that will not affect your credit score.' },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Pricing Guide', href: '/pricing-guide' }]} className="mb-6" />
          <p className="eyebrow">2026 Pricing Guide</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Honest remodel pricing for Cincinnati
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/85">
            No “call for pricing” games. Here are the typical ranges Greater Cincinnati homeowners
            spend by project — and a fixed-price guarantee once we scope yours.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-steel-200 shadow-card">
            <table className="w-full text-left">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wide">Project</th>
                  <th className="px-6 py-4 text-right font-display text-sm font-bold uppercase tracking-wide">Typical Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-200">
                {rows.map((r) => (
                  <tr key={r.project} className="bg-white even:bg-stone/60">
                    <td className="px-6 py-4 text-sm text-ink">{r.project}</td>
                    <td className="px-6 py-4 text-right font-display font-bold text-crimson">{r.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-steel">
            Ranges are typical for Greater Cincinnati &amp; Northern Kentucky in 2026 and vary with
            materials, layout, and home age. Your fixed quote comes from a free consultation.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/consult" className="btn-primary">Get Your Fixed Price</Link>
          </div>
        </div>
      </section>

      <FinancingBand />
      <Faq faqs={pricingFaqs} heading="Pricing questions, answered" />
      <CTASection withForm heading="Want your exact number?" sub={`Book a free design consultation for one honest, itemized, fixed price. No pressure — or call ${site.phone}.`} />
    </>
  );
}

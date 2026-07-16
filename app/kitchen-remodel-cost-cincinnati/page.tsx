import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import FinancingBand from '@/components/FinancingBand';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Kitchen Remodel Cost in Cincinnati (2026 Pricing Guide)',
  description:
    'What does a kitchen remodel cost in Cincinnati? Honest 2026 price ranges for minor, mid-range, and full-gut kitchen renovations, plus the factors that move the number. From Bulldog Kitchen & Bath.',
  alternates: { canonical: '/kitchen-remodel-cost-cincinnati' },
};

const tiers = [
  {
    name: 'Refresh',
    range: '$18k – $35k',
    blurb: 'New cabinetry fronts or paint, countertops, backsplash, sink, faucet, and lighting on the existing layout.',
    points: ['Same footprint', 'Semi-custom cabinetry', 'Quartz or laminate counters', 'Fastest turnaround'],
  },
  {
    name: 'Mid-Range',
    range: '$35k – $65k',
    blurb: 'New custom cabinetry, quartz counters, an island, updated lighting and electrical, and quality finishes throughout.',
    points: ['Minor layout changes', 'Custom cabinetry', 'Quartz & tile', 'New appliances'],
    featured: true,
  },
  {
    name: 'Full Gut',
    range: '$65k – $120k+',
    blurb: 'Down to the studs — new layout, walls opened, all-new plumbing and electrical, premium cabinetry and appliances.',
    points: ['Open-concept work', 'Structural changes', 'Premium finishes', 'Like-new kitchen'],
  },
];

const factors = [
  { title: 'Size & layout changes', body: 'Moving walls, plumbing, or gas lines adds labor and permits. A same-footprint refresh is always the best value.' },
  { title: 'Cabinetry', body: 'Cabinets are usually the biggest line item. Stock, semi-custom, and fully custom can swing the number by tens of thousands.' },
  { title: 'Countertops', body: 'Laminate, butcher block, quartz, and natural stone span a wide range in both material and fabrication cost.' },
  { title: 'Appliances', body: 'Panel-ready and pro-grade appliances cost multiples of standard packages — and affect cabinetry too.' },
  { title: 'Older-home surprises', body: 'Knob-and-tube wiring, galvanized plumbing, and out-of-square walls take extra work in Cincinnati’s historic homes.' },
  { title: 'Finishes & fixtures', body: 'Tile, hardware, lighting, and faucets are where personal taste moves the price the most.' },
];

const faqs = [
  { q: 'How much does a kitchen remodel cost in Cincinnati?', a: 'Most Cincinnati kitchen remodels land between $35,000 and $65,000 for a mid-range renovation with custom cabinetry, quartz counters, and an island. Smaller refreshes start around $18,000, and full-gut, open-concept renovations run $65,000 and up.' },
  { q: 'What is the biggest factor in the price?', a: 'Cabinetry is usually the largest single cost, followed by countertops and appliances. Layout changes that move plumbing or walls also add meaningfully to the total.' },
  { q: 'Do you give a fixed price?', a: 'Yes. After your design consultation we provide one itemized, all-in fixed price. Barring scope you add yourself, the number in your contract is the number you pay.' },
  { q: 'Can I finance a kitchen remodel?', a: 'Yes — including 0% interest for 18 months on approved credit, with financing available up to $100,000. Checking your rate is a soft pull that will not affect your credit score.' },
];

export default function CostPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Kitchen Remodel Cost', href: '/kitchen-remodel-cost-cincinnati' }]} className="mb-6" />
          <p className="eyebrow">2026 Pricing Guide</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl  leading-[1.05] text-ink sm:text-5xl">
            What a kitchen remodel really costs in Cincinnati
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/75">
            Straight, honest price ranges — no “it depends” runaround. Here is what Greater Cincinnati
            homeowners actually spend, and what moves the number up or down.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3" data-reveal data-reveal-stagger>
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-2xl border p-8 shadow-card ${
                  t.featured ? 'border-white/60 ring-2 ring-ink/20' : 'border-white/30'
                }`}
              >
                {t.featured && (
                  <span className="mb-3 w-fit rounded-full bg-ink px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-ink">
                    Most common
                  </span>
                )}
                <h2 className="font-display text-xl text-ink">{t.name}</h2>
                <p className="mt-2 font-display text-3xl text-ink">{t.range}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{t.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/70">
            Ranges are typical for Greater Cincinnati in 2026 and vary with materials, layout, and the
            age of your home. The only way to know your number is a free consultation and a fixed quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What moves the price</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              Six factors that shape your number
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
            {factors.map((f) => (
              <div key={f.title} className="glass glass-hover p-6">
                <h3 className="font-display text-base text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/consult" className="btn-primary">Get Your Fixed Price</Link>
          </div>
        </div>
      </section>

      <FinancingBand />
      <Faq faqs={faqs} heading="Kitchen remodel cost: your questions" />
      <CTASection withForm heading="Want your exact number?" sub={`Book a free design consultation and we’ll give you one honest, itemized, fixed price. No pressure — call ${site.phone}.`} />
    </>
  );
}

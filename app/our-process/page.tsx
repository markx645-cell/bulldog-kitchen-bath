import type { Metadata } from 'next';
import { process, estimateSteps } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import WarrantyHighlight from '@/components/WarrantyHighlight';
import Faq from '@/components/Faq';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Process — How a Bulldog Remodel Works',
  description:
    'From discovery call to lifetime warranty support, see the seven-step Bulldog Kitchen & Bath process. In-house design, 3D renderings, fixed pricing, and one accountable team from start to finish.',
  alternates: { canonical: '/our-process' },
};

const processFaqs = [
  { q: 'What happens at the free consultation?', a: 'We walk your space, measure, take photos, and talk through how you want the room to work. You meet the person who will run your project, and there is no obligation or pressure to sign anything.' },
  { q: 'When do I see a design?', a: 'After the consultation, our in-house designers lay out the room and finishes and present a 3D rendering so you can see the space before you commit to building it.' },
  { q: 'How is the price determined?', a: 'Once the design is set, we hand you one itemized, all-in fixed price along with your financing options. The number is locked before demo begins.' },
  { q: 'What happens after the remodel is done?', a: 'We do a final walkthrough together, handle any punch-list items, and back the workmanship for as long as you own the home. One call and we make it right.' },
];

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sage">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Our Process', href: '/our-process' }]} className="mb-6" />
          <p className="eyebrow">How it works</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Seven steps, one team, zero surprises
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/75">
            Every Bulldog project follows the same clear path — so you always know what happens next
            and exactly who is responsible for it.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <ol className="relative border-l-2 border-steel-200">
              {process.map((s) => (
                <li key={s.step} className="mb-10 ml-6 last:mb-0" data-reveal>
                  <span className="absolute -left-[1.15rem] flex h-9 w-9 items-center justify-center rounded-full bg-vermilion font-display text-sm font-bold text-ink ring-4 ring-cream">
                    {s.step}
                  </span>
                  <h2 className="font-display text-xl font-bold text-ink">{s.title}</h2>
                  <p className="mt-2 leading-relaxed text-steel">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">At your consultation</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              What your free design consult looks like
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal data-reveal-stagger>
            {estimateSteps.map((s) => (
              <div key={s.step} className="rounded-xl border border-steel-200 bg-sage p-6 shadow-card">
                <span className="font-display text-3xl font-bold text-sage-600">{s.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WarrantyHighlight />
      <Faq faqs={processFaqs} heading="Process questions, answered" />
      <CTASection withForm />
    </>
  );
}

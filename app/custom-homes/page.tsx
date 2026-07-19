import type { Metadata } from 'next';
import { PencilRuler, MapPinned, SunMedium, Eye, DraftingCompass, Blocks, LandPlot } from 'lucide-react';
import ServicePage from '@/components/ServicePage';
import ExpandingTriptych, { type TriptychImage } from '@/components/ExpandingTriptych';
import { services } from '@/content/services';
import { site } from '@/content/site';

const service = services['custom-homes'];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: '/custom-homes' },
};

const gallery: [TriptychImage, TriptychImage, TriptychImage] = [
  {
    src: '/assets/service-custom-home-1.webp',
    alt: 'Custom home exterior at dusk with stone entry, dormers and landscaped drive',
  },
  {
    src: '/assets/service-custom-home-2.webp',
    alt: 'Custom home living room with fireplace, built-in shelving and hardwood floors',
  },
  {
    src: '/assets/service-custom-home-3.webp',
    alt: 'Custom home kitchen with marble island, wood cabinetry and pendant lighting',
  },
];

// Why build custom rather than buy.
const reasons = [
  {
    icon: PencilRuler,
    title: 'A Plan Built Around You',
    body: 'Not a floor plan chosen by a developer for a lot they hadn’t seen yet. Where the light lands, how the kitchen opens to the yard, whether the laundry is where you actually do laundry — those are decisions worth making yourself.',
  },
  {
    icon: MapPinned,
    title: 'Build Where You Want To Live',
    body: 'You’re not limited to whatever a developer is releasing this quarter. Your lot, your street, your school district — including a tear-down in a neighborhood that’s already right.',
  },
  {
    icon: SunMedium,
    title: 'Efficiency Designed In',
    body: 'Insulation, air sealing, window specification and HVAC sizing get decided during design, not value-engineered out at framing. It costs a fraction to do properly now, and your heating bill answers to it for decades.',
  },
  {
    icon: Eye,
    title: 'You See It Go Up',
    body: 'Every stage inspected, every stage visible, with one project manager who knows your build. You’re not taking a finished house on trust — you watched what went behind the drywall.',
  },
];

// The three ways a build starts.
const types = [
  {
    icon: DraftingCompass,
    title: 'Design-Build',
    body: 'We do both halves. Our in-house designer draws the house with you, then our crews build it — one contract, one point of accountability, no gap between the person who drew it and the person who has to make it work.',
  },
  {
    icon: Blocks,
    title: 'Build To Your Plans',
    body: 'You already have an architect, or plans you love. We review them for constructability and cost first, flag anything that will cause trouble on site, then build to them.',
  },
  {
    icon: LandPlot,
    title: 'Tear-Down & Rebuild',
    body: 'The location is right but the house isn’t. Demolition, utility disconnects and reconnects, and any historic or overlay-district review are handled inside the same contract.',
  },
];

export default function Page() {
  // Service + FAQ structured data, matching our other FAQ-carrying service pages.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Home Design and Construction',
    provider: {
      '@type': 'GeneralContractor',
      name: site.name,
      telephone: '+1-513-657-3750',
      areaServed: 'Greater Cincinnati, OH and the surrounding OH, KY & IN region',
      url: site.url,
    },
    areaServed: { '@type': 'City', name: 'Cincinnati' },
    description:
      'Design-build and build-to-plan custom home construction across Greater Cincinnati, Northern Kentucky and Southeast Indiana, including tear-down and rebuild projects.',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePage service={service}>
        {/* ---------- EXPANDING TRIPTYCH (images only) ---------- */}
        <section className="section">
          <div className="container-x">
            <ExpandingTriptych images={gallery} />
          </div>
        </section>

        {/* ---------- WHY BUILD CUSTOM ---------- */}
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Why Build Custom</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                What you get that you can’t buy finished
              </h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                A custom home costs more per square foot than a production one. These are the four
                things people tell us made it worth it.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2" data-reveal data-reveal-stagger>
              {reasons.map((r) => (
                <article key={r.title} className="glass glass-hover flex flex-col gap-4 p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/50 bg-white/40 text-crimson backdrop-blur-md">
                    <r.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl text-ink">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/75">{r.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- THREE WAYS TO START ---------- */}
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Three Ways To Start</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                Design it with us, or bring your own plans
              </h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                Where you begin depends on how far along you already are. All three end the same way
                — one fixed price and a lifetime workmanship warranty.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal data-reveal-stagger>
              {types.map((t) => (
                <article key={t.title} className="glass glass-hover flex flex-col gap-4 p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/50 bg-white/40 text-crimson backdrop-blur-md">
                    <t.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl text-ink">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/75">{t.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}

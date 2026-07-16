import Link from 'next/link';
import { site } from '@/content/site';
import type { Service } from '@/content/services';
import Breadcrumbs from '@/components/Breadcrumbs';
import Photo from '@/components/Photo';
import Faq from '@/components/Faq';
import CTASection from '@/components/CTASection';
import ProcessSteps from '@/components/ProcessSteps';
import LocationsLinks from '@/components/LocationsLinks';

function BenefitIcon({ name }: { name?: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };
  switch (name) {
    case 'clock':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>;
    case 'pricing':
      return <svg {...common}><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
    case 'design':
      return <svg {...common}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>;
    case 'accessible':
      return <svg {...common}><circle cx="12" cy="4" r="2" /><path d="M6 8h12" /><path d="M9 8v6l-2 6" /><path d="M15 8v6l2 6" /><path d="M9 12h6" /></svg>;
    case 'oneteam':
      return <svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>;
    default:
      return <svg {...common}><path d="M20 6L9 17l-5-5" /></svg>;
  }
}

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="glass-sheen absolute inset-0" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 22%, rgba(157,190,183,0.5), transparent 45%), radial-gradient(circle at 85% 70%, rgba(231,50,19,0.35), transparent 42%)',
          }}
        />
        <div className="container-x relative py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.name, href: `/${service.slug}` },
            ]}
            className="mb-6"
          />
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">{service.eyebrow}</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl">
                {service.heroHeadline}{' '}
                <span className="text-sage-400">{service.heroHighlight}</span>
              </h1>
              <p className="mt-5 max-w-xl leading-relaxed text-white/85">{service.heroSub}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/consult" className="btn-primary">Book a Free Consult</Link>
                <a href={site.phoneHref} className="btn-ghost !border-ink-700 !bg-transparent !text-white hover:!border-white">
                  Call {site.phone}
                </a>
              </div>
            </div>
            <Photo label={service.name} src={service.image} alt={`${service.name} project by Bulldog Kitchen & Bath`} className="aspect-[4/3] w-full shadow-lift" priority sizes="(max-width:1024px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      {/* Intro + benefits */}
      <section className="section bg-cream-50">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{service.introEyebrow ?? 'Why it matters'}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              {service.introHeading ?? 'Built right, by one team'}
            </h2>
            <p className="mt-4 leading-relaxed text-steel">{service.intro}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
            {service.benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-steel-200 bg-cream-200 p-6 shadow-card">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-vermilion/10 text-vermilion">
                  <BenefitIcon name={b.icon} />
                </span>
                <h3 className="font-display text-base font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      {service.features && (
        <section className="section bg-cream-200">
          <div className="container-x">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Photo label={service.name} src={service.featureImage ?? service.image} alt={`${service.name} detail`} className="aspect-[4/3] w-full shadow-lift" sizes="(max-width:1024px) 100vw, 50vw" />
              <div>
                {service.features.banner && (
                  <span className="inline-block bg-vermilion px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-white">
                    {service.features.banner}
                  </span>
                )}
                <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
                  {service.features.heading}
                </h2>
                {service.features.sub && <p className="mt-3 text-steel">{service.features.sub}</p>}
                <ul className="mt-6 space-y-3">
                  {service.features.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e73213" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-ink">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Options */}
      {service.options && service.options.length > 0 && (
        <section className="section bg-cream-50">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Your options</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                {service.optionsHeading ?? 'Ways to build it'}
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3" data-reveal data-reveal-stagger>
              {service.options.map((o, i) => (
                <div key={o.title} className="flex flex-col rounded-2xl border border-steel-200 bg-cream-200 p-7 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-vermilion font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{o.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{o.blurb}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-steel-200 pt-4">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-ink">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6f9a91" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProcessSteps compact />

      <Faq faqs={service.faqs} heading={`${service.name}: your questions, answered`} />

      <LocationsLinks />

      <CTASection withForm heading={`Ready to start your ${service.name.toLowerCase()}?`} />
    </>
  );
}

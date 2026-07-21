import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { type Location, type Adjacent, placeName } from '@/content/locations';
import FaqAccordion from '@/components/FaqAccordion';
import {
  GutItBody,
  PackageSection,
  BudgetSection,
  TriptychSection,
  InvestSection,
  HonestAnswersSection,
  OutdatedSection,
  TrustedPartnerSection,
  ContactSection,
  OtherServicesSection,
} from '@/components/bathroom/Sections';

/**
 * Copy that MUST be written fresh for each neighborhood. Nothing here is
 * templated — if you can't write it specifically for this place, don't publish
 * the page.
 */
export type LocationServiceCopy = {
  /** 2–3 sentences. Primary keyword + a real local hook, in the first 100 words. */
  intro: string;
  /** THE MOAT: 1–2 paragraphs carrying at least three verifiable local specifics
   *  (ZIP, housing era, streets, terrain, historic district status). */
  relevance: string[];
  /** One sentence tying common issues to this area's housing stock. Retained per
   *  neighborhood but not currently rendered — the section it fed was removed. */
  commonIntro?: string;
  /** At least one question only someone in this neighborhood would ask. */
  localFaqs: { q: string; a: string }[];
};

/** Written once per service, reused across its neighborhoods. */
export type ServiceLocationConfig = {
  slug: string;
  serviceName: string;
  eyebrow: string;
  hubHref: string;
  hubLabel: string;
  schemaServiceType: string;
  heroImage: string;
  /** Heading over the merged local-relevance section. Takes {neighborhood}. */
  localHeading: string;
  sharedFaqs: { q: string; a: string }[];
  relatedServices: { label: string; href: string }[];
};

/**
 * A service × neighborhood page.
 *
 * It carries the FULL master-page experience — the same Gut It, Package, Budget,
 * Triptych, Invest, Honest Answers, Outdated, Trusted Partner, Contact and Other
 * Services sections the hub renders, imported from one place so the two cannot
 * drift. Woven through it are the parts that are unique to this neighborhood:
 * the hero intro, the local relevance block, the common-situations lead-in, the
 * localized FAQ, and the nearby-areas mesh.
 */
export default function LocationServicePage({
  config,
  loc,
  copy,
  nearby,
}: {
  config: ServiceLocationConfig;
  loc: Location;
  copy: LocationServiceCopy;
  nearby: Adjacent[];
}) {
  const place = placeName(loc);
  const fill = (s: string) =>
    s
      .split('{neighborhood}').join(loc.neighborhood)
      .split('{place}').join(place)
      .split('{brand}').join(site.name);

  // Localized questions first — they're the reason someone landed here.
  const faqs = [...copy.localFaqs, ...config.sharedFaqs];

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: `${site.name} — ${config.serviceName}, ${loc.neighborhood}`,
    telephone: '+1-513-657-3750',
    url: `${site.url}${config.hubHref}/${loc.slug}`,
    areaServed: { '@type': 'Place', name: place },
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.city ?? loc.neighborhood,
      addressRegion: loc.state,
      ...(loc.zip ? { postalCode: loc.zip } : {}),
      addressCountry: 'US',
    },
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: config.schemaServiceType,
    provider: { '@type': 'GeneralContractor', name: site.name, url: site.url },
    areaServed: { '@type': 'Place', name: place },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: config.hubLabel,
        item: `${site.url}${config.hubHref}`,
      },
      { '@type': 'ListItem', position: 3, name: loc.neighborhood },
    ],
  };

  return (
    <>
      {[businessSchema, serviceSchema, faqSchema, breadcrumbSchema].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* ---------- HERO (localized) ---------- */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={config.heroImage}
          alt={`${config.serviceName} in ${place}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/35" />
        <div className="container-x relative flex min-h-[70vh] flex-col justify-end py-20 text-white">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-crimson">
            {config.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">
            {config.serviceName} in {place}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">{copy.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Let’s Discuss Your Project
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-ink"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- LOCAL RELEVANCE (the moat) + why a full remodel ----------
          Merged into one section: both use the same two-column layout, so
          stacking them separately read as a repeat. Unique local content leads,
          the shared rationale follows in the same column. */}
      <section className="section">
        <div className="container-x grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">
              <MapPin className="-mt-1 mr-1.5 inline size-3.5 text-crimson" />
              {place}
              {loc.zip ? ` · ${loc.zip}` : ''}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              {fill(config.localHeading)}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink/75 lg:col-span-7">
            {copy.relevance.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
            <hr className="border-ink/10" />
            <GutItBody />
          </div>
        </div>
      </section>

      {/* ---------- Master-page sections (shared with the hub) ---------- */}
      <PackageSection neighborhood={loc.neighborhood} />

      <BudgetSection neighborhood={loc.neighborhood} />
      <TriptychSection />
      <InvestSection neighborhood={loc.neighborhood} />
      <HonestAnswersSection neighborhood={loc.neighborhood} />
      <OutdatedSection neighborhood={loc.neighborhood} />
      <TrustedPartnerSection neighborhood={loc.neighborhood} />

      {/* ---------- FAQ — localized questions first ---------- */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mb-10 mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
            {config.serviceName} in {loc.neighborhood}: your questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Canonical service name from the service list, not config.serviceName —
          the form's dropdown options come from that same list. */}
      <ContactSection
        place={place}
        neighborhood={loc.neighborhood}
        service={services[config.slug]?.name}
      />

      {/* ---------- INTERNAL-LINK MESH: up, sideways, across (localized) ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass grid gap-10 p-10 sm:p-12 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl text-ink">Nearby areas</h3>
              <ul className="mt-4 space-y-2">
                {nearby.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`${config.hubHref}/${n.slug}`}
                      className="text-sm text-ink/75 hover:text-crimson"
                    >
                      {config.serviceName} in {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink">Related services</h3>
              <ul className="mt-4 space-y-2">
                {config.relatedServices.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-sm text-ink/75 hover:text-crimson">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <OtherServicesSection />
    </>
  );
}

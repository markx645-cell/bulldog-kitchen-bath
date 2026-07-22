import Link from 'next/link';
import { Phone, Check, Clock, ArrowRight } from 'lucide-react';
import { site } from '@/content/site';
import type { Service } from '@/content/services';
import Photo from '@/components/Photo';
import Faq from '@/components/Faq';
import InvestSection from '@/components/InvestSection';
import { serviceInvest } from '@/content/serviceInvest';
import { ContactSection, TrustedPartnerSection } from '@/components/bathroom/Sections';

// Mirrors the production ServicePage exactly:
// Hero (full-bleed) -> Why -> Includes -> Turnaround -> Trust band -> Quote -> BudgetTiers
// `children` renders after the Includes grid and before the Turnaround block,
// so extra sections land mid-body and the turnaround + closing quote stay as
// the page's closing argument, directly above the FAQ.
//
// The body is exported separately as ServicePageBody so the service hub and its
// 170 location pages render from one source and cannot drift — the same rule
// components/bathroom/Sections.tsx follows for Full Bathroom Remodels.
export default function ServicePage({
  service: s,
  children,
  beforeIncludes,
}: {
  service: Service;
  children?: React.ReactNode;
  /** Rendered just above the "…Includes" grid. */
  beforeIncludes?: React.ReactNode;
}) {
  return (
    <>
      {/* ---------- HERO ----------
          The homepage hero, reused: two-column grid, text left, a rounded Photo
          card on the right (shadow-lift, no fade). Stacks on mobile into the same
          card. Shared by all 8 ServicePage hubs; the 3 bespoke hubs and the
          location pages keep their own heroes. */}
      <section className="relative overflow-hidden">
        <div className="container-x relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              {s.eyebrow && <p className="eyebrow">{s.eyebrow}</p>}
              <h1 className="mt-3 font-display text-4xl leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
                {s.title}
              </h1>
              {s.region && (
                <p className="mt-5 max-w-xl leading-relaxed text-ink/75">{s.region}</p>
              )}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Let’s Discuss Your Project <ArrowRight className="size-4" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="btn-ghost inline-flex items-center gap-2 !border-ink/30 !bg-transparent !text-ink hover:!border-ink"
                >
                  <Phone className="size-4" /> {site.phone}
                </a>
              </div>
            </div>

            <Photo
              label={s.title}
              src={s.image}
              alt={s.title}
              className="aspect-[4/3] w-full shadow-lift"
              priority
              sizes="(max-width:1024px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <ServicePageBody service={s} beforeIncludes={beforeIncludes}>
        {children}
      </ServicePageBody>

      {/* Same contact form the location pages carry, in the same position —
          a location page is a copy of its master page, so the form must match.
          Lives here rather than in ServicePageBody because ServiceLocationPage
          renders ContactSection itself; putting it in the body would double it. */}
      <ContactSection service={s.name} />
    </>
  );
}

/**
 * Everything below the hero, shared by the service hub and every
 * /{service}/[location] page.
 *
 * `neighborhood` localizes the section headings — the location pages carry the
 * full master experience, so what makes them distinct is the hero, the local
 * relevance block, the localized FAQ and these headings, not a reduced page.
 * `faqs` lets a location page put its own questions ahead of the shared ones.
 */
export function ServicePageBody({
  service: s,
  neighborhood,
  faqs,
  children,
  beforeIncludes,
}: {
  service: Service;
  neighborhood?: string;
  faqs?: { q: string; a: string }[];
  children?: React.ReactNode;
  /** Rendered just above the "…Includes" grid. */
  beforeIncludes?: React.ReactNode;
}) {
  const inPlace = neighborhood ? ` in ${neighborhood}` : '';
  const faqList = faqs ?? s.faqs;
  const invest = serviceInvest[s.slug];

  return (
    <>
      {/* ---------- WHY — "The Bulldog Way" ---------- */}
      {s.whyBody && (
        <section className="section">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">The Bulldog Way{inPlace}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                {s.whyTitle}
              </h2>
            </div>
            <div className="text-lg leading-relaxed text-ink/75 lg:col-span-8">
              <p>{s.whyBody}</p>
            </div>
          </div>
        </section>
      )}

      {beforeIncludes}

      {/* ---------- INCLUDES ---------- */}
      {s.includes.length > 0 && (
        <section className="section">
          <div className="container-x">
            {neighborhood && <p className="eyebrow text-center">In {neighborhood}</p>}
            <h2 className="mb-12 mt-3 text-center font-display text-4xl text-ink md:text-5xl">
              {s.includesTitle}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
              {s.includes.map((it) => (
                <div key={it.title} className="glass glass-hover flex flex-col gap-3 p-8">
                  <div className="flex items-center gap-3">
                    <Check className="size-5 shrink-0 text-crimson" />
                    <h3 className="font-display text-xl text-ink">{it.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/75">{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {children}

      {/* ---------- INVEST IN YOUR FUTURE ----------
          Same section the bathroom-remodel pages carry; copy per service from
          content/serviceInvest.ts. Omitted where no copy has been written
          rather than rendered with something generic. */}
      {invest && <InvestSection copy={invest} neighborhood={neighborhood} />}

      {/* ---------- TURNAROUND ---------- */}
      {s.turnaroundTitle && (
        <section className="section">
          <div className="container-x">
            <div className="glass grid items-center gap-12 p-10 sm:p-14 lg:grid-cols-3">
              <div className="flex justify-center">
                <div className="flex size-40 items-center justify-center rounded-full border-2 border-crimson/60">
                  <Clock className="size-16 text-crimson" strokeWidth={1.25} />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="font-display text-3xl text-ink md:text-4xl">
                  {s.turnaroundTitle}
                  {inPlace}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-ink/75">{s.turnaroundBody}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- YOUR TRUSTED PARTNER ----------
          Replaces the four-icon trust band that used to sit here. It carries the
          same badges plus Locally Owned and In-Home Estimates, the "why
          homeowners choose us" copy and a CTA — so the band would have been a
          strict subset of it rendered twice. */}
      <TrustedPartnerSection neighborhood={neighborhood} />

      {/* ---------- CLOSING QUOTE ---------- */}
      {s.closingQuote && (
        <section className="section">
          <div className="container-x">
            <div className="glass mx-auto max-w-3xl p-12 text-center">
              <p className="font-display text-2xl italic leading-relaxed text-ink md:text-3xl">
                “{s.closingQuote}”
              </p>
              <Link href="/contact" className="btn-primary mt-10 !bg-crimson hover:!bg-crimson-600">
                Let’s Discuss Your Project
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ---------- BUDGET TIERS (renders after the quote, as production does) ---------- */}
      {s.budget && s.budget.tiers.length > 0 && (
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Budget ranges{inPlace}</p>
              <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
                {s.budget.title}
                {inPlace}
              </h2>
              {s.budget.intro && <p className="mt-4 leading-relaxed text-ink/75">{s.budget.intro}</p>}
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal data-reveal-stagger>
              {s.budget.tiers.map((t) => (
                <div
                  key={t.name}
                  className={`glass flex flex-col p-8 ${t.highlight ? 'ring-2 ring-crimson/40' : ''}`}
                >
                  {t.highlight && (
                    <span className="mb-3 w-fit rounded-full bg-crimson px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl text-ink">{t.name}</h3>
                  <p className="mt-2 font-display text-3xl text-crimson">{t.range}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{t.tagline}</p>
                  <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
                    {t.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-ink/85">
                        <Check className="mt-0.5 size-4 shrink-0 text-crimson" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {s.budget.footnote && (
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/60">
                {s.budget.footnote}
              </p>
            )}
          </div>
        </section>
      )}

      {faqList.length > 0 && (
        <Faq faqs={faqList} heading={`${s.name}${inPlace}: your questions`} />
      )}
    </>
  );
}

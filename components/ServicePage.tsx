import Link from 'next/link';
import Image from 'next/image';
import { Phone, Check, ShieldCheck, Clock, BadgeCheck } from 'lucide-react';
import { site } from '@/content/site';
import type { Service } from '@/content/services';
import Faq from '@/components/Faq';

// Mirrors the production ServicePage exactly:
// Hero (full-bleed) -> Why -> Includes -> Turnaround -> Trust band -> Quote -> BudgetTiers
// `children` renders after the Includes grid and before the Turnaround block,
// so extra sections land mid-body and the turnaround + closing quote stay as
// the page's closing argument, directly above the FAQ.
export default function ServicePage({
  service: s,
  children,
}: {
  service: Service;
  children?: React.ReactNode;
}) {
  const trust = [
    { icon: ShieldCheck, label: 'Lifetime Warranty' },
    { icon: BadgeCheck, label: 'Best Price Guarantee' },
    { icon: Clock, label: 'Rapid Turnaround' },
    { icon: Check, label: 'In-House Installers' },
  ];

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image
          src={s.image}
          alt={s.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/40" />
        <div className="container-x relative flex min-h-[80vh] flex-col justify-end py-24 text-white">
          {s.eyebrow && (
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-crimson">
              {s.eyebrow}
            </p>
          )}
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
            {s.title}
          </h1>
          {s.region && <p className="mt-4 text-lg text-white/90">{s.region}</p>}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Let’s Discuss Your Project
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-ink"
            >
              <Phone className="size-4" /> Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ---------- WHY — "The Bulldog Way" ---------- */}
      {s.whyBody && (
        <section className="section">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">The Bulldog Way</p>
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

      {/* ---------- INCLUDES ---------- */}
      {s.includes.length > 0 && (
        <section className="section">
          <div className="container-x">
            <h2 className="mb-12 text-center font-display text-4xl text-ink md:text-5xl">
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
                <h3 className="font-display text-3xl text-ink md:text-4xl">{s.turnaroundTitle}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink/75">{s.turnaroundBody}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- TRUST BAND ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass grid grid-cols-2 gap-8 p-8 md:grid-cols-4">
            {trust.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-center">
                <t.icon className="size-8 text-crimson" />
                <div className="font-sans text-xs uppercase tracking-widest text-ink">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <p className="eyebrow">Budget ranges</p>
              <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">{s.budget.title}</h2>
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

      {s.faqs.length > 0 && <Faq faqs={s.faqs} heading={`${s.name}: your questions`} />}
    </>
  );
}

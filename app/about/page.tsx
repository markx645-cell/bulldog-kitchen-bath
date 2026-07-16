import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home as HomeIcon, Users, ShieldCheck, Award } from 'lucide-react';
import { values } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About — Bulldog Kitchen & Bath | Cincinnati, OH',
  description:
    'Bulldog Kitchen & Bath is Cincinnati’s most organized full-service kitchen and bath remodeler. One in-house team. Lifetime workmanship warranty.',
  alternates: { canonical: '/about' },
};

const icons = { home: HomeIcon, oneteam: Users, shield: ShieldCheck, pricing: Award };

export default function AboutPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="section">
        <div className="container-x">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} className="mb-8" />
          <p className="eyebrow">About Bulldog</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-ink md:text-7xl">
            Cincinnati’s Most Organized Remodeler
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            We re-engineered the home remodel. What used to take months of chaos, surprise costs, and
            contractor roulette now happens on a tight, meticulously planned schedule — without
            sacrificing quality or your peace of mind.
          </p>
        </div>
      </section>

      {/* ---------- BUILT ON A BETTER PROCESS ---------- */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="glass overflow-hidden p-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/assets/about-kitchen.webp"
                alt="Bulldog team at work"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="mb-6 font-display text-4xl text-ink">Built On A Better Process</h2>
            <p className="mb-4 leading-relaxed text-ink/75">
              Every project is led by a dedicated on-site Project Manager, guided by an in-house
              designer, and executed by licensed trade professionals we trust. One contract. One
              accountable team.
            </p>
            <p className="mb-6 leading-relaxed text-ink/75">
              Bathrooms in 2–5 days. Kitchens in about 7. All backed for life. That’s the Bulldog
              way.
            </p>
            <Link
              href="/our-process"
              className="inline-flex items-center gap-2 border-b border-crimson pb-1 font-sans text-sm tracking-wide text-crimson hover:opacity-80"
            >
              See Our Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE STAND FOR ---------- */}
      <section className="section">
        <div className="container-x">
          <h2 className="mb-12 text-center font-display text-4xl text-ink">What We Stand For</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
            {values.map((v) => {
              const Icon = icons[v.icon as keyof typeof icons] ?? ShieldCheck;
              return (
                <div key={v.title} className="border-t-2 border-crimson pt-6">
                  <Icon className="mb-4 size-8 text-crimson" strokeWidth={1.5} />
                  <h3 className="mb-3 font-display text-xl text-ink">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/75">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- READY TO GET STARTED ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-2xl p-12 text-center">
            <h2 className="mb-6 font-display text-4xl text-ink md:text-5xl">
              Ready To Get Started?
            </h2>
            <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
              Book A Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

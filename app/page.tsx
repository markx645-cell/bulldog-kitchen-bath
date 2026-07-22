import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { faqs } from '@/content/site';
import { projects } from '@/content/projects';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import Faq from '@/components/Faq';
import CTASection from '@/components/CTASection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Reviews from '@/components/Reviews';
import Photo from '@/components/Photo';

export const metadata: Metadata = {
  // The layout's title template does not apply to the root segment, so the
  // brand is spelled out here rather than appended automatically.
  title: 'Bulldog Remodel Group | Whole-Home Remodeling in Cincinnati & N. Kentucky',
  description:
    'Bulldog Remodel Group — Cincinnati’s most organized remodeler. Kitchens, bathrooms, basements, ADUs and custom builds with fixed pricing, in-house design, and a lifetime workmanship warranty. Book a consult.',
  alternates: { canonical: '/' },
};

// The four projects the production homepage features.
const FEATURED_SLUGS = ['1217', 'sb-refined-warmth-kitchen-remodel', 'pure-bliss', 'sb-elevated-living-basement-remodel'];
const featured = FEATURED_SLUGS.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as typeof projects;

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="container-x relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">Cincinnati · Northern Kentucky · One accountable team</p>
              <h1 className="mt-3 font-display text-4xl  leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
                Beautiful kitchens &amp; baths.
                <span className="block text-crimson">Built by one team.</span>
              </h1>
              <p className="mt-5 max-w-xl leading-relaxed text-ink/75">
                Full-service kitchen and bath remodeling with fixed pricing, in-house design, and
                concierge-level care — from the first sketch to a lifetime workmanship warranty.
              </p>

              {/* Two CTAs, matching the production hero. */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Let’s Discuss Your Project <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/projects"
                  className="btn-ghost !border-ink/30 !bg-transparent !text-ink hover:!border-ink"
                >
                  View Our Featured Projects
                </Link>
              </div>
            </div>

            <Photo
              label="Cincinnati Kitchen Remodel"
              src="/assets/hero-kitchen.webp"
              alt="Luxury kitchen and bathroom remodel by Bulldog Remodel Group"
              className="aspect-[4/3] w-full shadow-lift"
              priority
              sizes="(max-width:1024px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <ServicesGrid />

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl text-center sm:text-left">
              <p className="eyebrow">Featured projects</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                Cincinnati-area homes we’ve transformed
              </h2>
            </div>
            <Link href="/projects" className="btn-ghost shrink-0">View all projects</Link>
          </div>
          {/* Slide rather than the domino tip: these are wide photo cards in a
              single row, and they read better arriving as one left-to-right
              wave than hinging individually. */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-slide>
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex flex-col overflow-hidden glass glass-hover"
              >
                {p.photos[0] && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={p.photos[0].src}
                      alt={p.photos[0].alt}
                      fill
                      sizes="(max-width:640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-display text-base text-ink">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED — BATHROOM REMODELING ---------- */}
      <section id="bathrooms" className="section">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Featured — Bathroom Remodeling</p>
            <h2 className="mb-6 mt-3 font-display text-4xl text-ink md:text-5xl">
              Full-service bathroom remodeling for <em>every</em> Cincinnati home
            </h2>
            <p className="mb-4 leading-relaxed text-ink/75">
              Tired of bathroom projects that drag on for months? Our engineered process delivers
              primary baths, guest baths, and powder rooms with curated tile, custom vanities,
              walk-in showers, freestanding tubs, and designer fixtures — installed by one
              accountable team.
            </p>
            <ul className="mb-8 grid gap-3 text-sm sm:grid-cols-2">
              {[
                'Custom vanities & cabinetry',
                'Tile, stone & marble showers',
                'Freestanding tubs & wet rooms',
                'Heated floors & smart fixtures',
                'Lighting, mirrors & hardware',
                'Plumbing & electrical, fully managed',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-crimson" strokeWidth={1.5} />
                  <span className="text-ink/75">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/bathroom-remodel"
              className="btn-primary !bg-crimson hover:!bg-crimson-600"
            >
              Plan Your Bathroom Remodel <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="glass order-first overflow-hidden p-2 lg:order-last">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src="/assets/service-bathroom.webp"
                alt="Luxury marble bathroom remodel with freestanding tub and brass fixtures"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* ---------- ABOUT ---------- */}
      <section className="section">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="glass overflow-hidden p-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/assets/about-kitchen.webp"
                alt="Homeowners enjoying their new kitchen"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="eyebrow">About Bulldog Remodel Group</p>
            <h2 className="mb-6 mt-3 font-display text-4xl text-ink md:text-5xl">
              Cincinnati’s most <em>organized</em> kitchen &amp; bath remodeler
            </h2>
            <p className="mb-4 leading-relaxed text-ink/75">
              We’ve re-engineered the home remodel. What used to take months of chaos, surprise
              costs, and contractor roulette now happens on a tight, meticulously planned schedule —
              without sacrificing quality, design, or your peace of mind.
            </p>
            <p className="mb-8 leading-relaxed text-ink/75">
              Every project is led by a dedicated on-site Project Manager, guided by an in-house
              interior designer, and executed by licensed, trusted trade professionals. One contract.
              One accountable team. One stunning result.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-b border-crimson pb-1 font-sans text-sm tracking-wide text-ink hover:text-crimson"
            >
              Learn more about us <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Reviews limit={6} />

      <TestimonialsCarousel />

      {/* Coverage, not navigation — the names here are plain text on purpose.
          See the note at the top of ServiceAreaSection. */}
      <ServiceAreaSection />

      <Faq faqs={faqs} />

      <CTASection withForm />
    </>
  );
}

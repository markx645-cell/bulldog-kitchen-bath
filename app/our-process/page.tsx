import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Check, Search, ClipboardList, PencilRuler, Hammer, Smile } from 'lucide-react';
import { site } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import StepNav from './StepNav';

export const metadata: Metadata = {
  title: 'Our Process | Bulldog Remodel Group',
  description:
    'From first call to lifetime warranty — the five-step Bulldog Remodel Group process: Educate, Discover, Design, Build, Enjoy. Serving Ohio, Kentucky and Indiana.',
  alternates: { canonical: '/our-process' },
};

const STEPS = [
  {
    n: '01',
    id: 'educate',
    title: 'Educate',
    icon: Search,
    tagline: 'Explore ideas & define your must-haves',
    blocks: [
      {
        h: 'Get inspired',
        p: 'Start by gathering ideas — browse our project gallery, save photos on Houzz or Pinterest, and make a short list of what you love (and what you don’t). The clearer your vision, the smoother the project.',
      },
      {
        h: 'Get specific about your project',
        p: 'Is it just the primary bath, or the bath plus flooring in the hallway? Are you keeping the existing footprint or moving walls? Getting specific upfront helps everyone set a realistic budget and timeline.',
      },
      {
        h: 'Set a working budget',
        p: 'We’ll help you understand what a project like yours typically costs in the Cincinnati tri-state market. We’d rather have an honest budget conversation on day one than surprise you in week three.',
      },
      {
        h: 'Research your contractor',
        p: 'Check the BBB, Google Reviews, and Houzz. Read what real homeowners across Ohio, Kentucky and Indiana say about Bulldog Remodel Group — and call the references of anyone you’re considering.',
      },
      {
        h: 'Before you call us',
        p: 'Our first call takes 15–20 minutes. We’ll ask where your home is, what you’d like to remodel, why now, when you’d like it done, and what you’re comfortable investing. If we’re not the right fit, we’ll tell you and point you somewhere that is.',
      },
    ],
  },
  {
    n: '02',
    id: 'discover',
    title: 'Discover',
    icon: ClipboardList,
    tagline: 'We come to you for an in-home walkthrough',
    blocks: [
      {
        h: 'In-home walkthrough',
        p: 'We spend 30–60 minutes in your home getting to know you and the space. We’ll listen to your goals, share what’s possible, and talk through a realistic budget range — no pressure, no high-pressure sales pitch.',
      },
      {
        h: 'Three possible outcomes',
        p: '1) We schedule a follow-up to present pallet selections, basic layout and a 3D rendering. 2) We move directly into a design agreement and lock in a refined scope. 3) We agree we’re not the right fit — and that’s okay too.',
      },
      {
        h: 'Honest, upfront pricing',
        p: 'What you sign for is what you pay. Our Price Guarantee means no mid-project surprises, no inflated change orders, no games.',
      },
    ],
  },
  {
    n: '03',
    id: 'design',
    title: 'Design',
    icon: PencilRuler,
    tagline: 'From rough sketches to final selections',
    blocks: [
      {
        h: 'Schematic design',
        p: 'Our designers produce a few rough drafts so you can react, refine and react again. We narrow down the layout you love before we ever talk about specific finishes.',
      },
      {
        h: 'Material & finish selections',
        p: 'Cabinets, tile, countertops, plumbing fixtures, paint colors, hardware — everything is selected before construction starts. Decisions made now means a faster, smoother build later.',
      },
      {
        h: 'Estimating & documentation',
        p: 'While you’re choosing finishes with our designer, our team is finalizing measurements, drawings and code details so the build crew has a complete plan on day one.',
      },
      {
        h: 'Construction agreement',
        p: 'Once everything is dialed in, we present a fixed-price Construction Agreement covering scope, schedule and payment terms. Any design fees credit toward your first construction payment.',
      },
    ],
  },
  {
    n: '04',
    id: 'build',
    title: 'Build',
    icon: Hammer,
    tagline: 'In-house craftsmen — no subcontractor shuffle',
    blocks: [
      {
        h: 'Permits handled for you',
        p: 'We pull every required permit with the appropriate Ohio, Kentucky or Indiana building department and coordinate every inspection. You don’t lift a finger.',
      },
      {
        h: 'Pre-construction meeting',
        p: 'Before we start, we walk through every detail — parking, dumpster placement, pets, daily start times, dust control. No surprises on day one.',
      },
      {
        h: 'Daily project communication',
        p: 'Your dedicated project manager is on-site daily and one text away. You’ll always know what happened today, what’s happening tomorrow, and what we need from you.',
      },
      {
        h: 'In-house installers',
        p: 'We don’t hand your home off to whoever has a free Tuesday. Bulldog craftsmen are W-2 employees — trained, vetted, and accountable to one team from demo to final walkthrough.',
      },
      {
        h: 'Rapid turnaround',
        p: 'Most walk-in showers are done in a single day. Most full bath remodels in a week or two. We respect your home and your schedule.',
      },
    ],
  },
  {
    n: '05',
    id: 'enjoy',
    title: 'Enjoy',
    icon: Smile,
    tagline: 'Backed by a lifetime workmanship warranty',
    blocks: [
      {
        h: 'Lifetime workmanship warranty',
        p: 'We back every install for life — not one year, not five. If anything we built isn’t right, we’ll make it right. That’s the Bulldog promise.',
      },
      {
        h: 'A relationship, not a transaction',
        p: 'When the punch list is done, our relationship doesn’t end. We’re a Cincinnati company serving Cincinnati neighbors — across OH, KY and IN — and we’re here whenever you need us next.',
      },
    ],
  },
];

export default function OurProcessPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/assets/process-hero.webp"
          alt="The Bulldog Remodel Group remodeling process"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/40" />
        <div className="container-x relative flex min-h-[70vh] flex-col justify-end py-24 text-white">
          <Breadcrumbs items={[{ label: 'Our Process', href: '/our-process' }]} className="mb-8" />
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-crimson">
            The Bulldog Way
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
            Our Remodeling Process
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Serving homeowners across Ohio, Kentucky and Indiana from our home base in Cincinnati.
          </p>
        </div>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Welcome</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              A clear path from first call to final walkthrough
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/75 lg:col-span-8">
            <p>
              Welcome to Bulldog Remodel Group — Cincinnati’s full-service kitchen and bath
              remodeler. We’re a local team of designers, project managers and W-2 craftsmen serving
              homeowners across the tri-state area: Ohio, Kentucky and Indiana.
            </p>
            <p>
              Starting a remodel is exciting — and a little overwhelming. That’s normal. The guide
              below walks you through our five-step process so you know exactly what to expect from
              our team, from the first phone call all the way through your lifetime warranty.
            </p>
            <p className="pt-2 font-sans text-sm uppercase tracking-widest text-ink/80">
              * This process applies to bathroom remodels, walk-in showers, walk-in tubs, tub/shower
              combos, bathroom flooring and full kitchen remodels.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- STEP NAV (sticky, scroll-spy) ---------- */}
      <StepNav steps={STEPS.map((s) => ({ n: s.n, id: s.id, title: s.title }))} />

      {/* ---------- STEPS ---------- */}
      {STEPS.map((step) => (
        <section id={step.id} key={step.id} className="section scroll-mt-[180px]">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="sticky top-48">
                <div className="-mb-6 font-display text-[10rem] leading-none text-crimson/20">
                  {step.n}
                </div>
                <div className="mb-3 flex items-center gap-3">
                  <step.icon className="size-7 text-crimson" />
                  <div className="font-sans text-xs uppercase tracking-[0.3em] text-crimson">
                    Step {step.n}
                  </div>
                </div>
                <h2 className="mb-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                  {step.title}
                </h2>
                <p className="italic text-ink/70">{step.tagline}</p>
              </div>
            </div>
            <div className="space-y-8 lg:col-span-8">
              {step.blocks.map((b) => (
                <div key={b.h} className="border-l-2 border-crimson pl-6">
                  <div className="mb-2 flex items-center gap-3">
                    <Check className="size-5 shrink-0 text-crimson" />
                    <h3 className="font-display text-xl text-ink">{b.h}</h3>
                  </div>
                  <p className="leading-relaxed text-ink/75">{b.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ---------- CLOSING CTA ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-3xl p-12 text-center">
            <p className="eyebrow">Ready When You Are</p>
            <h2 className="mb-6 mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              A well-organized process means a great experience.
            </h2>
            <p className="text-lg leading-relaxed text-ink/75">
              Let’s see if Bulldog Remodel Group is the right fit for your home. Free in-home
              consultations across Cincinnati and the surrounding tri-state area.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/consult" className="btn-primary !bg-crimson hover:!bg-crimson-600">
                Book Free Estimate
              </Link>
              <a href={site.phoneHref} className="btn-ghost inline-flex items-center gap-2">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

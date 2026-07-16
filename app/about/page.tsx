import type { Metadata } from 'next';
import Link from 'next/link';
import { site, stats } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import Photo from '@/components/Photo';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us — Cincinnati’s Most Organized Remodeler',
  description:
    'Bulldog Kitchen & Bath re-engineered remodeling around one accountable team, fixed pricing, and in-house design. Learn how we take the chaos out of kitchen and bath renovations in Cincinnati.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} className="mb-6" />
          <p className="eyebrow">About Bulldog Kitchen &amp; Bath</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            We took the chaos out of remodeling
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/85">
            Most remodels go sideways for the same reasons: too many vendors, no single point of
            accountability, and a price that moves. We rebuilt the whole process to fix that.
          </p>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Photo label="The Bulldog Team" src="/photos/about-team.jpg" alt="Bulldog Kitchen & Bath remodeling team at work" className="aspect-[4/3] w-full shadow-lift" sizes="(max-width:1024px) 100vw, 50vw" />
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                One team, one contract, one number to call
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-steel">
                <p>
                  Bulldog Kitchen &amp; Bath is a {site.parent} company built on a simple idea: a
                  remodel should be the easiest big project you ever take on, not the most stressful.
                </p>
                <p>
                  So we brought everything under one roof. Our in-house designers plan your space and
                  show you a 3D rendering. One project manager owns your schedule, your materials, and
                  your updates. Our own crews and long-term trade partners do the work. And the price
                  is fixed before demo day — no change-order surprises.
                </p>
                <p>
                  The result is {stats.homesRemodeled} finished Cincinnati kitchens and baths, a{' '}
                  {stats.googleRating}-star reputation, and a lifetime workmanship warranty we actually
                  stand behind.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/consult" className="btn-primary">Book a Free Consult</Link>
                <Link href="/projects" className="btn-ghost">See Our Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-200">
        <div className="container-x grid gap-8 py-14 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { stat: stats.homesRemodeled, label: 'Kitchens & baths remodeled' },
            { stat: `${stats.googleRating}★`, label: 'Average customer rating' },
            { stat: 'Lifetime', label: 'Workmanship warranty' },
            { stat: 'Fixed', label: 'Price guarantee' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold text-vermilion">{s.stat}</p>
              <p className="mt-2 text-sm text-steel">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSteps />
      <CTASection withForm />
    </>
  );
}

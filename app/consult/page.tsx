import type { Metadata } from 'next';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { site } from '@/content/site';
import ConsultForm from './ConsultForm';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    "Schedule a 15-minute consultation with Bulldog Remodel Group. Tell us about your kitchen or bath project and we'll get back to you within one business day.",
  alternates: { canonical: '/consult' },
  openGraph: {
    title: 'Book a Consultation — Bulldog Remodel Group',
    description: 'Tell us about your project and book a quick 15-minute call.',
    url: `${site.url}/consult`,
  },
};

const EXPECT = [
  'A real person reads every request — usually same day.',
  'A 15-minute call to understand the scope, budget, and timing.',
  "If we're a good fit, we book an in-home estimate.",
];

export default function ConsultPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">15-Minute Consultation</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            Let’s Talk About Your Project
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/75">
            Tell us a little about your space and when you’re free. We’ll follow up within one
            business day to lock in a quick call — no pressure, no sales pitch.
          </p>
        </div>
      </section>

      {/* ---------- SIDE RAIL + FORM ---------- */}
      <section className="section">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-8 lg:sticky lg:top-32">
            <div>
              <h2 className="mb-4 font-display text-2xl text-ink">What to expect</h2>
              <ul className="space-y-4 text-sm text-ink/75">
                {EXPECT.map((e) => (
                  <li key={e} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-crimson" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 border-t border-ink/10 pt-6 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-crimson" />
                <a href={site.phoneHref} className="text-ink hover:text-crimson">
                  {site.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-crimson" />
                <a href={`mailto:${site.email}`} className="text-ink hover:text-crimson">
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-ink/70">
                <MapPin className="size-4 shrink-0 text-crimson" />
                Cincinnati, OH · N. KY · SE IN
              </div>
            </div>
          </aside>

          <ConsultForm />
        </div>
      </section>
    </>
  );
}

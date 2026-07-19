import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { site } from '@/content/site';
import BookEstimateForm from '@/components/BookEstimateForm';

export const metadata: Metadata = {
  title: 'Contact — Cincinnati, OH',
  description:
    'Get an in-home estimate for your kitchen or bath remodel in Cincinnati. Call (513) 657-3750 or send us a message.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Bulldog Remodel Group',
    description:
      'In-home estimates across Cincinnati, Northern Kentucky, and Southeast Indiana.',
  },
};

export default function ContactPage() {
  const details = [
    { icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: 'Service Area', value: site.serviceAreaLine },
    { icon: Clock, label: 'Hours', value: site.hoursLine },
  ];

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-ink md:text-7xl">
            Let’s Talk About Your Space
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/75">
            In-home consultation. No pressure, no surprises — just real numbers and a real plan.
          </p>
        </div>
      </section>

      {/* ---------- DETAILS + FORM ---------- */}
      <section className="section">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-display text-3xl text-ink">Reach Us Directly</h2>
            <ul className="space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <d.icon className="mt-1 size-5 shrink-0 text-crimson" />
                  <div>
                    <div className="font-sans text-xs uppercase tracking-widest text-ink/60">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a href={d.href} className="text-lg text-ink hover:text-crimson">
                        {d.value}
                      </a>
                    ) : (
                      <div className="text-lg text-ink">{d.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink/70">
              <p>
                Need financing options?{' '}
                <Link href="/financing" className="text-crimson hover:underline">
                  See our financing plans →
                </Link>
              </p>
            </div>
          </div>

          <div className="glass p-8">
            <h2 className="mb-6 font-display text-3xl text-ink">Book An Estimate</h2>
            <BookEstimateForm />
          </div>
        </div>
      </section>
    </>
  );
}

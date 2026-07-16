import type { Metadata } from 'next';
import { site } from '@/content/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact — Book Your Free Kitchen or Bath Consult',
  description:
    'Contact Bulldog Kitchen & Bath in Cincinnati. Call (513) 657-3750 or request a free design consultation online. Serving Greater Cincinnati and Northern Kentucky, Mon–Fri 9am–5pm.',
  alternates: { canonical: '/contact' },
};

function InfoIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  switch (name) {
    case 'phone':
      return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
    case 'mail':
      return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>;
    case 'pin':
      return <svg {...common}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case 'clock':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    default:
      return null;
  }
}

export default function ContactPage() {
  const items = [
    { icon: 'phone', label: 'Call or text', value: site.phone, href: site.phoneHref },
    { icon: 'pin', label: 'Location', value: `${site.address.city}, ${site.address.state}` },
    { icon: 'map', label: 'Service area', value: site.serviceAreaShort },
    { icon: 'clock', label: 'Hours', value: site.hours },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-12 lg:py-16">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} className="mb-6" />
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h1 className="mt-3 font-display text-4xl  leading-[1.05] text-ink sm:text-5xl">
                Let’s talk about your project
              </h1>
              <p className="mt-5 max-w-lg leading-relaxed text-ink/75">
                Call us, or send a few details and a Bulldog project consultant will reach out to
                schedule your free design consultation. No pressure, no obligation.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {items.map((it) => (
                  <div key={it.label} className="flex items-start gap-3 rounded-xl border border-ink/20 bg-ink/5 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson text-white">
                      <InfoIcon name={it.icon} />
                    </span>
                    <div>
                      <p className="font-sans text-[11px] font-bold uppercase tracking-wide text-crimson">{it.label}</p>
                      {it.href ? (
                        <a href={it.href} className="mt-0.5 block font-semibold text-ink hover:text-crimson">{it.value}</a>
                      ) : (
                        <p className="mt-0.5 text-sm text-ink/75">{it.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:justify-self-end">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

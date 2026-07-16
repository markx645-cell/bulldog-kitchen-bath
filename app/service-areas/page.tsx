import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceAreas } from '@/content/site';
import { locations } from '@/content/locations';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Service Areas — Kitchen & Bath Remodeling Near You',
  description:
    'Bulldog Kitchen & Bath serves Greater Cincinnati and Northern Kentucky — from Hyde Park and Mason to Fort Thomas and Florence. Find your community and see local remodeling detail.',
  alternates: { canonical: '/service-areas' },
};

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const byCity = new Map(locations.map((l) => [norm(l.city), l]));

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sage">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ label: 'Service Areas', href: '/service-areas' }]} className="mb-6" />
          <p className="eyebrow">Where we work</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Remodeling across Greater Cincinnati &amp; Northern Kentucky
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/75">
            Our crews cover the whole map — {locations.length} communities on both sides of the river.
            Find yours below for local detail.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x">
          <div className="grid gap-10 sm:grid-cols-2">
            {serviceAreas.map((g) => (
              <div key={g.region}>
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e73213" strokeWidth="2" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {g.region}
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                  {g.cities.map((c) => {
                    const loc = byCity.get(norm(c.split(',')[0]));
                    const label = c.split(',')[0];
                    return loc ? (
                      <Link
                        key={c}
                        href={`/kitchen-bath-remodeling/${loc.slug}`}
                        className="text-sm text-steel transition-colors hover:text-vermilion hover:underline"
                      >
                        {label}
                      </Link>
                    ) : (
                      <span key={c} className="text-sm text-steel">{label}</span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection withForm />
    </>
  );
}

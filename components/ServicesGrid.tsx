import Link from 'next/link';
import Photo from '@/components/Photo';
import { serviceList } from '@/content/services';

export default function ServicesGrid({
  heading = 'Our turnkey services',
  eyebrow = 'What we do',
  sub = 'Kitchens, bathrooms, and basements — designed, priced, and built by one accountable team.',
}: {
  heading?: string;
  eyebrow?: string;
  sub?: string;
}) {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-steel">{sub}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
          {serviceList.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-sage shadow-card transition-all hover:-translate-y-1 hover:border-sage hover:shadow-lift"
            >
              <Photo label={s.name} src={s.image} alt={`${s.name} in Cincinnati`} className="aspect-[16/10] w-full" rounded="rounded-none" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-[11px] font-bold uppercase tracking-widest text-sage-600">
                  {s.eyebrow}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-ink group-hover:text-vermilion">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-vermilion">
                  View service
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

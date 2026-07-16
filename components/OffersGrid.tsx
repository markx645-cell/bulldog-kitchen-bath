import Link from 'next/link';
import { offers } from '@/content/site';

export default function OffersGrid() {
  return (
    <section className="section bg-cream-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Getting started</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Two easy ways to begin
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2" data-reveal data-reveal-stagger>
          {offers.map((o) => (
            <div
              key={o.headline}
              className="flex flex-col rounded-2xl border border-steel-200 bg-cream-200 p-8 shadow-card"
            >
              <span className="w-fit rounded-full bg-vermilion px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wide text-white">
                {o.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink">{o.headline}</h3>
              <p className="mt-2 flex-1 text-steel">{o.body}</p>
              <Link href={o.href} className="btn-primary mt-6 w-fit">
                {o.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

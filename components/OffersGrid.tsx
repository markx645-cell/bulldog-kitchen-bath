import Link from 'next/link';
import { offers } from '@/content/site';

export default function OffersGrid() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Getting started</p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Two easy ways to begin
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2" data-reveal data-reveal-stagger>
          {offers.map((o) => (
            <div
              key={o.headline}
              className="flex flex-col glass glass-hover p-8"
            >
              <span className="w-fit rounded-full bg-ink px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-white">
                {o.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl text-ink">{o.headline}</h3>
              <p className="mt-2 flex-1 text-ink/70">{o.body}</p>
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

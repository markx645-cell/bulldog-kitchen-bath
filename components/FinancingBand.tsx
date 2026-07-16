import Link from 'next/link';
import { financing } from '@/content/site';

export default function FinancingBand() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Financing</p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            {financing.headline}
          </h2>
          <p className="mt-4 text-ink/70">{financing.lead}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
          {financing.points.map((p) => (
            <div
              key={p.small}
              className="glass glass-hover p-6"
            >
              <p className="font-display text-4xl text-ink">{p.big}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.small}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/financing" className="btn-dark">
            See Financing Options
          </Link>
        </div>
      </div>
    </section>
  );
}

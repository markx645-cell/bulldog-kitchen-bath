import Link from 'next/link';
import { financing } from '@/content/site';

export default function FinancingBand() {
  return (
    <section className="section bg-stone">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Financing</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            {financing.headline}
          </h2>
          <p className="mt-4 text-steel">{financing.lead}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
          {financing.points.map((p) => (
            <div
              key={p.small}
              className="rounded-xl border border-steel-200 bg-white p-6 text-center shadow-card"
            >
              <p className="font-display text-4xl font-extrabold text-crimson">{p.big}</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">{p.small}</p>
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

import { warranty } from '@/content/site';

export default function WarrantyHighlight() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-ink p-8 shadow-lift sm:p-10">
            <div className="glass-sheen absolute inset-0" />
            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-white">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <p className="mt-6 font-sans text-sm uppercase tracking-widest text-crimson">
                Backed for life
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                {warranty.headline}
              </h2>
              <p className="mt-4 text-ink/75">{warranty.lead}</p>
            </div>
          </div>

          <div className="space-y-6">
            {warranty.points.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-sans text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink">{p.title}</h3>
                  <p className="mt-1 text-ink/70">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

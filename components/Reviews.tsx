import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { reviews, type Review } from '@/content/reviews';

/**
 * Customer reviews.
 *
 *   variant="grid" (homepage) — three of the shortest reviews side by side in a
 *   glass-card row, plus a button through to the full /reviews page.
 *
 *   variant="rows" (default, /reviews) — every review as a full-width glass row.
 *
 * Each review shows stars, the quote (with a crimson rule down its left edge),
 * then the name with the project where a date would sit (the owner wanted them
 * dateless). Reviews with no `quote` are skipped. Empty array → section removes
 * itself. Server component, no client JS.
 */
function Stars({ rating }: { rating: number }) {
  const r = Math.max(0, Math.min(5, rating));
  return (
    <div className="flex gap-1" aria-label={`${r} out of 5 stars`}>
      {Array.from({ length: r }).map((_, s) => (
        <Star key={s} className="size-4 fill-crimson text-crimson" />
      ))}
    </div>
  );
}

function Body({ r }: { r: Review }) {
  return (
    <>
      <Stars rating={r.rating ?? 5} />
      <blockquote className="mt-6 flex-1 border-l-2 border-crimson pl-5 leading-relaxed text-ink/85">
        “{r.quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm text-ink/70">
        <span className="font-semibold text-ink">{r.name}</span>
        {r.project && <span className="italic text-ink/50">{` — ${r.project}`}</span>}
        {r.location && <span className="text-ink/50">{` · ${r.location}`}</span>}
      </figcaption>
    </>
  );
}

export default function Reviews({ variant = 'rows' }: { variant?: 'rows' | 'grid' }) {
  const usable = reviews.filter((r) => r.quote);
  if (usable.length === 0) return null;

  const Header = (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">In their words</p>
      <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
        What Tri-State homeowners say
      </h2>
      <p className="mt-4 leading-relaxed text-ink/75">
        A sample of the reviews left by Bulldog customers after their remodel wrapped up.
      </p>
    </div>
  );

  if (variant === 'grid') {
    // Three short reviews for the homepage row. Prefer ones with a project tag
    // (the real remodel testimonials) so the homepage stays on-brand, and take
    // the shortest of those so the columns stay balanced. Fall back gracefully.
    const shortEnough = (r: Review) => (r.quote?.length ?? 0) >= 100;
    const byLength = (a: Review, b: Review) => (a.quote?.length ?? 0) - (b.quote?.length ?? 0);
    const remodelShort = usable.filter((r) => shortEnough(r) && r.project).sort(byLength);
    const anyShort = usable.filter(shortEnough).sort(byLength);
    const picks = (remodelShort.length >= 3 ? remodelShort : anyShort.length >= 3 ? anyShort : usable).slice(0, 3);

    return (
      <section className="section">
        <div className="container-x">
          {Header}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {picks.map((r, i) => (
              <figure key={i} className="glass flex flex-col rounded-2xl p-6 sm:p-8">
                <Body r={r} />
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn-primary inline-flex items-center gap-2">
              Read more reviews <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container-x">
        {Header}
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {usable.map((r, i) => (
            <figure key={i} className="glass flex flex-col rounded-2xl p-6 sm:p-8">
              <Body r={r} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

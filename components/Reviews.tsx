import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { reviews } from '@/content/reviews';

/**
 * Customer reviews — full-width stacked rows on glass panels (not cards).
 *
 * Each row: star rating, the quote, then the reviewer's name with the project
 * in the muted/italic position (where a date would otherwise sit — the owner
 * asked for the reviews without dates). Reviews with no `quote` are skipped so
 * nothing empty renders. If the array is empty the section removes itself.
 *
 * Server component — no interactivity, no client JS.
 */
export default function Reviews({ limit }: { limit?: number }) {
  const usable = reviews.filter((r) => r.quote);
  if (usable.length === 0) return null;

  // Homepage passes a limit and links out to the full /reviews page; the
  // /reviews page passes none and shows them all.
  const shown = limit ? usable.slice(0, limit) : usable;
  const truncated = limit != null && usable.length > limit;

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">In their words</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            What Tri-State homeowners say
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            A sample of the reviews left by Bulldog customers after their remodel wrapped up.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {shown.map((r, i) => {
            const rating = Math.max(0, Math.min(5, r.rating ?? 5));
            return (
              <figure key={i} className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-crimson text-crimson" />
                  ))}
                </div>

                <blockquote className="mt-4 leading-relaxed text-ink/85">“{r.quote}”</blockquote>

                <figcaption className="mt-4 text-sm text-ink/70">
                  <span className="font-semibold text-ink">{r.name}</span>
                  {r.project && <span className="italic text-ink/50">{` — ${r.project}`}</span>}
                  {r.location && <span className="text-ink/50">{` · ${r.location}`}</span>}
                </figcaption>
              </figure>
            );
          })}
        </div>

        {truncated && (
          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wide text-crimson transition hover:gap-3"
            >
              Read all {usable.length} reviews <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

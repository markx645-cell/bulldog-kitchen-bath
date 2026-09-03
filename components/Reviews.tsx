import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { reviews, type Review } from '@/content/reviews';
import { testimonials, type Testimonial } from '@/content/testimonials';
import VideoReviewButton from './VideoReviewButton';
import ReviewsPager from './ReviewsPager';

/**
 * Customer reviews.
 *
 *   variant="grid" (homepage) — three of the shortest reviews side by side in a
 *   glass-card row, plus a button through to the full /reviews page.
 *
 *   variant="rows" (default, /reviews) — every review as a full-width glass row,
 *   paged ten at a time, with the four video testimonials mixed in among them;
 *   those cards carry a "Watch their video" button that plays the recording in
 *   a lightbox.
 *
 * Each review shows stars, the quote (with a crimson rule down its left edge),
 * then the name with the project where a date would sit (the owner wanted them
 * dateless). Reviews with no `quote` are skipped. Empty array → section removes
 * itself. Server component; the only client JS is the video button on the cards
 * that have a recording.
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
      {r.videoUrl && (
        <VideoReviewButton name={r.name} videoUrl={r.videoUrl} poster={r.poster} />
      )}
    </>
  );
}

/**
 * The people who recorded a video testimonial left a review too — it just lived
 * only in the recording. Each becomes an ordinary review card carrying its
 * `videoUrl`, so it reads as text and offers the video alongside the rest.
 */
const asReview = (t: Testimonial): Review => ({
  name: t.name,
  location: t.location,
  project: t.project,
  quote: t.quote,
  rating: t.rating,
  videoUrl: t.videoUrl,
  poster: t.poster ?? t.thumbnail,
});

/**
 * Where the video reviews sit in the finished list, 1-based, at the owner's
 * direction. Spare positions are simply unused, so adding a fifth video
 * testimonial puts it at the next one without touching this file.
 */
const VIDEO_SPOTS = [2, 8, 18, 27, 33];

/**
 * Mixes the video reviews in among the written ones rather than grouping them.
 * Positions are fixed, not random — the page is statically exported, so the
 * order has to come out the same on every build.
 */
function mixed(written: Review[], videos: Review[]): Review[] {
  const out = [...written];
  // Ascending spots, so each insert lands at exactly its 1-based position:
  // everything spliced in earlier already sits above it.
  videos.forEach((v, i) => {
    const spot = VIDEO_SPOTS[i] ?? out.length + 1;
    out.splice(Math.min(spot - 1, out.length), 0, v);
  });
  return out;
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

  // The video testimonials join the written reviews here, mixed through the
  // list. The homepage row above stays written-only — those quotes run long.
  const rows = mixed(usable, testimonials.filter((t) => t.quote).map(asReview));

  return (
    <section className="section">
      <div className="container-x">
        {Header}
        <ReviewsPager total="600+ reviews">
          {rows.map((r, i) => (
            <figure key={i} className="glass flex flex-col rounded-2xl p-6 sm:p-8">
              <Body r={r} />
            </figure>
          ))}
        </ReviewsPager>
      </div>
    </section>
  );
}

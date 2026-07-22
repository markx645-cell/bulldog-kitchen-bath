import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Homepage ADU video showcase — a real Bulldog Remodel Group build reel.
 *
 * The video is a vertical (9:16) clip, transcoded to H.264 and compressed for
 * the web (see public/assets/adu-remodel.mp4). Native <video> with a poster and
 * preload="metadata" so the 6 MB file only downloads when the visitor presses
 * play — no autoplay, no client JS.
 *
 * The "617 sq ft, two-bedroom" figures are Bulldog's own, shown on screen in the
 * reel — they describe this specific finished project, not a zoning limit.
 */
export default function AduShowcase() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">See it for yourself</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              A two-bedroom ADU, built in the backyard
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink/75">
              Have a look at this beautiful 617-square-foot, two-bedroom accessory dwelling unit —
              designed and built by Bulldog Remodel Group in the backyard of a single-family home.
              One accountable team and one fixed price, from the foundation to the final walkthrough.
            </p>
            <Link href="/projects" className="btn-primary mt-8 inline-flex items-center gap-2">
              View Featured Projects <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/50 bg-white/40 p-1.5 shadow-lift backdrop-blur-md">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/assets/adu-remodel-poster.webp"
                className="aspect-square w-full rounded-xl bg-ink object-cover"
              >
                <source src="/assets/adu-remodel.mp4" type="video/mp4" />
                <a href="/assets/adu-remodel.mp4">Download the ADU build video</a>.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { PawPrint, Phone } from 'lucide-react';
import { site } from '@/content/site';

/**
 * "Spot our Bulldog Mobile around Cincinnati" — the wrapped Bulldog Tesla, shown from the
 * front and the side. Copy on the left; on the right the two views sit as
 * same-size frames, staggered and overlapping.
 */
export default function SpotOurCar() {
  return (
    // overflow-x-clip: the top photo slides in from the right, and on phones it
    // would otherwise poke past the screen edge mid-animation.
    <section className="section overflow-x-clip">
      {/* On mobile the copy column is display:contents, so the eyebrow and the
          rest of the copy become grid items of their own and the photos
          (order-2) sit between them. On desktop it is one column again. */}
      <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="contents lg:block">
          <p className="order-1 inline-flex items-center gap-2 lg:order-none font-sans text-sm font-bold uppercase tracking-[0.14em] text-crimson">
            <PawPrint className="size-4 shrink-0" /> Spot our Bulldog Mobile around Cincinnati
          </p>
          <div className="order-3 lg:order-none">
          <h2 className="font-display lg:mt-4 text-4xl leading-tight text-ink md:text-5xl">
            Your trusted kitchen, bath &amp; whole-home remodelers in Cincinnati and surrounding
            areas
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-ink/75">
            From a dated kitchen to a bathroom that never quite worked, we handle the whole
            remodel with one accountable team. Fixed pricing, in-house design, and a clean job site
            every day. When you call, you get a real remodeler at your door, not a runaround.
          </p>
          <a
            href={site.phoneHref}
            className="btn-primary mt-8 inline-flex items-center gap-2 !bg-crimson hover:!bg-crimson-600"
          >
            <Phone className="size-4" /> Call {site.phone}
          </a>
          </div>
        </div>

        {/* Collage: two same-size 16:9 frames, the front view overlapping the
            side view's upper-right corner. 16:9 keeps the whole side-on car in
            frame. The box is just tall enough that the frames overlap by a
            sliver, about a sixth of each frame's height. On mobile the photos
            simply stack, full width, with no overlap. */}
        <div className="order-2 flex flex-col gap-4 lg:relative lg:order-none lg:block lg:aspect-[1000/853]" data-reveal data-reveal-pair>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_18px_40px_-8px_rgba(17,12,9,0.45)] lg:absolute lg:right-0 lg:top-0 lg:z-10 lg:w-[82%]">
            <Image
              src="/assets/tesla-front.webp"
              alt="Bulldog Remodel Group's red, black and white wrapped Tesla parked on a Cincinnati street"
              fill
              sizes="(max-width:1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lift lg:absolute lg:bottom-0 lg:left-0 lg:w-[82%]">
            <Image
              src="/assets/tesla-side.webp"
              alt="Side view of the Bulldog Remodel Group Tesla showing its kitchen, bathroom and windows services"
              fill
              sizes="(max-width:1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

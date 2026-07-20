import Image from 'next/image';

export type InvestCopy = {
  /** Headline. Kept per service because the value argument differs — a kitchen's
   *  case is resale, an ADU's is income, a walk-in tub's is staying in the home. */
  heading: string;
  /** One or two paragraphs. No invented statistics — see content/serviceInvest.ts. */
  body: string[];
  quote: string;
  /** Optional. Where a service has no dedicated detail photography, the section
   *  renders as a single centred column rather than repeating the triptych
   *  images that already appear further up the same page. */
  images?: { src: string; alt: string }[];
};

/**
 * "Invest in your future" — the value argument for a service.
 *
 * Shared by the bathroom-remodel pages and every ServicePage-driven service so
 * the layout cannot drift; the copy comes in per service.
 */
export default function InvestSection({
  copy,
  neighborhood,
}: {
  copy: InvestCopy;
  neighborhood?: string;
}) {
  const hasImages = !!copy.images?.length;

  return (
    <section className="section">
      <div
        className={
          hasImages
            ? 'container-x grid items-center gap-16 lg:grid-cols-2'
            : 'container-x max-w-3xl'
        }
      >
        <div>
          <p className="eyebrow">
            {neighborhood ? `Invest in your future in ${neighborhood}` : 'Invest in your future'}
          </p>
          <h2 className="mb-8 mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            {copy.heading}
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink/75">
            {copy.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <blockquote className="border-l-2 border-crimson pl-6 font-display text-2xl italic leading-snug text-ink">
              {copy.quote}
            </blockquote>
          </div>
        </div>
        {hasImages && (
          <div className="grid grid-cols-2 gap-4">
            {copy.images!.slice(0, 2).map((img, i) => (
              <div
                key={img.src}
                className={`glass relative aspect-[4/5] overflow-hidden p-1.5 ${
                  i === 1 ? 'mt-12' : ''
                }`}
              >
                <div className="relative size-full overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width:1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

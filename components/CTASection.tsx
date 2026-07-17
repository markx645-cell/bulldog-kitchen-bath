import Link from 'next/link';
import { site } from '@/content/site';
import QuoteForm from '@/components/QuoteForm';

export default function CTASection({
  heading = 'Ready for a kitchen or bath you love?',
  sub = 'Free design consultation. One fixed price. No high-pressure sales — that’s a promise, not a pitch.',
  pitch = 'Meet your designer and project manager, see a 3D rendering of your space, and get an honest, all-in number. One team, start to finish.',
  withForm = false,
}: {
  heading?: string;
  sub?: string;
  pitch?: string;
  withForm?: boolean;
}) {
  if (withForm) {
    return (
      <section className="relative overflow-hidden">
        <div className="glass-sheen absolute inset-0" />
        <div className="container-x relative grid items-start gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr]">
          <div className="lg:pt-2">
            <p className="eyebrow">{site.headline}</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{heading}</h2>
            <p className="mt-6 max-w-lg text-ink/75">{sub}</p>
            {pitch && <p className="mt-4 max-w-lg text-ink/75">{pitch}</p>}
            <a
              href={site.phoneHref}
              className="btn-ghost mt-6 !border-ink/30 !bg-transparent !text-ink hover:!border-ink"
            >
              Call {site.phone}
            </a>
          </div>
          <div className="lg:justify-self-end">
            <QuoteForm />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <div className="glass-sheen absolute inset-0" />
      <div className="container-x relative flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <p className="eyebrow">{site.headline}</p>
        <h2 className="max-w-2xl font-display text-3xl text-ink sm:text-4xl">{heading}</h2>
        <p className="max-w-xl text-ink/75">{sub}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Book a Free Consult
          </Link>
          <a href={site.phoneHref} className="btn-ghost !bg-transparent !text-ink !border-ink/30 hover:!border-ink">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

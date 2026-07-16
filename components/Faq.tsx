import { site } from '@/content/site';
import type { Faq as FaqItem } from '@/content/services';

export default function Faq({
  faqs,
  heading = 'Frequently asked questions',
  eyebrow = 'Good questions',
  withSchema = true,
}: {
  faqs: readonly FaqItem[];
  heading?: string;
  eyebrow?: string;
  withSchema?: boolean;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="section bg-white">
      <div className="container-x">
        {withSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
          </div>
          <div className="mt-10 divide-y divide-steel-200 border-y border-steel-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="2.5"
                    className="shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-steel">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-steel">
            Still have a question?{' '}
            <a href={site.phoneHref} className="font-semibold text-crimson hover:underline">
              Call {site.phone}
            </a>{' '}
            — we’re happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}

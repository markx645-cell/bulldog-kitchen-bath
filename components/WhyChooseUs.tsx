import { pillars } from '@/content/site';

function PillarIcon({ name }: { name: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };
  switch (name) {
    case 'concierge':
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21v-6a7 7 0 0 1 14 0v6" />
          <path d="M12 8V4" />
          <path d="M10 4h4" />
        </svg>
      );
    case 'design':
      return (
        <svg {...common}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case 'oneteam':
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 'pricing':
      return (
        <svg {...common}>
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-ink">Why Cincinnati chooses us</p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            One organized team, zero surprises
          </h2>
          <p className="mt-4 text-ink">
            We re-engineered remodeling so you deal with one accountable team from design to the final
            walkthrough — with the price and schedule locked before we start.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
          {pillars.map((p) => (
            <div key={p.title} className="glass glass-hover p-6">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/50 bg-white/40 text-ink backdrop-blur-md">
                <PillarIcon name={p.icon} />
              </span>
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

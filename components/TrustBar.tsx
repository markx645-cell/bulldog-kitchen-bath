import { trustPoints } from '@/content/site';

// Mirrors the production trust band: four claims the business actually makes.
// Deliberately no volume/rating stats — the real site publishes none.
function TrustIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };
  switch (name) {
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'badge':
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="6" />
          <path d="M9.5 9.5l1.8 1.8L14.5 8" />
          <path d="M8.2 14.3 7 22l5-3 5 3-1.2-7.7" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TrustBar() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="glass grid grid-cols-2 gap-8 p-8 md:grid-cols-4">
          {trustPoints.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/40 text-ink backdrop-blur-md">
                <TrustIcon name={p.icon} />
              </span>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

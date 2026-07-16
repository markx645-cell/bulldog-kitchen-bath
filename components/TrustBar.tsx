import { trustPoints } from '@/content/site';

function TrustIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
  };
  switch (name) {
    case 'star':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2l2.9 6.26 6.1.53-4.6 4.02 1.38 6.19L12 15.9 6.22 19l1.38-6.19L3 8.79l6.1-.53z" />
        </svg>
      );
    case 'medal':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="9" r="6" />
          <path d="M8.2 14.3 7 22l5-3 5 3-1.2-7.7" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TrustBar() {
  return (
    <section className="bg-bone">
      <div className="container-x grid grid-cols-1 gap-x-6 gap-y-8 py-14 sm:grid-cols-2 sm:gap-y-12 sm:py-16 lg:grid-cols-4 lg:gap-y-0">
        {trustPoints.map((p) => (
          <div
            key={p.stat}
            className="mx-auto flex w-full max-w-[16rem] items-center gap-4 sm:mx-0 sm:w-auto sm:max-w-none lg:border-l-2 lg:border-steel-300 lg:py-5 lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-crimson text-white">
              <TrustIcon name={p.icon} />
            </span>
            <div>
              <p className="font-display text-xl font-bold leading-tight text-ink">{p.stat}</p>
              <p className="text-sm leading-tight text-steel">{p.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

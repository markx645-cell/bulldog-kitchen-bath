export default function Stars({ count = 5, className = '' }: { count?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < count;
        return (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill={filled ? '#9dbeb7' : 'none'}
            stroke="#9dbeb7"
            strokeWidth={1.4}
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
          </svg>
        );
      })}
    </span>
  );
}

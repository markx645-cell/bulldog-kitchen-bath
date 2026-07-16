import Image from 'next/image';

// Branded photo tile. Renders a real image when `src` points to a file in
// /public; otherwise shows an intentional, on-brand gradient frame with a
// label so nothing ever looks like a broken image. Drop real photos into
// /public and pass `src` to swap them in later.
export default function Photo({
  label,
  src,
  alt,
  className = '',
  rounded = 'rounded-2xl',
  priority = false,
  sizes = '100vw',
}: {
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={src}
          alt={alt ?? label ?? ''}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`photo-frame relative flex items-center justify-center overflow-hidden ${rounded} ${className}`}
      role="img"
      aria-label={alt ?? label ?? 'Project photo'}
    >
      <span className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_40%)]" />
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#9dbeb7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="9" r="1.6" />
          <path d="M21 15l-5-5L5 18" />
        </svg>
        {label && (
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-sage-400">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

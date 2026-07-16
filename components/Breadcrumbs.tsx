import Link from 'next/link';
import { site } from '@/content/site';

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({
  items,
  tone = 'light',
  className = '',
}: {
  items: Crumb[];
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ label: 'Home', href: '/' }, ...items].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href}`,
    })),
  };

  const link = tone === 'light' ? 'text-ink/75 hover:text-ink' : 'text-steel hover:text-ink';
  const current = tone === 'light' ? 'text-ink' : 'text-ink';
  const sep = tone === 'light' ? 'text-ink/40' : 'text-steel-400';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-xs ${className}`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Link href="/" className={`${link} hover:underline`}>
        Home
      </Link>
      {items.map((c, i) => (
        <span key={c.href} className="flex items-center gap-2">
          <span aria-hidden="true" className={sep}>
            /
          </span>
          {i === items.length - 1 ? (
            <span className={current}>{c.label}</span>
          ) : (
            <Link href={c.href} className={`${link} hover:underline`}>
              {c.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

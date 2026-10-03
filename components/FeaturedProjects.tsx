import Link from 'next/link';
import Image from 'next/image';
import { projects, categoryOf, type Project } from '@/content/projects';

// The homepage's hand-picked four. All are Cincinnati-area jobs, since the
// default heading says so.
const DEFAULT_SLUGS = ['1217', 'mid-century-makeover', 'pure-bliss', 'stunning-cellar'];

/**
 * A row of four project cards. By default the homepage's hand-picked four;
 * pass `category` for the first four of one kind (kitchens on the kitchen cost
 * page, "more like this" on a project page), and `exclude` to leave out the
 * project the visitor is already looking at.
 */
export default function FeaturedProjects({
  eyebrow = 'Featured projects',
  heading = 'Cincinnati-area homes we’ve transformed',
  category,
  exclude,
}: {
  eyebrow?: string;
  heading?: string;
  category?: ReturnType<typeof categoryOf>;
  exclude?: string;
}) {
  const list: Project[] = category
    ? projects.filter((p) => categoryOf(p.type) === category && p.slug !== exclude && p.photos[0]).slice(0, 4)
    : (DEFAULT_SLUGS.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as Project[]);

  if (list.length === 0) return null;

  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl text-center sm:text-left">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">{heading}</h2>
          </div>
          <Link href="/projects" className="btn-ghost shrink-0">View all projects</Link>
        </div>
        {/* Slide rather than the domino tip: these are wide photo cards in a
            single row, and they read better arriving as one left-to-right
            wave than hinging individually. */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-slide>
          {list.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group flex flex-col overflow-hidden glass glass-hover"
            >
              {p.photos[0] && (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.photos[0].src}
                    alt={p.photos[0].alt}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display text-base text-ink">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

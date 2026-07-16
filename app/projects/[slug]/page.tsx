import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { site } from '@/content/site';
import { projects, projectBySlug } from '@/content/projects';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug[slug];
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title: `${p.title} | ${site.name}`,
      description: p.description,
      images: p.photos[0] ? [{ url: p.photos[0].src }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projectBySlug[slug];
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const [lead, ...rest] = p.photos;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-x relative py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: 'Projects', href: '/projects' },
              { label: p.title, href: `/projects/${p.slug}` },
            ]}
            className="mb-6"
          />
          <div className="max-w-3xl">
            <p className="eyebrow">Featured project</p>
            <h1 className="mt-3 font-display text-4xl  leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              {p.title}
            </h1>
            {p.description && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{p.description}</p>
            )}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/consult" className="btn-primary">Book a Free Estimate</Link>
              <a href={site.phoneHref} className="btn-ghost">Call {site.phone}</a>
            </div>
          </div>

          {lead && (
            <div className="glass mt-10 overflow-hidden p-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <Image
                  src={lead.src}
                  alt={lead.alt}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 1160px"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {rest.length > 0 && (
        <section className="section">
          <div className="container-x">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-stagger>
              {rest.map((photo) => (
                <figure key={photo.src} className="glass overflow-hidden p-2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-ink/60">
              {p.photos.length} photo{p.photos.length === 1 ? '' : 's'} from this project
            </p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/projects" className="btn-ghost">← All projects</Link>
          <Link href={`/projects/${next.slug}`} className="btn-ghost">
            Next: {next.title} →
          </Link>
        </div>
      </section>

      <CTASection withForm heading="Want a space like this?" />
    </>
  );
}

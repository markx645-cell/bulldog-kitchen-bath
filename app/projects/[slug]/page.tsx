import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, ArrowLeft } from 'lucide-react';
import { site } from '@/content/site';
import { projects, projectBySlug } from '@/content/projects';
import Gallery from './Gallery';

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
    // The layout template appends the brand; don't repeat it here.
    // openGraph.title below is standalone (no template), so it keeps the brand.
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

  return (
    <>
      {/* ---------- HEADER / INTRO ---------- */}
      <section className="section">
        <div className="container-x">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-crimson hover:opacity-80"
          >
            <ArrowLeft className="size-3" /> All Projects
          </Link>

          <h1 className="max-w-4xl font-display text-5xl leading-tight text-ink md:text-6xl lg:text-7xl">
            {p.title}
          </h1>

          <div className="mt-10 grid max-w-3xl gap-6 text-sm sm:grid-cols-2">
            {p.loc && (
              <div>
                <div className="mb-2 font-sans text-[10px] uppercase tracking-[0.25em] text-crimson">
                  Remodel Location
                </div>
                <div className="text-ink">{p.loc}</div>
              </div>
            )}
            {p.type && (
              <div>
                <div className="mb-2 font-sans text-[10px] uppercase tracking-[0.25em] text-crimson">
                  Project Type
                </div>
                <div className="text-ink">{p.type}</div>
              </div>
            )}
          </div>

          {p.description && (
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink/75">{p.description}</p>
          )}
        </div>
      </section>

      {/* ---------- KEY FEATURES (only on the pages that have them) ---------- */}
      {p.keyFeatures && p.keyFeatures.length > 0 && (
        <section className="section">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">The Details</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                Key Features
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-5 text-lg leading-relaxed">
                {p.keyFeatures.map((f) => (
                  <li key={f.k} className="border-b border-ink/10 pb-5">
                    <span className="font-semibold text-ink">{f.k}: </span>
                    <span className="text-ink/75">{f.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ---------- DESIGN INSIGHT ---------- */}
      {p.designInsight && (
        <section className="section">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Design Insight</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                {p.designInsight.heading}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ink/75 lg:col-span-8">
              {p.designInsight.paragraphs.map((par) => (
                <p key={par.slice(0, 40)}>{par}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- PROJECT DETAILS ---------- */}
      {p.projectDetails && p.projectDetails.length > 0 && (
        <section className="section">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Specifications</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                Project Details
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed lg:col-span-8">
              {p.projectDetails.map((d) => (
                <div key={d.k} className="border-b border-ink/10 pb-5">
                  <span className="font-semibold text-ink">{d.k}: </span>
                  <span className="text-ink/75">{d.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- HERO PHOTO + GALLERY + LIGHTBOX ---------- */}
      <Gallery photos={p.photos} />

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="glass mx-auto max-w-3xl p-12 text-center">
            <p className="eyebrow">Like What You See?</p>
            <h2 className="mb-6 mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Let’s design your space next.
            </h2>
            <p className="text-lg leading-relaxed text-ink/75">
              In-home consultations across Cincinnati and the surrounding OH, KY and IN
              tri-state area.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-crimson hover:!bg-crimson-600">
                Let’s Discuss Your Project
              </Link>
              <a href={site.phoneHref} className="btn-ghost inline-flex items-center gap-2">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

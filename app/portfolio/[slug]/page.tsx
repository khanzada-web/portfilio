import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema';
import { clampDescription } from '@/app/lib/seo';
import { EditorialHeadline } from '@/app/components/ui/EditorialHeadline';
import { PageShell } from '@/app/components/ui/PageShell';
import { SectionLabel } from '@/app/components/ui/SectionLabel';
import { SHARE_IMAGE } from '@/app/lib/site';
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from '@/app/lib/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function Paragraphs({ text }: { text: string }) {
  return (
    <div className="space-y-5">
      {text.split(/\n\n+/).map((block, i) => (
        <p key={i} className="max-w-2xl font-sans text-base leading-relaxed text-white/75 md:text-[17px]">
          {block.trim()}
        </p>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  const pageUrl = `https://mussawarhayat.site/portfolio/${slug}`;
  const description = clampDescription(project.description);
  return {
    title: `${project.title} — Case Study`,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      images: SHARE_IMAGE,
      title: `${project.title} | Mussawar Hayat Portfolio`,
      description,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      images: SHARE_IMAGE,
      card: 'summary_large_image',
      title: project.title,
      description,
    },
  };
}

const LABEL = 'font-mono text-xs uppercase tracking-[0.3em] text-white/55';
const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer' } as const;

/** Two-tone title: everything but the last word in white, the last word in neon. */
function splitTitle(title: string): { solid: string; accent?: string } {
  const words = title.trim().split(/\s+/);
  if (words.length < 2) return { solid: title };
  return { solid: words.slice(0, -1).join(' '), accent: words[words.length - 1] };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: project.title, url: `/portfolio/${slug}` },
  ];

  const creativeWorkLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://mussawarhayat.site/portfolio/${slug}`,
    author: { '@id': 'https://mussawarhayat.site/#person' },
    creator: { '@id': 'https://mussawarhayat.site/#person' },
    keywords: project.tech.join(', '),
  };

  const title = splitTitle(project.title);
  const sections = [
    { heading: 'The Problem', text: project.problem },
    { heading: 'Tech Stack & Architecture', text: project.architecture },
    { heading: 'Key Results / Business Outcome', text: project.results },
  ].filter((s): s is { heading: string; text: string } => Boolean(s.text));

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkLd) }}
      />
      <PageShell>
        <EditorialHeadline
          as="h1"
          index={`/portfolio/${slug}`}
          eyebrow={project.flagship ? 'Flagship project' : 'Archive project'}
          aside={project.category}
          solid={title.solid}
          accent={title.accent}
        >
          <p>{project.description}</p>
        </EditorialHeadline>

        <div className="mt-16 grid grid-cols-1 gap-14 md:mt-24 lg:grid-cols-12 lg:gap-16">
          {/* Write-up */}
          <article className="lg:col-span-8">
            {sections.length > 0 ? (
              sections.map((s, i) => (
                <section key={s.heading} className={i > 0 ? 'mt-16' : ''}>
                  <SectionLabel index={String(i + 1).padStart(2, '0')} className="mb-6">
                    {s.heading}
                  </SectionLabel>
                  <Paragraphs text={s.text} />
                </section>
              ))
            ) : (
              <p className="max-w-2xl border-l-2 border-neon pl-6 font-sans text-base leading-relaxed text-white/70">
                Extended case-study detail for this project is not published yet. Contact Mussawar Hayat for a private walkthrough of
                architecture and outcomes.
              </p>
            )}
          </article>

          {/* Fact sheet */}
          <aside className="lg:col-span-4">
            <div className="space-y-10 lg:sticky lg:top-32">
              <dl className="border-t border-white/10">
                <div className="border-b border-white/10 py-4">
                  <dt className={LABEL}>Category</dt>
                  <dd className="mt-2 font-sans text-sm capitalize text-white/85">{project.category}</dd>
                </div>
                <div className="border-b border-white/10 py-4">
                  <dt className={LABEL}>Type</dt>
                  <dd className="mt-2 font-sans text-sm text-white/85">{project.flagship ? 'Flagship project' : 'Archive project'}</dd>
                </div>
                <div className="border-b border-white/10 py-4">
                  <dt className={LABEL}>Tech stack</dt>
                  <dd className="mt-2">
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] text-white/80" aria-label="Tech stack">
                      {project.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              {(project.link || project.github) && (
                <div className="flex flex-col gap-3">
                  {project.link && (
                    <a href={project.link} {...EXTERNAL} className="btn-neon group/live h-12 justify-between rounded-full px-6 text-xs">
                      Live demo
                      <FiArrowUpRight className="transition-transform duration-300 group-hover/live:rotate-45" aria-hidden="true" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} {...EXTERNAL} className="btn-ghost group/src h-12 justify-between rounded-full px-6 text-xs">
                      Source on GitHub
                      <FiGithub aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}

              <div className="border-l-2 border-neon pl-6">
                <h2 className="text-base font-black uppercase tracking-tight text-white">Need similar work?</h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                  Mussawar Hayat builds full-stack web, mobile, and Web3 products end-to-end. Fixed-price, hourly, or retainer — remote
                  for North America and Europe. Read more{' '}
                  <Link href="/about" className="link-underline text-neon">
                    about the engineer
                  </Link>
                  .
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.2em]">
                  <Link href="/contact" className="link-underline text-neon">
                    Start a project
                  </Link>
                  <Link href="/services" className="link-underline text-white/75 hover:text-neon">
                    Services
                  </Link>
                  <Link href="/blog" className="link-underline text-white/75 hover:text-neon">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <Link href="/portfolio" className="group/back inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-neon">
            <FiArrowLeft className="transition-transform duration-300 group-hover/back:-translate-x-1" aria-hidden="true" />
            <span className="link-underline">All projects</span>
          </Link>
        </div>
      </PageShell>
    </>
  );
}

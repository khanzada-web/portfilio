import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema';
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from '@/app/lib/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  const pageUrl = `https://mussawarhayat.site/portfolio/${slug}`;
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${project.title} | Mussawar Hayat Portfolio`,
      description: project.description,
      url: pageUrl,
      type: 'article',
      images: [{ url: '/my-pic.jpeg', width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: ['/my-pic.jpeg'],
    },
  };
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

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkLd) }}
      />
      <div className="min-h-screen bg-[#060B16] font-orbitron">
        <Header />
        <main id="main-content" role="main" className="pt-28 pb-20">
          <article className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#39FF14] mb-4">
              {project.flagship ? 'Flagship project' : 'Archive project'} · {project.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-white/80 font-sans leading-relaxed mb-10">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mb-12" aria-label="Tech stack">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs text-[#39FF14] border border-[#39FF14]/40 px-3 py-1 uppercase tracking-wider"
                >
                  {t}
                </li>
              ))}
            </ul>

            {project.problem && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#39FF14] mb-3">The Problem</h2>
                <p className="text-white/75 font-sans leading-relaxed">{project.problem}</p>
              </section>
            )}

            {project.architecture && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#39FF14] mb-3">Tech Stack & Architecture</h2>
                <p className="text-white/75 font-sans leading-relaxed">{project.architecture}</p>
              </section>
            )}

            {project.results && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#39FF14] mb-3">Key Results / Business Outcome</h2>
                <p className="text-white/75 font-sans leading-relaxed">{project.results}</p>
              </section>
            )}

            {!project.problem && (
              <p className="text-white/50 font-sans text-sm mb-10">
                Extended case-study detail for this project is not published yet. Contact Mussawar
                Hayat for a private walkthrough of architecture and outcomes.
              </p>
            )}

            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#39FF14] text-black text-sm font-bold uppercase tracking-wider"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 text-white text-sm font-bold uppercase tracking-wider"
                >
                  Source on GitHub
                </a>
              )}
              <Link
                href="/portfolio"
                className="px-6 py-3 text-white/60 text-sm uppercase tracking-wider hover:text-white"
              >
                ← All projects
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}

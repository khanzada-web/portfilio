import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowUpRight, FiGithub, FiGlobe } from 'react-icons/fi';
import { Stagger, StaggerItem } from '@/app/components/motion/Stagger';
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema';
import { EditorialHeadline } from '@/app/components/ui/EditorialHeadline';
import { PageShell } from '@/app/components/ui/PageShell';
import { SectionLabel } from '@/app/components/ui/SectionLabel';
import { PROJECTS } from '@/app/lib/projects';

export const metadata: Metadata = {
  title: 'Next.js & Web3 Portfolio — Case Studies',
  description:
    'Case studies by Mussawar Hayat: SaaS, DeFi staking, a Bitcoin Ordinals marketplace, and metaverse products, each with problem, architecture, and results.',
  keywords: [
    'Next.js portfolio',
    'Web3 developer portfolio',
    'Bitcoin Ordinals marketplace',
    'DeFi developer case study',
    'full-stack project portfolio',
    'Mussawar Hayat',
  ],
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio | Mussawar Hayat — Full-Stack & Web3 Developer',
    description:
      'Featured projects and case studies by Mussawar Hayat: Next.js, React, Solidity, Bitcoin Ordinals, and DevOps.',
    url: 'https://mussawarhayat.site/portfolio',
    type: 'website',
    images: [{ url: '/my-pic.jpeg', width: 1200, height: 630, alt: 'Mussawar Hayat portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Mussawar Hayat',
    description: 'Full-stack and Web3 project case studies by Mussawar Hayat.',
    images: ['/my-pic.jpeg'],
  },
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Portfolio', url: '/portfolio' },
];

const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function PortfolioPage() {
  const flagship = PROJECTS.filter((p) => p.flagship);
  const archive = PROJECTS.filter((p) => !p.flagship);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageShell>
        <EditorialHeadline
          as="h1"
          index="/portfolio"
          eyebrow="Case studies"
          aside={`${PROJECTS.length} builds`}
          solid="Next.js & Web3"
          accent="Portfolio"
        >
          <p>
            Hire-ready case studies from Mussawar Hayat, a Next.js full-stack and Web3 developer. Flagship work covers SaaS, DeFi
            staking, Bitcoin Ordinals marketplaces, and metaverse products — each with problem breakdown, architecture, and measured
            outcomes.
          </p>
        </EditorialHeadline>

        {/* Flagship: large editorial index, whole row clickable */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="01">Flagship Next.js &amp; Web3 builds</SectionLabel>
          <Stagger as="ol" step={0.06} className="border-b border-white/10">
            {flagship.map((p, i) => (
              <StaggerItem as="li" key={p.slug} className="group relative border-t border-white/10">
                <article className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-12">
                  <span className="font-mono text-xs text-white/55 transition-colors group-hover:text-neon md:col-span-1 md:pt-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="md:col-span-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">{p.category}</span>
                    <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.6rem)] font-black uppercase leading-[0.98] tracking-[-0.02em] text-white transition-colors group-hover:text-neon">
                      <Link href={`/portfolio/${p.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                        {p.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="font-sans text-sm leading-relaxed text-white/70 md:text-base">{p.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50" aria-label="Technologies">
                      {p.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neon">
                        Case study
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
                      </span>
                      {p.link && (
                        <a href={p.link} {...EXTERNAL} aria-label={`Live demo for ${p.title}`} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-neon">
                          <FiGlobe aria-hidden="true" />
                          <span className="link-underline">Live</span>
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} {...EXTERNAL} aria-label={`Source code for ${p.title}`} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-neon">
                          <FiGithub aria-hidden="true" />
                          <span className="link-underline">Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Archive: compact list */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="02">{`Project archive (${archive.length})`}</SectionLabel>
          <Stagger as="ol" step={0.03} className="border-b border-white/10">
            {archive.map((p, i) => (
              <StaggerItem as="li" key={p.slug} className="group relative border-t border-white/10">
                <article className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 py-5 md:grid-cols-[3.5rem_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-6">
                  <span className="font-mono text-[11px] text-white/55 group-hover:text-neon">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-neon md:text-base">
                    <Link href={`/portfolio/${p.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                      {p.title}
                    </Link>
                  </h3>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 md:block">{p.category}</span>
                  <span className="hidden truncate font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 md:block">
                    {p.tech.slice(0, 3).join(' · ')}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neon">Read →</span>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      </PageShell>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema';
import { PROJECTS } from '@/app/lib/projects';
import { FiTerminal, FiArrowRight, FiGlobe, FiGithub } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Next.js & Web3 Portfolio — Case Studies by Mussawar Hayat',
  description:
    'Next.js, React, Solidity, and Bitcoin Ordinals case studies by Mussawar Hayat: DaMeta1, Ordwin Market, DeFi staking, DEX interfaces, and production SaaS.',
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

export default function PortfolioPage() {
  const flagship = PROJECTS.filter((p) => p.flagship);
  const archive = PROJECTS.filter((p) => !p.flagship);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen bg-[#030712] font-orbitron text-white relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
        </div>

        <Header />
        <main id="main-content" role="main" className="pt-28 pb-28 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* Page Header */}
            <div className="max-w-5xl mb-20 mt-10">
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Next.js & Web3 Portfolio
              </h1>
              <p className="text-sm md:text-base text-white/70 font-sans leading-relaxed">
                Hire-ready case studies from Mussawar Hayat, a Next.js full-stack and Web3 developer.
                Flagship work covers SaaS, DeFi staking, Bitcoin Ordinals marketplaces, and metaverse
                products — each with problem breakdown, architecture, and measured outcomes.
              </p>
            </div>

            {/* Flagship Projects Section */}
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-[#39FF14]">
                  Flagship Next.js & Web3 Builds
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {flagship.map((p) => (
                  <article
                    key={p.slug}
                    className="group bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-10 hover:border-[#39FF14]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono font-bold text-[#39FF14] uppercase tracking-wider">
                          Flagship_Build
                        </span>
                        <FiArrowRight className="text-white/30 group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[#39FF14] transition-colors">
                        <Link href={`/portfolio/${p.slug}`} className="hover:underline">
                          {p.title}
                        </Link>
                      </h3>

                      <p className="text-xs md:text-sm text-white/70 font-sans leading-relaxed mb-6">
                        {p.description}
                      </p>

                      <ul className="flex flex-wrap gap-1.5 mb-8">
                        {p.tech.map((t) => (
                          <li
                            key={t}
                            className="text-[10px] font-mono text-white/80 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="text-xs font-mono font-bold uppercase tracking-widest text-[#39FF14] hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <span>View Case Study</span>
                        <FiArrowRight />
                      </Link>

                      <div className="flex items-center gap-3">
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-white/70 hover:text-[#39FF14] hover:border-[#39FF14]/40 transition-all"
                            aria-label={`Live demo for ${p.title}`}
                          >
                            <FiGlobe className="w-4 h-4" />
                          </a>
                        )}
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-white/70 hover:text-[#39FF14] hover:border-[#39FF14]/40 transition-all"
                            aria-label={`Source code for ${p.title}`}
                          >
                            <FiGithub className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Project Archive Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-white/40 rounded-full" />
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/60">
                  Project Archive ({archive.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {archive.map((p) => (
                  <article
                    key={p.slug}
                    className="group bg-[#0B132B]/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/25 hover:bg-[#0B132B]/60 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                        Archive_Module
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 uppercase tracking-tight group-hover:text-[#39FF14] transition-colors">
                        <Link href={`/portfolio/${p.slug}`}>
                          {p.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-white/60 font-sans line-clamp-3 leading-relaxed mb-4">
                        {p.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                        {p.tech.slice(0, 3).join(' · ')}
                      </span>
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="text-[10px] font-mono font-bold uppercase text-[#39FF14] hover:underline"
                      >
                        Read →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
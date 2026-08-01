import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema';
import { PROJECTS } from '@/app/lib/projects';

export const metadata: Metadata = {
  title: 'Portfolio — Featured Full-Stack & Web3 Projects',
  description:
    'Portfolio of Mussawar Hayat: full-stack and Web3 projects including DaMeta1, Ordwin Market, FAST Timetable, Soft Stake, and more. Case studies with problem, architecture, and outcomes.',
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
      <div className="min-h-screen bg-[#060B16] font-orbitron">
        <Header />
        <main id="main-content" role="main" className="pt-28 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Portfolio
            </h1>
            <p className="text-white/70 font-sans text-lg max-w-3xl mb-16">
              Mussawar Hayat is a full-stack developer specializing in Next.js, React, and Web3.
              This portfolio lists flagship case studies and additional archive projects — all
              indexable with dedicated pages where available.
            </p>

            <h2 className="text-2xl font-bold text-[#39FF14] mb-8 uppercase tracking-wider">
              Flagship Projects
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {flagship.map((p) => (
                <li key={p.slug} className="border border-[#39FF14]/20 bg-[#0A1221] p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    <Link href={`/portfolio/${p.slug}`} className="hover:text-[#39FF14]">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-white/70 font-sans text-sm mb-4">{p.description}</p>
                  <p className="text-[10px] text-[#39FF14] uppercase tracking-widest">
                    {p.tech.join(' · ')}
                  </p>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white/80 mb-8 uppercase tracking-wider">
              Project Archive
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {archive.map((p) => (
                <li key={p.slug} className="border border-white/10 bg-[#0A1221]/80 p-4">
                  <h3 className="text-sm font-bold text-white mb-1">
                    <Link href={`/portfolio/${p.slug}`} className="hover:text-[#39FF14]">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-white/50 font-sans text-xs line-clamp-2">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

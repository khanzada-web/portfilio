import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'About Mussawar Hayat — Top Next.js 16 Full-Stack Web3 Developer for Hire 2026',
  description:
    'About Mussawar Hayat: full-stack developer specializing in Next.js, React, TypeScript, Node.js, and Web3. Experience, stack, process, and how he works with remote clients in North America and Europe.',
  keywords: [
    'Mussawar Hayat',
    'about Mussawar Hayat',
    'full-stack developer Pakistan',
    'Next.js developer',
    'Web3 developer',
    'freelance React developer',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Mussawar Hayat — Top Next.js 16 Full-Stack Web3 Developer for Hire 2026',
    description:
      'Full-stack and Web3 developer: experience, skills, and how he delivers production systems for startups.',
    url: 'https://mussawarhayat.site/about',
    type: 'profile',
    images: [
      {
        url: '/my-pic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mussawar Hayat — Full-Stack & Web3 Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mussawar Hayat',
    description:
      'Full-stack and Web3 developer specializing in Next.js, React, TypeScript, and Solidity.',
    images: ['/my-pic.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
]

const aboutPersonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Mussawar Hayat',
  url: 'https://mussawarhayat.site/about',
  description:
    'About page for Mussawar Hayat, full-stack and Web3 developer and author of the technical blog on mussawarhayat.site.',
  mainEntity: {
    '@id': 'https://mussawarhayat.site/#person',
  },
}

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Delivered' },
  { value: '15+', label: 'Remote Clients' },
  { value: 'EST/CET', label: 'Time Zone Overlap' },
] as const

const FOCUS_AREAS = [
  {
    title: 'Full-Stack Product Engineering',
    description:
      'Next.js App Router, Server Components, Server Actions, TypeScript, Prisma, PostgreSQL, and clean API design.',
  },
  {
    title: 'Web3 & Blockchain',
    description:
      'Solidity, Ethers.js, Hardhat, wallet integrations, DeFi frontends, and Bitcoin Ordinals tooling with native indexing.',
  },
  {
    title: 'DevOps & Infrastructure',
    description:
      'VPS management, Nginx, PM2, Docker, GitHub Actions CI/CD, SSL, and production email (SPF / DKIM / DMARC).',
  },
  {
    title: 'Performance & Security',
    description:
      'Core Web Vitals, Lighthouse audits, rate limiting, CSP, ownership checks, and production-grade failure modes.',
  },
] as const

const HOW_I_WORK = [
  {
    step: '01',
    title: 'Discovery',
    text: 'Clarify goals, constraints, users, and technical feasibility before writing a line of code.',
  },
  {
    step: '02',
    title: 'Architecture',
    text: 'Define data models, API boundaries, auth model, and deployment strategy with clear ownership.',
  },
  {
    step: '03',
    title: 'Build & Iterate',
    text: 'Ship in focused increments with TypeScript, tests where they matter, and continuous feedback.',
  },
  {
    step: '04',
    title: 'Deploy & Support',
    text: 'Production deploys with CI/CD, monitoring, and clear hand-off or ongoing retainer support.',
  },
] as const

const STACK = [
  'Next.js 16',
  'React',
  'TypeScript',
  'Node.js',
  'Prisma',
  'PostgreSQL',
  'Solidity',
  'Ethers.js',
  'Hardhat',
  'Docker',
  'Nginx',
  'GitHub Actions',
] as const

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPersonLd) }}
      />
      <div className="min-h-screen bg-[#060B16] font-orbitron">
        <Header />
        <main id="main-content" role="main" className="pt-28 pb-24">
          {/* Hero */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#39FF14] mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Mussawar Hayat
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/70 font-sans leading-relaxed mb-10">
              Full-stack & Web3 developer who owns the entire stack — from UI architecture
              through APIs, data, auth, and production infrastructure.
            </p>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              {/* Photo + identity card */}
              <div className="shrink-0 w-full max-w-xs">
                <div className="relative aspect-square rounded-sm overflow-hidden border border-[#39FF14]/25 bg-[#0A1221]">
                  <Image
                    src="/my-pic.jpeg"
                    alt="Mussawar Hayat, full-stack and Web3 developer"
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B16]/80 via-transparent to-transparent" />
                </div>
                <div className="mt-5 space-y-1">
                  <p className="text-white font-bold text-lg">Mussawar Hayat</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#39FF14]/80">
                    Lead Software Engineer
                  </p>
                  <p className="text-sm text-white/50 font-sans">
                    Attock, Pakistan · Remote worldwide
                  </p>
                </div>
              </div>

              {/* Intro + stats */}
              <div className="flex-1 space-y-8">
                <div className="font-sans text-white/75 leading-relaxed space-y-4 text-[15px] md:text-base">
                  <p>
                    I work with startups and product teams in North America and Europe who want
                    one engineer to own delivery end-to-end instead of coordinating multiple
                    specialists. Day-to-day work is shipping production applications with React,
                    Next.js, TypeScript, Node.js, PostgreSQL, and — when the product needs it —
                    Solidity, Ethers.js, and Bitcoin-native tooling.
                  </p>
                  <p>
                    Beyond the application layer I also handle the operational pieces most freelancers
                    outsource: CI/CD, VPS setup, SSL, email authentication, and production hardening.
                    The goal is a single point of ownership from first commit to a stable live system.
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#0A1221] border border-[#39FF14]/15 px-4 py-5 text-center sm:text-left"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Focus areas */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
              <h2 className="text-sm uppercase tracking-[0.3em] text-white/60">
                Focus Areas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FOCUS_AREAS.map((area) => (
                <div
                  key={area.title}
                  className="bg-[#0A1221] border border-[#39FF14]/12 p-6 hover:border-[#39FF14]/35 transition-colors"
                >
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-white/65 font-sans leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How I work */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
              <h2 className="text-sm uppercase tracking-[0.3em] text-white/60">
                How I Work
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {HOW_I_WORK.map((item) => (
                <div
                  key={item.step}
                  className="bg-[#0A1221] border border-[#39FF14]/12 p-6 relative"
                >
                  <span className="text-[11px] font-bold text-[#39FF14]/70 tracking-widest">
                    {item.step}
                  </span>
                  <h3 className="text-white font-bold text-base mt-2 mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 font-sans leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
              <h2 className="text-sm uppercase tracking-[0.3em] text-white/60">
                Core Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#0A1221] border border-[#39FF14]/15 text-sm text-white/80 font-sans tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Engagement + CTA */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                Ready to work together?
              </h2>
              <p className="text-white/65 font-sans leading-relaxed max-w-2xl mb-8">
                Engagements are remote-first with overlap for EST, PST, and CET hours.
                Typical formats: fixed-scope builds, monthly retainers, or focused
                architecture and security reviews. GDPR-conscious infrastructure is
                available for EU-facing products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#39FF14] text-black text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-4 text-white/50 text-sm uppercase tracking-wider hover:text-white transition-colors"
                >
                  Services
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">
                  Direct channels
                </p>
                <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2 font-sans text-sm text-white/70">
                  <li>
                    <a
                      href="mailto:zada38843@gmail.com"
                      className="hover:text-[#39FF14] transition-colors"
                    >
                      zada38843@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/khanzada-web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#39FF14] transition-colors"
                    >
                      github.com/khanzada-web
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mussawar-hayat-187768233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#39FF14] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Mussawar_Hayat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#39FF14] transition-colors"
                    >
                      @Mussawar_Hayat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

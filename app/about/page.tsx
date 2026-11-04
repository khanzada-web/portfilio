import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FiTerminal } from 'react-icons/fi'

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
      <div className="min-h-screen bg-[#030712] font-orbitron text-white relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
        </div>

        <Header />
        <main id="main-content" role="main" className="pt-28 pb-28 relative z-10">
          
          {/* Hero */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
            <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase mb-4">
              <FiTerminal className="animate-pulse" aria-hidden="true" />
              <span>About.sys</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Mussawar Hayat
            </h1>
            <p className="max-w-2xl text-base md:text-xl text-white/70 font-sans leading-relaxed mb-12">
              Full-stack & Web3 developer who owns the entire stack — from UI architecture
              through APIs, data, auth, and production infrastructure.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Photo + identity card */}
              <div className="lg:col-span-4 bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 bg-[#030712] mb-6">
                  <Image
                    src="/my-pic.jpeg"
                    alt="Mussawar Hayat, full-stack and Web3 developer"
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-white font-bold text-lg">Mussawar Hayat</p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#39FF14]">
                    Lead Software Engineer
                  </p>
                  <p className="text-xs text-white/50 font-sans pt-1">
                    Attock, Pakistan · Remote worldwide
                  </p>
                </div>
              </div>

              {/* Intro + stats */}
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl font-sans text-white/75 leading-relaxed space-y-4 text-sm md:text-base">
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center sm:text-left shadow-xl group hover:border-[#39FF14]/40 transition-all"
                    >
                      <div className="text-2xl md:text-3xl font-extrabold text-white font-mono mb-1 group-hover:text-[#39FF14] transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
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
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/60">
                Focus Areas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FOCUS_AREAS.map((area) => (
                <div
                  key={area.title}
                  className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl hover:border-[#39FF14]/40 transition-all"
                >
                  <h3 className="text-white font-bold text-base uppercase tracking-wider mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-white/70 font-sans leading-relaxed">
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
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/60">
                How I Work
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_I_WORK.map((item) => (
                <div
                  key={item.step}
                  className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl relative flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#39FF14] tracking-widest block mb-4">
                      {item.step}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 font-sans leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/60">
                Core Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-lg text-xs font-sans text-white/80 tracking-wide shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Engagement + CTA */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#39FF14]/5 blur-[100px] pointer-events-none" aria-hidden="true" />
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight uppercase">
                  Ready to work together?
                </h2>
                <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                  Engagements are remote-first with overlap for EST, PST, and CET hours.
                  Typical formats: fixed-scope builds, monthly retainers, or focused
                  architecture and security reviews. GDPR-conscious infrastructure is
                  available for EU-facing products.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#39FF14] text-black rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all text-center"
                  >
                    Start a Conversation
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-4 border border-white/15 bg-white/[0.02] rounded-lg text-white text-xs font-bold uppercase tracking-widest hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all text-center"
                  >
                    View Portfolio
                  </Link>
                  <Link
                    href="/services"
                    className="px-6 py-4 text-white/50 text-xs font-mono uppercase tracking-widest hover:text-white transition-colors flex items-center"
                  >
                    Services
                  </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 mb-4">
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
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
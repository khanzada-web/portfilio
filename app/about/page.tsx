import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'About Mussawar Hayat — Full-Stack & Web3 Developer',
  description:
    'About Mussawar Hayat: full-stack developer specializing in Next.js, React, TypeScript, Node.js, and Web3. Experience, editorial standards for the tech blog, and how he works with remote clients.',
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
    title: 'About Mussawar Hayat — Full-Stack & Web3 Developer',
    description:
      'Full-stack and Web3 developer: experience, skills, and editorial standards behind mussawarhayat.site.',
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
        <main id="main-content" role="main" className="pt-28 pb-20">
          <article className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#39FF14] mb-4">
              About the author
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
              Mussawar Hayat
            </h1>

            <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
              <div className="shrink-0 w-40 h-40 sm:w-48 sm:h-48 relative rounded-lg overflow-hidden border border-[#39FF14]/30">
                <Image
                  src="/my-pic.jpeg"
                  alt="Portrait of Mussawar Hayat, full-stack and Web3 developer"
                  fill
                  className="object-cover"
                  sizes="192px"
                  priority
                />
              </div>
              <div className="font-sans text-white/80 leading-relaxed space-y-4">
                <p>
                  I am a full-stack and Web3 developer based in Attock, Pakistan, working remotely
                  with startups and product teams in North America, Europe, and other regions. My
                  day-to-day work is shipping production applications with React, Next.js, TypeScript,
                  Node.js, PostgreSQL, and—when the product needs it—Solidity, Ethers.js, and
                  Bitcoin-native tooling.
                </p>
                <p>
                  Clients hire me when they want one engineer to own the stack end-to-end: UI,
                  APIs, data, auth, deployment, and the operational details that usually get
                  outsourced (CI/CD, VPS, SSL, email authentication).
                </p>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">
                Experience & focus
              </h2>
              <div className="font-sans text-white/75 leading-relaxed space-y-4">
                <p>
                  Over several years of freelance and product work I have delivered web apps,
                  mobile-oriented interfaces, DeFi and NFT frontends, Bitcoin Ordinals tooling,
                  SaaS backends, and multi-site production infrastructure. Representative work is
                  documented in the{' '}
                  <Link href="/portfolio" className="text-[#39FF14] hover:underline">
                    portfolio
                  </Link>{' '}
                  with problem, architecture, and outcome for each case study.
                </p>
                <p>
                  Core stack strengths include Next.js App Router, Server Components and Server
                  Actions, Prisma and PostgreSQL, JWT and session auth, Docker and Nginx/PM2
                  deploys, and Web3 wallet and smart-contract integration. I care about ownership
                  checks, connection pooling, Core Web Vitals, and clear failure modes—not only
                  happy-path demos.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Full-stack product engineering (web and API)</li>
                  <li>Web3 / DeFi / Ordinals frontends and supporting services</li>
                  <li>DevOps: VPS, Nginx, PM2, GitHub Actions, email (SPF/DKIM/DMARC)</li>
                  <li>Technical writing for engineers (this site's blog)</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">
                Editorial standards (this blog)
              </h2>
              <div className="font-sans text-white/75 leading-relaxed space-y-4">
                <p>
                  The blog at{' '}
                  <Link href="/blog" className="text-[#39FF14] hover:underline">
                    mussawarhayat.site/blog
                  </Link>{' '}
                  is written for software engineers. Posts are meant to be practical: production
                  patterns, security and performance notes, common mistakes, and code that matches
                  current stable APIs. I prioritize official documentation and primary sources over
                  recycled listicles.
                </p>
                <p>
                  Topics stay inside full-stack web development, TypeScript/Node ecosystems, DevOps,
                  and Web3. I do not publish medical, legal, or financial advice. Where a post
                  mentions versions, CVEs, or protocol details, the intent is to point readers at
                  verifiable official material and concrete engineering steps—not hype.
                </p>
                <p>
                  Every article is attributed to Mussawar Hayat. Corrections and technical feedback
                  are welcome via the{' '}
                  <Link href="/contact" className="text-[#39FF14] hover:underline">
                    contact form
                  </Link>{' '}
                  or email.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">
                How I work with clients
              </h2>
              <div className="font-sans text-white/75 leading-relaxed space-y-4">
                <p>
                  Engagements are remote-first, with overlap for EST, PST, and CET business hours
                  where needed. Typical formats are fixed-scope builds, ongoing retainers, or
                  focused architecture and security reviews. GDPR-conscious infrastructure is
                  available for EU-facing products.
                </p>
                <p>
                  If you need a clear owner for a Next.js SaaS, a Web3 interface, or production
                  infrastructure—not a hand-off between five specialists—reach out with the problem,
                  timeline, and constraints. I will respond with whether I am a fit and a concrete
                  next step.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-bold text-[#39FF14] mb-4 uppercase tracking-wider">
                Contact & profiles
              </h2>
              <ul className="font-sans text-white/75 text-sm space-y-2">
                <li>
                  Email:{' '}
                  <a href="mailto:zada38843@gmail.com" className="text-[#39FF14] hover:underline">
                    zada38843@gmail.com
                  </a>
                </li>
                <li>
                  GitHub:{' '}
                  <a
                    href="https://github.com/khanzada-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#39FF14] hover:underline"
                  >
                    github.com/khanzada-web
                  </a>
                </li>
                <li>
                  LinkedIn:{' '}
                  <a
                    href="https://www.linkedin.com/in/mussawar-hayat-187768233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#39FF14] hover:underline"
                  >
                    linkedin.com/in/mussawar-hayat-187768233
                  </a>
                </li>
                <li>
                  X (Twitter):{' '}
                  <a
                    href="https://x.com/Mussawar_Hayat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#39FF14] hover:underline"
                  >
                    @Mussawar_Hayat
                  </a>
                </li>
              </ul>
            </section>

            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#39FF14] text-black text-sm font-bold uppercase tracking-wider"
              >
                Contact
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 border border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:border-[#39FF14]"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 border border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:border-[#39FF14]"
              >
                Blog
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 text-white/60 text-sm uppercase tracking-wider hover:text-white"
              >
                Services
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}

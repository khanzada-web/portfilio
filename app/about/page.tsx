import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { Reveal } from '@/app/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/app/components/motion/Stagger'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { EditorialHeadline } from '@/app/components/ui/EditorialHeadline'
import { PageShell } from '@/app/components/ui/PageShell'
import { SectionLabel } from '@/app/components/ui/SectionLabel'
import { SHARE_IMAGE } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'About — Full-Stack & Web3 Developer',
  description:
    'Mussawar Hayat is a full-stack and Web3 developer in Pakistan who owns products end-to-end, from Next.js UI to APIs, data, and DevOps, for startups worldwide.',
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
    images: SHARE_IMAGE,
    title: 'About Mussawar Hayat — Top Next.js 16 Full-Stack Web3 Developer for Hire 2026',
    description:
      'Full-stack and Web3 developer: experience, skills, and how he delivers production systems for startups.',
    url: 'https://mussawarhayat.site/about',
    type: 'profile',
  },
  twitter: {
    images: SHARE_IMAGE,
    card: 'summary_large_image',
    title: 'About Mussawar Hayat',
    description:
      'Full-stack and Web3 developer specializing in Next.js, React, TypeScript, and Solidity.',
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

const LABEL = 'font-mono text-xs uppercase tracking-[0.3em] text-white/55'

const CHANNELS = [
  { label: 'reply@mussawarhayat.site', href: 'mailto:reply@mussawarhayat.site', external: false },
  { label: 'github.com/khanzada-web', href: 'https://github.com/khanzada-web', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mussawar-hayat-187768233', external: true },
  { label: '@Mussawar_Hayat', href: 'https://x.com/Mussawar_Hayat', external: true },
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
      <PageShell>
        <EditorialHeadline as="h1" index="/about" eyebrow="Profile" aside="Attock, PK · Remote worldwide" solid="Mussawar" accent="Hayat">
          <p>
            Full-stack &amp; Web3 developer who owns the entire stack — from UI architecture through APIs, data, auth, and
            production infrastructure.
          </p>
        </EditorialHeadline>

        {/* Portrait + bio */}
        <section className="mt-16 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12 lg:gap-16" aria-label="Introduction">
          <div className="lg:col-span-5">
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/my-pic.jpeg"
                alt="Mussawar Hayat, full-stack and Web3 developer"
                fill
                className="object-cover object-[50%_30%]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-8 bottom-8">
                <span className="block text-lg font-black uppercase tracking-tight text-white">Mussawar Hayat</span>
                <span className="mt-1 block font-mono text-xs uppercase tracking-[0.25em] text-neon">Lead Software Engineer</span>
              </figcaption>
            </figure>
          </div>

          <Stagger className="flex flex-col justify-center lg:col-span-7">
            <StaggerItem className="max-w-2xl space-y-5 font-sans text-base leading-relaxed text-white/75 md:text-lg">
              <p>
                I work with startups and product teams in North America and Europe who want one engineer to own delivery
                end-to-end instead of coordinating multiple specialists. Day-to-day work is shipping production applications
                with React, Next.js, TypeScript, Node.js, PostgreSQL, and — when the product needs it — Solidity, Ethers.js, and
                Bitcoin-native tooling.
              </p>
              <p>
                Beyond the application layer I also handle the operational pieces most freelancers outsource: CI/CD, VPS setup,
                SSL, email authentication, and production hardening. The goal is a single point of ownership from first commit to
                a stable live system.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-10">
              <dl className="grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className={`flex flex-col-reverse py-6 ${i > 0 ? 'border-l border-white/10 pl-5' : 'pr-5'} ${i === 2 ? 'max-sm:border-l-0 max-sm:pl-0' : ''} ${i < 2 ? 'max-sm:border-b max-sm:border-white/10' : ''}`}>
                    <dt className={`mt-2 ${LABEL}`}>{stat.label}</dt>
                    <dd className="text-2xl font-black text-white md:text-3xl">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>
          </Stagger>
        </section>

        {/* Focus areas */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="01">Focus areas</SectionLabel>
          <Stagger as="ul" className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {FOCUS_AREAS.map((area, i) => (
              <StaggerItem as="li" key={area.title} className="group bg-ink p-7 md:p-9">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-white md:text-xl">{area.title}</h3>
                <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-white/65">{area.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* How I work */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="02">How I work</SectionLabel>
          <Stagger as="ol" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {HOW_I_WORK.map((item) => (
              <StaggerItem as="li" key={item.step} className="border-t-2 border-neon/60 pt-6">
                <span className="font-mono text-xs text-neon">{item.step}</span>
                <h3 className="mt-3 text-lg font-black uppercase tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/65">{item.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Core stack */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="03">Core stack</SectionLabel>
          <Reveal>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm uppercase tracking-[0.15em] text-white/80 md:text-base">
              {STACK.map((tech, i) => (
                <li key={tech} className="flex items-center gap-6">
                  {tech}
                  {i < STACK.length - 1 && <span className="text-neon" aria-hidden="true">/</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Engagement + CTA */}
        <section className="mt-24 border-t border-white/10 pt-16 md:mt-32 md:pt-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-black uppercase leading-[1] tracking-[-0.02em] text-white">
                Ready to work <span className="text-neon">together?</span>
              </h2>
              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70">
                Engagements are remote-first with overlap for EST, PST, and CET hours. Typical formats: fixed-scope builds, monthly
                retainers, or focused architecture and security reviews. GDPR-conscious infrastructure is available for EU-facing
                products.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link href="/contact" className="btn-neon group/cta h-14 gap-3 rounded-full pl-7 pr-2 text-sm normal-case tracking-wide">
                  Start a conversation
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-neon transition-transform duration-300 group-hover/cta:rotate-45">
                    <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Link>
                <Link href="/portfolio" className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-neon">
                  View portfolio
                </Link>
                <Link href="/services" className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-neon">
                  Services
                </Link>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5">
              <p className={LABEL}>Direct channels</p>
              <ul className="mt-4 border-t border-white/10">
                {CHANNELS.map((c) => (
                  <li key={c.label} className="border-b border-white/10">
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group/ch flex items-center justify-between gap-4 py-4 font-sans text-sm text-white/80 transition-colors hover:text-neon"
                    >
                      {c.label}
                      <FiArrowUpRight className="transition-transform duration-300 group-hover/ch:rotate-45" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </PageShell>
    </>
  )
}

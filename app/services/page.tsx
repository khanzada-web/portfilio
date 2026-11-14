import { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { Reveal } from '@/app/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/app/components/motion/Stagger'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'
import { EditorialHeadline } from '@/app/components/ui/EditorialHeadline'
import { PageShell } from '@/app/components/ui/PageShell'
import { SectionLabel } from '@/app/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Next.js & Web3 Development Services',
  description:
    'Next.js and React apps, Node.js APIs, React Native mobile, Solidity smart contracts, Core Web Vitals work, and DevOps. Fixed-price, hourly, or retainer.',
  keywords: [
    'hire Next.js 16 developer',
    'Next.js full-stack developer for hire',
    'Web3 developer for hire 2026',
    'Solidity smart contract developer',
    'Next.js SaaS developer',
    'freelance Next.js developer',
    'hire Web3 developer',
    'best Next.js developer for hire',
  ],
  openGraph: {
    title: 'Hire Next.js Full-Stack & Web3 Developer | Services',
    description:
      'Next.js, React, TypeScript, SaaS, Solidity, DApps, React Native, and DevOps. Hire Mussawar Hayat remotely.',
    url: 'https://mussawarhayat.site/services',
    type: 'website',
    images: [
      {
        url: '/my-pic.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mussawar Hayat — Full-Stack Developer Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Next.js Full-Stack & Web3 Developer | Mussawar Hayat',
    description:
      'Full-stack and Web3 development services — SaaS, DApps, APIs, and DevOps.',
    images: ['/my-pic.jpeg'],
  },
  alternates: {
    canonical: '/services',
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
]

const faqs = [
  {
    question: 'What technologies does Mussawar Hayat work with?',
    answer:
      'Mussawar Hayat specializes in React, Next.js, Node.js, and TypeScript. For mobile he uses React Native and Flutter. For Web3 he works with Solidity, Ethers.js, Hardhat, and Bitcoin Ordinals. He also delivers DevOps with Nginx, PM2, and GitHub Actions.',
  },
  {
    question: 'Does Mussawar Hayat work with international clients?',
    answer:
      'Yes. He works remotely with clients worldwide, including North America and Europe, with async communication across EST, PST, and CET.',
  },
  {
    question: "What is Mussawar Hayat's development process?",
    answer:
      'Projects start with requirements and architecture, then iterative TypeScript implementation, security review, and production deployment with CI/CD and monitoring — one engineer end-to-end.',
  },
  {
    question: 'Do you build both the frontend and backend?',
    answer:
      'Yes. Full-stack development end-to-end — React/Next.js frontends, Node.js backends, databases, and DevOps.',
  },
  {
    question: 'Can you add blockchain or Web3 features to an existing app?',
    answer:
      'Yes. Wallet connections, smart contracts, DeFi/NFT features, and Bitcoin Ordinals using Solidity and Ethers.js.',
  },
  {
    question: 'How do engagement and pricing work?',
    answer:
      'Typical options are fixed-price for scoped projects, hourly for ongoing or evolving work, and monthly retainers for continuous product development. Exact ranges depend on scope — share your project and you will get a clear proposal.',
  },
]

const services = [
  {
    id: 'web-architecture',
    title: 'Next.js Web Architecture',
    description:
      'High-performance Next.js and React applications optimized for speed, SEO, and global scalability. SSR, ISR, and edge-network ready.',
    features: ['Next.js SSR/ISR', 'React + TypeScript', 'Tailwind CSS', 'SEO Optimized'],
  },
  {
    id: 'mobile-solutions',
    title: 'React Native Mobile Apps',
    description:
      'Cross-platform mobile applications for iOS and Android with seamless native performance using React Native and Flutter.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment'],
  },
  {
    id: 'full-stack-systems',
    title: 'Full-Stack TypeScript Systems',
    description:
      'End-to-end product engineering — robust backend infrastructure, real-time data pipelines, and tightly integrated frontend layers.',
    features: ['Node.js + Express', 'GraphQL & REST APIs', 'PostgreSQL & MongoDB', 'Real-time Data'],
  },
  {
    id: 'ui-ux-engineering',
    title: 'UI/UX Engineering',
    description:
      'Immersive digital interfaces built with precision — focused on user psychology, conversion flow, and animation-driven experiences.',
    features: ['Figma Prototyping', 'Framer Motion', 'Design Systems', 'Conversion Optimization'],
  },
  {
    id: 'blockchain-bridge',
    title: 'Web3 and Solidity Development',
    description:
      'Smart contract development, DApp architecture, and Web3 wallet integration — from ERC-20 tokens to multi-chain DeFi protocols.',
    features: ['Solidity Smart Contracts', 'Ethers.js Integration', 'Hardhat Testing', 'Multi-chain DeFi'],
  },
  {
    id: 'performance-ops',
    title: 'Core Web Vitals Performance',
    description:
      'Deep optimisation of existing products — Core Web Vitals, bundle splitting, caching strategies, and Lighthouse audits.',
    features: ['Core Web Vitals', 'Lighthouse Audits', 'Bundle Splitting', 'CDN & Caching'],
  },
  {
    id: 'backend-api',
    title: 'Node.js API Development',
    description:
      'Scalable REST and GraphQL APIs with Node.js, Express, and PostgreSQL — including JWT auth, session handling, and protected route architecture.',
    features: ['REST & GraphQL APIs', 'JWT Authentication', 'PostgreSQL & MongoDB', 'Protected Routes'],
  },
  {
    id: 'devops',
    title: 'DevOps and VPS Infrastructure',
    description:
      'Multi-site VPS management, CI/CD pipelines via GitHub Actions, SSL via Certbot, and full email infrastructure with SPF, DKIM, and DMARC.',
    features: ['Nginx & PM2', 'GitHub Actions CI/CD', 'SSL & Security Hardening', 'Email Infrastructure'],
  },
  {
    id: 'ecommerce-saas',
    title: 'SaaS and E-Commerce Platforms',
    description:
      'Production-grade e-commerce platforms and SaaS dashboards — product catalogues, payment gateways, subscription logic, and admin panels.',
    features: ['Stripe Integration', 'SaaS Dashboards', 'Subscription Logic', 'Admin Panels'],
  },
]

const ENGAGEMENTS = [
  {
    title: 'Fixed-Price Projects',
    text: 'Best for well-defined scope: a marketing site, a specific feature, or a bounded MVP. You get a fixed quote and timeline up front.',
  },
  {
    title: 'Hourly / Time & Materials',
    text: 'Ideal when requirements may evolve. Transparent logging and regular check-ins. Suitable for ongoing product work and consulting.',
  },
  {
    title: 'Monthly Retainer',
    text: 'Reserved capacity each month for continuous development, maintenance, and iteration. Predictable cost for product teams that need steady progress.',
  },
] as const

const WHY = [
  {
    title: 'One Developer, End-to-End',
    points: [
      'No handoffs between frontend, backend, and ops teams',
      '3+ years building production web and mobile apps',
      'From first commit to VPS deployment — owned end-to-end',
    ],
  },
  {
    title: 'Built for Real Clients',
    points: [
      '40+ projects delivered across web, mobile, and Web3',
      'Clients across North America, Europe, and beyond',
      'Web3 capability without a Web3-only constraint',
    ],
  },
] as const

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <PageShell>
        <EditorialHeadline
          as="h1"
          index="/services"
          eyebrow="Services"
          aside="Remote · North America & Europe"
          solid="Hire Next.js Full-Stack"
          accent="& Web3 Services"
        >
          <p>
            Hire Mussawar Hayat as a Next.js full-stack developer and Web3 specialist for React, TypeScript, SaaS products, Solidity
            smart contracts, and production DevOps. Remote freelance delivery for North America and Europe — one engineer from UI to
            VPS.
          </p>
        </EditorialHeadline>

        {/* Summary answer (AEO) */}
        <Reveal className="mt-16 border-l-2 border-neon pl-6 md:mt-20 lg:max-w-4xl">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon">What services are available?</h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-white/75 md:text-base">
            Mussawar Hayat provides end-to-end full-stack and Web3 development: Next.js and React applications, Node.js APIs, mobile
            apps (React Native / Flutter), Solidity smart contracts and DApps, Core Web Vitals optimization, and production DevOps
            (Nginx, PM2, GitHub Actions, VPS). Engagements are available as fixed-price projects, hourly, or monthly retainers for
            startups and product teams in North America and Europe.
          </p>
        </Reveal>

        {/* Services */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="01">Services</SectionLabel>
          <Stagger as="ul" className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <StaggerItem as="li" key={service.id} className="bg-ink">
                <article id={service.id} className="group flex h-full scroll-mt-28 flex-col p-7 md:p-9">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="mt-6 text-lg font-black uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-neon md:text-xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-white/65">{service.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-neon" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Engagement models */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="02">Engagement models</SectionLabel>
          <Reveal>
            <h2 className="max-w-3xl text-[clamp(1.6rem,3vw,2.5rem)] font-black uppercase leading-[1] tracking-[-0.02em] text-white">
              Full-Stack Developer <span className="text-neon">Engagement Models</span>
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-white/65 md:text-base">
              Clear options so you know how we work together. Exact numbers depend on scope — share your project for a concrete
              proposal.
            </p>
          </Reveal>
          <Stagger as="ol" className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {ENGAGEMENTS.map((item, i) => (
              <StaggerItem as="li" key={item.title} className="border-t-2 border-neon/60 pt-6">
                <span className="font-mono text-xs text-neon">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-black uppercase tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/65">{item.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Why hire */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="03">Why hire</SectionLabel>
          <Reveal>
            <h2 className="max-w-3xl text-[clamp(1.6rem,3vw,2.5rem)] font-black uppercase leading-[1] tracking-[-0.02em] text-white">
              Why Hire Mussawar Hayat as <span className="text-neon">Your Next.js Developer</span>
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
            {WHY.map((group) => (
              <StaggerItem key={group.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon">{group.title}</h3>
                <ul className="mt-4 border-t border-white/10">
                  {group.points.map((point) => (
                    <li key={point} className="border-b border-white/10 py-4 font-sans text-sm text-white/80 md:text-base">
                      {point}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* FAQ: visible copy of the FAQSchema data (required for FAQ rich results) */}
        <section className="mt-24 md:mt-32">
          <SectionLabel index="04">Frequently asked</SectionLabel>
          <Stagger as="ol" step={0.06} className="border-b border-white/10 lg:ml-auto lg:max-w-4xl">
            {faqs.map((item, i) => (
              <StaggerItem as="li" key={item.question} className="border-t border-white/10">
                <details className="group">
                  <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon md:grid-cols-[3.5rem_1fr_auto]">
                    <span className="font-mono text-xs text-white/55 transition-colors group-open:text-neon group-hover:text-neon">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-bold tracking-wide text-white md:text-lg">{item.question}</h3>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 font-mono text-lg text-neon transition-[rotate,background-color,color,border-color] duration-300 group-open:rotate-45 group-open:border-neon group-open:bg-neon group-open:text-black"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-7 pl-[2.5rem] pr-12 md:pl-[3.5rem]">
                    <p className="max-w-2xl animate-fade-up font-sans text-sm leading-relaxed text-white/75 md:text-base">{item.answer}</p>
                  </div>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* CTA */}
        <section className="mt-24 border-t border-white/10 pt-16 md:mt-32 md:pt-20">
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-black uppercase leading-[1] tracking-[-0.02em] text-white">
                Hire a Full-Stack <span className="text-neon">Developer Today</span>
              </h2>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/70">
                Describe what you are building. You will get a clear reply on fit, timeline, and engagement model — usually within 24
                hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/contact" className="btn-neon group/cta h-14 gap-3 rounded-full pl-7 pr-2 text-sm normal-case tracking-wide">
                Start a project
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-neon transition-transform duration-300 group-hover/cta:rotate-45">
                  <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
              <Link href="/portfolio" className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-neon">
                View portfolio
              </Link>
            </div>
          </Reveal>
        </section>
      </PageShell>
    </>
  )
}

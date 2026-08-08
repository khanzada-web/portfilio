import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Full-Stack & Web3 Development Services',
  description:
    'Full-stack development services: React/Next.js, React Native, APIs, DevOps, and Web3/blockchain. Hire Mussawar Hayat for remote projects.',
  openGraph: {
    title: 'Hire Full-Stack & Web3 Developer | Mussawar Hayat Services',
    description:
      'Full-stack development services — web apps, mobile apps, APIs, DevOps, and Web3/blockchain integration. Clear engagement models.',
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
    title: 'Hire Full-Stack & Web3 Developer | Mussawar Hayat',
    description:
      'Full-stack development services — web apps, mobile apps, APIs, DevOps, and Web3/blockchain integration. Available worldwide.',
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
    title: 'Web Architecture',
    description:
      'High-performance Next.js and React applications optimized for speed, SEO, and global scalability. SSR, ISR, and edge-network ready.',
    features: ['Next.js SSR/ISR', 'React + TypeScript', 'Tailwind CSS', 'SEO Optimized'],
  },
  {
    id: 'mobile-solutions',
    title: 'Mobile Solutions',
    description:
      'Cross-platform mobile applications for iOS and Android with seamless native performance using React Native and Flutter.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment'],
  },
  {
    id: 'full-stack-systems',
    title: 'Full-Stack Systems',
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
    title: 'Web3 & Blockchain',
    description:
      'Smart contract development, DApp architecture, and Web3 wallet integration — from ERC-20 tokens to multi-chain DeFi protocols.',
    features: ['Solidity Smart Contracts', 'Ethers.js Integration', 'Hardhat Testing', 'Multi-chain DeFi'],
  },
  {
    id: 'performance-ops',
    title: 'Performance Ops',
    description:
      'Deep optimisation of existing products — Core Web Vitals, bundle splitting, caching strategies, and Lighthouse audits.',
    features: ['Core Web Vitals', 'Lighthouse Audits', 'Bundle Splitting', 'CDN & Caching'],
  },
  {
    id: 'backend-api',
    title: 'Backend & API Dev',
    description:
      'Scalable REST and GraphQL APIs with Node.js, Express, and PostgreSQL — including JWT auth, session handling, and protected route architecture.',
    features: ['REST & GraphQL APIs', 'JWT Authentication', 'PostgreSQL & MongoDB', 'Protected Routes'],
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    description:
      'Multi-site VPS management, CI/CD pipelines via GitHub Actions, SSL via Certbot, and full email infrastructure with SPF, DKIM, and DMARC.',
    features: ['Nginx & PM2', 'GitHub Actions CI/CD', 'SSL & Security Hardening', 'Email Infrastructure'],
  },
  {
    id: 'ecommerce-saas',
    title: 'E-Commerce & SaaS',
    description:
      'Production-grade e-commerce platforms and SaaS dashboards — product catalogues, payment gateways, subscription logic, and admin panels.',
    features: ['Stripe Integration', 'SaaS Dashboards', 'Subscription Logic', 'Admin Panels'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#060B16] font-orbitron text-[#39FF14]">
        <Header />
        <main role="main" id="main-content" className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
            <div className="text-center mb-20">
              <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
                Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none mb-8">
                Full-Stack & Web3 Development Services
              </h1>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-sans">
                Mussawar Hayat is a full-stack developer specializing in Next.js, React, and Web3,
                based in Pakistan, available for remote freelance work with clients in North America
                and Europe. From React/Next.js frontends to Node.js backends, DevOps, and Solidity
                smart contracts — one developer, end-to-end delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="group bg-[#0A1221] border border-[#39FF14]/20 p-8 hover:border-[#39FF14] transition-all duration-500"
                >
                  <div className="text-[10px] text-white/30 tracking-[0.2em] mb-4" aria-hidden="true">
                    SERVICE_{String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-[#39FF14] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-white/50 font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-[10px] tracking-widest uppercase text-white/60"
                      >
                        <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Engagement Models
              </h2>
              <p className="text-white/60 font-sans mb-10 max-w-2xl">
                Clear options so you know how we work together. Exact numbers depend on scope —
                share your project for a concrete proposal.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-[#39FF14]/15 p-6">
                  <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-3">
                    Fixed-Price Projects
                  </h3>
                  <p className="text-white/70 font-sans text-sm leading-relaxed">
                    Best for well-defined scope: a marketing site, a specific feature, or a
                    bounded MVP. You get a fixed quote and timeline up front.
                  </p>
                </div>
                <div className="border border-[#39FF14]/15 p-6">
                  <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-3">
                    Hourly / Time & Materials
                  </h3>
                  <p className="text-white/70 font-sans text-sm leading-relaxed">
                    Ideal when requirements may evolve. Transparent logging and regular
                    check-ins. Suitable for ongoing product work and consulting.
                  </p>
                </div>
                <div className="border border-[#39FF14]/15 p-6">
                  <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-3">
                    Monthly Retainer
                  </h3>
                  <p className="text-white/70 font-sans text-sm leading-relaxed">
                    Reserved capacity each month for continuous development, maintenance,
                    and iteration. Predictable cost for product teams that need steady progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                Why Hire Mussawar Hayat
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">
                    One Developer, End-to-End
                  </h3>
                  <ul className="space-y-3 text-white/60 font-sans">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> No
                      handoffs between frontend, backend, and ops teams
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> 3+
                      years building production web & mobile apps
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> From
                      first commit to VPS deployment — owned end-to-end
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">
                    Built for Real Clients
                  </h3>
                  <ul className="space-y-3 text-white/60 font-sans">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> 40+
                      projects delivered across web, mobile, and Web3
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Clients
                      across North America, Europe, and beyond
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Web3
                      capability without a Web3-only constraint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to Start?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
                Describe what you are building. You will get a clear reply on fit, timeline, and
                engagement model — usually within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-[#39FF14] text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all"
                >
                  Start a Project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-4 border border-[#39FF14]/40 text-white px-10 py-5 font-bold uppercase tracking-widest hover:border-[#39FF14] transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

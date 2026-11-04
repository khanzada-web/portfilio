import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'
import { FiTerminal } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Hire Best Next.js 16 Full-Stack Web3 Developer Services 2026 | SaaS & DApps',
  description:
    'Hire the top Next.js 16 full-stack Web3 developer for high-performance SaaS platforms, React and TypeScript apps, Solidity smart contracts, DApps, Core Web Vitals optimization, and production DevOps. Expert full-stack services available remotely for North America and Europe startups.',
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

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#030712] font-orbitron text-white relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
        </div>

        <Header />
        <main role="main" id="main-content" className="pt-24 pb-28 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
            
            {/* Header / Hero */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase mb-6">
                <FiTerminal className="animate-pulse" aria-hidden="true" />
                <span>Services.sys</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
                Hire Next.js Full-Stack & Web3 Services
              </h1>
              <p className="text-sm md:text-base text-white/70 max-w-3xl mx-auto leading-relaxed font-sans">
                Hire Mussawar Hayat as a Next.js full-stack developer and Web3 specialist for React,
                TypeScript, SaaS products, Solidity smart contracts, and production DevOps. Remote
                freelance delivery for North America and Europe — one engineer from UI to VPS.
              </p>

              <div className="max-w-3xl mx-auto text-left mt-10 bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 shadow-xl">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#39FF14] mb-2">What services are available?</h2>
                <p className="text-xs md:text-sm text-white/70 font-sans leading-relaxed">
                  Mussawar Hayat provides end-to-end full-stack and Web3 development: Next.js and React applications, Node.js APIs, mobile apps (React Native / Flutter), Solidity smart contracts and DApps, Core Web Vitals optimization, and production DevOps (Nginx, PM2, GitHub Actions, VPS). Engagements are available as fixed-price projects, hourly, or monthly retainers for startups and product teams in North America and Europe.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="group bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-[#39FF14]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono font-bold text-[#39FF14] tracking-widest mb-4 uppercase" aria-hidden="true">
                      SERVICE_{String(index + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#39FF14] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs md:text-sm text-white/70 font-sans leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-white/10 pt-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-[10px] font-mono tracking-wider uppercase text-white/80"
                      >
                        <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mr-3 shrink-0 shadow-[0_0_6px_#39FF14]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Engagement Models */}
            <div className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-16 shadow-xl">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
                Full-Stack Developer Engagement Models
              </h2>
              <p className="text-white/70 font-sans text-xs md:text-sm mb-8 max-w-2xl leading-relaxed">
                Clear options so you know how we work together. Exact numbers depend on scope —
                share your project for a concrete proposal.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                  <h3 className="text-xs font-mono font-bold text-[#39FF14] uppercase tracking-widest mb-3">
                    Fixed-Price Projects
                  </h3>
                  <p className="text-white/70 font-sans text-xs md:text-sm leading-relaxed">
                    Best for well-defined scope: a marketing site, a specific feature, or a
                    bounded MVP. You get a fixed quote and timeline up front.
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                  <h3 className="text-xs font-mono font-bold text-[#39FF14] uppercase tracking-widest mb-3">
                    Hourly / Time & Materials
                  </h3>
                  <p className="text-white/70 font-sans text-xs md:text-sm leading-relaxed">
                    Ideal when requirements may evolve. Transparent logging and regular
                    check-ins. Suitable for ongoing product work and consulting.
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                  <h3 className="text-xs font-mono font-bold text-[#39FF14] uppercase tracking-widest mb-3">
                    Monthly Retainer
                  </h3>
                  <p className="text-white/70 font-sans text-xs md:text-sm leading-relaxed">
                    Reserved capacity each month for continuous development, maintenance,
                    and iteration. Predictable cost for product teams that need steady progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Hire Section */}
            <div className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-20 shadow-xl">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-8 uppercase">
                Why Hire Mussawar Hayat as Your Next.js Developer
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#39FF14] uppercase tracking-widest mb-4">
                    One Developer, End-to-End
                  </h3>
                  <ul className="space-y-3 text-white/70 font-sans text-xs md:text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0 shadow-[0_0_6px_#39FF14]" /> No
                      handoffs between frontend, backend, and ops teams
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0 shadow-[0_0_6px_#39FF14]" /> 3+
                      years building production web and mobile apps
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0 shadow-[0_0_6px_#39FF14]" /> From
                      first commit to VPS deployment — owned end-to-end
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#39FF14] uppercase tracking-widest mb-4">
                    Built for Real Clients
                  </h3>
                  <ul className="space-y-3 text-white/70 font-sans text-xs md:text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0 shadow-[0_0_6px_#39FF14]" /> 40+
                      projects delivered across web, mobile, and Web3
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0 shadow-[0_0_6px_#39FF14]" /> Clients
                      across North America, Europe, and beyond
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0 shadow-[0_0_6px_#39FF14]" /> Web3
                      capability without a Web3-only constraint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#39FF14]/5 blur-[100px] pointer-events-none" aria-hidden="true" />
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
                  Hire a Full-Stack Developer Today
                </h2>
                <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
                  Describe what you are building. You will get a clear reply on fit, timeline, and
                  engagement model — usually within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#39FF14] text-black rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all text-center"
                  >
                    Start a Project
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-4 border border-white/15 bg-white/[0.02] text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all text-center"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
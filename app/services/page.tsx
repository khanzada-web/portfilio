import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Services | Full-Stack Development, Mobile Apps & Web3 Integration',
  description:
    'Full-stack development services — React/Next.js web apps, React Native & Flutter mobile apps, Node.js APIs, ' +
    'DevOps infrastructure, e-commerce/SaaS platforms, CRM systems, and Web3/blockchain integration. ' +
    'Available for freelance projects worldwide.',
  keywords: [
    'full-stack developer services',
    'React developer for SaaS dashboards',
    'Next.js developer with Web3 integration',
    'React Native developer for freelance projects',
    'Node.js API development',
    'DevOps infrastructure services',
    'e-commerce development',
    'Web3 development services',
    'blockchain integration',
    'smart contract development',
    'mobile app development',
    'CRM development',
    'custom CRM software',
    'Mussawar Hayat services',
    'GDPR compliant web developer',
    'remote full-stack developer',
    'freelance developer North America',
    'freelance developer Europe',
  ],
  openGraph: {
    title: 'Services | Full-Stack Development, Mobile Apps & Web3 | Mussawar Hayat',
    description:
      'Full-stack development services — web apps, mobile apps, APIs, DevOps, e-commerce, and Web3/blockchain integration. ' +
      '3+ years experience, available for freelance projects worldwide.',
    url: 'https://www.mussawarhayat.site/services',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mussawar Hayat — Full-Stack Developer Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Full-Stack Development & Web3 | Mussawar Hayat',
    description:
      'Full-stack development services — web apps, mobile apps, APIs, DevOps, e-commerce, and Web3/blockchain integration. ' +
      'Available for freelance projects worldwide.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/services',
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' }
]

const faqs = [
  {
    question: 'Do you build both the frontend and backend?',
    answer:
      'Yes. I handle full-stack development end-to-end — React/Next.js frontends, Node.js backends, ' +
      'databases, and deployment/DevOps — so you don\'t need to coordinate multiple specialists.'
  },
  {
    question: 'Do you work with clients outside Pakistan?',
    answer:
      'Yes, I work remotely with clients worldwide and am set up for async communication across time zones.'
  },
  {
    question: 'Can you add blockchain or Web3 features to an existing app?',
    answer:
      'Yes. I integrate wallet connections, smart contracts, and DeFi/NFT functionality into existing ' +
      'web and mobile applications using Solidity and Ethers.js.'
  },
  {
    question: 'What technologies do you specialise in?',
    answer:
      'My core stack is React, Next.js, Node.js, and TypeScript. For mobile, I use React Native and Flutter. ' +
      'For Web3 projects, I work with Solidity, Ethers.js, Hardhat, Ethereum, Polygon, and other EVM-compatible chains. ' +
      'I also handle DevOps, databases, and deployment.'
  },
  {
    question: 'How can I hire you for a project?',
    answer:
      'You can contact me through the contact form on this website or reach out via ' +
      'LinkedIn. I offer flexible engagement models from short-term consulting to ' +
      'full long-term project development.'
  },
]

const services = [
  {
    id: 'web-architecture',
    title: 'Web Architecture',
    description: 'High-performance Next.js and React applications optimized for speed, SEO, and global scalability. SSR, ISR, and edge-network ready.',
    features: ['Next.js SSR/ISR', 'React + TypeScript', 'Tailwind CSS', 'SEO Optimized'],
    link: '/services#web-architecture'
  },
  {
    id: 'mobile-solutions',
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile applications for iOS and Android with seamless native performance using React Native and Flutter.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment'],
    link: '/services#mobile-solutions'
  },
  {
    id: 'full-stack-systems',
    title: 'Full-Stack Systems',
    description: 'End-to-end product engineering — robust backend infrastructure, real-time data pipelines, and tightly integrated frontend layers.',
    features: ['Node.js + Express', 'GraphQL & REST APIs', 'PostgreSQL & MongoDB', 'Real-time Data'],
    link: '/services#full-stack-systems'
  },
  {
    id: 'ui-ux-engineering',
    title: 'UI/UX Engineering',
    description: 'Immersive digital interfaces built with precision — focused on user psychology, conversion flow, and animation-driven experiences.',
    features: ['Figma Prototyping', 'Framer Motion', 'Design Systems', 'Conversion Optimization'],
    link: '/services#ui-ux-engineering'
  },
  {
    id: 'blockchain-bridge',
    title: 'Blockchain Bridge',
    description: 'Smart contract development, DApp architecture, and Web3 wallet integration — from ERC-20 tokens to multi-chain DeFi protocols.',
    features: ['Solidity Smart Contracts', 'Ethers.js Integration', 'Hardhat Testing', 'Multi-chain DeFi'],
    link: '/services#blockchain-bridge'
  },
  {
    id: 'performance-ops',
    title: 'Performance Ops',
    description: 'Deep optimisation of existing products — Core Web Vitals, bundle splitting, caching strategies, and Lighthouse 100 audits.',
    features: ['Core Web Vitals', 'Lighthouse Audits', 'Bundle Splitting', 'CDN & Caching'],
    link: '/services#performance-ops'
  },
  {
    id: 'backend-api',
    title: 'Backend & API Dev',
    description: 'Scalable REST and GraphQL APIs with Node.js, Express, and PostgreSQL — including JWT auth, session handling, and protected route architecture.',
    features: ['REST & GraphQL APIs', 'JWT Authentication', 'PostgreSQL & MongoDB', 'Protected Routes'],
    link: '/services#backend-api'
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    description: 'Multi-site VPS management, CI/CD pipelines via GitHub Actions, SSL via Certbot, and full email infrastructure with SPF, DKIM, and DMARC.',
    features: ['Nginx & PM2', 'GitHub Actions CI/CD', 'SSL & Security Hardening', 'Email Infrastructure'],
    link: '/services#devops'
  },
  {
    id: 'ecommerce-saas',
    title: 'E-Commerce & SaaS',
    description: 'Production-grade e-commerce platforms and SaaS dashboards — product catalogues, payment gateways, subscription logic, and admin panels.',
    features: ['Stripe Integration', 'SaaS Dashboards', 'Subscription Logic', 'Admin Panels'],
    link: '/services#ecommerce-saas'
  },
  {
    id: 'crm-development',
    title: 'CRM Development',
    description: 'Custom CRM systems tailored to your sales pipeline — lead tracking, contact management, automated workflows, and reporting dashboards.',
    features: ['Lead & Pipeline Tracking', 'Contact Management', 'Automated Workflows', 'Custom Reporting'],
    link: '/services#crm-development'
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

            {/* ── Hero ── */}
            <div className="text-center mb-20">
              <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
                Service_Catalogue.v2
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                Development <span className="text-[#39FF14]">Services</span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-sans">
                Full-stack development services for web, mobile, and blockchain projects.
                From React/Next.js frontends to Node.js backends, DevOps infrastructure,
                and Web3 integration — one developer, end-to-end delivery. I work remotely
                with clients across North America and Europe, with GDPR-compliant infrastructure
                available for EU-based projects.
              </p>
            </div>

            {/* ── Service Grid ── */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {services.map((service, index) => (
                <a
                  key={service.id}
                  href={service.link}
                  className="group bg-[#0A1221] border border-[#39FF14]/20 p-8 hover:border-[#39FF14] transition-all duration-500"
                >
                  <div className="text-[10px] text-white/30 tracking-[0.2em] mb-4">
                    SERVICE_{String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-[#39FF14] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-[10px] tracking-widest uppercase text-white/60">
                        <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>

            {/* ── Service Detail Sections ── */}

            <div id="web-architecture" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_01_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  Web <span className="text-[#39FF14]">Architecture</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  High-performance Next.js and React applications optimized for speed, SEO, and global scalability.
                  I build with Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and edge-network
                  delivery so your pages load fast everywhere — not just on a fast connection in one region.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Build</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Next.js SSR/ISR applications</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> React + TypeScript SPAs</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Tailwind CSS design systems</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> SEO-optimized page architecture</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Progressive Web Apps (PWA)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Framer Motion animation systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Technologies</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Next.js 14+ (App Router)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> React 18+ with Server Components</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> TypeScript strict mode</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Tailwind CSS + shadcn/ui</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Vercel edge deployment</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> ESLint + automated testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="mobile-solutions" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_02_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  Mobile <span className="text-[#39FF14]">Solutions</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  Cross-platform mobile applications for iOS and Android using React Native and Flutter.
                  One codebase, native performance, full App Store and Play Store deployment — including
                  push notifications, offline support, and native module integration.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Build</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> React Native cross-platform apps</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Flutter applications</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> App Store & Play Store deployment</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Push notification systems</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Offline-first architecture</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Native module bridging</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Technologies</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> React Native + Expo</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Flutter + Dart</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Firebase / Supabase backend</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Redux / Zustand state management</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Fastlane CI/CD for stores</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> AsyncStorage / SQLite</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="full-stack-systems" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_03_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  Full-Stack <span className="text-[#39FF14]">Systems</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  End-to-end product engineering — from database schema design to the pixel-perfect frontend.
                  I build systems where the backend and frontend are designed together, not bolted on as an afterthought.
                  Real-time data, WebSocket streams, and type-safe API contracts are standard.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Build</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Full-stack web applications</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Real-time data pipelines</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> WebSocket communication layers</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Type-safe API contracts (tRPC / Zod)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Database schema design</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Admin dashboards & internal tools</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Technologies</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Node.js + Express / Fastify</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> PostgreSQL + Prisma ORM</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> MongoDB + Mongoose</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Redis caching layer</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Socket.io / WebSockets</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Zod / Yup validation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="ui-ux-engineering" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_04_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  UI/UX <span className="text-[#39FF14]">Engineering</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  Interfaces that don't just look good — they convert. I engineer UIs with user psychology,
                  conversion flow, and animation-driven experiences in mind. Every interaction is deliberate,
                  every transition has a purpose.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Build</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Interactive Figma prototypes</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Framer Motion animation systems</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Reusable design systems</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Conversion-optimized layouts</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Accessibility (WCAG) compliance</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Dark/light theme systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Tools & Libraries</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Figma + FigJam</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Framer Motion</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> shadcn/ui + Radix primitives</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Tailwind CSS utility system</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Lucide / React Icons</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Lottie animations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="blockchain-bridge" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_05_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  Blockchain <span className="text-[#39FF14]">Bridge</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  Smart contract development, DApp architecture, and Web3 wallet integration.
                  From ERC-20 tokens to multi-chain DeFi protocols — I bridge traditional web applications
                  with blockchain infrastructure, including wallet connections, contract testing, and mainnet deployment.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Build</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Solidity smart contracts (ERC-20/721/1155)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> DeFi protocol development</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> NFT marketplace platforms</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Wallet integration (MetaMask, WalletConnect)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Multi-chain DApps (Ethereum, Polygon, BSC)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Bitcoin Ordinals / inscriptions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Technologies</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Solidity + OpenZeppelin</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Ethers.js / Web3.js</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Hardhat testing framework</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> IPFS / Arweave storage</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> The Graph indexing</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Slither / Mythril security audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="performance-ops" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_06_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  Performance <span className="text-[#39FF14]">Ops</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  Deep optimisation of existing products — Core Web Vitals, bundle splitting, caching strategies,
                  and Lighthouse 100 audits. If your app is slow, I find the bottleneck and fix it at the root,
                  not with a workaround.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Do</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Core Web Vitals optimization (LCP, CLS, INP)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Lighthouse 100 audit & remediation</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> JavaScript bundle splitting</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Image optimization (WebP, AVIF, lazy load)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> CDN & edge caching strategy</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Database query optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Tools</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Google Lighthouse</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Chrome DevTools Performance panel</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Next.js bundle analyzer</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Vercel Analytics / Speed Insights</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> WebPageTest.org</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Redis / Varnish caching</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="backend-api" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_07_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  Backend & <span className="text-[#39FF14]">API Dev</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  Scalable REST and GraphQL APIs with Node.js, Express, and PostgreSQL.
                  JWT authentication, session handling, rate limiting, and protected route architecture —
                  built to handle real traffic, not just localhost.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Build</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> REST API design & development</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> GraphQL APIs with Apollo / tRPC</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> JWT auth & session management</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Role-based access control (RBAC)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Rate limiting & API security</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Third-party API integration (Stripe, etc.)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Technologies</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Node.js + Express / Fastify</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> PostgreSQL + Prisma</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> MongoDB + Mongoose</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Redis for sessions & caching</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Swagger / OpenAPI documentation</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Jest + Supertest testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="devops" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_08_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  DevOps & <span className="text-[#39FF14]">Infrastructure</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  Multi-site VPS management, CI/CD pipelines via GitHub Actions, SSL via Certbot, and full email
                  infrastructure with SPF, DKIM, and DMARC. I handle the infrastructure side most developers
                  outsource — so your project goes from first commit to production without a separate ops team.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Handle</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Nginx reverse proxy configuration</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> PM2 process management</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> GitHub Actions CI/CD pipelines</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> SSL/TLS via Certbot (Let's Encrypt)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Email infrastructure (SPF, DKIM, DMARC)</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Domain/DNS management</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Technologies</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Nginx + PM2</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> GitHub Actions</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Docker containerization</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Certbot / Let's Encrypt</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> WHM / cPanel</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Cloudflare DNS & CDN</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="ecommerce-saas" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_09_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  E-Commerce & <span className="text-[#39FF14]">SaaS</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  Production-grade e-commerce platforms and SaaS dashboards — product catalogues, payment gateways,
                  subscription logic, and admin panels. Built to handle real transactions, real inventory, and real customers.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Build</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Custom e-commerce platforms</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> SaaS dashboards with billing</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Stripe / PayPal payment integration</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Subscription & recurring billing logic</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Product catalogue & inventory systems</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Admin panels & analytics dashboards</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Technologies</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Stripe / PayPal / Razorpay</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Next.js + Stripe Checkout</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Prisma + PostgreSQL</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Redis for cart & session state</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Recharts / Tremor for dashboards</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Webhooks for payment events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="crm-development" className="scroll-mt-24 mb-20">
              <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  Service_10_Loaded
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  CRM <span className="text-[#39FF14]">Development</span>
                </h2>
                <p className="text-white/60 text-lg mb-8 font-sans leading-relaxed">
                  Custom CRM systems built around your actual sales process — not a generic template
                  you have to bend your workflow around. Lead tracking, contact management, automated
                  follow-up sequences, and real-time reporting dashboards. Integrated with your existing
                  tools: email providers, calendar, invoicing, and payment systems.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">What I Build</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Custom CRM dashboards & pipelines</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Lead tracking & contact management</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Automated workflow & follow-up sequences</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Custom reporting & analytics</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Email & calendar integration</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Role-based access for sales teams</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Technologies</h3>
                    <ul className="space-y-3 text-white/60 font-sans">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> React + Next.js dashboard UI</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Node.js + Express API</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> PostgreSQL + Prisma ORM</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Redis for caching & queues</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> BullMQ / Cron for automation</li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Recharts / Tremor for reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Why Work With Me ── */}
            <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12 mb-16">
              <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                System_Advantages
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                Why Work With <span className="text-[#39FF14]">Me</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">One Developer, End-to-End</h3>
                  <ul className="space-y-3 text-white/60 font-sans">
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> No handoffs between frontend, backend, and ops teams</li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> 3+ years building production web & mobile apps</li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> From first commit to VPS deployment — I own it all</li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Clean, scalable, maintainable TypeScript code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-[0.2em] mb-4">Built for Real Clients</h3>
                  <ul className="space-y-3 text-white/60 font-sans">
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> 100+ apps and sites live in production</li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Clients in 20+ countries worldwide</li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Web3 specialty without the Web3-only box</li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 shrink-0" /> Flexible engagement — short-term to long-term</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="text-center">
              <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
                Ready_To_Build
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-6">
                Let's Build <span className="text-[#39FF14]">Something</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
                Tell me what you're building. I'll tell you if I can help — and how.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-4 bg-[#39FF14] text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(57,255,20,0.2)]"
              >
                <span>Initiate Contact</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

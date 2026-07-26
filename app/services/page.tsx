import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Full-Stack & Web3 Dev Services',
  description:
    'Hire Mussawar Hayat for full-stack development: React/Next.js web apps, React Native mobile, Node.js APIs, DevOps, SaaS platforms, and Web3/Solidity smart contracts. Available worldwide for freelance projects.',
  keywords: [
    'hire full-stack developer',
    'hire Next.js developer',
    'Web3 developer for hire',
    'Solidity developer for hire',
    'freelance React developer',
    'Next.js development services',
    'smart contract development',
    'React Native developer for hire',
    'DevOps services',
    'SaaS development services',
    'freelance blockchain developer',
    'Mussawar Hayat',
  ],
  openGraph: {
    title: 'Hire Full-Stack & Web3 Developer | Mussawar Hayat Services',
    description:
      'Full-stack development services — web apps, mobile apps, APIs, DevOps, e-commerce, and Web3/blockchain integration. Available for freelance projects worldwide.',
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

            <div className="text-center mb-20">
              <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
                Service_Catalogue.v2
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                Development <span className="text-[#39FF14]">Services</span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-sans">
                Hire a full-stack developer for web, mobile, and blockchain projects.
                From React/Next.js frontends to Node.js backends, DevOps infrastructure,
                and Web3 integration — one developer, end-to-end delivery. Available for clients
                across North America, Europe, and worldwide.
              </p>
            </div>

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

            <div className="bg-[#0A1221] border border-[#39FF14]/20 p-8 md:p-12 mb-16">
              <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                <span className="w-2 h-2 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                System_Advantages
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                Why Hire <span className="text-[#39FF14]">Me</span>
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

            <div className="text-center">
              <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
                Ready_To_Build
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-6">
                Ready to <span className="text-[#39FF14]">Hire</span>?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
                Tell me what you\'re building. I\'ll tell you if I can help — and how fast we can ship.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-[#39FF14] text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(57,255,20,0.2)]"
              >
                <span>Start a Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <div className="mt-6">
                <Link
                  href="/blog"
                  className="text-white/50 hover:text-[#39FF14] text-sm font-orbitron uppercase tracking-widest transition-colors"
                >
                  Read the Blog →
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

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiMonitor, FiSmartphone, FiActivity, FiShield,
  FiZap, FiLayers, FiServer, FiTerminal, FiShoppingCart, FiArrowRight,
} from 'react-icons/fi';
import type { ReactElement } from 'react';

interface Service {
  id: string;
  icon: ReactElement;
  title: string;
  description: string;
  tags: readonly string[];
  category: string;
}

const SERVICES: Service[] = [
  {
    id: '01',
    icon: <FiMonitor />,
    title: 'Web Architecture',
    description:
      'High-performance Next.js and React applications optimized for speed, SEO, and global scalability. SSR, ISR, and edge-network ready.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    category: 'Frontend',
  },
  {
    id: '02',
    icon: <FiSmartphone />,
    title: 'Mobile Solutions',
    description:
      'Cross-platform mobile applications for iOS and Android with seamless native performance using React Native and Flutter.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    category: 'Apps',
  },
  {
    id: '03',
    icon: <FiLayers />,
    title: 'Full-Stack Systems',
    description:
      'End-to-end product engineering — robust backend infrastructure, real-time data pipelines, and tightly integrated frontend layers.',
    tags: ['Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    category: 'Architecture',
  },
  {
    id: '04',
    icon: <FiActivity />,
    title: 'UI/UX Engineering',
    description:
      'Immersive digital interfaces built with precision — focused on user psychology, conversion flow, and animation-driven experiences.',
    tags: ['Figma', 'Framer Motion', 'UI/UX', 'Design Systems'],
    category: 'Design',
  },
  {
    id: '05',
    icon: <FiShield />,
    title: 'Web3 & Blockchain',
    description:
      'Smart contract development, DApp architecture, and Web3 wallet integration — from ERC-20 tokens to multi-chain DeFi protocols.',
    tags: ['Solidity', 'Ethers.js', 'Hardhat', 'IPFS'],
    category: 'Web3',
  },
  {
    id: '06',
    icon: <FiZap />,
    title: 'Performance Ops',
    description:
      'Deep optimisation of existing products — Core Web Vitals, bundle splitting, caching strategies, and Lighthouse 100 audits.',
    tags: ['Lighthouse', 'Web Vitals', 'CDN', 'Caching'],
    category: 'Optimisation',
  },
  {
    id: '07',
    icon: <FiServer />,
    title: 'Backend & API Dev',
    description:
      'Scalable REST and GraphQL APIs with Node.js, Express, and PostgreSQL — including JWT auth, session handling, and protected route architecture.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
  },
  {
    id: '08',
    icon: <FiTerminal />,
    title: 'DevOps & Infrastructure',
    description:
      'Multi-site VPS management, CI/CD pipelines via GitHub Actions, SSL via Certbot, and full email infrastructure with SPF, DKIM, and DMARC.',
    tags: ['Nginx', 'PM2', 'GitHub Actions', 'Docker'],
    category: 'DevOps',
  },
  {
    id: '09',
    icon: <FiShoppingCart />,
    title: 'E-Commerce & SaaS',
    description:
      'Production-grade e-commerce platforms and SaaS dashboards — product catalogues, payment gateways, subscription logic, and admin panels.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'SaaS'],
    category: 'Commerce',
  },
] as const;

const VIEWPORT = { once: true, amount: 0.2 as const, margin: '0px 0px -40px 0px' };

export function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-[#030712] relative overflow-hidden font-orbitron text-white"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-[#39FF14]/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Header with Paragraph Subtitle */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 mb-4 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
            <FiTerminal className="animate-pulse" aria-hidden="true" />
            <span>Capabilities &amp; Expertise</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Full-Stack Engineering Services
          </h2>

          <p className="max-w-3xl text-sm md:text-base text-white/70 font-sans leading-relaxed">
            From initial product architecture to cloud deployments and smart contracts, I deliver scalable, production-grade applications engineered for performance, security, and growth.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.04, 0.2),
                ease: 'easeOut',
              }}
              viewport={VIEWPORT}
              className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col justify-between hover:border-[#39FF14]/50 transition-all duration-300 group shadow-xl min-h-[400px]"
            >
              {/* Card Content */}
              <div>
                {/* Header: ID & Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_6px_#39FF14]" aria-hidden="true" />
                    <span className="text-xs font-mono font-bold text-[#39FF14]">
                      {service.id}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-white/50 border border-white/10 bg-white/[0.03] px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center text-2xl text-[#39FF14] mb-6 group-hover:scale-105 transition-transform shadow-md"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide uppercase">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm font-sans leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <ul className="flex flex-wrap gap-1.5 mb-6" aria-label="Technologies">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-[10px] font-mono text-white/80 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="#contact"
                    aria-label={`Enquire about ${service.title}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#39FF14] tracking-wider hover:text-white transition-colors group/link"
                  >
                    <span>Inquire Project</span>
                    <FiArrowRight className="transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-[#39FF14] text-black px-10 py-4 rounded-lg font-bold tracking-wider uppercase text-sm hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all"
          >
            <span>Explore Custom Requirements</span>
            <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
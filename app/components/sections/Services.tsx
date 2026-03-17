'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMonitor, FiSmartphone, FiActivity, FiShield,
  FiZap, FiLayers, FiServer, FiTerminal, FiShoppingCart,
} from 'react-icons/fi';
import type { ReactElement } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  id:          string;
  icon:        ReactElement;
  title:       string;
  description: string;
  tags:        readonly string[];
  category:    string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    id:          'SVC_01',
    icon:        <FiMonitor />,
    title:       'Web Architecture',
    description: 'High-performance Next.js and React applications optimized for speed, SEO, and global scalability. SSR, ISR, and edge-network ready.',
    tags:        ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    category:    'Frontend',
  },
  {
    id:          'SVC_02',
    icon:        <FiSmartphone />,
    title:       'Mobile Solutions',
    description: 'Cross-platform mobile applications for iOS and Android with seamless native performance using React Native and Flutter.',
    tags:        ['React Native', 'Flutter', 'iOS', 'Android'],
    category:    'Apps',
  },
  {
    id:          'SVC_03',
    icon:        <FiLayers />,
    title:       'Full-Stack Systems',
    description: 'End-to-end product engineering — robust backend infrastructure, real-time data pipelines, and tightly integrated frontend layers.',
    tags:        ['Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    category:    'Architecture',
  },
  {
    id:          'SVC_04',
    icon:        <FiActivity />,
    title:       'UI/UX Engineering',
    description: 'Immersive digital interfaces built with precision — focused on user psychology, conversion flow, and animation-driven experiences.',
    tags:        ['Figma', 'Framer Motion', 'UI/UX', 'Design Systems'],
    category:    'Design',
  },
  {
    id:          'SVC_05',
    icon:        <FiShield />,
    title:       'Blockchain Bridge',
    description: 'Smart contract development, DApp architecture, and Web3 wallet integration — from ERC-20 tokens to multi-chain DeFi protocols.',
    tags:        ['Solidity', 'Ethers.js', 'Hardhat', 'IPFS'],
    category:    'Web3',
  },
  {
    id:          'SVC_06',
    icon:        <FiZap />,
    title:       'Performance Ops',
    description: 'Deep optimisation of existing products — Core Web Vitals, bundle splitting, caching strategies, and Lighthouse 100 audits.',
    tags:        ['Lighthouse', 'Web Vitals', 'CDN', 'Caching'],
    category:    'Optimisation',
  },
  {
    id:          'SVC_07',
    icon:        <FiServer />,
    title:       'Backend & API Dev',
    description: 'Scalable REST and GraphQL APIs with Node.js, Express, and PostgreSQL — including JWT auth, session handling, and protected route architecture.',
    tags:        ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category:    'Backend',
  },
  {
    id:          'SVC_08',
    icon:        <FiTerminal />,
    title:       'DevOps & Infrastructure',
    description: 'Multi-site VPS management, CI/CD pipelines via GitHub Actions, SSL via Certbot, and full email infrastructure with SPF, DKIM, and DMARC.',
    tags:        ['Nginx', 'PM2', 'GitHub Actions', 'Docker'],
    category:    'DevOps',
  },
  {
    id:          'SVC_09',
    icon:        <FiShoppingCart />,
    title:       'E-Commerce & SaaS',
    description: 'Production-grade e-commerce platforms and SaaS dashboards — product catalogues, payment gateways, subscription logic, and admin panels.',
    tags:        ['Next.js', 'Stripe', 'Tailwind', 'SaaS'],
    category:    'Commerce',
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-[#060B16] relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-20">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              <FiTerminal className="animate-pulse" aria-hidden="true" />
              Digital_Capabilities.v2_Loaded
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              The <span className="text-[#39FF14]">Stack</span>
            </h2>
          </div>

          {/* Live counter badge */}
          <div className="flex items-center gap-3 border border-[#39FF14]/30 bg-[#39FF14]/5 px-5 py-3">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
              {SERVICES.length}_Services_Active
            </span>
          </div>
        </div>

        {/* ── Services Grid — matches Portfolio card layout exactly ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20 mb-20">
          <AnimatePresence>
            {SERVICES.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="bg-[#0A1221] group relative p-8 md:p-10 flex flex-col min-h-[420px] hover:bg-[#39FF14]/[0.05] transition-all duration-500 overflow-hidden"
              >
                {/* Top: unit ID + category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#39FF14] shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
                    <span className="text-[10px] font-bold text-[#39FF14] uppercase tracking-tighter">
                      {service.id}
                    </span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] opacity-30 border border-[#39FF14]/20 px-2 py-0.5">
                    {service.category}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="text-3xl text-white/30 mb-6 group-hover:text-[#39FF14] group-hover:scale-110 transition-all duration-300"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-4 uppercase leading-tight group-hover:text-[#39FF14] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <div className="flex-grow mb-6">
                  <p className="text-white/60 text-sm font-sans leading-relaxed group-hover:text-white/80 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Tech tags — same style as Portfolio */}
                <ul className="flex flex-wrap gap-2 mb-8" aria-label="Technologies">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-[9px] text-[#39FF14] border border-[#39FF14]/40 bg-[#39FF14]/5 px-2 py-1 uppercase font-bold tracking-tighter"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* CTA — pinned to bottom */}
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${service.title}`}
                    className="flex items-center justify-center gap-2 py-3 bg-[#39FF14] text-black text-[10px] font-black uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)]"
                  >
                    <FiZap aria-hidden="true" /> INQUIRE_NOW
                  </a>
                </div>

                {/* Hover corner glow */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent group-hover:border-[#39FF14] group-hover:drop-shadow-[0_0_6px_#39FF14] transition-all duration-500"
                  aria-hidden="true"
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-4 bg-[#39FF14] text-black px-12 py-6 font-bold tracking-widest uppercase text-sm hover:bg-white transition-all shadow-[0_0_40px_rgba(57,255,20,0.15)]"
          >
            <span>Initiate Digital Transformation</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
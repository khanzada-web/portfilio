'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiTerminal, FiGlobe } from 'react-icons/fi';

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = 'all' | 'defi' | 'metaverse' | 'utility' | 'backend' | 'devops';

interface Project {
  id:          string;
  title:       string;
  description: string;
  category:    Exclude<Category, 'all'> | 'nft' | 'design' | 'gaming' | 'media';
  tech:        readonly string[];
  link:        string | null;
  github:      string | null;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [

  // ── 🎨 Frontend / Web3 UI ──────────────────────────────────────────────────
  {
    id: '01', title: 'DaMeta1 Ecosystem', category: 'metaverse',
    description: 'A global AI-driven Metaverse bridging education and business across 5 continents. Features immersive 3D hubs and decentralized infrastructure.',
    tech: ['React', 'Three.js', 'AI', 'Web3'],
    link: 'https://dameta1.com/', github: null,
  },
  {
    id: '02', title: 'DMU Utility Token', category: 'defi',
    description: 'The native economic layer for DaMeta1. An ERC-20 smart contract system powering governance and AI-driven marketplace transactions.',
    tech: ['Solidity', 'Web3.js', 'Ethereum'],
    link: 'https://dmu.dameta1.com/', github: null,
  },
  {
    id: '03', title: 'Ordwin Market', category: 'nft',
    description: 'High-performance Bitcoin NFT marketplace specialised in Ordinal inscriptions with a focus on speed and secure trading.',
    tech: ['Next.js', 'TypeScript', 'Bitcoin'],
    link: 'https://ordwin.fun', github: 'https://github.com/khanzada-web/ordwin',
  },
  {
    id: '04', title: 'FAST Timetable', category: 'utility',
    description: 'Dynamic scheduling platform for university ecosystems. Streamlining student time-management with a responsive, real-time UI.',
    tech: ['React', 'Vercel', 'UI/UX'],
    link: 'https://timetbl.vercel.app/', github: null,
  },
  {
    id: '05', title: 'RippleRoot', category: 'design',
    description: 'A premium design-centric platform showcasing collaborative art and wildlife-themed digital experiences for global clients.',
    tech: ['Next.js', 'Framer', 'Tailwind'],
    link: 'https://www.rippleroot.io/', github: null,
  },
  {
    id: '06', title: 'CodMob Hub', category: 'utility',
    description: 'Mobile-first development showcase featuring advanced frontend animations and modular architecture for high-end web apps.',
    tech: ['React', 'Netlify', 'Animations'],
    link: 'https://codmob1.netlify.app/', github: null,
  },
  {
    id: '07', title: 'Soft Stake', category: 'defi',
    description: 'DeFi staking architecture with automated yield distribution and secure liquidity pool management for crypto assets.',
    tech: ['Solidity', 'Ethers.js', 'Node.js'],
    link: 'https://soft-stake.netlify.app', github: 'https://github.com/khanzada-web/soft-stake',
  },
  {
    id: '08', title: 'Debauchery', category: 'gaming',
    description: 'Web3 gaming ecosystem with integrated NFT asset ownership and decentralized community governance protocols.',
    tech: ['Vue.js', 'IPFS', 'Smart Contracts'],
    link: 'https://debaucherykek.com', github: 'https://github.com/khanzada-web/debauchery',
  },
  {
    id: '09', title: 'Demotrionn DEX', category: 'defi',
    description: 'Multi-chain DEX interface featuring advanced charting tools and high-frequency data indexing for pro traders.',
    tech: ['React', 'GraphQL', 'PostgreSQL'],
    link: 'https://demotrionn.netlify.app', github: 'https://github.com/khanzada-web/demotrionn',
  },
  {
    id: '10', title: 'NewsPress', category: 'media',
    description: 'Blockchain-verified news aggregator utilising tokenized incentives for content verification and community reporting.',
    tech: ['Next.js', 'Redis', 'Docker'],
    link: 'https://newspress.netlify.app', github: 'https://github.com/khanzada-web/newspress',
  },
  {
    id: '11', title: 'Whitelist Check', category: 'utility',
    description: 'Cross-chain utility for managing NFT whitelist signatures and secure allocation verification for launchpads.',
    tech: ['React', 'Ethers.js', 'Express'],
    link: 'https://whitelistcheck.netlify.app', github: 'https://github.com/khanzada-web/whitelistcheck',
  },
  {
    id: '12', title: 'NFT Marketplace UI', category: 'nft',
    description: 'Full-featured NFT marketplace frontend with wallet connection, live listings, and smooth transaction flows.',
    tech: ['Next.js', 'Ethers.js', 'Web3 API', 'UI/UX'],
    link: null, github: null,
  },
  {
    id: '13', title: 'DeFi Dashboard', category: 'defi',
    description: 'Real-time DeFi analytics dashboard aggregating live on-chain data — portfolio overview, yield tracking, and liquidity pool stats.',
    tech: ['React', 'Web3.js', 'Live API', 'UI/UX'],
    link: null, github: null,
  },
  {
    id: '14', title: 'Crypto Exchange UI', category: 'defi',
    description: 'High-performance crypto exchange interface with order book, real-time charts, and multi-pair trading support.',
    tech: ['Next.js', 'TypeScript', 'UI/UX', 'API Integration'],
    link: null, github: null,
  },
  {
    id: '15', title: 'Token / ICO Website', category: 'defi',
    description: 'Conversion-focused ICO launch platform with tokenomics section, whitelist flow, and presale smart contract integration.',
    tech: ['React', 'Tailwind', 'UI/UX', 'Web3 API'],
    link: null, github: null,
  },
  {
    id: '16', title: 'Web3 Wallet Integration', category: 'utility',
    description: 'Plug-and-play multi-chain wallet integration layer supporting MetaMask, WalletConnect, and Coinbase Wallet.',
    tech: ['MetaMask', 'WalletConnect', 'Multi-chain', 'UI/UX'],
    link: null, github: null,
  },

  // ── ⚙️ Backend ─────────────────────────────────────────────────────────────
  {
    id: '17', title: 'Staking & Swap Platform', category: 'backend',
    description: 'Backend engine powering a DeFi staking and swap protocol — supporting 200+ wallet connections, real-time rate feeds, and automated yield distribution.',
    tech: ['Node.js', 'Express', 'API Integration', '200+ Wallets'],
    link: null, github: null,
  },
  {
    id: '18', title: 'Bitcoin Ordinals Sync API', category: 'backend',
    description: 'Real-time blockchain sync API for a Bitcoin Ordinals marketplace — indexing inscriptions, ownership transfers, and listing events at chain speed.',
    tech: ['Node.js', 'Bitcoin', 'Real-time Sync', 'REST API'],
    link: null, github: null,
  },
  {
    id: '19', title: 'Auth & Protected APIs', category: 'backend',
    description: 'Full authentication system with JWT, refresh token rotation, session management, role-based access control, and protected API routes.',
    tech: ['Node.js', 'JWT', 'Sessions', 'MongoDB', 'PostgreSQL'],
    link: null, github: null,
  },
  {
    id: '20', title: 'E-Commerce Backend', category: 'backend',
    description: 'Scalable e-commerce API with product catalogue, cart, orders, payment gateway hooks, and inventory management.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
    link: null, github: null,
  },

  // ── 🚀 DevOps ──────────────────────────────────────────────────────────────
  {
    id: '21', title: 'Multi-Site VPS Management', category: 'devops',
    description: 'Full production infrastructure managing multiple live sites on a single VPS — Nginx reverse proxy, PM2 process management, and zero-downtime deploys.',
    tech: ['Nginx', 'PM2', 'Ubuntu', 'VPS'],
    link: null, github: null,
  },
  {
    id: '22', title: 'CI/CD Pipeline Setup', category: 'devops',
    description: 'Automated GitHub Actions pipelines for test, build, and deploy — with environment secrets, matrix builds, and Slack deploy notifications.',
    tech: ['GitHub Actions', 'CI/CD', 'Auto Deploy', 'Docker'],
    link: null, github: null,
  },
  {
    id: '23', title: 'Email Infrastructure', category: 'devops',
    description: 'Full email server setup including WHM/cPanel, DNS records, SPF, DKIM, DMARC, SSL — achieving inbox deliverability and spam compliance.',
    tech: ['WHM', 'DNS', 'SPF', 'DKIM', 'DMARC', 'SSL'],
    link: null, github: null,
  },
  {
    id: '24', title: 'SSL & Security Hardening', category: 'devops',
    description: 'Server security hardening covering Certbot HTTPS, firewall rules (UFW), fail2ban, SSH key auth, and automated certificate renewal.',
    tech: ['Certbot', 'HTTPS', 'UFW', 'Fail2ban', 'SSH'],
    link: null, github: null,
  },
];

// ─── Filter Categories ────────────────────────────────────────────────────────

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all',      label: 'All_Units'   },
  { id: 'defi',     label: 'DeFi_Layer'  },
  { id: 'backend',  label: 'Backend_API' },
  { id: 'devops',   label: 'DevOps_Ops'  },
];

// ─── External link helper ─────────────────────────────────────────────────────

const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel:    'noopener noreferrer',
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

const Portfolio = () => {
  const [filter, setFilter] = useState<Category>('all');

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-[#060B16] text-[#39FF14] font-orbitron">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              <FiTerminal className="animate-pulse" aria-hidden="true" />
              Build_History_Checksum_Pass
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              The <span className="text-[#39FF14]">Arsenal</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2 bg-white/5 p-1 border border-white/20"
            role="group"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setFilter(id)}
                aria-pressed={filter === id}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all ${
                  filter === id
                    ? 'bg-[#39FF14] text-black font-bold'
                    : 'text-white hover:text-[#39FF14]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#0A1221] group relative p-8 md:p-10 flex flex-col min-h-[480px] hover:bg-[#39FF14]/[0.05] transition-all duration-500 overflow-hidden"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-[#39FF14] shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
                    <span className="text-[10px] font-bold text-[#39FF14] uppercase tracking-tighter">
                      LOG_UNIT_{project.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 uppercase leading-tight group-hover:text-[#39FF14] transition-colors">
                    {project.title}
                  </h3>

                  <div className="h-28 overflow-hidden mb-6">
                    <p className="text-white text-sm font-sans leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="text-[9px] text-[#39FF14] border border-[#39FF14]/40 bg-[#39FF14]/5 px-2 py-1 uppercase font-bold tracking-tighter"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-auto">
                  {project.link ? (
                    <a
                      href={project.link}
                      {...EXTERNAL_LINK_PROPS}
                      aria-label={`View live demo of ${project.title}`}
                      className="flex items-center justify-center gap-2 py-3 bg-[#39FF14] text-black text-[10px] font-black uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)]"
                    >
                      <FiGlobe aria-hidden="true" /> LIVE_DEMO
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2 py-3 bg-white/5 text-white/20 text-[10px] font-black uppercase cursor-not-allowed border border-white/10">
                      <FiGlobe aria-hidden="true" /> PRIVATE
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      {...EXTERNAL_LINK_PROPS}
                      aria-label={`View source code of ${project.title} on GitHub`}
                      className="flex items-center justify-center gap-2 py-3 bg-white/10 text-white text-[10px] font-black border border-white/20 hover:bg-white/20 transition-all"
                    >
                      <FiGithub aria-hidden="true" /> SOURCE
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2 py-3 bg-white/5 text-white/20 text-[10px] font-black border border-white/10 cursor-not-allowed">
                      <FiGithub aria-hidden="true" /> PRIVATE
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
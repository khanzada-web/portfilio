'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiTerminal, FiGlobe } from 'react-icons/fi';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: "01",
      title: 'DaMeta1 Ecosystem',
      description: 'A global AI-driven Metaverse bridging education and business across 5 continents. Features immersive 3D hubs and decentralized infrastructure.',
      category: 'metaverse',
      tech: ['React', 'Three.js', 'AI'],
      completion: 80,
      link: 'https://dameta1.com/',
      github: '#'
    },
    {
      id: "02",
      title: 'DMU Utility Token',
      description: 'The native economic layer for DaMeta1. An ERC-20 smart contract system powering governance and AI-driven marketplace transactions.',
      category: 'defi',
      tech: ['Solidity', 'Web3.js', 'Ethereum'],
      completion: 80,
      link: 'https://dmu.dameta1.com/',
      github: '#'
    },
    {
      id: "03",
      title: 'Ordwin Market',
      description: 'High-performance Bitcoin NFT marketplace. Specialized in Ordinal inscriptions with a focus on speed and secure trading.',
      category: 'nft',
      tech: ['Next.js', 'TypeScript', 'Bitcoin'],
      completion: 80,
      link: 'https://ordwin.fun',
      github: 'https://github.com/khanzada-web/ordwin'
    },
    {
      id: "04",
      title: 'FAST Timetable',
      description: 'Dynamic scheduling platform for university ecosystems. Streamlining student time-management with a responsive, real-time UI.',
      category: 'utility',
      tech: ['React', 'Vercel', 'UI/UX'],
      completion: 80,
      link: 'https://timetbl.vercel.app/',
      github: '#'
    },
    {
      id: "05",
      title: 'RippleRoot',
      description: 'A premium design-centric platform showcasing collaborative art and wildlife-themed digital experiences for global clients.',
      category: 'design',
      tech: ['Next.js', 'Framer', 'Tailwind'],
      completion: 80,
      link: 'https://www.rippleroot.io/',
      github: '#'
    },
    {
      id: "06",
      title: 'CodMob Hub',
      description: 'Mobile-first development showcase featuring advanced frontend animations and modular architecture for high-end web apps.',
      category: 'utility',
      tech: ['React', 'Netlify', 'Animations'],
      completion: 80,
      link: 'https://codmob1.netlify.app/',
      github: '#'
    },
    {
      id: "07",
      title: 'Soft Stake',
      description: 'DeFi staking architecture with automated yield distribution and secure liquidity pool management for crypto assets.',
      category: 'defi',
      tech: ['Solidity', 'Ethers.js', 'Node.js'],
      completion: 80,
      link: 'https://soft-stake.netlify.app',
      github: 'https://github.com/khanzada-web/soft-stake'
    },
    {
      id: "08",
      title: 'Debauchery',
      description: 'Web3 gaming ecosystem with integrated NFT asset ownership and decentralized community governance protocols.',
      category: 'gaming',
      tech: ['Vue.js', 'IPFS', 'Smart Contracts'],
      completion: 80,
      link: 'https://debaucherykek.com',
      github: 'https://github.com/khanzada-web/debauchery'
    },
    {
      id: "09",
      title: 'Demotrionn',
      description: 'Multi-chain DEX interface featuring advanced charting tools and high-frequency data indexing for pro traders.',
      category: 'defi',
      tech: ['React', 'GraphQL', 'PostgreSQL'],
      completion: 80,
      link: 'https://demotrionn.netlify.app',
      github: 'https://github.com/khanzada-web/demotrionn'
    },
    {
      id: "10",
      title: 'NewsPress',
      description: 'Blockchain-verified news aggregator utilizing tokenized incentives for content verification and community reporting.',
      category: 'media',
      tech: ['Next.js', 'Redis', 'Docker'],
      completion: 80,
      link: 'https://newspress.netlify.app',
      github: 'https://github.com/khanzada-web/newspress'
    },
    {
      id: "11",
      title: 'Portfolio Engine',
      description: 'Custom-built high-performance engine for showcasing decentralized applications with a terminal-inspired aesthetic.',
      category: 'utility',
      tech: ['TypeScript', 'Framer', 'Next.js'],
      completion: 80,
      link: '#',
      github: '#'
    },
    {
      id: "12",
      title: 'Whitelist Check',
      description: 'Cross-chain utility for managing NFT whitelist signatures and secure allocation verification for launchpads.',
      category: 'utility',
      tech: ['React', 'Ethers.js', 'Express'],
      completion: 80,
      link: 'https://whitelistcheck.netlify.app',
      github: 'https://github.com/khanzada-web/whitelistcheck'
    }
  ];

  const categories = [
    { id: 'all', label: 'All_Units' },
    { id: 'defi', label: 'DeFi_Layer' },
    { id: 'metaverse', label: 'Meta_World' },
    { id: 'utility', label: 'Core_Utils' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-[#060B16] text-[#39FF14] font-orbitron">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              <FiTerminal className="animate-pulse" />
              Build_History_Checksum_Pass
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              The <span className="text-[#39FF14]">Arsenal</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-white/5 p-1 border border-white/20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all ${
                  filter === cat.id 
                  ? 'bg-[#39FF14] text-black font-bold' 
                  : 'text-white hover:text-[#39FF14]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#0A1221] group relative p-8 md:p-10 flex flex-col min-h-[480px] hover:bg-[#39FF14]/[0.05] transition-all duration-500 overflow-hidden"
              >
                {/* Content Wrapper */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-[#39FF14] shadow-[0_0_8px_#39FF14]"></div>
                    <span className="text-[10px] font-bold text-[#39FF14] uppercase tracking-tighter">
                      LOG_UNIT_{project.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 uppercase leading-tight group-hover:text-[#39FF14] transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Fixed height and high contrast for description */}
                  <div className="h-28 overflow-hidden mb-6">
                    <p className="text-white text-sm font-sans leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] text-[#39FF14] border border-[#39FF14]/40 bg-[#39FF14]/5 px-2 py-1 uppercase font-bold tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons - Now Locked to Bottom */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-auto">
                  <a href={project.link} target="_blank" className="flex items-center justify-center gap-2 py-3 bg-[#39FF14] text-black text-[10px] font-black uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                    <FiGlobe /> LIVE_DEMO
                  </a>
                  <a href={project.github} target="_blank" className="flex items-center justify-center gap-2 py-3 bg-white/10 text-white text-[10px] font-black border border-white/20 hover:bg-white/20 transition-all">
                    <FiGithub /> SOURCE
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
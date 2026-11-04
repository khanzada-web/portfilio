'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiShield, FiGlobe, FiServer, FiTerminal } from 'react-icons/fi';
import type { ReactElement } from 'react';

interface Layer {
  title: string;
  icon: ReactElement;
  tech: readonly string[];
  description: string;
}

const LAYERS: Layer[] = [
  {
    title: 'Frontend Layer',
    icon: <FiGlobe />,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Building high-performance, responsive interfaces with a focus on seamless Web3 user experience, SSR/ISR optimization, and speed.',
  },
  {
    title: 'Logic & API Layer',
    icon: <FiCpu />,
    tech: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB'],
    description:
      'Robust server-side logic, REST & GraphQL APIs, secure JWT auth, and scalable database architectures designed for longevity.',
  },
  {
    title: 'Blockchain Layer',
    icon: <FiLayers />,
    tech: ['Solidity', 'Ethers.js', 'Hardhat', 'IPFS', 'Web3.js'],
    description:
      'Smart contract development, EVM protocols, and decentralized storage integration for trustless, transparent applications.',
  },
  {
    title: 'Security & QA',
    icon: <FiShield />,
    tech: ['Slither', 'Mythril', 'OpenZeppelin', 'JWT', 'SSL/TLS'],
    description:
      'Rigorous testing and auditing of smart contracts and APIs to ensure zero-vulnerability deployments and enterprise compliance.',
  },
  {
    title: 'DevOps Layer',
    icon: <FiServer />,
    tech: ['Nginx', 'PM2', 'GitHub Actions', 'Certbot', 'Docker', 'VPS'],
    description:
      'Production-grade CI/CD pipelines, multi-site VPS management, custom email infrastructure (SPF, DKIM, DMARC), and automated deployment workflows.',
  },
];

const VIEWPORT = { once: true, amount: 0.2 as const, margin: '0px 0px -40px 0px' };

export function TechArchitecture() {
  return (
    <section
      id="architecture"
      className="bg-[#030712] py-28 relative overflow-hidden font-orbitron text-white"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
            <FiTerminal className="animate-pulse" aria-hidden="true" />
            <span>System Architecture</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Full-Stack Development Workflow
          </h2>

          <p className="text-white/70 text-sm md:text-base font-sans leading-relaxed max-w-2xl">
            Integrated engineering layers—from frontend interfaces and server APIs through to blockchain protocols and production DevOps infrastructure.
          </p>
        </div>

        {/* Layer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LAYERS.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.2),
                ease: 'easeOut',
              }}
              viewport={VIEWPORT}
              className={`group relative p-8 bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl hover:border-[#39FF14]/40 transition-all duration-300 shadow-xl flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header: Icon & Layer Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center text-2xl text-[#39FF14] group-hover:scale-105 transition-transform" aria-hidden="true">
                    {layer.icon}
                  </div>
                  <div className="text-right" aria-hidden="true">
                    <span className="block text-[9px] text-white/40 uppercase tracking-[0.2em] font-semibold">LAYER</span>
                    <span className="text-sm font-bold font-mono text-[#39FF14]">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Layer Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{layer.title}</h3>

                {/* Layer Description */}
                <p className="text-white/70 text-sm font-sans leading-relaxed mb-6">
                  {layer.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="mb-6">
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-semibold mb-2 font-mono">
                    Tech Stack
                  </p>
                  <ul className="flex flex-wrap gap-1.5" aria-label={`${layer.title} Technologies`}>
                    {layer.tech.map((item) => (
                      <li
                        key={item}
                        className="text-[10px] text-white/80 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md font-sans"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Status Indicator */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono" aria-hidden="true">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#39FF14]/80 font-bold">Stable.Build</span>
                  </div>
                  <span className="text-[10px] text-white/30 uppercase">Checksum_Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
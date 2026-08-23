'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiShield, FiGlobe, FiServer } from 'react-icons/fi';
import type { ReactElement } from 'react';

interface Layer {
  title: string;
  icon: ReactElement;
  tech: string;
  description: string;
}

const LAYERS: Layer[] = [
  {
    title: 'Frontend Layer',
    icon: <FiGlobe />,
    tech: 'Next.js, Tailwind CSS, Framer Motion',
    description:
      'Building high-performance, responsive interfaces with a focus on Web3 user experience.',
  },
  {
    title: 'Logic & API Layer',
    icon: <FiCpu />,
    tech: 'Node.js, Express, GraphQL, PostgreSQL, MongoDB',
    description:
      'Robust server-side logic, REST & GraphQL APIs, JWT auth, and scalable database architectures.',
  },
  {
    title: 'Blockchain Layer',
    icon: <FiLayers />,
    tech: 'Solidity, Ethers.js, Hardhat, IPFS, Web3.js',
    description:
      'Smart contract development and decentralised storage integration for trustless apps.',
  },
  {
    title: 'Security & QA',
    icon: <FiShield />,
    tech: 'Slither, Mythril, OpenZeppelin, JWT, SSL',
    description:
      'Rigorous testing and auditing of contracts and APIs to ensure zero-vulnerability deployments.',
  },
  {
    title: 'DevOps Layer',
    icon: <FiServer />,
    tech: 'Nginx, PM2, GitHub Actions, Certbot, WHM, Docker',
    description:
      'Production-grade CI/CD pipelines, multi-site VPS management, email infrastructure (SPF, DKIM, DMARC), SSL setup, and domain/DNS configuration.',
  },
];

const VIEWPORT = { once: true, amount: 0.2 as const, margin: '0px 0px -40px 0px' };

export function TechArchitecture() {
  return (
    <section
      id="architecture"
      className="bg-[#060B16] py-24 relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="mb-16 text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="h-[1px] w-12 bg-[#39FF14]/40" aria-hidden="true" />
            <span className="text-[#39FF14]/60 text-xs tracking-[0.4em] uppercase" aria-hidden="true">
              System architecture
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            Full-Stack Development Workflow
          </h2>
          <p className="text-[#39FF14]/80 text-sm md:text-base tracking-wider max-w-2xl font-sans">
            Integrated environments — from frontend and backend through to blockchain and
            production-grade DevOps infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LAYERS.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.06, 0.24),
                ease: 'easeOut',
              }}
              viewport={VIEWPORT}
              className={`group relative p-8 bg-white/5 border border-[#39FF14]/20 rounded-sm hover:border-[#39FF14] transition-colors duration-300 ${
                index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div
                className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-[#39FF14] group-hover:drop-shadow-[0_0_5px_#39FF14] transition-all duration-500"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between mb-8">
                <div
                  className="text-[#39FF14] text-4xl group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {layer.icon}
                </div>
                <div className="text-right" aria-hidden="true">
                  <span className="block text-[10px] text-white/30 tracking-[0.2em]">LAYER</span>
                  <span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">{layer.title}</h3>

              <p className="text-[#39FF14] text-[11px] mb-5 uppercase tracking-[0.2em] font-bold">
                {layer.tech}
              </p>

              <p className="text-white/60 text-sm leading-relaxed mb-8 tracking-wide font-sans">
                {layer.description}
              </p>

              <div className="pt-5 border-t border-[#39FF14]/10 flex items-center justify-between" aria-hidden="true">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#39FF14]/60">Stable.Build</span>
                </div>
                <span className="text-[10px] text-white/20 tabular-nums uppercase">Checksum_OK</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

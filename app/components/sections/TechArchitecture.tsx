'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiShield, FiGlobe } from 'react-icons/fi';

export function TechArchitecture() {
  const layers = [
    {
      title: "Frontend Layer",
      icon: <FiGlobe />,
      tech: "Next.js, Tailwind CSS, Framer Motion",
      description: "Building high-performance, responsive interfaces with a focus on Web3 user experience."
    },
    {
      title: "Logic & API Layer",
      icon: <FiCpu />,
      tech: "Node.js, Express, GraphQL, PostgreSQL",
      description: "Robust server-side logic and scalable database architectures for centralized data."
    },
    {
      title: "Blockchain Layer",
      icon: <FiLayers />,
      tech: "Solidity, Ethers.js, Hardhat, IPFS",
      description: "Smart contract development and decentralized storage integration for trustless apps."
    },
    {
      title: "Security & QA",
      icon: <FiShield />,
      tech: "Slither, Mythril, OpenZeppelin",
      description: "Rigorous testing and auditing of contracts to ensure zero-vulnerability deployments."
    }
  ];

  return (
    <section 
      id="architecture" 
      // BG exactly matches Hero: #060B16 and font-orbitron
      className="bg-[#060B16] py-24 relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="h-[1px] w-12 bg-[#39FF14]/40"></span>
            <span className="text-[#39FF14]/60 text-xs tracking-[0.4em] uppercase">System_Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            Full-Stack <span className="text-[#39FF14]">Workflow</span>
          </h2>
          <p className="text-[#39FF14]/80 text-sm md:text-base lowercase tracking-wider max-w-2xl">
            Integrated decentralized environments built with precision and modern engineering standards.
          </p>
        </div>

        {/* Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-white/5 border border-[#39FF14]/20 rounded-sm hover:border-[#39FF14] transition-all duration-500"
            >
              {/* Corner Accent - Glowing on hover */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-[#39FF14] group-hover:drop-shadow-[0_0_5px_#39FF14] transition-all duration-500"></div>
              
              <div className="flex items-start justify-between mb-8">
                <div className="text-[#39FF14] text-4xl group-hover:scale-110 transition-transform duration-300">
                  {layer.icon}
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-white/30 tracking-[0.2em]">LAYER</span>
                  <span className="text-sm font-bold">0{index + 1}</span>
                </div>
              </div>
              
              <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">
                {layer.title}
              </h3>
              
              <p className="text-[#39FF14] text-[11px] mb-5 uppercase tracking-[0.2em] font-bold">
                {layer.tech}
              </p>
              
              <p className="text-white/60 text-sm leading-relaxed mb-8 lowercase tracking-wide">
                {layer.description}
              </p>

              {/* Terminal Details - Matches Stats feel in Hero */}
              <div className="pt-5 border-t border-[#39FF14]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]"></span>
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
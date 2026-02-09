'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiDatabase, FiCpu, FiLock } from 'react-icons/fi';

export function GlobalImpact() {
  return (
    <section 
      id="global-impact" 
      className="bg-[#060B16] py-24 relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Original Heading & Stats */}
          <div className="space-y-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="h-[1px] w-12 bg-[#39FF14]"></span>
                <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase">Global_Deployment</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight"
              >
                Scale Without <br />
                <span className="text-[#39FF14]">Boundaries.</span>
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/50 text-base leading-relaxed lowercase tracking-wider max-w-md"
            >
              From decentralized protocols to enterprise SaaS, I've deployed 100+ systems across global edge networks. Ensuring low-latency access and 99.9% uptime for users worldwide.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-[#39FF14]/30 pl-4 group">
                <div className="text-3xl font-bold text-white font-mono group-hover:text-[#39FF14] transition-colors">100+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#39FF14]/60 font-bold">Projects Live</div>
              </div>
              <div className="border-l-2 border-[#39FF14]/30 pl-4 group">
                <div className="text-3xl font-bold text-white font-mono group-hover:text-[#39FF14] transition-colors">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#39FF14]/60 font-bold">Countries reached</div>
              </div>
            </div>
          </div>

          {/* Right Side: Web 3.0 Decentralized Node Visualization */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-[420px]">
              
              {/* Central Ledger Core */}
              <div className="absolute inset-0 flex justify-center items-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border border-[#39FF14]/10 rounded-full flex justify-center items-center"
                >
                   {/* Dotted Inner Ring */}
                   <div className="w-48 h-48 border border-[#39FF14]/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                </motion.div>
                
                {/* Central Icon */}
                <div className="absolute p-6 bg-[#060B16] border border-[#39FF14]/40 rounded-full shadow-[0_0_30px_rgba(57,255,20,0.2)]">
                  <FiDatabase className="text-[#39FF14] text-4xl" />
                </div>
              </div>

              {/* Orbiting Web 3.0 Nodes */}
              {[
                { icon: <FiLock />, label: "Security", pos: "top-0 left-1/2 -translate-x-1/2" },
                { icon: <FiCpu />, label: "Compute", pos: "bottom-12 right-0" },
                { icon: <FiGlobe />, label: "Network", pos: "bottom-12 left-0" },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className={`absolute ${node.pos} flex flex-col items-center gap-2 z-10 group`}
                >
                  <div className="w-14 h-14 bg-[#060B16] border border-[#39FF14]/30 rounded-xl flex items-center justify-center text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.1)] group-hover:border-[#39FF14] group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all cursor-crosshair">
                    <div className="group-hover:scale-110 transition-transform">
                      {node.icon}
                    </div>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold group-hover:text-[#39FF14] transition-colors">{node.label}</span>
                  {/* Connection Beam */}
                  <div className="w-[1px] h-10 bg-gradient-to-t from-[#39FF14]/30 to-transparent"></div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Live-Feed Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 bg-black/80 backdrop-blur-md border border-[#39FF14]/20 p-5 rounded-sm font-mono text-[9px] space-y-2 z-20 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse shadow-[0_0_5px_#39FF14]"></span>
                <span className="text-white/40 uppercase">System:</span>
                <span className="text-[#39FF14]">OPERATIONAL</span>
              </div>
              <div className="flex justify-between gap-8 border-t border-white/5 pt-2">
                <span className="text-white/40 uppercase">Uptime:</span>
                <span className="text-[#39FF14]">99.98%</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-white/40 uppercase">Node_ID:</span>
                <span className="text-[#39FF14]">PK_782X</span>
              </div>
              <div className="flex justify-between gap-8 text-[8px] opacity-50 uppercase">
                <span className="text-white/40">Traffic:</span>
                <span className="text-[#39FF14]">AES_256</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle bottom divider line to match Hero */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent"></div>
    </section>
  );
}
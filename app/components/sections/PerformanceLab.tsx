'use client';

import { motion } from 'framer-motion';
import { FiZap, FiSearch, FiLayout, FiActivity } from 'react-icons/fi';

export function PerformanceLab() {
  const metrics = [
    { label: "Performance", value: "100", icon: <FiZap />, color: "#39FF14" },
    { label: "Accessibility", value: "100", icon: <FiLayout />, color: "#39FF14" },
    { label: "Best Practices", value: "100", icon: <FiActivity />, color: "#39FF14" },
    { label: "SEO Score", value: "100", icon: <FiSearch />, color: "#39FF14" },
  ];

  return (
    <section 
      id="performance" 
      className="bg-[#060B16] py-24 relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="h-[1px] w-12 bg-[#39FF14]/40"></span>
            <span className="text-[#39FF14]/60 text-xs tracking-[0.4em] uppercase">Performance_Lab</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Engineered for <span className="text-[#39FF14]">Velocity.</span>
          </h2>
          <p className="text-[#39FF14]/70 text-sm md:text-base leading-relaxed lowercase tracking-wider max-w-2xl">
            Beyond code, I optimize for core web vitals. My builds ensure lightning-fast load times, seamless user accessibility, and search engine dominance.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white/[0.03] border border-white/10 rounded-sm text-center group transition-all duration-300 hover:border-[#39FF14]/40"
            >
              <div className="text-white/20 mb-4 flex justify-center group-hover:text-[#39FF14] transition-colors">
                {m.icon}
              </div>
              
              {/* Circular Progress Visual */}
              <div className="relative inline-flex items-center justify-center mb-4">
                <svg className="w-20 h-20">
                  <circle
                    className="text-white/5"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
                    strokeWidth="4"
                    strokeDasharray={226}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="40"
                    cy="40"
                  />
                </svg>
                <span className="absolute text-xl font-bold text-white">{m.value}</span>
              </div>
              
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#39FF14]/60 font-bold">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Disclaimer Footer */}
        <div className="mt-12 flex items-center justify-center gap-4 opacity-30">
          <span className="text-[9px] tracking-widest uppercase">Server-Side Rendering (SSR) Active</span>
          <span className="w-1 h-1 rounded-full bg-[#39FF14]"></span>
          <span className="text-[9px] tracking-widest uppercase">Edge-Network Optimized</span>
          <span className="w-1 h-1 rounded-full bg-[#39FF14]"></span>
          <span className="text-[9px] tracking-widest uppercase">Lighthouse Certified</span>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { FiZap, FiSearch, FiLayout, FiActivity, FiTerminal } from 'react-icons/fi';

// ─── Constants ────────────────────────────────────────────────────────────────

// SVG circle maths:
// r=36 → circumference = 2πr = 226.2
// strokeDashoffset = circumference × (1 − value/100)
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 36; // ≈ 226.2

const METRICS = [
  { label: 'Performance',    value: 100, icon: <FiZap />      },
  { label: 'Accessibility',  value: 100, icon: <FiLayout />   },
  { label: 'Best Practices', value: 100, icon: <FiActivity /> },
  { label: 'SEO Score',      value: 100, icon: <FiSearch />   },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function PerformanceLab() {
  return (
    <section
      id="performance"
      className="bg-[#030712] py-28 relative overflow-hidden font-orbitron text-white"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
            <FiTerminal className="animate-pulse" aria-hidden="true" />
            <span>Performance_Lab</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for <span className="text-[#39FF14]">Velocity.</span>
          </h2>

          <p className="text-white/70 text-sm md:text-base font-sans leading-relaxed max-w-2xl">
            Beyond clean code, I optimize for core web vitals. Builds ensure lightning-fast load times, seamless user accessibility, and absolute search engine dominance.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((m, i) => {
            const offset = CIRCLE_CIRCUMFERENCE * (1 - m.value / 100);

            return (
              <motion.div
                key={m.label}
                whileHover={{ y: -5 }}
                className="relative p-6 bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl text-center group transition-all duration-300 hover:border-[#39FF14]/40 shadow-xl flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 mb-4 flex items-center justify-center text-white/50 group-hover:text-[#39FF14] group-hover:border-[#39FF14]/30 transition-all" aria-hidden="true">
                  {m.icon}
                </div>

                {/* Circular progress */}
                <div
                  className="relative inline-flex items-center justify-center mb-4"
                  role="meter"
                  aria-label={m.label}
                  aria-valuenow={m.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <svg className="w-20 h-20" viewBox="0 0 80 80">
                    {/* Track */}
                    <circle
                      className="text-white/10"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="36"
                      cx="40"
                      cy="40"
                    />
                    {/* Animated fill */}
                    <motion.circle
                      className="text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
                      strokeWidth="4"
                      strokeDasharray={CIRCLE_CIRCUMFERENCE}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="36"
                      cx="40"
                      cy="40"
                      initial={{ strokeDashoffset: CIRCLE_CIRCUMFERENCE }}
                      whileInView={{ strokeDashoffset: offset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }}
                      style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                    />
                  </svg>
                  <span className="absolute text-xl font-bold font-mono text-white">{m.value}</span>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-[#39FF14] font-bold font-mono">
                  {m.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 opacity-60">
          {['Server-Side Rendering (SSR) Active', 'Edge-Network Optimized', 'Lighthouse Certified'].map((item, idx, arr) => (
            <span key={item} className="flex items-center gap-6 text-[10px] tracking-widest uppercase font-mono text-white/70">
              {item}
              {idx < arr.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_6px_#39FF14]" aria-hidden="true" />}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
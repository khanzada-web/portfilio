'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const STATS = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Delivered', value: 40, suffix: '+' },
  { label: 'Remote Clients', value: 15, suffix: '+' },
] as const;

const TECH = [
  'Next.js 16',
  'React',
  'TypeScript',
  'Node.js',
  'Solidity',
  'AI Agents',
  'DevOps',
  'SaaS',
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const fade = reduce
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden font-sans bg-[#060B16]"
    >
      {/* Atmospheric background — brand green */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#39FF14]/10 blur-3xl" />
        <div className="absolute top-20 right-0 w-[420px] h-[420px] rounded-full bg-[#39FF14]/6 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-[#39FF14]/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#060B16_75%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div {...fade} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 backdrop-blur-md">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#39FF14] font-medium">
                Available for hire · Remote
              </span>
            </div>

            <header className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.02] font-orbitron">
                Mussawar Hayat
              </h1>
              <p className="text-lg md:text-xl text-[#39FF14] font-medium tracking-wide">
                Full-Stack Developer · Web3 Engineer · AI Systems Builder
              </p>
              <p className="text-base md:text-lg text-white/75 max-w-lg leading-relaxed">
                I build production-ready digital products, from frontend architecture and backend systems to blockchain infrastructure and deployment.
              </p>
            </header>

            {/* Extractable GEO/AEO answer block */}
            <div className="max-w-lg space-y-2 pt-3 border-t border-[#39FF14]/15">
              <h2 className="text-[11px] uppercase tracking-[0.22em] text-[#39FF14]/70">
                Who is Mussawar Hayat?
              </h2>
              <p className="text-sm text-white/65 leading-relaxed">
                Mussawar Hayat is a full-stack and Web3 developer based in Attock, Pakistan. He builds production Next.js, React, TypeScript, and Node.js applications and, when needed, Solidity smart contracts and AI-powered systems. Clients hire him when they want one engineer to own a project end-to-end. He works remotely with startups and product teams in North America and Europe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#39FF14] text-black font-semibold rounded-md transition-all hover:bg-white hover:shadow-[0_0_24px_rgba(57,255,20,0.3)]"
              >
                Let’s Work Together
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#39FF14]/40 text-white/90 font-semibold rounded-md hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-colors"
              >
                Explore My Work
              </Link>
            </div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative bg-[#0A1221]/80 border border-[#39FF14]/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#39FF14]/10 via-transparent to-[#39FF14]/5 pointer-events-none" />

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#39FF14]/60 mb-6">Engineering focus</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {TECH.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs text-white/80 border border-[#39FF14]/20 rounded-full bg-[#39FF14]/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-5">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/45">{stat.label}</span>
                    <span className="text-2xl md:text-3xl font-bold tabular-nums text-white font-orbitron">
                      <AnimatedCounter from={0} to={stat.value} duration={1.5} />
                      <span className="text-[#39FF14]">{stat.suffix}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#39FF14]/15 text-[12px] text-white/50 leading-relaxed">
                Remote freelance for North America &amp; Europe · EST / CET overlap
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#39FF14]/50 hover:text-[#39FF14] transition-colors text-[10px] uppercase tracking-[0.3em]"
          >
            <span>Scroll</span>
            <motion.span
              animate={reduce ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-[#39FF14]/40 to-transparent"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const STATS = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Delivered', value: 40, suffix: '+' },
  { label: 'Remote Clients', value: 15, suffix: '+' },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#060B16] flex items-center pt-32 pb-24 overflow-hidden font-orbitron text-[#39FF14]"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,#39FF14_0%,transparent_60%)] opacity-[0.04]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,#1e293b_0%,transparent_70%)] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#060B16_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#39FF14]/40 bg-[#39FF14]/8 rounded-full">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-bold text-[#39FF14]">
                Available for Hire <span className="mx-2 opacity-40">·</span> Full-Stack & Web3
              </span>
            </div>

            <header className="space-y-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Next.js 16 Full-Stack &amp; Web3 Developer
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-sans">
                Production-ready React, TypeScript, Node.js, and Solidity systems. One engineer owns the full stack — from UI and APIs to deployment and infrastructure.
              </p>
            </header>

            {/* Extractable GEO/AEO answer block */}
            <div className="max-w-xl space-y-3 pt-2 border-t border-[#39FF14]/15">
              <h2 className="text-xs uppercase tracking-[0.25em] text-[#39FF14]/70 font-sans">
                Who is Mussawar Hayat?
              </h2>
              <p className="text-sm md:text-base text-white/70 font-sans leading-relaxed">
                Mussawar Hayat is a full-stack and Web3 developer based in Attock, Pakistan. He builds production Next.js, React, TypeScript, and Node.js applications and, when needed, Solidity smart contracts and Bitcoin Ordinals tooling. Clients hire him when they want one engineer to own a project end-to-end. He works remotely with startups and product teams in North America and Europe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#39FF14] text-black font-bold rounded-sm transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(57,255,20,0.25)]"
              >
                Start a Project
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#39FF14]/50 text-white font-bold rounded-sm hover:bg-[#39FF14]/10 hover:border-[#39FF14] transition-colors"
              >
                View Projects
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-4 text-white/60 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors"
              >
                Read Blog
              </Link>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="lg:justify-self-end w-full max-w-sm">
            <div className="bg-[#0A1221]/80 border border-[#39FF14]/20 backdrop-blur-sm p-8 space-y-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#39FF14]/60">Selected metrics</p>
              <div className="space-y-7">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex items-end justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="text-3xl md:text-4xl font-bold tabular-nums text-white">
                        <AnimatedCounter from={0} to={stat.value} duration={1.5} />
                        <span className="text-[#39FF14]">{stat.suffix}</span>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-1">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 text-[11px] text-white/40 font-sans leading-relaxed">
                Remote freelance for North America &amp; Europe · EST / CET overlap
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/25 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}

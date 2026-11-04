'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const FONT = 'font-orbitron';

const STATS = [
  { label: 'Years of experience', value: 3, suffix: '+' },
  { label: 'Projects delivered', value: 40, suffix: '+' },
  { label: 'Remote clients', value: 15, suffix: '+' },
] as const;

const LAYERS = [
  {
    name: 'Interface',
    summary: 'Fast, accessible front ends that rank well and turn visitors into customers.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'API and logic',
    summary: 'Typed server code for authentication, payments and AI agents.',
    stack: ['Node.js', 'TypeScript', 'REST', 'LLM workflows'],
  },
  {
    name: 'Data',
    summary: 'Database schemas and migrations designed to scale with your product.',
    stack: ['PostgreSQL', 'Supabase', 'Prisma'],
  },
  {
    name: 'Smart contracts',
    summary: 'Solidity contracts, tested on public testnets and wired into your app.',
    stack: ['Solidity', 'EVM', 'Wallet integration'],
  },
  {
    name: 'Infrastructure',
    summary: 'Deployment, SSL, DNS and monitoring on servers you control.',
    stack: ['VPS', 'nginx', 'CI/CD', 'DNS'],
  },
] as const;

const CX = 220;
const HW = 170;
const HH = 85;
const T = 22;
const GAP = 62;
const TOP = 96;
const SPLIT = 26;
const LIFT = 10;
const VIEW_TOP = -(SPLIT + LIFT + 6);
const VIEW_BOTTOM = 484;
const STEP_MS = 2000;

const GREEN = '#39FF14';

function Slab({
  index,
  active,
  offset,
  reduce,
  onSelect,
}: {
  index: number;
  active: boolean;
  offset: number;
  reduce: boolean;
  onSelect: (i: number) => void;
}) {
  const cy = TOP + index * GAP;
  const top = `${CX},${cy - HH} ${CX + HW},${cy} ${CX},${cy + HH} ${CX - HW},${cy}`;
  const left = `${CX - HW},${cy} ${CX},${cy + HH} ${CX},${cy + HH + T} ${CX - HW},${cy + T}`;
  const right = `${CX},${cy + HH} ${CX + HW},${cy} ${CX + HW},${cy + T} ${CX},${cy + HH + T}`;
  const k = 0.55;
  const inner = `${CX},${cy - HH * k} ${CX + HW * k},${cy} ${CX},${cy + HH * k} ${CX - HW * k},${cy}`;

  return (
    <motion.g
      initial={reduce ? false : { opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: reduce ? 0 : (LAYERS.length - 1 - index) * 0.12, ease: 'easeOut' }}
    >
      <g
        onPointerEnter={(e) => e.pointerType === 'mouse' && onSelect(index)}
        onClick={() => onSelect(index)}
        style={{
          transform: `translateY(${offset}px)`,
          filter: active ? 'drop-shadow(0 0 18px rgba(57,255,20,0.45))' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
          transition: reduce ? 'none' : 'transform 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.45s',
          cursor: 'pointer',
        }}
      >
        <polygon points={left} fill={active ? 'rgba(57,255,20,0.12)' : '#070E1B'} stroke={active ? GREEN : 'rgba(255,255,255,0.14)'} strokeWidth="1" strokeLinejoin="round" />
        <polygon points={right} fill={active ? 'rgba(57,255,20,0.08)' : '#040812'} stroke={active ? GREEN : 'rgba(255,255,255,0.14)'} strokeWidth="1" strokeLinejoin="round" />
        <polygon points={top} fill={active ? '#0D2222' : '#080F1E'} stroke={active ? GREEN : 'rgba(255,255,255,0.2)'} strokeWidth="1.25" strokeLinejoin="round" />
        <polygon points={inner} fill="none" stroke={active ? 'rgba(57,255,20,0.65)' : 'rgba(255,255,255,0.06)'} strokeWidth="1" strokeLinejoin="round" />
      </g>
    </motion.g>
  );
}

export function Hero() {
  const reduce = !!useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const onScreen = useInView(sectionRef, { amount: 0.3 });

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);

  const running = !reduce && !paused && onScreen;

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % LAYERS.length);
    }, STEP_MS);
    return () => clearInterval(id);
  }, [running, tick]);

  const select = (i: number) => {
    setActive(i);
    setTick((t) => t + 1);
  };

  const onTabKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = LAYERS.length - 1;
    let next: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = active === last ? 0 : active + 1;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = active === 0 ? last : active - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`${FONT} relative flex items-center overflow-hidden bg-[#060B16] pt-28 pb-12 min-h-[100svh] lg:h-[100svh] lg:min-h-[720px] lg:pt-20 lg:pb-8`}
    >
      {/* Enhanced Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at 70% 45%, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 45%, black 0%, transparent 70%)',
          }}
        />
        <div className="absolute top-1/3 left-[-10%] w-[450px] h-[450px] rounded-full bg-[#39FF14]/[0.03] blur-[120px]" />
        <div className="absolute top-1/4 right-[2%] w-[580px] h-[580px] rounded-full bg-[#39FF14]/[0.07] blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Identity & Bio */}
          <div>
            <h1>
              <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 tracking-tight leading-[1.05] text-[clamp(2.2rem,3.8vw,3.6rem)]">
                Mussawar Hayat
              </span>
              <span className="sr-only"> — </span>
              <span className="mt-3 block text-xl md:text-2xl font-semibold tracking-wide text-[#39FF14] drop-shadow-[0_0_12px_rgba(57,255,20,0.25)]">
                React, React Native &amp; Web3 Full-Stack Developer
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg md:text-xl font-medium text-white/90 leading-snug">
              Hire a remote full-stack and Web3 engineer specializing in React, React Native, Next.js, Solidity, and production infrastructure for web and mobile applications
            </p>

            <p className="mt-3 max-w-2xl text-sm md:text-base font-normal text-white/60 leading-relaxed">
              Remote full-stack developer building scalable web and mobile apps—from React and Node.js to Solidity and VPS deployment
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <Link
                href="#contact"
                className="inline-flex h-[3.25rem] items-center justify-center rounded-lg bg-[#39FF14] px-8 text-[15px] font-bold tracking-wide text-black transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14]"
              >
                Start a project
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-[3.25rem] items-center justify-center rounded-lg border border-white/15 bg-white/[0.02] px-8 text-[15px] font-semibold tracking-wide text-white transition-all hover:border-[#39FF14]/60 hover:bg-[#39FF14]/[0.04] hover:text-[#39FF14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14]"
              >
                View portfolio
              </Link>
            </div>

            {/* Polished Stats Card */}
            <dl className="mt-9 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm shadow-xl">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse px-5 py-4">
                  <dt className="mt-1 text-xs font-medium leading-snug text-white/50">{stat.label}</dt>
                  <dd className="text-2xl font-bold tabular-nums text-white sm:text-3xl">
                    <AnimatedCounter from={0} to={stat.value} duration={1.5} />
                    <span className="text-[#39FF14]">{stat.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Column: Isometric Stack & Info Panel */}
          <div
            role="group"
            aria-label="The layers of a product I build"
            className="mx-auto w-full max-w-[480px]"
            onPointerEnter={(e) => e.pointerType === 'mouse' && setPaused(true)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <svg
              viewBox={`0 ${VIEW_TOP} 440 ${VIEW_BOTTOM - VIEW_TOP}`}
              className="mx-auto block w-auto max-w-full overflow-visible"
              style={{ height: 'min(42svh, 400px)' }}
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="hero-ground" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={GREEN} stopOpacity="0.22" />
                  <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
                </radialGradient>
              </defs>

              <ellipse cx={CX} cy={TOP + (LAYERS.length - 1) * GAP + HH + T + 10} rx="190" ry="24" fill="url(#hero-ground)" />
              <line x1={CX} y1={VIEW_TOP} x2={CX} y2={VIEW_BOTTOM} stroke="rgba(255,255,255,0.08)" strokeDasharray="3 6" />

              {LAYERS.map((_, n) => {
                const i = LAYERS.length - 1 - n;
                const offset = i < active ? -SPLIT : i === active ? -LIFT : 0;
                return <Slab key={i} index={i} active={active === i} offset={offset} reduce={reduce} onSelect={select} />;
              })}
            </svg>

            {/* Refactored Glassmorphism Panel */}
            <div
              aria-live={paused ? 'polite' : 'off'}
              className="relative mt-4 min-h-[11rem] overflow-hidden rounded-xl border border-white/10 border-l-[3px] border-l-[#39FF14] bg-gradient-to-r from-white/[0.04] to-white/[0.01] backdrop-blur-md p-5 shadow-2xl"
            >
              {LAYERS.map((l, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={l.name}
                    id={`layer-panel-${i}`}
                    role="tabpanel"
                    aria-labelledby={`layer-tab-${i}`}
                    hidden={!isActive}
                  >
                    <motion.div
                      key={isActive ? `on-${active}` : `off-${i}`}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-base font-bold text-[#39FF14] tracking-wide">{l.name}</p>
                        <span className="text-xs font-mono text-white/40">0{i + 1} / 0{LAYERS.length}</span>
                      </div>
                      <p className="mt-2 text-sm font-normal text-white/80 leading-relaxed">{l.summary}</p>
                      <ul className="mt-3.5 flex flex-wrap gap-1.5">
                        {l.stack.map((tech) => (
                          <li key={tech} className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-white/75 transition-colors hover:border-[#39FF14]/40 hover:text-white">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Layer Tabs */}
            <div
              role="tablist"
              aria-label="Product layers"
              onKeyDown={onTabKeyDown}
              className="mt-3.5 flex flex-wrap gap-x-4 gap-y-2"
            >
              {LAYERS.map((l, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={l.name}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    id={`layer-tab-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`layer-panel-${i}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(i)}
                    className={`relative pb-1.5 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14] ${
                      isActive ? 'text-[#39FF14]' : 'text-white/50 hover:text-white/90'
                    }`}
                  >
                    {l.name}
                    <span className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true" />
                    {isActive &&
                      (running ? (
                        <motion.span
                          key={`bar-${active}-${tick}`}
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 h-[2px] bg-[#39FF14]"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                        />
                      ) : (
                        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-[#39FF14]" />
                      ))}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

/* One typeface for the whole hero. To change it, edit this single class. */
const FONT = 'font-orbitron';

const STATS = [
  { label: 'Years of experience', value: 3, suffix: '+' },
  { label: 'Projects delivered', value: 40, suffix: '+' },
  { label: 'Remote clients', value: 15, suffix: '+' },
] as const;

/** Ordered top to bottom, the way a product is layered. */
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

/* Isometric slab geometry (SVG units) */
const CX = 220;
const HW = 170; // half width of a slab's top face
const HH = 85; // half height (2:1 isometric)
const T = 22; // slab thickness
const GAP = 62; // vertical distance between slabs
const TOP = 96; // centre y of the highest slab
const SPLIT = 26; // slabs above the active one move up by this much (exploded view)
const LIFT = 10; // the active slab rises slightly on its own
const VIEW_TOP = -(SPLIT + LIFT + 6); // headroom so the exploded stack is never clipped
const VIEW_BOTTOM = 484;
const STEP_MS = 2000; // time each layer stays highlighted

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
        /* Mouse hover previews a layer. Touch and pen select on tap only,
           so a tap never leaves the stack stuck in a "hovered" state. */
        onPointerEnter={(e) => e.pointerType === 'mouse' && onSelect(index)}
        onClick={() => onSelect(index)}
        style={{
          transform: `translateY(${offset}px)`,
          filter: active ? 'drop-shadow(0 0 14px rgba(57,255,20,0.35))' : 'none',
          transition: reduce ? 'none' : 'transform 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.45s',
          cursor: 'pointer',
        }}
      >
        <polygon points={left} fill={active ? 'rgba(57,255,20,0.10)' : '#08101D'} stroke={active ? GREEN : 'rgba(255,255,255,0.16)'} strokeWidth="1" strokeLinejoin="round" />
        <polygon points={right} fill={active ? 'rgba(57,255,20,0.06)' : '#050A14'} stroke={active ? GREEN : 'rgba(255,255,255,0.16)'} strokeWidth="1" strokeLinejoin="round" />
        <polygon points={top} fill={active ? '#0B1A1A' : '#0A1221'} stroke={active ? GREEN : 'rgba(255,255,255,0.22)'} strokeWidth="1" strokeLinejoin="round" />
        <polygon points={inner} fill="none" stroke={active ? 'rgba(57,255,20,0.55)' : 'rgba(255,255,255,0.08)'} strokeWidth="1" strokeLinejoin="round" />
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
  /* Bumped on every manual pick so the 2-second timer restarts from zero. */
  const [tick, setTick] = useState(0);

  /* Autoplay runs only while the hero is on screen and the visitor isn't interacting. */
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

  /* Arrow keys move between layers (standard tab-list behaviour). */
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
    /* Desktop: exactly one screen tall. Mobile: stacks and scrolls. */
    <section
      ref={sectionRef}
      id="home"
      className={`${FONT} relative flex items-center overflow-hidden bg-[#060B16] pt-24 pb-10 min-h-[100svh] lg:h-[100svh] lg:min-h-[700px] lg:pt-20 lg:pb-8`}
    >
      {/* Background: faint grid, one light source behind the stack */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 75% 45%, black 0%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 75% 45%, black 0%, transparent 65%)',
          }}
        />
        <div className="absolute top-1/4 right-[4%] w-[520px] h-[520px] rounded-full bg-[#39FF14]/[0.06] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* Left: identity */}
          <div>
            {/* One h1 carries both the name and the role. Visitors see a big name with a
                smaller role line; crawlers and AI assistants read the full sentence. */}
            <h1>
              {/* Capped so the name stays on one line in the left column and clears the navbar */}
              <span className="block font-bold text-white tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.5rem)]">
                Mussawar Hayat
              </span>
              <span className="sr-only"> — </span>
              <span className="mt-3 block text-2xl md:text-3xl font-semibold tracking-wide text-[#39FF14]">
                React, React Native &amp; Web3 Full-Stack Developer
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-xl md:text-2xl font-semibold text-white leading-snug">
              Hire a full-stack engineer who builds websites and mobile apps: React, React Native, Next.js, TypeScript, Solidity, and production infrastructure.
            </p>

            <p className="mt-3 max-w-2xl text-base font-normal text-white/70 leading-relaxed">
              Remote freelance developer for startups in North America and Europe. I deliver complete products — from React/React Native interfaces to Node.js APIs to Solidity smart contracts to VPS deployment.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="inline-flex h-[3.25rem] items-center justify-center rounded-md bg-[#39FF14] px-8 text-[15px] font-semibold tracking-wide text-black transition-all hover:bg-white hover:shadow-[0_0_24px_rgba(57,255,20,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14]"
              >
                Start a project
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-[3.25rem] items-center justify-center rounded-md border border-white/20 px-8 text-[15px] font-semibold tracking-wide text-white transition-colors hover:border-[#39FF14] hover:text-[#39FF14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14]"
              >
                View portfolio
              </Link>
            </div>

            {/* Stats as one bordered strip, so they read as a single unit */}
            <dl className="mt-8 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-lg border border-white/10 bg-white/[0.03]">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse px-5 py-4">
                  <dt className="mt-1.5 text-xs font-normal leading-snug text-white/60">{stat.label}</dt>
                  <dd className="text-2xl font-bold tabular-nums text-white sm:text-3xl">
                    <AnimatedCounter from={0} to={stat.value} duration={1.5} />
                    <span className="text-[#39FF14]">{stat.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: the five layers */}
          <div
            role="group"
            aria-label="The layers of a product I build"
            className="mx-auto w-full max-w-[480px]"
            /* Only a real mouse pauses on hover. Focus inside the group also pauses. */
            onPointerEnter={(e) => e.pointerType === 'mouse' && setPaused(true)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {/* Height follows the screen, so the stack never pushes the hero past one screen */}
            <svg
              viewBox={`0 ${VIEW_TOP} 440 ${VIEW_BOTTOM - VIEW_TOP}`}
              className="mx-auto block w-auto max-w-full overflow-visible"
              style={{ height: 'min(44svh, 420px)' }}
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="hero-ground" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={GREEN} stopOpacity="0.16" />
                  <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Light pooling under the stack grounds it */}
              <ellipse cx={CX} cy={TOP + (LAYERS.length - 1) * GAP + HH + T + 8} rx="190" ry="22" fill="url(#hero-ground)" />

              <line x1={CX} y1={VIEW_TOP} x2={CX} y2={VIEW_BOTTOM} stroke="rgba(255,255,255,0.10)" strokeDasharray="3 6" />

              {/* Painted bottom to top so upper slabs overlap lower ones.
                  Slabs above the active one lift away, so its front face opens up. */}
              {LAYERS.map((_, n) => {
                const i = LAYERS.length - 1 - n;
                const offset = i < active ? -SPLIT : i === active ? -LIFT : 0;
                return <Slab key={i} index={i} active={active === i} offset={offset} reduce={reduce} onSelect={select} />;
              })}
            </svg>

            {/* Fixed-height panel with an accent edge, so nothing jumps when the layer changes.
                Announced to screen readers only once the visitor takes control.
                All five layers stay in the HTML; only the active one is shown, so every
                technology remains readable by search engines and AI crawlers. */}
            <div
              aria-live={paused ? 'polite' : 'off'}
              className="relative mt-4 min-h-[10.5rem] overflow-hidden rounded-lg border border-white/10 border-l-2 border-l-[#39FF14] bg-white/[0.03] p-5"
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
                      <p className="text-base font-semibold text-[#39FF14]">{l.name}</p>
                      <p className="mt-2 text-sm font-normal text-white/80 leading-relaxed">{l.summary}</p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {l.stack.map((tech) => (
                          <li key={tech} className="rounded border border-white/10 px-2.5 py-1 text-xs font-normal text-white/70">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Layer tabs. The underline of the active tab is also the 2-second countdown. */}
            <div
              role="tablist"
              aria-label="Product layers"
              onKeyDown={onTabKeyDown}
              className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5"
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
                    className={`relative pb-1 text-[13px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14] ${
                      isActive ? 'text-[#39FF14]' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {l.name}
                    <span className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true" />
                    {isActive &&
                      (running ? (
                        <motion.span
                          key={`bar-${active}-${tick}`}
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 h-px bg-[#39FF14]"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                        />
                      ) : (
                        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#39FF14]" />
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
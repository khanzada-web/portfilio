'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useReducedMotion } from 'framer-motion';

const LAYERS = [
  { name: 'Interface', summary: 'Fast, accessible front ends that rank well and turn visitors into customers.', stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'API and logic', summary: 'Typed server code for authentication, payments and AI agents.', stack: ['Node.js', 'TypeScript', 'REST', 'LLM workflows'] },
  { name: 'Data', summary: 'Database schemas and migrations designed to scale with your product.', stack: ['PostgreSQL', 'Supabase', 'Prisma'] },
  { name: 'Smart contracts', summary: 'Solidity contracts, tested on public testnets and wired into your app.', stack: ['Solidity', 'EVM', 'Wallet integration'] },
  { name: 'Infrastructure', summary: 'Deployment, SSL, DNS and monitoring on servers you control.', stack: ['VPS', 'nginx', 'CI/CD', 'DNS'] },
] as const;

const CX = 220, HW = 170, HH = 85, T = 22, GAP = 62, TOP = 96, SPLIT = 26, LIFT = 10;
const VIEW_TOP = -(SPLIT + LIFT + 6);
const VIEW_BOTTOM = 484;
const STEP_MS = 2000;
const GREEN = '#39FF14';

function Slab({ index, active, offset, onSelect }: { index: number; active: boolean; offset: number; onSelect: (i: number) => void }) {
  const cy = TOP + index * GAP;
  const top = `${CX},${cy - HH} ${CX + HW},${cy} ${CX},${cy + HH} ${CX - HW},${cy}`;
  const left = `${CX - HW},${cy} ${CX},${cy + HH} ${CX},${cy + HH + T} ${CX - HW},${cy + T}`;
  const right = `${CX},${cy + HH} ${CX + HW},${cy} ${CX + HW},${cy + T} ${CX},${cy + HH + T}`;
  const k = 0.55;
  const inner = `${CX},${cy - HH * k} ${CX + HW * k},${cy} ${CX},${cy + HH * k} ${CX - HW * k},${cy}`;

  return (
    <g
      onPointerEnter={(e) => e.pointerType === 'mouse' && onSelect(index)}
      onClick={() => onSelect(index)}
      style={{
        transform: `translateY(${offset}px)`,
        filter: active ? 'drop-shadow(0 0 18px rgba(57,255,20,0.45))' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
        transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.45s',
        cursor: 'pointer',
      }}
    >
      <polygon points={left} fill={active ? 'rgba(57,255,20,0.12)' : '#070E1B'} stroke={active ? GREEN : 'rgba(255,255,255,0.14)'} strokeWidth="1" strokeLinejoin="round" />
      <polygon points={right} fill={active ? 'rgba(57,255,20,0.08)' : '#040812'} stroke={active ? GREEN : 'rgba(255,255,255,0.14)'} strokeWidth="1" strokeLinejoin="round" />
      <polygon points={top} fill={active ? '#0D2222' : '#080F1E'} stroke={active ? GREEN : 'rgba(255,255,255,0.2)'} strokeWidth="1.25" strokeLinejoin="round" />
      <polygon points={inner} fill="none" stroke={active ? 'rgba(57,255,20,0.65)' : 'rgba(255,255,255,0.06)'} strokeWidth="1" strokeLinejoin="round" />
    </g>
  );
}

export function HeroStack() {
  const reduce = !!useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % LAYERS.length), STEP_MS);
    return () => clearInterval(id);
  }, [reduce, paused]);

  const select = (i: number) => setActive(i);

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
          return <Slab key={i} index={i} active={active === i} offset={offset} onSelect={select} />;
        })}
      </svg>

      <div
        aria-live={paused ? 'polite' : 'off'}
        className="relative mt-4 min-h-[11rem] overflow-hidden rounded-xl border border-white/10 border-l-[3px] border-l-[#39FF14] bg-gradient-to-r from-white/[0.04] to-white/[0.01] backdrop-blur-md p-5 shadow-2xl"
      >
        {LAYERS.map((l, i) => (
          <div key={l.name} id={`layer-panel-${i}`} role="tabpanel" aria-labelledby={`layer-tab-${i}`} hidden={active !== i}>
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-[#39FF14] tracking-wide">{l.name}</p>
              <span className="text-xs font-mono text-white/40">0{i + 1} / 0{LAYERS.length}</span>
            </div>
            <p className="mt-2 text-sm font-normal text-white/80 leading-relaxed">{l.summary}</p>
            <ul className="mt-3.5 flex flex-wrap gap-1.5">
              {l.stack.map((tech) => (
                <li key={tech} className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-white/75">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div role="tablist" aria-label="Product layers" onKeyDown={onTabKeyDown} className="mt-3.5 flex flex-wrap gap-x-4 gap-y-2">
        {LAYERS.map((l, i) => (
          <button
            key={l.name}
            ref={(el) => { tabRefs.current[i] = el; }}
            id={`layer-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-controls={`layer-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => select(i)}
            className={`relative pb-1.5 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14] ${
              active === i ? 'text-[#39FF14]' : 'text-white/50 hover:text-white/90'
            }`}
          >
            {l.name}
          </button>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { AUTOPLAY_MS } from '@/app/lib/motion';

const LAYERS = [
  { name: 'Interface', stack: ['Next.js', 'React', 'TypeScript'] },
  { name: 'API and logic', stack: ['Node.js', 'REST', 'LLM workflows'] },
  { name: 'Data', stack: ['PostgreSQL', 'Supabase', 'Prisma'] },
  { name: 'Smart contracts', stack: ['Solidity', 'EVM', 'Wallets'] },
  { name: 'Infrastructure', stack: ['VPS', 'nginx', 'CI/CD'] },
] as const;

const CX = 220, HW = 170, HH = 85, T = 22, GAP = 62, TOP = 96, SPLIT = 26, LIFT = 10;
const VIEW_TOP = -(SPLIT + LIFT + 6);
const VIEW_BOTTOM = 484;
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
        filter: active ? 'drop-shadow(0 0 22px rgba(57,255,20,0.55))' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
        transition: 'transform var(--duration-base) var(--ease-brand), filter var(--duration-fast) var(--ease-brand)',
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

/**
 * The hero's isometric "product stack": five layers that lift in turn (auto-advancing,
 * paused on hover/focus/off-screen and for reduced motion), with a compact caption and
 * keyboard-operable tabs. Fills the height its container gives it.
 */
export function HeroStack({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused || !inView) return;
    const id = setInterval(() => setActive((i) => (i + 1) % LAYERS.length), AUTOPLAY_MS.heroStack);
    return () => clearInterval(id);
  }, [reduce, paused, inView]);

  const onTabKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = LAYERS.length - 1;
    let next: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = active === last ? 0 : active + 1;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = active === 0 ? last : active - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const layer = LAYERS[active];

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label="The layers of a product I build"
      className={`flex flex-col ${className}`}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <svg viewBox={`0 ${VIEW_TOP} 440 ${VIEW_BOTTOM - VIEW_TOP}`} className="mx-auto block min-h-0 w-full flex-1 overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="hero-ground" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={GREEN} stopOpacity="0.3" />
            <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx={CX} cy={TOP + (LAYERS.length - 1) * GAP + HH + T + 10} rx="210" ry="28" fill="url(#hero-ground)" />
        <line x1={CX} y1={VIEW_TOP} x2={CX} y2={VIEW_BOTTOM} stroke="rgba(255,255,255,0.08)" strokeDasharray="3 6" />
        {LAYERS.map((_, n) => {
          const i = LAYERS.length - 1 - n;
          const offset = i < active ? -SPLIT : i === active ? -LIFT : 0;
          return <Slab key={i} index={i} active={active === i} offset={offset} onSelect={setActive} />;
        })}
      </svg>

      <div id="hero-layer-panel" role="tabpanel" aria-labelledby={`hero-layer-tab-${active}`} className="mt-3 flex items-center justify-between gap-4">
        <p className="shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-neon">
          <span className="text-white/50">0{active + 1}</span> {layer.name}
        </p>
        <p className="min-w-0 truncate font-mono text-[11px] text-white/65">{layer.stack.join(' · ')}</p>
      </div>

      <div role="tablist" aria-label="Product layers" onKeyDown={onTabKeyDown} className="mt-3 grid grid-cols-5 gap-1.5">
        {LAYERS.map((l, i) => (
          <button
            key={l.name}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`hero-layer-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-controls="hero-layer-panel"
            aria-label={l.name}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className="group flex h-8 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon"
          >
            <span
              className={`block h-[3px] w-full origin-left rounded-full transition-[background-color,scale] duration-300 ${
                active === i ? 'bg-neon' : 'scale-x-[0.6] bg-white/20 group-hover:bg-white/45'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

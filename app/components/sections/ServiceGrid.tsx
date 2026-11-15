'use client';

import { m, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { STAGGER, VIEWPORT, fadeUp, staggerChildren } from '@/app/lib/motion';
import { scrambleTo } from '../motion/DecodeText';

export interface ServiceItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: readonly string[];
  category: string;
}

/** Hover length of the title decode, ms (shorter than the hero's load-time decode). */
const HOVER_DECODE_MS = 450;

const CORNER = 'absolute h-3 w-3 border-neon opacity-0 transition-[opacity,scale] duration-300 ease-[var(--ease-brand)] scale-150 group-hover:scale-100 group-hover:opacity-100';

function Tile({ item }: { item: ServiceItem }) {
  const realRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLSpanElement>(null);
  const cancel = useRef<(() => void) | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const reduce = useReducedMotion();

  /**
   * The real title stays in the layout (invisible) so the tile never changes size; the
   * scramble plays on an overlay of the same box, clipped to it. Re-hovering restarts cleanly.
   */
  const decode = () => {
    const real = realRef.current;
    const overlay = overlayRef.current;
    if (!real || !overlay || reduce) return;
    cancel.current?.();
    window.clearTimeout(timer.current);
    real.style.visibility = 'hidden';
    overlay.style.visibility = 'visible';
    cancel.current = scrambleTo(overlay, item.title, HOVER_DECODE_MS);
    timer.current = window.setTimeout(() => {
      overlay.style.visibility = 'hidden';
      real.style.visibility = '';
    }, HOVER_DECODE_MS + 30);
  };

  return (
    <m.li variants={fadeUp} className="group relative bg-ink p-7 md:p-9" onPointerEnter={(e) => e.pointerType === 'mouse' && decode()}>
      {/* Corner brackets lock on when hovered */}
      <span className={`${CORNER} left-2 top-2 border-l-2 border-t-2`} aria-hidden="true" />
      <span className={`${CORNER} right-2 top-2 border-r-2 border-t-2`} aria-hidden="true" />
      <span className={`${CORNER} bottom-2 left-2 border-b-2 border-l-2`} aria-hidden="true" />
      <span className={`${CORNER} bottom-2 right-2 border-b-2 border-r-2`} aria-hidden="true" />

      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em]">
        <span className="text-neon">{item.id}</span>
        <span className="text-white/50">{item.category}</span>
      </div>

      <div className="mt-10 text-2xl text-white/40 transition-colors duration-300 group-hover:text-neon" aria-hidden="true">
        {item.icon}
      </div>

      <h3 className="relative mt-5 text-lg font-black uppercase leading-tight tracking-tight text-white md:text-xl">
        <span ref={realRef}>{item.title}</span>
        <span ref={overlayRef} className="invisible absolute inset-0 overflow-hidden text-neon" aria-hidden="true">
          {item.title}
        </span>
      </h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">{item.description}</p>

      <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.2em] text-white/55" aria-label="Technologies">
        {item.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </m.li>
  );
}

/**
 * Services as a hairline 3×3 grid. One interaction: on hover the title decodes like a
 * terminal and neon corner brackets lock onto the tile.
 */
export function ServiceGrid({ items }: { items: readonly ServiceItem[] }) {
  return (
    <m.ul
      className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3"
      variants={staggerChildren(STAGGER.tight)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {items.map((item) => (
        <Tile key={item.id} item={item} />
      ))}
    </m.ul>
  );
}

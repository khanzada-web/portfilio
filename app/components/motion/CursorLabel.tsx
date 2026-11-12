'use client';

import { m, useMotionValue, useSpring } from 'framer-motion';
import { useState, type PointerEvent, type ReactNode } from 'react';
import { SPRING } from '@/app/lib/motion';

/**
 * Shows a small pill that follows the mouse over any descendant with `data-cursor="Label"`.
 * Hidden over links and buttons (they have their own affordance), except a card-wide `data-stretched` link, and for touch input.
 */
export function CursorLabel({ children, className }: { children: ReactNode; className?: string }) {
  const x = useSpring(useMotionValue(0), SPRING.cursor);
  const y = useSpring(useMotionValue(0), SPRING.cursor);
  const [label, setLabel] = useState<string | null>(null);

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !(event.target instanceof Element)) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    const overControl = event.target.closest('a:not([data-stretched]), button');
    const target = event.target.closest('[data-cursor]');
    setLabel(target && !overControl ? target.getAttribute('data-cursor') : null);
  };

  return (
    <div className={`relative ${className ?? ''}`} onPointerMove={onMove} onPointerLeave={() => setLabel(null)}>
      {children}
      <m.div className="pointer-events-none absolute left-0 top-0 z-20" style={{ x, y }} aria-hidden="true">
        <m.span
          className="block -translate-x-1/2 -translate-y-[140%] whitespace-nowrap rounded-full bg-neon px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]"
          initial={false}
          animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.6 }}
        >
          {label ?? ''}
        </m.span>
      </m.div>
    </div>
  );
}

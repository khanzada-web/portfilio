'use client';

import { m, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import type { PointerEvent, ReactNode } from 'react';
import { MAGNETIC_STRENGTH, SPRING } from '@/app/lib/motion';

/**
 * Pulls its child gently toward the pointer and springs back on leave.
 * Mouse only; touch and reduced-motion users get a static element.
 */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), SPRING.magnetic);
  const y = useSpring(useMotionValue(0), SPRING.magnetic);

  const onMove = (event: PointerEvent<HTMLSpanElement>) => {
    if (reduce || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * MAGNETIC_STRENGTH);
    y.set((event.clientY - rect.top - rect.height / 2) * MAGNETIC_STRENGTH);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.span className={`inline-flex ${className ?? ''}`} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </m.span>
  );
}

'use client';

import { useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/**
 * Wraps decoration that loops forever (e.g. the CSS `animate-marquee` band in Contact)
 * and pauses it while it is off-screen, via `[data-paused]` in globals.css.
 */
export function LoopWhenVisible({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className={className} data-paused={inView ? undefined : ''} aria-hidden="true">
      {children}
    </div>
  );
}

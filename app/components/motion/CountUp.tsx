'use client';

import { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { COUNT_UP_DURATION, VIEWPORT } from '@/app/lib/motion';

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from 0 to `to` once, when scrolled into view. Server HTML and no-JS visitors
 * get the final number; updates write straight to the DOM (no React re-renders).
 */
export function CountUp({ to, className }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const reduce = useReducedMotion();
  const started = useRef(false);

  // Before the number is reached, show 0 so the count-up starts from the bottom.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || started.current) return;
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight) el.textContent = '0';
  }, [reduce]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || started.current) return;
    started.current = true;
    if (reduce) {
      el.textContent = String(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (COUNT_UP_DURATION * 1000), 1);
      el.textContent = String(Math.round(to * easeOutCubic(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ''}`}>
      {to}
    </span>
  );
}

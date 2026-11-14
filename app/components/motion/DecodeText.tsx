'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { DECODE_MS } from '@/app/lib/motion';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*/<>';
const KEEP = new Set([' ', ',', '&', '/', '-', '.']);

/**
 * Writes random glyphs into `el` that resolve left to right into `text` over `ms`.
 * Returns a cancel function. Punctuation and spaces stay fixed so word shapes hold.
 */
export function scrambleTo(el: HTMLElement, text: string, ms: number = DECODE_MS, delay = 0): () => void {
  let frame = 0;
  const start = performance.now() + delay * 1000;
  const tick = (now: number) => {
    const progress = Math.min(Math.max((now - start) / ms, 0), 1);
    const revealed = Math.floor(progress * text.length);
    let out = '';
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      out += i < revealed || KEEP.has(ch) ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    el.textContent = out;
    if (progress < 1) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(frame);
    el.textContent = text;
  };
}

/**
 * Terminal-style decode on mount. Use on monospace text so the width never jitters.
 * The server HTML holds the final text; screen readers get it from a separate sr-only copy.
 */
export function DecodeText({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    return scrambleTo(el, text, DECODE_MS, delay);
  }, [text, delay, reduce]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}

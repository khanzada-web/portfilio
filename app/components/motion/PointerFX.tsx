'use client';

import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { HERO_FX } from '@/app/lib/motion';

const smoothstep = (t: number) => t * t * (3 - 2 * t);

/**
 * One pointer listener per section (hero, About…) that drives its interactions through
 * transforms and CSS variables:
 * - `[data-field-letter]`: letters lift and tint (`--glow`) by distance to the cursor
 * - `[data-xray]`: outlined words' flashlight (`--xray-x/y/r`), any number of them
 * - `[data-tilt]`: perspective tilt toward the cursor, plus `--hx/--hy` (-1…1) for its sheen
 * Mouse only, off for reduced motion. Positions are measured on enter/scroll/resize,
 * never inside the frame loop, so there is no layout thrashing.
 */
export function PointerFX({ targetId }: { targetId: string }) {
  const reduce = useReducedMotion();

  // For every visitor: pause the section's looping CSS (CTA beam, pass sway, status ping) off-screen.
  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) root.removeAttribute('data-paused');
      else root.setAttribute('data-paused', '');
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, [targetId]);

  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root || reduce || !window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches) return;

    const letters = Array.from(root.querySelectorAll<HTMLElement>('[data-field-letter]'));
    const xrays = Array.from(root.querySelectorAll<HTMLElement>('[data-xray]'));
    const tilt = root.querySelector<HTMLElement>('[data-tilt]');

    let centers: { x: number; y: number }[] = [];
    let xrayRects: DOMRect[] = [];
    let rootRect = root.getBoundingClientRect();
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;

    const measure = () => {
      centers = letters.map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      });
      xrayRects = xrays.map((el) => el.getBoundingClientRect());
      rootRect = root.getBoundingClientRect();
    };

    const render = () => {
      frame = 0;
      if (!pointer) return;
      const { x, y } = pointer;

      letters.forEach((el, i) => {
        const c = centers[i];
        if (!c) return;
        const strength = smoothstep(Math.max(0, 1 - Math.hypot(x - c.x, y - c.y) / HERO_FX.letterRadius));
        el.style.transform = `translate3d(0, ${(-strength * HERO_FX.letterLift).toFixed(2)}px, 0)`;
        el.style.setProperty('--glow', strength.toFixed(3));
      });

      xrays.forEach((el, i) => {
        const r = xrayRects[i];
        if (!r) return;
        el.style.setProperty('--xray-x', `${x - r.left}px`);
        el.style.setProperty('--xray-y', `${y - r.top}px`);
        el.style.setProperty('--xray-r', `${HERO_FX.xrayRadius}px`);
      });

      if (tilt) {
        const nx = ((x - rootRect.left) / rootRect.width) * 2 - 1;
        const ny = ((y - rootRect.top) / rootRect.height) * 2 - 1;
        tilt.style.transform = `perspective(1000px) rotateX(${(-ny * HERO_FX.tiltX).toFixed(2)}deg) rotateY(${(nx * HERO_FX.tiltY).toFixed(2)}deg)`;
        tilt.style.setProperty('--hx', nx.toFixed(3));
        tilt.style.setProperty('--hy', ny.toFixed(3));
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      if (!pointer) measure();
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onLeave = () => {
      pointer = null;
      letters.forEach((el) => {
        el.style.transform = '';
        el.style.setProperty('--glow', '0');
      });
      xrays.forEach((el) => el.style.setProperty('--xray-r', '0px'));
      if (tilt) {
        tilt.style.transform = '';
        tilt.style.setProperty('--hx', '0');
        tilt.style.setProperty('--hy', '0');
      }
    };

    root.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure, { passive: true });
    return () => {
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetId, reduce]);

  return null;
}

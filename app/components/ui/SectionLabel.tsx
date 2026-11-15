import type { ReactNode } from 'react';
import { Reveal } from '../motion/Reveal';

/**
 * Sub-section heading inside a page: a small mono "[01] Title ─────" line, matching the
 * index line of the page header. Renders a real heading (h2 by default) for document outline.
 */
export function SectionLabel({
  index,
  children,
  as: Heading = 'h2',
  className = 'mb-10',
}: {
  index?: string;
  children: ReactNode;
  as?: 'h2' | 'h3';
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Heading className="flex items-center gap-4 font-mono text-xs font-normal uppercase tracking-[0.3em] text-white/70">
        {index && <span className="text-neon">[{index}]</span>}
        <span>{children}</span>
        <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
      </Heading>
    </Reveal>
  );
}

import type { ReactNode } from 'react';
import { Stagger, StaggerItem } from '../motion/Stagger';

/** Masks one line so its content can slide up from below. */
function Line({ children }: { children: ReactNode }) {
  return <span className="block overflow-hidden pb-[0.08em]">{children}</span>;
}

interface EditorialHeadlineProps {
  /** Section number shown as "[02]". */
  index: string;
  eyebrow: string;
  /** Optional mono note at the right end of the index line. */
  aside?: string;
  /** First line, solid white. */
  solid: string;
  /** Second line, solid neon (optional, e.g. one-word project titles). */
  accent?: string;
  /** Intro paragraph: right column on desktop, under the heading on phones. */
  children?: ReactNode;
  id?: string;
  /** Heading level: `h2` for home sections (default), `h1` at the top of a page. */
  as?: 'h1' | 'h2';
}

/**
 * Section header: bold solid caps. An index line across the top, then the heading (a white line
 * and a neon line that slide up from behind masks) on the left, intro on the right.
 * Type hierarchy: only the hero name is giant; section headings use one fixed scale
 * (32px phones → 60px desktop).
 */
export function EditorialHeadline({ index, eyebrow, aside, solid, accent, children, id, as: Heading = 'h2' }: EditorialHeadlineProps) {
  // A page's h1 is usually its LCP element: animate it with CSS (paints on first frame, no
  // JS wait). Home-section h2s below the fold use the masked Framer reveal.
  const line = (content: string, className: string) =>
    Heading === 'h1' ? (
      <span className={`block animate-focus-in ${className}`}>{content}</span>
    ) : (
      <StaggerItem as="span" variant="maskUp" className={`block ${className}`}>
        {content}
      </StaggerItem>
    );

  return (
    <Stagger step={0.1}>
      <StaggerItem className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-white/65 md:mb-10">
        <span className="text-neon">[{index}]</span>
        <span>{eyebrow}</span>
        <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
        {aside && <span className="hidden text-white/55 md:inline">{aside}</span>}
      </StaggerItem>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
        <Heading
          id={id}
          className="text-[clamp(2rem,4.2vw,3.75rem)] font-black uppercase leading-[1] tracking-[-0.02em] text-white lg:col-span-7"
        >
          <Line>{line(solid, '')}</Line>
          {accent && (
            <>
              {' '}
              <Line>{line(accent, 'text-neon')}</Line>
            </>
          )}
        </Heading>

        {children && (
          <StaggerItem className="max-w-md font-sans text-[15px] leading-relaxed text-white/70 lg:col-span-5 lg:justify-self-end lg:pb-2 lg:text-base">
            {children}
          </StaggerItem>
        )}
      </div>
    </Stagger>
  );
}

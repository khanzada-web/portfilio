import type { ReactNode } from 'react';
import { MaskText, type TextSegment } from '../motion/MaskText';
import { Stagger, StaggerItem } from '../motion/Stagger';

const ALIGN = {
  left: 'text-left',
  center: 'text-center mx-auto',
  responsive: 'text-center md:text-left',
} as const;

interface SectionHeadingProps {
  eyebrow: string;
  /** Small icon before the eyebrow; defaults to a neon dot. */
  icon?: ReactNode;
  title: readonly TextSegment[];
  description?: ReactNode;
  align?: keyof typeof ALIGN;
  id?: string;
  className?: string;
  titleClassName?: string;
}

/**
 * The one section header used across the home page: eyebrow badge, masked word-by-word
 * title, and intro paragraph, revealed as a single staggered group.
 */
export function SectionHeading({
  eyebrow,
  icon,
  title,
  description,
  align = 'left',
  id,
  className = 'mb-16 md:mb-20',
  titleClassName = '',
}: SectionHeadingProps) {
  return (
    <Stagger className={`${ALIGN[align]} ${align === 'center' ? 'max-w-3xl' : ''} ${className}`}>
      <StaggerItem className="mb-4 inline-flex items-center gap-2 rounded-md border border-neon/40 bg-neon/5 px-3.5 py-1.5 text-xs uppercase tracking-[0.25em] text-neon">
        {icon ?? <span className="h-1.5 w-1.5 rounded-full bg-neon" aria-hidden="true" />}
        <span>{eyebrow}</span>
      </StaggerItem>
      <h2 id={id} className={`text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl ${titleClassName}`}>
        <MaskText segments={title} trigger={false} />
      </h2>
      {description && (
        <StaggerItem
          className={`mt-4 max-w-2xl font-sans text-sm leading-relaxed text-white/75 md:text-base ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <p>{description}</p>
        </StaggerItem>
      )}
    </Stagger>
  );
}

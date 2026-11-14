import Link from 'next/link';
import { FiArrowUpRight, FiGithub, FiGlobe } from 'react-icons/fi';
import { PROJECTS, getFlagshipProjects, type Project } from '@/app/lib/projects';
import { Reveal } from '../motion/Reveal';
import { EditorialHeadline } from '../ui/EditorialHeadline';
import { SectionGlow } from '../ui/SectionGlow';

const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer' } as const;
const LABEL = 'font-mono text-[10px] uppercase tracking-[0.3em] text-white/55';

/** Single-line preview (case studies may use \n\n paragraphs). */
const preview = (text: string) => text.replace(/\s+/g, ' ').trim();

/**
 * One project in the stack. Each card is `position: sticky` with a slightly lower top than the
 * one before, so scrolling deals the cards onto a pile, the next one covering the last.
 * Pure CSS: no scroll listeners.
 */
function StackCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const number = String(index + 1).padStart(2, '0');
  return (
    <li className="sticky" style={{ top: `calc(6.5rem + ${index} * 1.1rem)` }}>
      <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel p-7 shadow-[0_-24px_60px_-24px_rgba(0,0,0,0.9)] md:p-12">
        {/* Giant outlined index, bottom right */}
        <span
          className="pointer-events-none absolute -bottom-10 -right-4 select-none text-[clamp(8rem,18vw,15rem)] font-black leading-none text-transparent [-webkit-text-stroke:1px_rgb(57_255_20/0.16)]"
          aria-hidden="true"
        >
          {number}
        </span>

        <div className="relative flex items-center justify-between gap-4">
          <span className={LABEL}>
            <span className="text-neon">Project {number}</span> / {String(total).padStart(2, '0')}
          </span>
          <span className={LABEL}>{project.category}</span>
        </div>

        <div className="relative mt-10 grid grid-cols-1 gap-10 md:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-[clamp(1.6rem,3vw,2.75rem)] font-black uppercase leading-[0.98] tracking-[-0.02em] text-white">
              {project.title}
            </h3>
            <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-white/70 md:text-base">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50" aria-label="Technologies used">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {(project.problem || project.results) && (
            <dl className="space-y-6 border-white/10 lg:col-span-5 lg:border-l lg:pl-10">
              {project.problem && (
                <div>
                  <dt className={LABEL}>The problem</dt>
                  <dd className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-white/70">{preview(project.problem)}</dd>
                </div>
              )}
              {project.results && (
                <div>
                  <dt className={LABEL}>Key results</dt>
                  <dd className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-white/70">{preview(project.results)}</dd>
                </div>
              )}
            </dl>
          )}
        </div>

        <div className="relative mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 md:mt-14">
          <Link href={`/portfolio/${project.slug}`} className="group/cs inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neon">
            <span className="link-underline">Read case study</span>
            <FiArrowUpRight className="transition-transform duration-300 group-hover/cs:rotate-45" aria-hidden="true" />
          </Link>
          {project.link && (
            <a href={project.link} {...EXTERNAL} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-neon">
              <FiGlobe aria-hidden="true" />
              <span className="link-underline">Live demo</span>
            </a>
          )}
          {project.github && (
            <a href={project.github} {...EXTERNAL} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-neon">
              <FiGithub aria-hidden="true" />
              <span className="link-underline">Source</span>
            </a>
          )}
        </div>
      </article>
    </li>
  );
}

/** Selected work: flagship projects dealt onto a pile as you scroll, then a link to the archive. */
export default function Portfolio() {
  const flagship = getFlagshipProjects();

  return (
    <section id="portfolio" className="font-orbitron relative overflow-clip bg-ink px-[var(--page-pad)] py-28 text-white md:py-40">
      <SectionGlow className="left-1/4 top-20 h-[520px] w-[760px]" />

      <div className="relative z-10">
        <EditorialHeadline
          index="04"
          eyebrow="Selected work"
          aside={`${flagship.length} flagship builds`}
          solid="Featured"
          accent="Projects"
        >
          <p>
            Selected full-stack and Web3 work — featuring real-world problem breakdowns, technical architectures, and measured
            deployment outcomes.
          </p>
        </EditorialHeadline>

        <ol className="mt-16 space-y-10 md:mt-24">
          {flagship.map((project, i) => (
            <StackCard key={project.slug} project={project} index={i} total={flagship.length} />
          ))}
        </ol>

        <Reveal className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center">
          <p className="font-sans text-base text-white/70">
            {PROJECTS.length - flagship.length} more builds in the archive: DeFi, NFT, utilities, backend and DevOps.
          </p>
          <Link href="/portfolio" className="btn-ghost h-12 rounded-full px-7 text-xs">
            All projects ({PROJECTS.length})
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

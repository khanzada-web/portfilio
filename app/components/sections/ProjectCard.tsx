import Link from 'next/link';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import type { Project } from '@/app/lib/projects';

const EXTERNAL_LINK_PROPS = { target: '_blank', rel: 'noopener noreferrer' } as const;

/** Single-line preview for cards (case studies may use \n\n paragraphs). */
const previewText = (text: string) => text.replace(/\s+/g, ' ').trim();

/** Portfolio card. The title link stretches over the whole card; action buttons sit above it. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-cursor="View case study"
      data-spotlight=""
      className="card spotlight group relative flex h-full min-h-[440px] flex-col overflow-hidden p-8 hover:-translate-y-1 md:p-10"
    >
      <div className="flex-grow">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neon">
            {project.flagship ? 'Flagship_Build' : 'Archive_Module'}
          </span>
        </div>

        <h3 className="mb-4 text-xl font-bold uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-neon md:text-2xl">
          <Link
            href={`/portfolio/${project.slug}`}
            data-stretched=""
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-xl focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-neon"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mb-6 line-clamp-4 font-sans text-sm leading-relaxed text-white/75">{project.description}</p>

        {project.flagship && project.problem && (
          <div className="mb-6 space-y-3 border-t border-white/10 pt-4 font-sans text-sm">
            <div>
              <h4 className="mb-1 font-mono text-[10px] uppercase tracking-widest text-neon">The Problem</h4>
              <p className="line-clamp-2 text-xs text-white/70">{previewText(project.problem)}</p>
            </div>
            {project.architecture && (
              <div>
                <h4 className="mb-1 font-mono text-[10px] uppercase tracking-widest text-neon">Tech Stack &amp; Architecture</h4>
                <p className="line-clamp-2 text-xs text-white/70">{previewText(project.architecture)}</p>
              </div>
            )}
            {project.results && (
              <div>
                <h4 className="mb-1 font-mono text-[10px] uppercase tracking-widest text-neon">Key Results</h4>
                <p className="line-clamp-2 text-xs text-white/70">{previewText(project.results)}</p>
              </div>
            )}
          </div>
        )}

        <ul className="mb-8 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="tag font-sans">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-auto grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
        {project.link ? (
          <a
            href={project.link}
            {...EXTERNAL_LINK_PROPS}
            aria-label={`View live demo of ${project.title}`}
            className="btn-neon gap-2 py-3 text-[10px]"
          >
            <FiGlobe aria-hidden="true" /> Live Demo
          </a>
        ) : (
          <span className="flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] py-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <FiGlobe aria-hidden="true" /> Private
          </span>
        )}

        {project.github ? (
          <a
            href={project.github}
            {...EXTERNAL_LINK_PROPS}
            aria-label={`View source code of ${project.title} on GitHub`}
            className="btn-ghost gap-2 py-3 text-[10px]"
          >
            <FiGithub aria-hidden="true" /> Source
          </a>
        ) : (
          <Link href={`/portfolio/${project.slug}`} className="btn-ghost py-3 text-[10px]" aria-label={`Read the ${project.title} case study`}>
            Case Study
          </Link>
        )}
      </div>
    </article>
  );
}

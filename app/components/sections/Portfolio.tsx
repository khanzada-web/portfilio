'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiTerminal, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { getFlagshipProjects, getArchiveProjects, type Project } from '@/app/lib/projects';

const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

function ProjectCard({
  project,
  showCaseStudyLink = false,
}: {
  project: Project;
  showCaseStudyLink?: boolean;
}) {
  return (
    <article className="bg-[#0A1221] group relative p-8 md:p-10 flex flex-col min-h-[420px] hover:bg-[#39FF14]/[0.05] transition-all duration-500 overflow-hidden border border-white/10">
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-[#39FF14] shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
          <span className="text-[10px] font-bold text-[#39FF14] uppercase tracking-tighter">
            {project.flagship ? 'Flagship' : 'Archive'}
          </span>
        </div>

        <h3 className="text-2xl font-black text-white mb-4 uppercase leading-tight group-hover:text-[#39FF14] transition-colors">
          {showCaseStudyLink ? (
            <Link href={`/portfolio/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-white/80 text-sm font-sans leading-relaxed mb-6 line-clamp-4">
          {project.description}
        </p>

        {project.flagship && project.problem && (
          <div className="space-y-3 mb-6 text-sm font-sans">
            <div>
              <h4 className="text-[#39FF14] text-xs uppercase tracking-widest mb-1">The Problem</h4>
              <p className="text-white/70 line-clamp-2">{project.problem}</p>
            </div>
            {project.architecture && (
              <div>
                <h4 className="text-[#39FF14] text-xs uppercase tracking-widest mb-1">
                  Tech Stack & Architecture
                </h4>
                <p className="text-white/70 line-clamp-2">{project.architecture}</p>
              </div>
            )}
            {project.results && (
              <div>
                <h4 className="text-[#39FF14] text-xs uppercase tracking-widest mb-1">Key Results</h4>
                <p className="text-white/70 line-clamp-2">{project.results}</p>
              </div>
            )}
          </div>
        )}

        <ul className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li
              key={t}
              className="text-[9px] text-[#39FF14] border border-[#39FF14]/40 bg-[#39FF14]/5 px-2 py-1 uppercase font-bold tracking-tighter"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-auto">
        {project.link ? (
          <a
            href={project.link}
            {...EXTERNAL_LINK_PROPS}
            aria-label={`View live demo of ${project.title}`}
            className="flex items-center justify-center gap-2 py-3 bg-[#39FF14] text-black text-[10px] font-black uppercase hover:bg-white transition-all"
          >
            <FiGlobe aria-hidden="true" /> Live Demo
          </a>
        ) : (
          <span className="flex items-center justify-center gap-2 py-3 bg-white/5 text-white/20 text-[10px] font-black uppercase cursor-not-allowed border border-white/10">
            <FiGlobe aria-hidden="true" /> Private
          </span>
        )}

        {project.github ? (
          <a
            href={project.github}
            {...EXTERNAL_LINK_PROPS}
            aria-label={`View source code of ${project.title} on GitHub`}
            className="flex items-center justify-center gap-2 py-3 bg-white/10 text-white text-[10px] font-black border border-white/20 hover:bg-white/20 transition-all"
          >
            <FiGithub aria-hidden="true" /> Source
          </a>
        ) : showCaseStudyLink ? (
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex items-center justify-center gap-2 py-3 bg-white/10 text-white text-[10px] font-black border border-white/20 hover:bg-white/20 transition-all"
          >
            Case Study
          </Link>
        ) : (
          <span className="flex items-center justify-center gap-2 py-3 bg-white/5 text-white/20 text-[10px] font-black border border-white/10 cursor-not-allowed">
            <FiGithub aria-hidden="true" /> Private
          </span>
        )}
      </div>
    </article>
  );
}

const Portfolio = () => {
  const [showArchive, setShowArchive] = useState(false);
  const flagship = getFlagshipProjects();
  const archive = getArchiveProjects();

  return (
    <section id="portfolio" className="py-32 bg-[#060B16] text-[#39FF14] font-orbitron">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 text-[#39FF14] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              <FiTerminal className="animate-pulse" aria-hidden="true" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
              Featured Projects
            </h2>
            <p className="mt-4 text-white/60 font-sans text-sm max-w-2xl">
              Selected full-stack and Web3 work by Mussawar Hayat — case studies with problem,
              architecture, and outcomes. Full archive available below and on the portfolio page.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-[11px] uppercase tracking-widest border border-[#39FF14]/40 px-5 py-3 hover:bg-[#39FF14]/10 transition-colors"
          >
            All projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {flagship.map((project) => (
            <ProjectCard key={project.slug} project={project} showCaseStudyLink />
          ))}
        </div>

        <div className="border border-white/10 bg-[#0A1221]/50">
          <button
            type="button"
            onClick={() => setShowArchive((v) => !v)}
            aria-expanded={showArchive}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-sm uppercase tracking-widest text-white font-bold">
              View more projects ({archive.length})
            </span>
            <FiChevronDown
              className={`text-[#39FF14] transition-transform ${showArchive ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          <AnimatePresence>
            {showArchive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border-t border-white/10">
                  {archive.map((project) => (
                    <ProjectCard key={project.slug} project={project} showCaseStudyLink />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

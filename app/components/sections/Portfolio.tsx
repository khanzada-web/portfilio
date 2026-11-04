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

/** Single-line preview for cards (case studies may use \n\n paragraphs). */
function previewText(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

function ProjectCard({
  project,
  showCaseStudyLink = false,
}: {
  project: Project;
  showCaseStudyLink?: boolean;
}) {
  return (
    <article className="bg-[#0B132B]/60 backdrop-blur-md group relative p-8 md:p-10 flex flex-col min-h-[440px] hover:border-[#39FF14]/40 transition-all duration-300 overflow-hidden border border-white/10 rounded-xl shadow-xl">
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
          <span className="text-[10px] font-mono font-bold text-[#39FF14] uppercase tracking-wider">
            {project.flagship ? 'Flagship_Build' : 'Archive_Module'}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase leading-tight group-hover:text-[#39FF14] transition-colors tracking-tight">
          {showCaseStudyLink ? (
            <Link href={`/portfolio/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-white/70 text-sm font-sans leading-relaxed mb-6 line-clamp-4">
          {project.description}
        </p>

        {project.flagship && project.problem && (
          <div className="space-y-3 mb-6 text-sm font-sans border-t border-white/10 pt-4">
            <div>
              <h4 className="text-[#39FF14] text-[10px] uppercase font-mono tracking-widest mb-1">The Problem</h4>
              <p className="text-white/60 text-xs line-clamp-2">{previewText(project.problem)}</p>
            </div>
            {project.architecture && (
              <div>
                <h4 className="text-[#39FF14] text-[10px] uppercase font-mono tracking-widest mb-1">
                  Tech Stack & Architecture
                </h4>
                <p className="text-white/60 text-xs line-clamp-2">{previewText(project.architecture)}</p>
              </div>
            )}
            {project.results && (
              <div>
                <h4 className="text-[#39FF14] text-[10px] uppercase font-mono tracking-widest mb-1">Key Results</h4>
                <p className="text-white/60 text-xs line-clamp-2">{previewText(project.results)}</p>
              </div>
            )}
          </div>
        )}

        <ul className="flex flex-wrap gap-1.5 mb-8" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li
              key={t}
              className="text-[10px] text-white/80 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md font-sans"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-5 border-t border-white/10 mt-auto">
        {project.link ? (
          <a
            href={project.link}
            {...EXTERNAL_LINK_PROPS}
            aria-label={`View live demo of ${project.title}`}
            className="flex items-center justify-center gap-2 py-3 bg-[#39FF14] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all"
          >
            <FiGlobe aria-hidden="true" /> Live Demo
          </a>
        ) : (
          <span className="flex items-center justify-center gap-2 py-3 bg-white/[0.02] text-white/20 rounded-lg text-[10px] font-bold uppercase tracking-widest cursor-not-allowed border border-white/10">
            <FiGlobe aria-hidden="true" /> Private
          </span>
        )}

        {project.github ? (
          <a
            href={project.github}
            {...EXTERNAL_LINK_PROPS}
            aria-label={`View source code of ${project.title} on GitHub`}
            className="flex items-center justify-center gap-2 py-3 border border-white/15 bg-white/[0.02] text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all"
          >
            <FiGithub aria-hidden="true" /> Source
          </a>
        ) : showCaseStudyLink ? (
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex items-center justify-center gap-2 py-3 border border-white/15 bg-white/[0.02] text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all"
          >
            Case Study
          </Link>
        ) : (
          <span className="flex items-center justify-center gap-2 py-3 border border-white/10 bg-white/[0.02] text-white/20 rounded-lg text-[10px] font-bold uppercase tracking-widest cursor-not-allowed">
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
    <section id="portfolio" className="py-28 bg-[#030712] text-white font-orbitron relative overflow-hidden">
      
      {/* Ambient Background Gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 mb-4 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
              <FiTerminal className="animate-pulse" aria-hidden="true" />
              <span>Portfolio.sys</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Projects
            </h2>
            <p className="mt-4 text-white/70 font-sans text-sm md:text-base max-w-2xl leading-relaxed">
              Selected full-stack and Web3 work — featuring real-world problem breakdowns, technical architectures, and measured deployment outcomes.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="px-6 py-3 border border-white/15 bg-white/[0.02] rounded-lg text-xs font-bold uppercase tracking-widest text-white hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all"
          >
            All projects →
          </Link>
        </div>

        {/* Flagship Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {flagship.map((project) => (
            <ProjectCard key={project.slug} project={project} showCaseStudyLink />
          ))}
        </div>

        {/* Archive Accordion Container */}
        <div className="border border-white/10 bg-[#0B132B]/60 backdrop-blur-md rounded-xl overflow-hidden shadow-xl">
          <button
            type="button"
            onClick={() => setShowArchive((v) => !v)}
            aria-expanded={showArchive}
            className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              View more projects ({archive.length})
            </span>
            <FiChevronDown
              className={`text-[#39FF14] transition-transform duration-300 ${showArchive ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          <AnimatePresence initial={false}>
            {showArchive && (
              <motion.div
                key="archive-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 border-t border-white/10 bg-black/20">
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
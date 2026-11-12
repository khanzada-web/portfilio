'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import type { Project } from '@/app/lib/projects';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { ProjectCard } from './ProjectCard';

/** "View more projects" disclosure. Cards fade up when opened; no height animation. */
export function ArchiveProjects({ projects }: { projects: readonly Project[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card overflow-hidden hover:border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="archive-projects"
        className="flex w-full items-center justify-between px-8 py-5 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neon"
      >
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">View more projects ({projects.length})</span>
        <FiChevronDown className={`text-neon transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      <div id="archive-projects" hidden={!open}>
        {open && (
          <Stagger className="grid grid-cols-1 gap-6 border-t border-white/10 bg-black/20 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </div>
  );
}

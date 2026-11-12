import Link from 'next/link';
import { FiTerminal } from 'react-icons/fi';
import { getArchiveProjects, getFlagshipProjects } from '@/app/lib/projects';
import { CursorLabel } from '../motion/CursorLabel';
import { Reveal } from '../motion/Reveal';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';
import { ArchiveProjects } from './ArchiveProjects';
import { ProjectCard } from './ProjectCard';

export default function Portfolio() {
  const flagship = getFlagshipProjects();
  const archive = getArchiveProjects();

  return (
    <section id="portfolio" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
          <SectionHeading
            className=""
            eyebrow="Portfolio.sys"
            icon={<FiTerminal aria-hidden="true" />}
            title={[{ text: 'Featured Projects' }]}
            description="Selected full-stack and Web3 work — featuring real-world problem breakdowns, technical architectures, and measured deployment outcomes."
          />
          <Reveal variant="fadeIn" delay={0.3}>
            <Link href="/portfolio" className="btn-ghost px-6 py-3 text-xs">
              All projects →
            </Link>
          </Reveal>
        </div>

        {/* Flagship work wipes in from the bottom edge; a label follows the cursor over each card */}
        <CursorLabel className="mb-12">
          <Stagger step={0.12} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {flagship.map((project) => (
              <StaggerItem key={project.slug} variant="clipUp">
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        </CursorLabel>

        <ArchiveProjects projects={archive} />
      </div>
    </section>
  );
}

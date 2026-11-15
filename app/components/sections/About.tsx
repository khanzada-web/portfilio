import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { CountUp } from '../motion/CountUp';
import { Reveal } from '../motion/Reveal';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { EditorialHeadline } from '../ui/EditorialHeadline';
import { SectionGlow } from '../ui/SectionGlow';

/** Profile facts (all from existing site copy). */
const PROFILE = [
  { label: 'Role', value: 'Full-Stack & Web3 Engineer' },
  { label: 'Based in', value: 'Attock, Pakistan' },
  { label: 'Clients', value: 'Startups in North America & Europe' },
  { label: 'Time zones', value: 'EST / CET coverage' },
] as const;

const PROOF = [
  { value: 3, suffix: '+', label: 'Years of experience' },
  { value: 40, suffix: '+', label: 'Projects delivered' },
  { value: 15, suffix: '+', label: 'Global clients' },
  { value: 24, prefix: '<', suffix: 'h', label: 'Response target' },
] as const;

const LABEL = 'font-mono text-xs uppercase tracking-[0.3em] text-white/55';
const CORNER = 'absolute h-5 w-5 border-neon';

/**
 * About as a portrait-led profile: "One engineer, end-to-end" headline with the intro beside
 * it, a large portrait (grayscale → color on hover) next to a short bio and facts, then
 * the proof numbers. All copy comes from the existing site.
 */
export default function About() {
  return (
    <section id="about" className="font-orbitron relative overflow-clip bg-ink px-[var(--page-pad)] py-28 text-white md:py-40">
      <SectionGlow className="left-0 top-0 h-[520px] w-[820px]" />

      <div className="relative z-10">
        <EditorialHeadline index="02" eyebrow="About" aside="Attock, PK · Working worldwide" solid="One engineer," accent="End-to-end.">
          <p>
            Mussawar Hayat is a versatile Full-Stack and Web3 Software Engineer with a track record of delivering robust web, mobile,
            and decentralized applications for international startups.
          </p>
        </EditorialHeadline>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal variant="clipUp">
            <figure className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/my-pic.jpeg"
                alt="Mussawar Hayat, Full-Stack and Web3 Software Engineer"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_30%] grayscale transition-[filter,scale] duration-700 ease-[var(--ease-brand)] group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" aria-hidden="true" />
              <span className={`${CORNER} left-4 top-4 border-l-2 border-t-2`} aria-hidden="true" />
              <span className={`${CORNER} right-4 top-4 border-r-2 border-t-2`} aria-hidden="true" />
              <span className={`${CORNER} bottom-4 left-4 border-b-2 border-l-2`} aria-hidden="true" />
              <span className={`${CORNER} bottom-4 right-4 border-b-2 border-r-2`} aria-hidden="true" />
              <figcaption className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-4">
                <span>
                  <span className="block text-lg font-black uppercase tracking-tight text-white">Mussawar Hayat</span>
                  <span className="mt-1 block font-mono text-xs uppercase tracking-[0.25em] text-neon">Full-Stack & Web3 Engineer</span>
                </span>
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
                  Available
                </span>
              </figcaption>
            </figure>
            </Reveal>
          </div>

          {/* Bio, facts, links */}
          <Stagger className="flex flex-col justify-center lg:col-span-7">
            <StaggerItem>
              <p className={LABEL}>
                <span className="text-neon">Profile</span>
              </p>
              <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/85 md:text-xl">
                Remote full-stack developer building scalable web and mobile apps—from React and Node.js to Solidity and VPS
                deployment.
              </p>
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-white/65">
                Ideal for early-stage teams and growing startups seeking a dedicated owner who can drive a product from concept to
                production independently.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-10">
              <dl className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2">
                {PROFILE.map((item, i) => (
                  <div key={item.label} className={`border-b border-white/10 py-5 ${i % 2 === 1 ? 'sm:border-l sm:pl-6' : 'sm:pr-6'}`}>
                    <dt className={LABEL}>{item.label}</dt>
                    <dd className="mt-2 font-sans text-sm text-white/85">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>

            <StaggerItem className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/about" className="group/more inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neon">
                <span className="link-underline">More about me</span>
                <FiArrowUpRight className="transition-transform duration-300 group-hover/more:rotate-45" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="group/start inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-neon"
              >
                <span className="link-underline">Start a project</span>
                <FiArrowRight className="transition-transform duration-300 group-hover/start:translate-x-1" aria-hidden="true" />
              </Link>
            </StaggerItem>
          </Stagger>
        </div>

        {/* Proof */}
        <Stagger as="dl" className="mt-20 grid grid-cols-2 border-y border-white/10 md:mt-28 lg:grid-cols-4">
          {PROOF.map((item, i) => (
            <StaggerItem
              key={item.label}
              className={`flex flex-col-reverse py-8 md:py-10 ${i % 2 === 1 ? 'border-l border-white/10 pl-6 md:pl-8' : 'pr-6'} ${
                i === 2 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''
              } ${i < 2 ? 'border-b border-white/10 lg:border-b-0' : ''}`}
            >
              <dt className={`mt-3 ${LABEL}`}>{item.label}</dt>
              <dd className="text-[clamp(2.25rem,3.6vw,3.25rem)] font-black leading-none tracking-tight text-white">
                {'prefix' in item && <span className="text-neon">{item.prefix}</span>}
                <CountUp to={item.value} />
                <span className="text-neon">{item.suffix}</span>
              </dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

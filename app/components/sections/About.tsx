import Image from 'next/image';
import {
  FiCode, FiGlobe, FiZap, FiStar, FiLayers,
  FiSmartphone, FiDatabase, FiServer, FiClock, FiUsers,
} from 'react-icons/fi';
import { CountUp } from '../motion/CountUp';
import { Reveal } from '../motion/Reveal';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { SectionHeading } from '../ui/SectionHeading';

const SKILLS = [
  { name: 'React / Next.js', level: 95, icon: <FiCode /> },
  { name: 'App Dev (React Native / Flutter)', level: 90, icon: <FiSmartphone /> },
  { name: 'TypeScript / Node.js', level: 95, icon: <FiLayers /> },
  { name: 'UI/UX Architecture', level: 85, icon: <FiStar /> },
  { name: 'Web3 & Blockchain', level: 85, icon: <FiGlobe /> },
  { name: 'Product Engineering', level: 90, icon: <FiZap /> },
  { name: 'REST APIs & Databases', level: 90, icon: <FiDatabase /> },
  { name: 'DevOps / CI/CD / VPS', level: 85, icon: <FiServer /> },
] as const;

const ACHIEVEMENTS = [
  { number: 3, suffix: '+', label: 'Years Experience' },
  { number: 40, suffix: '+', label: 'Projects Delivered' },
  { number: 15, suffix: '+', label: 'Global Clients' },
  { number: null, suffix: '', label: 'Timezone Coverage', text: 'EST / CET' },
] as const;

const PROFILE_TAGS = [
  'Full-Stack & Mobile Specialist',
  'Scalable Systems Architect',
  'Global Remote / Pakistan',
] as const;

const ABOUT_CARDS = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Engineering',
    text: 'Building high-performance, responsive web and mobile applications using modern frameworks like React, Next.js, Node.js, and TypeScript with an emphasis on maintainable architecture.',
  },
  {
    icon: <FiServer />,
    title: 'End-to-End Infrastructure',
    text: 'Managing the entire product lifecycle—from user interface down to backend databases, automated CI/CD pipelines, secure VPS deployment, and cloud infrastructure.',
  },
  {
    icon: <FiGlobe />,
    title: 'Web3 & Smart Contracts',
    text: 'Developing decentralized solutions including DeFi platforms, NFT marketplaces, and protocol integrations leveraging Solidity, Ethers.js, and secure EVM standards.',
  },
  {
    icon: <FiClock />,
    title: 'Seamless Global Collaboration',
    text: 'Operating smoothly across North American and European business hours with robust asynchronous communication, clear milestone tracking, and dependable delivery.',
  },
  {
    icon: <FiUsers />,
    title: 'Startup-Focused Partner',
    text: 'Ideal for early-stage teams and growing startups seeking a dedicated owner who can drive a product from concept to production independently.',
  },
] as const;

export default function About() {
  return (
    <section id="about" className="font-orbitron relative overflow-hidden bg-ink py-28 text-white">
      <SectionGlow className="left-1/2 top-1/4 h-[400px] w-[800px] -translate-x-1/2" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Professional Profile"
          title={[{ text: 'Architecting Scalable Digital Products' }]}
          description="Mussawar Hayat is a versatile Full-Stack and Web3 Software Engineer with a track record of delivering robust web, mobile, and decentralized applications for international startups."
        />

        {/* Narrative cards: staggered rise, cursor spotlight on hover */}
        <Stagger className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ABOUT_CARDS.map((card) => (
            <StaggerItem key={card.title} spotlight className="card spotlight group p-7">
              <div
                className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-neon/20 bg-neon/10 text-lg text-neon transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                {card.icon}
              </div>
              <h3 className="mb-3 text-base font-bold tracking-wide text-white">{card.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-white/70">{card.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Photo and credentials: the portrait wipes in from the bottom */}
          <div className="order-2 lg:order-1 lg:col-span-4">
            <div className="card relative p-6">
              <Reveal variant="clipUp" className="relative mb-6 aspect-square w-full overflow-hidden rounded-lg border border-white/10">
                <Image
                  src="/my-pic.jpeg"
                  alt="Mussawar Hayat, Full-Stack and Web3 Software Engineer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center grayscale transition-[filter] duration-500 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
              </Reveal>

              <h3 className="mb-1 text-xl font-bold text-white">Mussawar Hayat</h3>
              <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-neon">Full-Stack &amp; Web3 Engineer</p>

              <ul className="space-y-3.5 border-t border-white/10 pt-5 font-sans text-xs text-white/80">
                {PROFILE_TAGS.map((tag) => (
                  <li key={tag} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon" aria-hidden="true" />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2 lg:col-span-8">
            {/* Metrics count up once */}
            <Reveal className="card grid grid-cols-2 gap-4 p-5 md:grid-cols-4">
              {ACHIEVEMENTS.map((item) => (
                <div key={item.label} className="px-2 text-center">
                  <div className="mb-1 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                    {item.number === null ? (
                      <span className="text-neon">{item.text}</span>
                    ) : (
                      <>
                        <CountUp to={item.number} />
                        <span className="text-neon">{item.suffix}</span>
                      </>
                    )}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/65">{item.label}</div>
                </div>
              ))}
            </Reveal>

            {/* Competencies: rows stagger in, bars grow with scaleX (no width animation) */}
            <div className="card p-6 md:p-8">
              <h3 className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 md:mb-8">
                <span className="h-px w-8 bg-neon" aria-hidden="true" />
                Technical Competencies
              </h3>

              <Stagger as="ul" className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {SKILLS.map((skill) => (
                  <StaggerItem
                    as="li"
                    key={skill.name}
                    className="group rounded-lg border border-white/5 bg-black/30 p-3 transition-colors duration-300 hover:border-neon/30 md:p-4"
                  >
                    <div className="mb-2 flex items-center justify-between md:mb-3">
                      <div className="flex items-center gap-2 md:gap-2.5">
                        <span className="text-base text-neon transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                          {skill.icon}
                        </span>
                        <h4 className="text-xs font-semibold tracking-wide text-white">{skill.name}</h4>
                      </div>
                      <span className="font-mono text-[11px] text-white/60">{skill.level}%</span>
                    </div>

                    <div
                      className="h-1.5 w-full overflow-hidden rounded-full bg-white/5"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={skill.name}
                    >
                      <div className="h-full" style={{ width: `${skill.level}%` }}>
                        <Reveal
                          variant="growX"
                          trigger={false}
                          className="h-full origin-left rounded-full bg-gradient-to-r from-neon/60 to-neon shadow-[0_0_10px_rgba(57,255,20,0.3)]"
                        >
                          {null}
                        </Reveal>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FiMail, FiMapPin, FiShield } from 'react-icons/fi';
import { LoopWhenVisible } from '../motion/LoopWhenVisible';
import { Reveal } from '../motion/Reveal';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { SectionGlow } from '../ui/SectionGlow';
import { EditorialHeadline } from '../ui/EditorialHeadline';
import { ContactForm } from './ContactForm';

const CONTACT_INFO = [
  { icon: FiMail, label: 'Email', value: 'reply@mussawarhayat.site', href: 'mailto:reply@mussawarhayat.site' },
  { icon: FiMapPin, label: 'Location', value: 'Attock, Pakistan (Remote worldwide)', href: null },
] as const;

const MARQUEE = ['Next.js', 'React', 'React Native', 'TypeScript', 'Node.js', 'Solidity', 'Web3', 'DevOps'] as const;

/** Closing marquee: two copies of the list slide left forever (CSS only, paused off-screen). */
function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {MARQUEE.map((word) => (
        <span key={word} className="flex items-center gap-10">
          <span className="text-4xl font-extrabold uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.25)] md:text-6xl">
            {word}
          </span>
          <span className="text-2xl text-neon md:text-3xl">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <LoopWhenVisible className="relative -mx-[var(--page-pad)] mb-20 overflow-hidden border-y border-white/10 py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </LoopWhenVisible>
  );
}

export function Contact() {
  return (
    <section id="contact" className="font-orbitron relative overflow-clip bg-ink px-[var(--page-pad)] py-28 text-white md:py-40">
      <SectionGlow />

      <Marquee />

      <div className="relative z-10">
        <EditorialHeadline
          index="08"
          eyebrow="Contact"
          aside="Response within 24 hours"
          solid="Let's talk about"
          accent="Your Project"
        >
          <p>
            Tell me what you are building. I will confirm fit, timeline, and the best engagement model (fixed-price, hourly, or retainer). Remote work for North America & Europe clients. GDPR-compliant infrastructure available when needed.
          </p>
        </EditorialHeadline>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 md:mt-24 lg:grid-cols-2">
          <Reveal variant="slideFromLeft" className="card flex flex-col justify-between space-y-8 p-8 hover:border-white/10 md:p-12">
            <div>
              <h3 className="mb-8 flex items-center gap-3 font-mono text-xl font-bold uppercase tracking-tight text-white">
                <FiShield className="text-neon" aria-hidden="true" />
                Contact Details
              </h3>

              <Stagger as="ul" className="space-y-6">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <StaggerItem as="li" key={label} className="group flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neon shadow-md transition-colors group-hover:bg-neon group-hover:text-black">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-white/65">{label}</p>
                      {href ? (
                        <a href={href} className="link-underline mt-1 inline-block font-sans text-base font-bold text-white transition-colors group-hover:text-neon">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 font-sans text-base font-bold text-white">{value}</p>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div className="space-y-3 border-t border-white/10 pt-8">
              <p className="font-sans text-xs leading-relaxed text-white/70">
                Prefer a quick chat? Mention your preferred time zone and I will schedule a short call.
              </p>
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/65">
                <div className="h-2 w-2 rounded-full bg-neon shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
                Response target: under 24 hours on business days
              </div>
            </div>
          </Reveal>

          <Reveal variant="slideFromRight" delay={0.1} className="card relative flex flex-col justify-center p-8 hover:border-white/10 md:p-12">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

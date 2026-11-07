import Link from 'next/link';

const STATS = [
  { label: 'Years of experience', value: 3, suffix: '+' },
  { label: 'Projects delivered', value: 40, suffix: '+' },
  { label: 'Remote clients', value: 15, suffix: '+' },
] as const;

export function HeroStatic() {
  return (
    <div>
      <h1>
        <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 tracking-tight leading-[1.05] text-[clamp(2.2rem,3.8vw,3.6rem)]">
          Mussawar Hayat
        </span>
        <span className="sr-only"> — </span>
        <span className="mt-3 block text-xl md:text-2xl font-semibold tracking-wide text-[#39FF14] drop-shadow-[0_0_12px_rgba(57,255,20,0.25)]">
          React, React Native & Web3 Full-Stack Developer
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-lg md:text-xl font-medium text-white/90 leading-snug">
        Hire a remote full-stack and Web3 engineer specializing in React, React Native, Next.js, Solidity, and production infrastructure for web and mobile applications
      </p>

      <p className="mt-3 max-w-2xl text-sm md:text-base font-normal text-white/60 leading-relaxed">
        Remote full-stack developer building scalable web and mobile apps—from React and Node.js to Solidity and VPS deployment
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
        <Link
          href="#contact"
          className="inline-flex h-[3.25rem] items-center justify-center rounded-lg bg-[#39FF14] px-8 text-[15px] font-bold tracking-wide text-black transition-colors hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14]"
        >
          Start a project
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex h-[3.25rem] items-center justify-center rounded-lg border border-white/15 bg-white/[0.02] px-8 text-[15px] font-semibold tracking-wide text-white transition-colors hover:border-[#39FF14]/60 hover:bg-[#39FF14]/[0.04] hover:text-[#39FF14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14]"
        >
          View portfolio
        </Link>
      </div>

      <dl className="mt-9 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm shadow-xl">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse px-5 py-4">
            <dt className="mt-1 text-xs font-medium leading-snug text-white/50">{stat.label}</dt>
            <dd className="text-2xl font-bold tabular-nums text-white sm:text-3xl">
              {stat.value}
              <span className="text-[#39FF14]">{stat.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

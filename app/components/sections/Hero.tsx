import dynamic from 'next/dynamic';
import { HeroStatic } from './HeroStatic';

const HeroStack = dynamic(() => import('./HeroStack').then((m) => m.HeroStack), {
  ssr: true,
  loading: () => (
    <div
      className="mx-auto w-full max-w-[480px] rounded-xl border border-white/10 bg-white/[0.02]"
      style={{ minHeight: 420 }}
      aria-hidden="true"
    />
  ),
});

export function Hero() {
  return (
    <section
      id="home"
      className="font-orbitron relative flex items-center overflow-hidden bg-[#060B16] pt-28 pb-12 min-h-[100svh] lg:h-[100svh] lg:min-h-[720px] lg:pt-20 lg:pb-8"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at 70% 45%, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 45%, black 0%, transparent 70%)',
          }}
        />
        <div className="absolute top-1/3 left-[-10%] w-[450px] h-[450px] rounded-full bg-[#39FF14]/[0.03] blur-[120px]" />
        <div className="absolute top-1/4 right-[2%] w-[580px] h-[580px] rounded-full bg-[#39FF14]/[0.07] blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <HeroStatic />
          <HeroStack />
        </div>
      </div>
    </section>
  );
}

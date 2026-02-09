'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTarget, FiMap, FiPenTool, FiCode, FiCheckCircle, FiArrowRight, FiActivity } from 'react-icons/fi';

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      icon: <FiTarget className="w-5 h-5" />,
      title: 'Logic Discovery',
      description: 'Analyzing system requirements, user personas, and technical feasibility for your enterprise ecosystem.',
    },
    {
      number: '02',
      icon: <FiMap className="w-5 h-5" />,
      title: 'System Architecture',
      description: 'Mapping out the data flow, API integrations, and cloud infrastructure for maximum scalability.',
    },
    {
      number: '03',
      icon: <FiPenTool className="w-5 h-5" />,
      title: 'Precision Design',
      description: 'Crafting high-fidelity immersive interfaces focused on user psychological conversion and speed.',
    },
    {
      number: '04',
      icon: <FiCode className="w-5 h-5" />,
      title: 'Core Development',
      description: 'Building the engine using Next.js, TypeScript, and high-performance backend modules.',
    },
    {
      number: '05',
      icon: <FiActivity className="w-5 h-5" />,
      title: 'QA & Optimization',
      description: 'Stress testing infrastructure and optimizing load times to ensure 99th percentile performance.',
    },
    {
      number: '06',
      icon: <FiCheckCircle className="w-5 h-5" />,
      title: 'Deployment & Scale',
      description: 'Mainnet/Production launch with proactive monitoring and automated scaling protocols.',
    }
  ];

  return (
    <section id="process" className="py-32 bg-[#060B16] font-orbitron text-[#39FF14] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block border border-[#39FF14] px-4 py-1.5 mb-6 text-[10px] tracking-[0.4em] uppercase opacity-70">
            Execution_Protocol.v2
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Development <span className="text-[#39FF14]">Pipeline</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto font-sans">
            A systematic engineering approach to transforming complex business logic into high-performance digital products.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Step Selection - Left Side */}
          <div className="lg:col-span-4 space-y-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 transition-all duration-500 border-l-2 flex items-center justify-between group ${
                  activeStep === index 
                    ? 'bg-[#39FF14]/10 border-[#39FF14] translate-x-4' 
                    : 'bg-transparent border-white/10 hover:border-[#39FF14]/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold ${activeStep === index ? 'text-[#39FF14]' : 'text-white/40'}`}>
                    {step.number}
                  </span>
                  <span className={`font-bold tracking-widest text-sm uppercase ${activeStep === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                    {step.title}
                  </span>
                </div>
                {activeStep === index && <FiArrowRight className="animate-pulse" />}
              </button>
            ))}
          </div>

          {/* Detailed View - Right Side */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0A1221] border border-[#39FF14]/20 p-12 md:p-16 relative"
              >
                {/* Visual Backdrop Decoration */}
                <div className="absolute top-0 right-0 p-8 text-[#39FF14]/5 select-none pointer-events-none">
                  <span className="text-9xl font-black">{steps[activeStep].number}</span>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#39FF14] text-black flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
                    {steps[activeStep].icon}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-xl text-white/60 font-sans leading-relaxed mb-10 max-w-xl">
                    {steps[activeStep].description}
                  </p>

                  <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#39FF14] mb-2">Status</span>
                      <span className="text-white font-bold text-sm uppercase">Optimized_Core</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#39FF14] mb-2">Priority</span>
                      <span className="text-white font-bold text-sm uppercase">Critical_System</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation for Mobile/Ease */}
            <div className="mt-8 flex justify-between items-center px-4">
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 ${activeStep === i ? 'w-8 bg-[#39FF14]' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="p-4 border border-[#39FF14]/20 hover:bg-[#39FF14] hover:text-black transition-all"
                >
                  <FiArrowRight className="rotate-180" />
                </button>
                <button 
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="p-4 border border-[#39FF14]/20 hover:bg-[#39FF14] hover:text-black transition-all"
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-24">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-6 bg-[#39FF14] text-black px-12 py-6 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_50px_rgba(57,255,20,0.2)]"
          >
            <span>Initiate Project_Build</span>
            <FiArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
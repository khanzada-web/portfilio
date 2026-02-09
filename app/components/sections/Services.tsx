'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiDatabase, FiCode, FiShield, FiZap, FiLayers, FiActivity } from 'react-icons/fi';

const services = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: "Web Architecture",
    description: "High-performance Next.js and React applications optimized for speed, SEO, and global scalability.",
    category: "Development",
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "Mobile Solutions",
    description: "Cross-platform mobile applications for iOS and Android with seamless native performance.",
    category: "Apps",
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: "Full-Stack Systems",
    description: "Robust backend infrastructure using Node.js and TypeScript with real-time data integration.",
    category: "Architecture",
  },
  {
    icon: <FiActivity className="w-8 h-8" />,
    title: "UI/UX Engineering",
    description: "Immersive digital interfaces designed with a focus on user psychology and technical precision.",
    category: "Design",
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Blockchain Bridge",
    description: "Integrating decentralized protocols and smart contract functionality into modern web ecosystems.",
    category: "Specialized",
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Performance Ops",
    description: "Optimization of existing digital products to ensure 99.9% uptime and lightning-fast load times.",
    category: "Optimization",
  }
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="services" className="py-32 bg-[#060B16] relative overflow-hidden font-orbitron text-[#39FF14]">
      {/* Decorative Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-block border border-[#39FF14] px-4 py-1.5 mb-6 text-[10px] tracking-[0.4em] uppercase opacity-70">
            Digital_Capabilities.v2
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Premium <span className="text-[#39FF14]">Engineering</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto font-sans">
            Delivering high-end digital infrastructure for modern enterprises, from scalable web platforms to integrated decentralized systems.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-[#0A1221] border border-[#39FF14]/20 p-8 hover:border-[#39FF14] transition-all duration-500 relative flex flex-col">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-white mb-6 group-hover:text-[#39FF14] transition-colors duration-300">
                    {service.icon}
                  </div>
                  
                  <div className="mb-8 flex-grow">
                    <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-2 block">
                      Category_{service.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-60 font-sans group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-[#39FF14]/10">
                    <a 
                      href="#contact" 
                      className="text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Inquiry_Module <FiZap className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Main CTA with High Padding */}
        <div className="text-center">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-4 bg-[#39FF14] text-black px-12 py-6 font-bold tracking-widest uppercase text-sm hover:bg-white transition-all shadow-[0_0_40px_rgba(57,255,20,0.15)]"
          >
            <span>Initiate Digital Transformation</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiAward, FiZap, FiCheckCircle, FiStar, FiLayers, FiSmartphone } from 'react-icons/fi';
import Image from 'next/image';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React / Next.js', level: 100, icon: <FiCode /> },
    { name: 'App Development (RN/Flutter)', level: 95, icon: <FiSmartphone /> },
    { name: 'TypeScript / Node.js', level: 100, icon: <FiLayers /> },
    { name: 'UI/UX Architecture', level: 90, icon: <FiStar /> },
    { name: 'Web3 & Smart Contracts', level: 85, icon: <FiGlobe /> },
    { name: 'Product Engineering', level: 95, icon: <FiZap /> }
  ];

  const achievements = [
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 100, suffix: '+', label: 'Digital Solutions' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: '24/7', suffix: '', label: 'Global Delivery' }
  ];

  return (
    <section id="about" className="py-32 bg-[#060B16] relative overflow-hidden font-orbitron text-[#39FF14]">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39FF14]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="inline-block border border-[#39FF14] px-4 py-1 mb-6 text-xs tracking-[0.3em] uppercase opacity-80">
            System.Profile_Details
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Digital <span className="text-[#39FF14]">Architect</span>
          </h2>
          <p className="max-w-3xl text-lg opacity-80 leading-relaxed font-sans">
            Specializing in high-performance web and mobile ecosystems. I bridge the gap between complex engineering and intuitive user experience, with a specialized focus on modern full-stack architecture and decentralized technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Profile Card - Professional Digital Aesthetic */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#39FF14]/20 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#0A1221] border border-[#39FF14]/30 p-8 rounded-sm">
                <div className="relative w-full aspect-square mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-[#39FF14]/20">
                  <Image 
                    src="/my-pic.jpeg" 
                    alt="Mussawar Hayat" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1221] via-transparent to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mussawar Hayat</h3>
                <p className="text-sm tracking-widest uppercase opacity-70 mb-6">Lead Software Engineer</p>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 border-b border-[#39FF14]/10 pb-3">
                    <span className="w-1.5 h-1.5 bg-[#39FF14] rotate-45"></span>
                    <span>Full-Stack & App Specialist</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-[#39FF14]/10 pb-3">
                    <span className="w-1.5 h-1.5 bg-[#39FF14] rotate-45"></span>
                    <span>Scalable Systems Architect</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#39FF14] rotate-45"></span>
                    <span>Based in Pakistan / Global Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Expertise & Stats */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Skills Grid */}
            <div>
              <h4 className="text-sm tracking-[0.4em] uppercase opacity-50 mb-8 border-l-2 border-[#39FF14] pl-4">Core_Competencies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-[#0A1221] border border-[#39FF14]/10 p-5 hover:border-[#39FF14]/50 transition-colors group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl opacity-80 group-hover:text-white group-hover:scale-110 transition-all">{skill.icon}</span>
                      <span className="text-[10px] opacity-40 uppercase tracking-widest">Level_{skill.level}%</span>
                    </div>
                    <h5 className="text-white font-bold text-sm tracking-wide">{skill.name}</h5>
                    <div className="mt-4 h-[2px] w-full bg-[#39FF14]/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#39FF14]/10">
              {achievements.map((item, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl font-bold text-white mb-1">
                    {typeof item.number === 'number' ? (
                      <AnimatedCounter from={0} to={item.number} duration={1} />
                    ) : item.number}
                    <span className="text-[#39FF14]">{item.suffix}</span>
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.2em] opacity-50">{item.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
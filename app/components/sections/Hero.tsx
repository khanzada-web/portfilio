'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Web3SkillsDisplay } from './Web3SkillsDisplay';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Animate counters
    const projectTimer = setInterval(() => {
      setProjectCount((prev) => {
        if (prev < 500) return prev + Math.ceil((500 - prev) / 20);
        clearInterval(projectTimer);
        return 500;
      });
    }, 50);

    const satisfactionTimer = setInterval(() => {
      setSatisfactionRate((prev) => {
        if (prev < 99) return prev + Math.ceil((99 - prev) / 20);
        clearInterval(satisfactionTimer);
        return 99;
      });
    }, 50);

    return () => {
      clearInterval(projectTimer);
      clearInterval(satisfactionTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-white flex items-center pt-28 sm:pt-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            <div className="font-orbitron text-gray-900 mb-4 sm:mb-8">Mussawar Hayat</div>
            <div className="font-orbitron bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Web3.0 Developer</div>
          </h1>
          
          <div className="flex items-center justify-center space-x-3 sm:space-x-6">
            <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold font-orbitron">Building Since 2021</span>
            <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-orbitron">5+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-orbitron mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-orbitron">100+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-orbitron mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-orbitron">100%</div>
              <div className="text-xs sm:text-sm text-gray-600 font-orbitron mt-1">Client Satisfaction</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-8 sm:pt-12">
            <a 
              href="#portfolio" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold font-orbitron transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 flex items-center justify-center space-x-2"
            >
              <span>View Portfolio</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <a 
              href="#contact" 
              className="border-2 border-gray-300 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold font-orbitron transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 flex items-center justify-center space-x-2"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

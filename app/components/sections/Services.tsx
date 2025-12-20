'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiServer, FiDatabase, FiCode, FiShield, FiZap, FiShoppingCart, FiTrendingUp, FiUsers, FiLayers, FiTerminal } from 'react-icons/fi';

const services = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: "Web3.js/Ethers.js",
    description: "Frontend Web3 development with seamless blockchain integration and wallet connectivity.",
    category: "Frontend",
    progress: 100,
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: "React/Next.js",
    description: "Modern frontend development with React and Next.js for exceptional user experiences.",
    category: "Frontend",
    progress: 100,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FiServer className="w-8 h-8" />,
    title: "Node.js/TypeScript",
    description: "Robust backend development with Node.js and TypeScript for scalable applications.",
    category: "Backend",
    progress: 100,
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: <FiTerminal className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design solutions creating intuitive interfaces and exceptional experiences.",
    category: "Design",
    progress: 100,
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "DeFi Protocols",
    description: "Decentralized finance protocols and smart contract integration for Web3 applications.",
    category: "Finance",
    progress: 100,
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Product Design",
    description: "End-to-end product design and development strategy for digital success.",
    category: "Design",
    progress: 100,
    color: "from-indigo-500 to-purple-500"
  }
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 font-orbitron">
            <FiZap className="w-4 h-4" />
            <span>Complete Tech Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-orbitron leading-tight">
            <span className="block text-gray-900 mb-2">Enterprise Digital</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-orbitron max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive exponential growth in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.9
              }}
              transition={{ 
                duration: 0.5,
                delay: 0.1 * index
              }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex flex-col h-full">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0`}>
                    {service.icon}
                  </div>
                  
                  <div className="text-center mb-4 flex-grow">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-3 font-orbitron">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-orbitron">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-orbitron">{service.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <a 
                      href="#contact" 
                      className="block text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 font-orbitron"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl"></div>
            <a 
              href="#contact" 
              className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-orbitron"
            >
              <span>Start Your Digital Transformation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

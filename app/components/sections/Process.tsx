'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiMap, FiPenTool, FiCode, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      number: '01',
      icon: <FiTarget className="w-5 h-5" />,
      title: 'Web3 Discovery',
      description: 'Analyze blockchain requirements and decentralization needs.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      number: '02',
      icon: <FiMap className="w-5 h-5" />,
      title: 'Architecture Planning',
      description: 'Design smart contract structure and Web3 tech stack.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      icon: <FiPenTool className="w-5 h-5" />,
      title: 'UI/UX Design',
      description: 'Create intuitive Web3 user interfaces with wallet integration.',
      color: 'from-emerald-500 to-teal-400'
    },
    {
      number: '04',
      icon: <FiCode className="w-5 h-5" />,
      title: 'Full Stack Development',
      description: 'Build frontend, backend, and Web3 integration.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      number: '05',
      icon: <FiCheckCircle className="w-5 h-5" />,
      title: 'Web3 Testing',
      description: 'Test smart contracts and blockchain interactions.',
      color: 'from-rose-500 to-pink-500'
    },
    {
      number: '06',
      icon: <FiArrowRight className="w-5 h-5" />,
      title: 'Optimization & Scaling',
      description: 'Performance tuning and scaling strategies for Web3 applications.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="process" className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 font-orbitron">
            <FiArrowRight className="w-4 h-4" />
            <span>Web3 Development Workflow</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-orbitron leading-tight">
            <span className="block text-gray-900 mb-2">How We Build</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Web3 Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 font-orbitron max-w-2xl mx-auto">
            Our Web3 development process ensures quality decentralized applications from concept to mainnet deployment.
          </p>
        </div>

        {/* Modern Process Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Grid-Based Modern Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Steps 1-2 */}
            <div className="space-y-6">
              {steps.slice(0, 2).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 30
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.1 * index
                  }}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`relative bg-gradient-to-br ${step.color} p-1 rounded-2xl h-32 overflow-hidden ${
                    activeStep === index ? 'shadow-2xl shadow-blue-400/40' : 'shadow-lg shadow-gray-300/50'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between">
                      {/* Step Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                            {step.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs text-blue-600 font-semibold font-orbitron mb-1">STEP {step.number}</div>
                            <h3 className="text-base font-bold text-gray-900 font-orbitron truncate">{step.title}</h3>
                          </div>
                        </div>
                        {activeStep === index && (
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse flex-shrink-0 mt-1"></div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 font-orbitron text-xs leading-tight line-clamp-2">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Column - Active Step Detail */}
            <div className="lg:order-2 order-1">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="sticky top-8"
              >
                <div className="relative">
                  {/* Enhanced Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-blue-600/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-3xl blur-xl animate-pulse"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 p-0.5">
                    <div className="w-full h-full bg-white rounded-3xl"></div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="relative bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-2xl">
                    
                    {/* Step Icon with Enhanced Effects */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        {/* Icon Glow */}
                        <div className={`absolute inset-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} opacity-25 blur-2xl animate-pulse`}></div>
                        
                        {/* Icon Container */}
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center text-white shadow-2xl transform transition-all duration-500 ${
                          activeStep !== null ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                        } hover:scale-125 hover:rotate-6`}>
                          {/* Inner Glow */}
                          <div className="absolute inset-0 bg-white/30 rounded-2xl animate-pulse"></div>
                          <div className="relative z-10 transform transition-transform duration-300 hover:scale-110">
                            {steps[activeStep].icon}
                          </div>
                          
                          {/* Orbiting Particles */}
                          {activeStep !== null && (
                            <>
                              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full animate-orbit opacity-80"></div>
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-orbit animation-delay-150 opacity-80"></div>
                              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-orbit animation-delay-300 opacity-80"></div>
                              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full animate-orbit animation-delay-450 opacity-80"></div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Step Info */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/15 to-purple-600/15 backdrop-blur-sm rounded-full mb-4 border border-blue-500/30">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-blue-600 text-sm font-bold font-orbitron">STEP {steps[activeStep].number}</span>
                        <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 animate-pulse animation-delay-300"></div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 font-orbitron bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-gray-600 font-orbitron leading-relaxed text-lg">{steps[activeStep].description}</p>
                    </div>
                    
                    {/* Enhanced Progress Indicator */}
                    <div className="mb-8">
                      <div className="flex justify-between text-xs text-gray-500 mb-3 font-orbitron uppercase tracking-wider">
                        <span>Progress</span>
                        <span className="text-cyan-600 font-bold">{activeStep + 1}/{steps.length}</span>
                      </div>
                      <div className="h-3 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-300/30">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                          style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                        >
                          {/* Animated Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Navigation - Bottom Centered */}
                    <div className="flex flex-col items-center space-y-4">
                      {/* Progress Dots */}
                      <div className="flex items-center space-x-3">
                        {steps.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`relative transition-all duration-300 ${
                              index === activeStep 
                                ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-blue-500/50' 
                                : 'w-2 h-2 bg-gray-400 hover:bg-gray-500 rounded-full'
                            }`}
                          >
                            {index === activeStep && (
                              <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse opacity-50"></div>
                            )}
                          </button>
                        ))}
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="flex items-center space-x-4">
                        {/* Previous Button */}
                        <button
                          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                          disabled={activeStep === 0}
                          className="group px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-orbitron text-sm flex items-center space-x-2 border border-gray-300 hover:border-gray-400 disabled:border-gray-200"
                        >
                          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                          <span>Previous</span>
                        </button>
                        
                        {/* Next Button */}
                        <button
                          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                          disabled={activeStep === steps.length - 1}
                          className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-orbitron text-sm flex items-center space-x-2 shadow-lg hover:shadow-xl disabled:shadow-none"
                        >
                          <span>Next</span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Steps 3-6 */}
            <div className="space-y-6">
              {steps.slice(2).map((step, index) => {
                const actualIndex = index + 2;
                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 30
                    }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.1 * actualIndex
                    }}
                    className={`relative group cursor-pointer transition-all duration-500 ${
                      activeStep === actualIndex ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveStep(actualIndex)}
                  >
                    <div className={`relative bg-gradient-to-br ${step.color} p-1 rounded-2xl h-32 overflow-hidden ${
                      activeStep === actualIndex ? 'shadow-2xl shadow-blue-400/40' : 'shadow-lg shadow-gray-300/50'
                    }`}>
                      <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between">
                        {/* Step Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3 flex-1">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                              {step.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs text-blue-600 font-semibold font-orbitron mb-1">STEP {step.number}</div>
                              <h3 className="text-base font-bold text-gray-900 font-orbitron truncate">{step.title}</h3>
                            </div>
                          </div>
                          {activeStep === actualIndex && (
                            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse flex-shrink-0 mt-1"></div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 font-orbitron text-xs leading-tight line-clamp-2">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a 
            href="#contact" 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-orbitron"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGlobe, FiCpu, FiShield, FiLayers, FiTerminal, FiHexagon } from 'react-icons/fi';

const web3Skills = [
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: "Web3.js/Ethers.js",
    category: "Frontend",
    level: "Expert",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-gradient-to-br from-blue-500/90 to-cyan-500/90"
  },
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: "React/Next.js",
    category: "Frontend",
    level: "Expert", 
    color: "from-purple-500 to-pink-500",
    bg: "bg-gradient-to-br from-purple-500/90 to-pink-500/90"
  },
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: "Node.js/TypeScript",
    category: "Backend",
    level: "Expert",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-gradient-to-br from-emerald-500/90 to-teal-500/90"
  },
  {
    icon: <FiTerminal className="w-6 h-6" />,
    title: "UI/UX Design",
    category: "Design",
    level: "Advanced",
    color: "from-amber-500 to-orange-500",
    bg: "bg-gradient-to-br from-amber-500/90 to-orange-500/90"
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "DeFi Protocols",
    category: "Finance",
    level: "Advanced",
    color: "from-rose-500 to-pink-500",
    bg: "bg-gradient-to-br from-rose-500/90 to-pink-500/90"
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Product Design",
    category: "Design",
    level: "Expert",
    color: "from-indigo-500 to-purple-500",
    bg: "bg-gradient-to-br from-indigo-500/90 to-purple-500/90"
  }
];

export function Web3SkillsDisplay() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transform-gpu mr-12`}>
      <div className="relative">
        {/* Web3 Skills Container */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
          
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 font-orbitron">
                <FiCode className="w-4 h-4" />
                <span>Web3 Expertise</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-orbitron">Technical Skills</h3>
              <p className="text-gray-600 font-orbitron">Full-stack capabilities for decentralized applications</p>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {web3Skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.9
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.1 * index
                  }}
                  onClick={() => setSelectedSkill(index)}
                  className={`relative group cursor-pointer transition-all duration-300 rounded-xl p-4 border ${
                    selectedSkill === index 
                      ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 shadow-lg' 
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center bg-gradient-to-br ${skill.color} text-white shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-orbitron text-sm">{skill.title}</h4>
                    <p className="text-xs text-gray-500 mb-1 font-orbitron">{skill.category}</p>
                    <p className="text-xs font-medium text-blue-600 font-orbitron">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Stats Section */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 font-orbitron">5+</div>
                  <div className="text-sm text-gray-600 font-orbitron">Years Web3</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 font-orbitron">20+</div>
                  <div className="text-sm text-gray-600 font-orbitron">Projects</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 font-orbitron">Full</div>
                  <div className="text-sm text-gray-600 font-orbitron">Stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiAward, FiZap, FiCheckCircle, FiStar } from 'react-icons/fi';
import Image from 'next/image';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Web3.js/Ethers.js', level: 100, icon: <FiGlobe className="w-4 h-4" /> },
    { name: 'React/Next.js', level: 100, icon: <FiCode className="w-4 h-4" /> },
    { name: 'Node.js/TypeScript', level: 100, icon: <FiCode className="w-4 h-4" /> },
    { name: 'UI/UX Design', level: 100, icon: <FiStar className="w-4 h-4" /> },
    { name: 'DeFi Protocols', level: 100, icon: <FiAward className="w-4 h-4" /> },
    { name: 'Product Design', level: 100, icon: <FiZap className="w-4 h-4" /> }
  ];

  const achievements = [
    { number: '5+', label: 'Years Experience', icon: <FiAward className="w-6 h-6" /> },
    { number: '50+', label: 'Web3 Projects', icon: <FiCheckCircle className="w-6 h-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <FiStar className="w-6 h-6" /> },
    { number: '24/7', label: 'Availability', icon: <FiZap className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <header>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 font-orbitron">
              <FiAward className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-orbitron leading-tight">
              <span className="block text-gray-900 mb-2">Full Stack Web3</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Developer</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-orbitron max-w-2xl mx-auto px-4">
              Expert Web3 developer with 5+ years building decentralized applications, smart contracts, and blockchain solutions. Specialized in React, Next.js, TypeScript, and Solidity development.
            </p>
          </header>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image 
                      src="/my-pic.jpeg" 
                      alt="Mussawar Hayat" 
                      width={300} 
                      height={300} 
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <FiCode className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-orbitron">Mussawar Hayat</h3>
                <p className="text-blue-600 font-semibold font-orbitron mb-4">Web3 Architect & Developer</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700 font-orbitron">Building decentralized solutions since 2021</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <p className="text-gray-700 font-orbitron">Specialized in frontend development</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <p className="text-gray-700 font-orbitron">Passionate about user experience</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700 font-orbitron">Based in Attock, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-orbitron">My Journey</h3>
              <div className="space-y-4 text-gray-700 font-orbitron">
                <p>
                  I embarked on my Web3 journey in 2019, captivated by the potential of blockchain technology to revolutionize how we interact with digital systems. What started as curiosity quickly evolved into a passion for building decentralized applications that make a real difference.
                </p>
                <p>
                  Over the past 5+ years, I've had the privilege of working on diverse Web3 projects, from DeFi platforms to NFT marketplaces, helping businesses and startups bring their decentralized visions to life. My expertise lies in creating seamless frontend experiences that bridge the gap between complex blockchain technology and everyday users.
                </p>
                <p>
                  I believe that the future of the web is decentralized, and I'm committed to being at the forefront of this transformation. Whether it's developing smart contract integrations, designing intuitive user interfaces, or architecting scalable backend systems, I bring a holistic approach to Web3 development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-orbitron">Technical Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto font-orbitron">
              Core skills that power my Web3 development projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 font-orbitron">{skill.name}</h4>
                  </div>
                  <span className="text-sm font-bold text-blue-600 font-orbitron">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4 text-blue-600">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 font-orbitron">{achievement.number}</div>
              <div className="text-gray-600 font-orbitron">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

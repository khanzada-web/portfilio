'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiEye, FiCode, FiAward } from 'react-icons/fi';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Ordwin',
      description: 'A Web3 platform for ordinal inscriptions and Bitcoin NFT marketplace with advanced trading features and collection management.',
      image: '/project1.jpg',
      category: 'nft',
      technologies: ['React', 'Next.js', 'TypeScript', 'Web3.js', 'Tailwind CSS'],
      links: {
        live: 'https://ordwin.fun',
        github: 'https://github.com/khanzada-web/ordwin'
      },
      featured: true
    },
    {
      id: 2,
      title: 'Soft Stake',
      description: 'A comprehensive DeFi staking platform with yield farming, liquidity pools, and automated reward distribution system.',
      image: '/project2.jpg',
      category: 'defi',
      technologies: ['React', 'Web3.js', 'Ethers.js', 'Solidity', 'Node.js'],
      links: {
        live: 'https://soft-stake.netlify.app',
        github: 'https://github.com/khanzada-web/soft-stake'
      },
      featured: true
    },
    {
      id: 3,
      title: 'Debauchery',
      description: 'An innovative Web3 gaming and entertainment platform with NFT integration and decentralized governance.',
      image: '/project3.jpg',
      category: 'gaming',
      technologies: ['Vue.js', 'Web3.js', 'IPFS', 'Smart Contracts', 'MongoDB'],
      links: {
        live: 'https://debaucherykek.com',
        github: 'https://github.com/khanzada-web/debauchery'
      },
      featured: false
    },
    {
      id: 4,
      title: 'Demotrionn',
      description: 'A decentralized trading platform with advanced charting tools, portfolio tracking, and multi-chain support.',
      image: '/project4.jpg',
      category: 'defi',
      technologies: ['React', 'TypeScript', 'Web3.js', 'GraphQL', 'PostgreSQL'],
      links: {
        live: 'https://demotrionn.netlify.app',
        github: 'https://github.com/khanzada-web/demotrionn'
      },
      featured: false
    },
    {
      id: 5,
      title: 'NewsPress',
      description: 'A Web3-powered news aggregation platform with decentralized content verification and token-based rewards.',
      image: '/project5.jpg',
      category: 'media',
      technologies: ['Next.js', 'TypeScript', 'Web3.js', 'Redis', 'Docker'],
      links: {
        live: 'https://newspress.netlify.app',
        github: 'https://github.com/khanzada-web/newspress'
      },
      featured: true
    },
    {
      id: 6,
      title: 'Whitelist Check',
      description: 'A utility platform for checking NFT whitelist status and managing token allocations across multiple projects.',
      image: '/project6.jpg',
      category: 'utility',
      technologies: ['React', 'Web3.js', 'Ethers.js', 'Node.js', 'Express'],
      links: {
        live: 'https://whitelistcheck.netlify.app',
        github: 'https://github.com/khanzada-web/whitelistcheck'
      },
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'defi', label: 'DeFi', count: projects.filter(p => p.category === 'defi').length },
    { id: 'nft', label: 'NFT', count: projects.filter(p => p.category === 'nft').length },
    { id: 'gaming', label: 'Gaming', count: projects.filter(p => p.category === 'gaming').length },
    { id: 'media', label: 'Media', count: projects.filter(p => p.category === 'media').length },
    { id: 'utility', label: 'Utility', count: projects.filter(p => p.category === 'utility').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 font-orbitron">
            <FiCode className="w-4 h-4" />
            <span>Recent Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-orbitron leading-tight">
            <span className="block text-gray-900 mb-2">Web3 Projects</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-orbitron max-w-2xl mx-auto">
            Explore my latest Web3 development projects, from DeFi platforms to NFT marketplaces, 
            showcasing cutting-edge blockchain technology and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-orbitron font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold font-orbitron flex items-center space-x-1">
                    <FiAward className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FiCode className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600 font-orbitron text-sm">Project Preview</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-orbitron group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-orbitron line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-orbitron"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-orbitron">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold font-orbitron flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiEye className="w-4 h-4" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-orbitron">Have a Project in Mind?</h3>
            <p className="text-gray-600 mb-6 font-orbitron max-w-2xl mx-auto">
              I'm always excited to work on new and challenging Web3 projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-orbitron"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <FiExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiServer, FiShoppingCart, FiCode, FiDatabase, FiShield, FiZap, FiTrendingUp, FiUsers, FiActivity } from 'react-icons/fi';

const services = [
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "Web Development",
    category: "Frontend",
    status: "Active",
    progress: 100,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-gradient-to-br from-blue-500/90 to-cyan-500/90"
  },
  {
    icon: <FiServer className="w-6 h-6" />,
    title: "API Development",
    category: "Backend", 
    status: "Active",
    progress: 100,
    color: "from-purple-500 to-pink-500",
    bg: "bg-gradient-to-br from-purple-500/90 to-pink-500/90"
  },
  {
    icon: <FiDatabase className="w-6 h-6" />,
    title: "Database Solutions",
    category: "Data",
    status: "Active",
    progress: 100,
    color: "from-emerald-500 to-teal-400",
    bg: "bg-gradient-to-br from-emerald-500/90 to-teal-500/90"
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Mobile Apps",
    category: "Mobile",
    status: "Active",
    progress: 100,
    color: "from-amber-500 to-orange-500",
    bg: "bg-gradient-to-br from-amber-500/90 to-orange-500/90"
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "DevOps & Cloud",
    category: "Infrastructure",
    status: "Active",
    progress: 100,
    color: "from-rose-500 to-pink-500",
    bg: "bg-gradient-to-br from-rose-500/90 to-pink-500/90"
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "AI & Machine Learning",
    category: "AI/ML",
    status: "Active",
    progress: 100,
    color: "from-indigo-500 to-purple-500",
    bg: "bg-gradient-to-br from-indigo-500/90 to-purple-500/90"
  }
];

export function ServicesDisplay() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transform-gpu mr-12`}>
      <div className="relative">
        {/* Modern Services Container */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
          
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 font-orbitron">
                <FiZap className="w-4 h-4" />
                <span>Our Services</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-orbitron">Digital Excellence Solutions</h3>
              <p className="text-gray-600 font-orbitron">Comprehensive services to transform your digital presence</p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {services.map((service, index) => (
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
                  onClick={() => setSelectedService(index)}
                  className={`relative group cursor-pointer transition-all duration-300 rounded-xl p-4 border ${
                    selectedService === index 
                      ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 shadow-lg' 
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.color} text-white shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                      {service.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-orbitron">{service.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{service.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Stats Section */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 font-orbitron">10+</div>
                  <div className="text-sm text-gray-600 font-orbitron">Tech Services</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 font-orbitron">100%</div>
                  <div className="text-sm text-gray-600 font-orbitron">Success Rate</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 font-orbitron">24/7</div>
                  <div className="text-sm text-gray-600 font-orbitron">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

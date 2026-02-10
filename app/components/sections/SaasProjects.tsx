'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaShoppingCart, FaBuilding, FaUtensils, FaPills, FaBox, 
  FaGraduationCap, FaHeart, FaPlane, FaTruck, FaStar, 
  FaCheckCircle, FaArrowRight, FaTerminal
} from 'react-icons/fa'

const saasProjects = [
  {
    id: 'retail',
    title: 'Retail Intelligence',
    description: 'Advanced POS and inventory management for modern retail ecosystems.',
    icon: FaShoppingCart,
    features: ['Real-time Analytics', 'Inventory Logic', 'Multi-store Sync']
  },
  {
    id: 'hospitality',
    title: 'Hospitality Core',
    description: 'Automated booking and operations engine for premium hotel management.',
    icon: FaBuilding,
    features: ['Channel Manager', 'Revenue Logic', 'Guest Portal']
  },
  {
    id: 'healthcare',
    title: 'Health Systems',
    description: 'Compliant pharmacy and clinic management with integrated EHR.',
    icon: FaPills,
    features: ['Patient Records', 'Insurance Bridge', 'Auto-Inventory']
  },
  {
    id: 'logistics',
    title: 'Logistics Fleet',
    description: 'Global supply chain tracking and fleet optimization infrastructure.',
    icon: FaTruck,
    features: ['Route Optimization', 'Live Tracking', 'Vendor API']
  },
  {
    id: 'education',
    title: 'Academic LMS',
    description: 'Comprehensive learning management systems for institutions and schools.',
    icon: FaGraduationCap,
    features: ['Fee Management', 'Parent Portal', 'Online Exams']
  },
  {
    id: 'inventory',
    title: 'Smart Inventory',
    description: 'Warehouse automation with barcode scanning and supply forecasting.',
    icon: FaBox,
    features: ['QR Integration', 'Stock Alerts', 'Forecasting']
  }
]

export function SaasProjects() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="products" className="py-32 bg-[#060B16] font-orbitron text-[#39FF14]">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block border border-[#39FF14] px-4 py-1.5 mb-6 text-[10px] tracking-[0.4em] uppercase opacity-70">
            Enterprise_Solutions.sys
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            SaaS <span className="text-[#39FF14]">Products</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto font-sans">
            Ready-to-deploy enterprise software designed to scale. High-performance architectures tailored for specific industry verticals.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {saasProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-[#0A1221] border border-[#39FF14]/20 p-8 hover:border-[#39FF14] transition-all duration-500 relative flex flex-col">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#39FF14]/10 rounded-sm flex items-center justify-center text-[#39FF14] border border-[#39FF14]/30">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{project.title}</h3>
                  </div>

                  <p className="text-sm opacity-60 font-sans mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[10px] tracking-widest uppercase opacity-80">
                        <FaCheckCircle className="text-[#39FF14] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced Padding Buttons */}
                  <div className="flex gap-4">
                    <button 
                      onClick={scrollToContact}
                      className="flex-1 px-6 py-4 bg-[#39FF14] text-black text-[10px] font-bold tracking-widest hover:bg-white transition-colors"
                    >
                      GET_QUOTE
                    </button>
                    <button 
                      onClick={scrollToContact}
                      className="flex-1 px-6 py-4 border border-[#39FF14]/30 text-white text-[10px] font-bold tracking-widest hover:bg-[#39FF14]/10 transition-colors"
                    >
                      DEMO.exe
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-[#0A1221] border border-[#39FF14]/30 p-12 text-center"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#39FF14]/5 blur-[80px]"></div>
          
          <div className="relative z-10">
            <FaTerminal className="w-12 h-12 mx-auto mb-6 text-[#39FF14] opacity-50" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">
              Need a Custom Architecture?
            </h3>
            <p className="text-lg opacity-60 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
              If your requirements fall outside these modules, I specialize in architecting bespoke digital ecosystems built to your exact specifications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={scrollToContact} 
                className="px-12 py-6 bg-[#39FF14] text-black font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(57,255,20,0.1)]"
              >
                REQUEST CUSTOM BUILD
              </button>
              <button 
                onClick={scrollToContact} 
                className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 border-2 border-[#39FF14] text-[#39FF14] font-bold uppercase text-sm sm:text-base md:text-lg tracking-wide sm:tracking-widest hover:bg-[#39FF14]/10 transition-all"
              >
                CONSULTATION_MODULE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowUp, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { useState } from 'react';
import logo from '../logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060B16] text-white/60 py-16 relative overflow-hidden border-t border-[#39FF14]/10">
      {/* Header-Matched Padding Container */}
      <div className="w-full px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          
          {/* Brand & Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <Image 
                src={logo} 
                alt="Mussawar Hayat" 
                width={200} 
                height={80} 
                className="h-10 sm:h-12 w-auto brightness-0 invert mr-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron tracking-tighter">Mussawar Hayat</h2>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed font-orbitron text-xs sm:text-sm max-w-md">
              Full Stack Web3 Developer building decentralized applications with 5+ years experience. Specialized in smart contract security and high-performance blockchain infrastructure.
            </p>
            
            {/* Contact Info - Professionally Aligned */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14] transition-all">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-orbitron tracking-wide group-hover:text-white transition-colors">zada38843@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14] transition-all">
                  <FiPhone className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-orbitron tracking-wide group-hover:text-white transition-colors">+923358328468</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-white/30">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-orbitron tracking-wide">Office Mehria Town Attock</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-sm font-bold mb-8 font-orbitron uppercase tracking-[0.2em] flex items-center">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full mr-3 shadow-[0_0_8px_#39FF14]"></span>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-4">
                {['Home', 'Skills', 'Process', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-[#39FF14] transition-colors text-xs uppercase tracking-widest font-orbitron">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                <li><Link href="#contact" className="text-white/40 hover:text-[#39FF14] transition-colors text-xs uppercase tracking-widest font-orbitron">Contact</Link></li>
                <li><Link href="https://github.com/khanzada-web" target="_blank" className="text-white/40 hover:text-[#39FF14] transition-colors text-xs uppercase tracking-widest font-orbitron">GitHub</Link></li>
                <li><Link href="https://linkedin.com" target="_blank" className="text-white/40 hover:text-[#39FF14] transition-colors text-xs uppercase tracking-widest font-orbitron">LinkedIn</Link></li>
                <li><Link href="https://twitter.com" target="_blank" className="text-white/40 hover:text-[#39FF14] transition-colors text-xs uppercase tracking-widest font-orbitron">Twitter</Link></li>
              </ul>
            </div>
          </motion.div>
          
          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-sm font-bold mb-8 font-orbitron uppercase tracking-[0.2em]">Connect With Me</h3>
            <div className="flex space-x-4 mb-8">
              {[
                { icon: <FiTwitter />, href: "https://twitter.com/Mussawar_Hayat" },
                { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/mussawar-hayat-187768233" },
                { icon: <FiGithub />, href: "https://github.com/khanzada-web" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 shadow-xl"
                  whileHover={{ y: -5, backgroundColor: "rgba(57,255,20,0.05)" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-white/40 text-xs font-orbitron leading-relaxed italic border-l-2 border-[#39FF14]/30 pl-4">
              "Building the future of the decentralized web, one block at a time."
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/5 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-orbitron">
              © {currentYear} <span className="text-white/60">Mussawar Hayat</span>. All rights reserved.
            </p>
            
            <div className="flex space-x-8">
              <button className="text-white/30 hover:text-[#39FF14] text-[10px] uppercase tracking-widest transition-colors font-orbitron">Terms</button>
              <button className="text-white/30 hover:text-[#39FF14] text-[10px] uppercase tracking-widest transition-colors font-orbitron">Privacy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#39FF14] text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiArrowUp className="w-5 h-5 stroke-[3]" />
      </motion.button>
    </footer>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '../logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#060B16]/95 backdrop-blur-xl border-b border-[#39FF14]/20 py-4' 
        : 'bg-transparent py-7'
    }`}>
      <div className="w-full px-4 sm:px-8"> 
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group font-orbitron font-bold transition-all duration-300">
              <div className="relative">
                <Image 
                  src={logo} 
                  alt="Mussawar Hayat" 
                  width={200} 
                  height={75} 
                  className="h-12 sm:h-14 w-auto brightness-0 invert transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
                  priority
                />
              </div>
              <span className="hidden sm:inline ml-3 text-white tracking-tighter text-xl group-hover:text-[#39FF14] transition-colors duration-300">Mussawar Hayat</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7"> 
            {['Home', 'About', 'Services', 'Process', 'Portfolio', 'Testimonials'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="font-orbitron text-[11px] uppercase tracking-widest text-white/60 hover:text-[#39FF14] transition-all duration-300 relative group py-2"
              >
                {item}
                {/* Green Highlight Line */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#39FF14] shadow-[0_0_8px_#39FF14] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link 
              href="#contact" 
              className="font-orbitron text-[11px] uppercase tracking-widest border border-[#39FF14] text-[#39FF14] px-6 py-3 font-bold hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all duration-300 ml-4"
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#39FF14] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between items-end">
              <span className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></span>
              <span className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden bg-[#060B16] border-t border-[#39FF14]/10 ${
          isMenuOpen ? 'max-h-screen py-10 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-6 px-4 text-center">
            {['Home', 'About', 'Services', 'Process', 'Portfolio', 'Testimonials'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="font-orbitron text-[13px] uppercase tracking-[0.25em] text-white/70 hover:text-[#39FF14]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="font-orbitron text-[12px] uppercase tracking-[0.2em] border border-[#39FF14] text-[#39FF14] py-4 font-bold mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-white via-white to-gray-50/95 backdrop-blur-lg shadow-md z-50 border-b border-gray-200/50">
      <div className="w-full px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group font-orbitron font-bold text-xl sm:text-2xl text-gray-900 transition-all duration-300 hover:scale-105">
              <Image 
                src={logo} 
                alt="Mussawar Hayat" 
                width={300} 
                height={110} 
                className="h-16 sm:h-20 w-auto transition-all duration-500 group-hover:rotate--3 group-hover:scale-110"
                priority
              />
              <span className="-ml-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-800 hidden sm:inline">Mussawar Hayat</span>
              <span className="-ml-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-800 sm:hidden">MH</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              href="#home" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-gray-100/50"
            >
              Home
              <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#about" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-gray-100/50"
            >
              About
              <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
           
            <Link 
              href="#services" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-gray-100/50"
            >
              Services
              <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#process" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-gray-100/50"
            >
              Process
              <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link 
              href="#portfolio" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-gray-100/50"
            >
              Portfolio
              <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#testimonials" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg hover:bg-gray-100/50"
            >
              Testimonials
              <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative">
              <Link 
                href="#contact" 
                className="font-orbitron bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-[50px] font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-900/25"
              >
                Contact
              </Link>
              <div className="absolute inset-0 rounded-[50px] bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
            </div>
          </nav>
          
          <button 
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-lg hover:bg-gray-100/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} style={{width: '100%', height: '2px', backgroundColor: 'currentColor', transformOrigin: 'center'}}></span>
              <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} top-3`} style={{width: '100%', height: '2px', backgroundColor: 'currentColor', transformOrigin: 'center'}}></span>
              <span className={`absolute transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} style={{width: '100%', height: '2px', backgroundColor: 'currentColor', transformOrigin: 'center'}}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 py-4 sm:py-6' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-2 sm:space-y-3 px-2 sm:px-4">
            <Link 
              href="#home" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-100/50 transform hover:translate-x-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100/50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#portfolio" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100/50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="#services" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100/50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#process" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100/50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link 
              href="#testimonials" 
              className="font-orbitron text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100/50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <div className="pt-4">
              <Link 
                href="#contact" 
                className="font-orbitron bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 rounded-[50px] font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-900/25 w-full text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

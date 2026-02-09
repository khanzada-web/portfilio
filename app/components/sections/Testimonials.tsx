'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiShield, FiCheckCircle } from 'react-icons/fi';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Mussawar's Web3 frontend expertise transformed our DeFi platform. The wallet integration and user interface are exceptional.",
      author: "Alex Thompson",
      role: "CEO, Adderals",
      rating: 5,
      status: "VERIFIED_PARTNER"
    },
    {
      quote: "His React and Web3.js skills are outstanding. He delivered our NFT marketplace with seamless blockchain integration.",
      author: "Michael Chen",
      role: "Product Lead, Soft Stake",
      rating: 5,
      status: "CORE_CONTRIBUTOR"
    },
    {
      quote: "Working with Mussawar on our Web3 project was incredible. His full-stack capabilities and design sense are top-notch.",
      author: "James Rodriguez",
      role: "CTO, RPG Market",
      rating: 5,
      status: "EXTERNAL_AUDIT"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      id="testimonials" 
      className="py-32 bg-[#060B16] relative overflow-hidden font-orbitron text-[#39FF14]"
    >

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-[#39FF14]/30 bg-[#39FF14]/5 text-[10px] tracking-[0.4em] uppercase font-bold">
            <FiShield className="animate-pulse" /> Social_Proof_Protocol
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase">
            Client <span className="text-[#39FF14]">Reviews</span>
          </h2>
        </div>

        {/* Testimonial Display */}
        <div className="relative bg-[#0A1221]/50 border border-[#39FF14]/20 backdrop-blur-sm p-10 md:p-20">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#39FF14]/5 flex items-center justify-center border-b border-l border-[#39FF14]/20">
            <FiStar className="text-[#39FF14] animate-spin-slow" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="inline-block text-[9px] font-bold bg-[#39FF14] text-black px-3 py-1 tracking-[0.2em] uppercase">
                {testimonials[currentIndex].status}
              </div>

              <blockquote className="text-2xl md:text-4xl text-white font-bold leading-tight italic drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="pt-6">
                <p className="text-xl font-bold text-[#39FF14] uppercase tracking-tighter">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mt-2">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 md:-left-8 md:-right-8">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-3 border border-[#39FF14]/30 bg-[#060B16] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-3 border border-[#39FF14]/30 bg-[#060B16] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 ${
                i === currentIndex ? 'w-16 bg-[#39FF14]' : 'w-4 bg-[#39FF14]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
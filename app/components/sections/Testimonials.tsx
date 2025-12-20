'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiStar, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      quote: "Mussawar's Web3 frontend expertise transformed our DeFi platform. The wallet integration and user interface are exceptional.",
      author: "Alex Thompson",
      role: "CEO, Adderals",
      rating: 5,
      company: "DeFi Platform"
    },
    {
      quote: "His React and Web3.js skills are outstanding. He delivered our NFT marketplace with seamless blockchain integration.",
      author: "Michael Chen",
      role: "Product Lead, Soft Stake",
      rating: 5,
      company: "Staking Platform"
    },
    {
      quote: "Working with Mussawar on our Web3 project was incredible. His full-stack capabilities and design sense are top-notch.",
      author: "James Rodriguez",
      role: "CTO, RPG Market",
      rating: 5,
      company: "Gaming Platform"
    },
    {
      quote: "His Node.js backend and Web3 integration skills helped us scale our dApp to handle 100k+ users. Exceptional performance.",
      author: "Sarah Williams",
      role: "Engineering Manager, Meltdown",
      rating: 5,
      company: "Trading Platform"
    },
    {
      quote: "The UI/UX design for our Web3 application exceeded expectations. User engagement increased by 200%.",
      author: "David Kim",
      role: "Head of Product, YinYang",
      rating: 5,
      company: "DeFi Solutions"
    },
    {
      quote: "Mussawar's Web3 development expertise and leadership brought our decentralized project to life. Highly recommend!",
      author: "Lisa Martinez",
      role: "Founder, Web3 Ventures",
      rating: 5,
      company: "Blockchain Solutions"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
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
            <FiMessageSquare className="w-4 h-4" />
            <span>Web3 Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-orbitron leading-tight">
            <span className="block text-gray-900 mb-2">What Web3</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-orbitron max-w-2xl mx-auto">
            Here's what Web3 projects and clients have to say about working with Mussawar.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Featured Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-blue-200">
                  <FiMessageSquare className="w-16 h-16" />
                </div>
                
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl text-gray-700 text-center mb-8 font-orbitron leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900 font-orbitron">{testimonials[currentIndex].author}</p>
                      <p className="text-gray-600 font-orbitron">{testimonials[currentIndex].role}</p>
                      <p className="text-sm text-blue-600 font-orbitron mt-1">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                <FiChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                <FiChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid of Additional Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 font-orbitron line-clamp-3">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 text-sm font-orbitron">{testimonial.author}</p>
                    <p className="text-xs text-gray-600 font-orbitron">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl"></div>
            <a 
              href="#contact" 
              className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-orbitron"
            >
              <span>Start Your Web3 Project</span>
              <FiArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

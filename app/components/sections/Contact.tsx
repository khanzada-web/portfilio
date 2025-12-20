'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 font-orbitron">
            <FiSend className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-orbitron leading-tight">
            <span className="block text-gray-900 mb-2">Let's Work</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-orbitron max-w-2xl mx-auto px-4">
            Have a project in mind? We'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

          <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-orbitron">Get in Touch</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="group flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <FiMail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg font-orbitron mb-1">Email</p>
                      <p className="text-gray-600 font-orbitron">zada38843@gmail.com</p>
                      <p className="text-sm text-blue-600 font-orbitron mt-1">Available 24/7</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <FiPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg font-orbitron mb-1">Phone</p>
                      <p className="text-gray-600 font-orbitron">+923358328468</p>
                      <p className="text-sm text-purple-600 font-orbitron mt-1">Available for meetings</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <FiMapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg font-orbitron mb-1">Office</p>
                      <p className="text-gray-600 font-orbitron">Office Mehria Town Attock</p>
                      <p className="text-sm text-pink-600 font-orbitron mt-1">Available for meetings</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-white/20"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-orbitron">Why Work With Me?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600 font-orbitron">
                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>5+ years Web3 development experience</span>
                  </li>
                  <li className="flex items-center text-gray-600 font-orbitron">
                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Expert in React, Next.js & Web3.js</span>
                  </li>
                  <li className="flex items-center text-gray-600 font-orbitron">
                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Full-stack development capabilities</span>
                  </li>
                  <li className="flex items-center text-gray-600 font-orbitron">
                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>UI/UX design expertise</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-orbitron">Send us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 font-orbitron">Message Sent Successfully!</h4>
                    <p className="text-gray-600 font-orbitron">Thank you for contacting me! I've received your message and will get back to you within 24 hours. A confirmation email has been sent to your inbox.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2 font-orbitron">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-orbitron placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2 font-orbitron">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-orbitron placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-2 font-orbitron">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-orbitron placeholder-gray-400 resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-orbitron flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <FiSend className="w-5 h-5" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

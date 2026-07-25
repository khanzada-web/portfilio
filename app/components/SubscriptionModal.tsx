'use client';

import { useState } from 'react';
import { FiX } from 'react-icons/fi';

export function SubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => {
        setIsOpen(false);
        setMessage('');
      }, 3000);
    }, 1000);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-[#39FF14] text-black font-orbitron font-bold rounded-lg hover:bg-[#39FF14]/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]"
      >
        Subscribe to Newsletter
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#060B16] border border-[#39FF14]/30 rounded-lg p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Stay Updated with <span className="text-[#39FF14]">Tech Trends</span>
            </h3>

            <p className="text-gray-400 mb-6">
              Get the latest insights on full-stack development, React, Next.js, Web3 integration,
              performance optimisation, and emerging tech trends.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-gray-900/20 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#39FF14] focus:outline-none transition-colors"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#39FF14] text-black font-orbitron font-bold rounded-lg hover:bg-[#39FF14]/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {message && (
              <div className="mt-4 p-3 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-lg text-[#39FF14]">
                {message}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

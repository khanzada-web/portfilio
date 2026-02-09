'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiShield, FiLock } from 'react-icons/fi';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating API call logic
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-32 bg-[#060B16] relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-[#39FF14]/30 bg-[#39FF14]/5 text-[10px] tracking-[0.4em] uppercase font-bold">
            <FiLock className="animate-pulse" /> Secure_Uplink_Established
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase">
            Contact <span className="text-[#39FF14]">Protocol</span>
          </h2>
          <p className="text-lg text-[#39FF14]/70 max-w-2xl mx-auto leading-relaxed lowercase">
            // initialization of direct communication channel for web3 architecture and smart contract development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#39FF14]/20 border border-[#39FF14]/20">
            
            {/* Left Side: Node Metadata */}
            <div className="bg-[#0A1221] p-8 md:p-12 space-y-10">
              <h3 className="text-2xl font-bold text-white uppercase flex items-center gap-3">
                <FiShield className="text-[#39FF14]" /> Node_Metadata
              </h3>
              
              <div className="space-y-8">
                {[
                  { icon: FiMail, label: 'Email_Uplink', val: 'zada38843@gmail.com', color: 'blue' },
                  { icon: FiPhone, label: 'Direct_Line', val: '+92 335 8328468', color: 'purple' },
                  { icon: FiMapPin, label: 'Base_Ops', val: 'Mehria Town, Attock, PK', color: 'pink' }
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#39FF14]/5 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#39FF14]/50 uppercase tracking-widest">{item.label}</p>
                      <p className="text-white font-bold text-lg mt-1 group-hover:text-[#39FF14] transition-colors lowercase">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Verification Tag */}
              <div className="pt-10 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-4 text-white/30 text-[9px] uppercase font-bold tracking-[0.3em]">
                  <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping"></div>
                  Encryption_Active: AES-256
                </div>
              </div>
            </div>

            {/* Right Side: Secure Form */}
            <div className="bg-[#0A1221] p-8 md:p-12 relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <FiCheckCircle className="text-[#39FF14] w-20 h-20 mb-6" />
                  <h3 className="text-2xl font-bold text-white uppercase">Data_Received</h3>
                  <p className="text-white/60 mt-4 max-w-[280px] lowercase text-sm">
                    transmission successful. uplink response scheduled within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-[10px] font-bold text-[#39FF14] uppercase mb-2 block tracking-widest">Identity_Tag</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="NAME"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#39FF14] outline-none transition-all placeholder:text-white/10"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#39FF14] uppercase mb-2 block tracking-widest">Uplink_Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="EMAIL@PROTOCOL.COM"
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#39FF14] outline-none transition-all placeholder:text-white/10"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#39FF14] uppercase mb-2 block tracking-widest">Message_Payload</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="PROJECT SPECIFICATIONS..."
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#39FF14] outline-none resize-none transition-all placeholder:text-white/10"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#39FF14] text-black py-5 font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)]"
                  >
                    {isSubmitting ? 'TRANSMITTING...' : 'INITIALIZE_SEND'}
                    <FiSend />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
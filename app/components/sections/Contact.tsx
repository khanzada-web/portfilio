'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiShield, FiClock, FiAlertCircle, FiTerminal } from 'react-icons/fi';

type FormData = { name: string; email: string; message: string };
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const CONTACT_INFO = [
  { icon: FiMail,   label: 'Email', value: 'zada38843@gmail.com',    href: 'mailto:zada38843@gmail.com'  },
  { icon: FiPhone,  label: 'Phone / WhatsApp',  value: '+92 335 8328468',         href: 'tel:+923358328468'            },
  { icon: FiMapPin, label: 'Location',    value: 'Attock, Pakistan (Remote worldwide)',  href: null                          },
] as const;

const INITIAL_FORM: FormData = { name: '', email: '', message: '' };

export function Contact() {
  const [formData,    setFormData]    = useState<FormData>(INITIAL_FORM);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const res    = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setFormData(INITIAL_FORM);
        setSubmitStatus('success');
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const isSubmitting = submitStatus === 'submitting';

  return (
    <section
      id="contact"
      className="py-28 bg-[#030712] relative overflow-hidden font-orbitron text-white"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase">
            <FiTerminal className="animate-pulse" aria-hidden="true" />
            <span>Contact_Protocol.sys</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Let&apos;s Talk About <span className="text-[#39FF14]">Your Project</span>
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-sans">
            Tell me what you are building. I will confirm fit, timeline, and the best engagement model
            (fixed-price, hourly, or retainer). Remote work for North America & Europe clients.
            GDPR-compliant infrastructure available when needed.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Box: Contact Details */}
            <div className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 space-y-8 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white uppercase flex items-center gap-3 mb-8 tracking-tight font-mono">
                  <FiShield className="text-[#39FF14]" aria-hidden="true" />
                  Contact Details
                </h3>

                <ul className="space-y-6">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="group flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all shadow-md shrink-0">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-white font-bold text-base mt-1 group-hover:text-[#39FF14] transition-colors block font-sans"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-white font-bold text-base mt-1 group-hover:text-[#39FF14] transition-colors font-sans">
                            {value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-3">
                <p className="text-white/60 text-xs font-sans leading-relaxed">
                  Prefer a quick chat? Mention your preferred time zone and I will schedule a short call.
                </p>
                <div className="flex items-center gap-3 text-white/40 text-[9px] uppercase font-mono font-bold tracking-[0.2em]">
                  <div className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" aria-hidden="true" />
                  Response target: under 24 hours on business days
                </div>
              </div>
            </div>

            {/* Right Box: Form / Status */}
            <div className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 relative shadow-xl flex flex-col justify-center">

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                  role="status"
                  aria-live="polite"
                >
                  <FiCheckCircle className="text-[#39FF14] w-16 h-16 mb-5 shadow-[0_0_20px_rgba(57,255,20,0.3)] rounded-full" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Message Received</h3>
                  <p className="text-white/70 mt-3 max-w-[300px] text-sm font-sans leading-relaxed">
                    Thanks for reaching out. I will reply within 24 hours with next steps.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/40 text-red-400 px-4 py-3 rounded-lg mb-6 text-xs uppercase tracking-wider font-mono"
                  role="alert"
                  aria-live="assertive"
                >
                  <FiAlertCircle aria-hidden="true" />
                  <span>Something went wrong — please try again or email me directly.</span>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="ml-auto text-red-300 hover:text-white transition-colors"
                    aria-label="Dismiss error"
                  >
                    ✕
                  </button>
                </motion.div>
              )}

              {submitStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="text-[10px] font-mono font-bold text-white/60 uppercase mb-2 block tracking-widest">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-[#39FF14]/60 focus:bg-white/[0.05] outline-none transition-all placeholder:text-white/25 font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-[10px] font-mono font-bold text-white/60 uppercase mb-2 block tracking-widest">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-[#39FF14]/60 focus:bg-white/[0.05] outline-none transition-all placeholder:text-white/25 font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-[10px] font-mono font-bold text-white/60 uppercase mb-2 block tracking-widest">
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={10}
                      rows={4}
                      placeholder="Briefly describe the project, timeline, and any tech preferences..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3.5 text-white text-sm focus:border-[#39FF14]/60 focus:bg-white/[0.05] outline-none resize-none transition-all placeholder:text-white/25 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full bg-[#39FF14] text-black py-4 rounded-lg font-bold uppercase tracking-[0.25em] text-xs flex items-center justify-center gap-3 hover:bg-white hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FiSend aria-hidden="true" />
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
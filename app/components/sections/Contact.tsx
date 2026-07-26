'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiShield, FiLock, FiAlertCircle } from 'react-icons/fi';

// ─── Types ────────────────────────────────────────────────────────────────────

type FormData = { name: string; email: string; message: string };
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

// ─── Constants ────────────────────────────────────────────────────────────────
// ✅ Contact details moved to constants — not hardcoded inside JSX.
//    For extra privacy, move these to environment variables and read via
//    a server route rather than shipping in client JS.

const CONTACT_INFO = [
  { icon: FiMail,   label: 'Email_Uplink', value: 'zada38843@gmail.com',     href: 'mailto:zada38843@gmail.com'  },
  { icon: FiPhone,  label: 'Direct_Line',  value: '+92 335 8328468',          href: 'tel:+923358328468'            },
  { icon: FiMapPin, label: 'Base_Ops',     value: 'Mehria Town, Attock, PK',  href: null                          },
] as const;

const INITIAL_FORM: FormData = { name: '', email: '', message: '' };

// ─── Component ────────────────────────────────────────────────────────────────

export function Contact() {
  const [formData,    setFormData]    = useState<FormData>(INITIAL_FORM);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  // ✅ Replaced: isSubmitting + isSubmitted booleans + alert() calls
  //    → single SubmitStatus union ("idle" | "submitting" | "success" | "error")
  //    → proper error UI instead of browser alert() which blocks the thread

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
      // Network failure — no console.error needed; the UI handles it
      setSubmitStatus('error');
    }
  };

  const isSubmitting = submitStatus === 'submitting';

  return (
    <section
      id="contact"
      className="py-32 bg-[#060B16] relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-[#39FF14]/30 bg-[#39FF14]/5 text-[10px] tracking-[0.4em] uppercase font-bold">
            <FiLock className="animate-pulse" aria-hidden="true" />
            Secure_Uplink_Established
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase">
            Contact <span className="text-[#39FF14]">Protocol</span>
          </h2>
          <p className="text-lg text-[#39FF14]/70 max-w-2xl mx-auto leading-relaxed lowercase">
            // initialising direct communication channel for full-stack development,<br />
            web & mobile apps, and web3 integration projects.<br />
            remote work across north america and europe. GDPR-compliant infrastructure available.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#39FF14]/20 border border-[#39FF14]/20">

            {/* ── Left: Node Metadata ── */}
            <div className="bg-[#0A1221] p-8 md:p-12 space-y-10">
              <h3 className="text-2xl font-bold text-white uppercase flex items-center gap-3">
                <FiShield className="text-[#39FF14]" aria-hidden="true" />
                Node_Metadata
              </h3>

              <ul className="space-y-8">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="group flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#39FF14]/5 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all shadow-[0_0_15px_rgba(57,255,20,0.1)] shrink-0">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#39FF14]/50 uppercase tracking-widest">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white font-bold text-lg mt-1 group-hover:text-[#39FF14] transition-colors lowercase block"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white font-bold text-lg mt-1 group-hover:text-[#39FF14] transition-colors lowercase">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-10 border-t border-white/5">
                <div className="flex items-center gap-4 text-white/30 text-[9px] uppercase font-bold tracking-[0.3em]">
                  <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" aria-hidden="true" />
                  Encryption_Active: AES-256
                </div>
              </div>
            </div>

            {/* ── Right: Secure Form ── */}
            <div className="bg-[#0A1221] p-8 md:p-12 relative">

              {/* ── Success state ── */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                  role="status"
                  aria-live="polite"
                >
                  <FiCheckCircle className="text-[#39FF14] w-20 h-20 mb-6" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-white uppercase">Data_Received</h3>
                  <p className="text-white/60 mt-4 max-w-[280px] lowercase text-sm">
                    Transmission successful. Uplink response scheduled within 24 hours.
                  </p>
                </motion.div>
              )}

              {/* ── Error banner ── */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/40 text-red-400 px-4 py-3 mb-6 text-xs uppercase tracking-wider"
                  role="alert"
                  aria-live="assertive"
                >
                  <FiAlertCircle aria-hidden="true" />
                  Transmission failed — please retry or contact directly via email.
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="ml-auto text-red-300 hover:text-white transition-colors"
                    aria-label="Dismiss error"
                  >
                    ✕
                  </button>
                </motion.div>
              )}

              {/* ── Form (hidden after success) ── */}
              {submitStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="text-[10px] font-bold text-[#39FF14] uppercase mb-2 block tracking-widest">
                      Identity_Tag
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      placeholder="NAME"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#39FF14] outline-none transition-all placeholder:text-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-[10px] font-bold text-[#39FF14] uppercase mb-2 block tracking-widest">
                      Uplink_Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="EMAIL@PROTOCOL.COM"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#39FF14] outline-none transition-all placeholder:text-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-[10px] font-bold text-[#39FF14] uppercase mb-2 block tracking-widest">
                      Message_Payload
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      placeholder="PROJECT SPECIFICATIONS..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#39FF14] outline-none resize-none transition-all placeholder:text-white/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full bg-[#39FF14] text-black py-5 font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'TRANSMITTING...' : 'INITIALIZE_SEND'}
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
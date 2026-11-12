'use client';

import { AnimatePresence, m } from 'framer-motion';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FiAlertCircle, FiCheckCircle, FiSend } from 'react-icons/fi';
import { fadeUp, scaleIn } from '@/app/lib/motion';
import { Magnetic } from '../motion/Magnetic';

type FormData = { name: string; email: string; message: string };
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM: FormData = { name: '', email: '', message: '' };
const SUCCESS_RESET_MS = 6000;

const FIELD =
  'w-full rounded-lg border border-white/10 bg-white/[0.03] p-3.5 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-neon/60 focus:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-neon/40';
const LABEL = 'mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-white/70';

/** Contact form posting to /api/contact, with animated success and error states. */
export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result: { success?: boolean } = await res.json();
      if (res.ok && result.success) {
        setFormData(INITIAL_FORM);
        setStatus('success');
        setTimeout(() => setStatus('idle'), SUCCESS_RESET_MS);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'success' ? (
        <m.div
          key="success"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex h-full flex-col items-center justify-center py-16 text-center"
          role="status"
          aria-live="polite"
        >
          <FiCheckCircle className="mb-5 h-16 w-16 rounded-full text-neon shadow-[0_0_20px_rgba(57,255,20,0.3)]" aria-hidden="true" />
          <h3 className="text-xl font-bold uppercase tracking-tight text-white">Message Received</h3>
          <p className="mt-3 max-w-[300px] font-sans text-sm leading-relaxed text-white/75">
            Thanks for reaching out. I will reply within 24 hours with next steps.
          </p>
        </m.div>
      ) : (
        <m.div key="form" variants={fadeUp} initial="hidden" animate="visible" exit="hidden">
          <AnimatePresence initial={false}>
            {status === 'error' && (
              <m.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="mb-6 flex items-center gap-3 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 font-mono text-xs uppercase tracking-wider text-red-300"
                role="alert"
              >
                <FiAlertCircle aria-hidden="true" />
                <span>Something went wrong — please try again or email me directly.</span>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="ml-auto p-2 text-red-300 transition-colors hover:text-white"
                  aria-label="Dismiss error"
                >
                  ✕
                </button>
              </m.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="contact-name" className={LABEL}>
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={2}
                autoComplete="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={LABEL}>
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={LABEL}>
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
                className={`${FIELD} resize-none`}
              />
            </div>

            <Magnetic className="mt-2 w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="btn-neon w-full py-4 text-xs tracking-[0.25em] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FiSend aria-hidden="true" />
              </button>
            </Magnetic>
          </form>
        </m.div>
      )}
    </AnimatePresence>
  );
}

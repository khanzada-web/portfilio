'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiDatabase, FiCpu, FiLock, FiActivity } from 'react-icons/fi';

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '40+', label: 'Projects Deployed' },
  { value: '15+', label: 'Global Clients' },
] as const;

const NODES = [
  { icon: <FiLock />,     label: 'Security', pos: 'top-0 left-1/2 -translate-x-1/2' },
  { icon: <FiCpu />,      label: 'Compute',  pos: 'bottom-8 right-2'               },
  { icon: <FiGlobe />,    label: 'Network',  pos: 'bottom-8 left-2'                },
] as const;

const TERMINAL_ROWS = [
  { label: 'System', value: 'OPERATIONAL' },
  { label: 'Uptime', value: '99.98%'      },
  { label: 'Node_ID', value: 'PK_782X'   },
  { label: 'Traffic', value: 'AES_256'   },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function GlobalImpact() {
  return (
    <section
      id="global-impact"
      className="bg-[#030712] py-28 relative overflow-hidden font-orbitron text-white"
    >
      {/* Ambient Background Gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Heading & Metrics ── */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 border border-[#39FF14]/40 bg-[#39FF14]/5 px-3.5 py-1.5 mb-6 rounded-md text-xs tracking-[0.25em] text-[#39FF14] uppercase"
              >
                <FiActivity className="animate-pulse" aria-hidden="true" />
                <span>Global Infrastructure</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
              >
                Scale Without <br />
                <span className="text-[#39FF14]">Boundaries.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm md:text-base font-sans leading-relaxed max-w-lg"
            >
              From decentralized protocols to enterprise SaaS platforms, production systems are engineered and deployed across global edge networks—delivering ultra-low latency, high availability, and reliable performance worldwide.
            </motion.p>

            {/* Stats Cards */}
            <dl className="grid grid-cols-2 gap-6 pt-4">
              {STATS.map(({ value, label }) => (
                <div 
                  key={label} 
                  className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-[#39FF14]/40 transition-all group"
                >
                  <dd className="text-3xl font-extrabold text-white font-mono group-hover:text-[#39FF14] transition-colors mb-1">
                    {value}
                  </dd>
                  <dt className="text-[11px] uppercase tracking-wider text-white/50 font-medium font-sans">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* ── Right: Node Visualization & Terminal Overlay ── */}
          <div className="relative flex justify-center items-center py-6">
            <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">

              {/* Rotating outer rings */}
              <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="w-72 h-72 border border-white/10 rounded-full flex justify-center items-center"
                  aria-hidden="true"
                >
                  <div className="w-52 h-52 border border-[#39FF14]/20 rounded-full border-dashed animate-[spin_20s_linear_infinite_reverse]" />
                </motion.div>

                {/* Central Glass Hub */}
                <div className="absolute p-6 bg-[#0B132B]/80 backdrop-blur-md border border-[#39FF14]/40 rounded-2xl shadow-[0_0_35px_rgba(57,255,20,0.15)] flex items-center justify-center">
                  <FiDatabase className="text-[#39FF14] text-3xl" aria-hidden="true" />
                </div>
              </div>

              {/* Orbiting nodes */}
              {NODES.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2, type: 'spring' }}
                  viewport={{ once: true }}
                  className={`absolute ${node.pos} flex flex-col items-center gap-2 z-10 group`}
                >
                  <div className="w-13 h-13 bg-[#0B132B]/90 backdrop-blur-md border border-white/15 rounded-xl flex items-center justify-center text-[#39FF14] shadow-lg group-hover:border-[#39FF14] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.25)] transition-all p-3.5">
                    <div className="text-xl group-hover:scale-110 transition-transform" aria-hidden="true">
                      {node.icon}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold group-hover:text-[#39FF14] transition-colors">
                    {node.label}
                  </span>
                </motion.div>
              ))}

              {/* Floating Terminal Overlay */}
              <motion.aside
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                aria-label="System status"
                className="absolute -top-2 -right-2 md:top-2 md:right-2 bg-black/80 backdrop-blur-md border border-white/15 p-4 rounded-xl font-mono text-xs space-y-2 z-20 shadow-2xl min-w-[200px]"
              >
                {TERMINAL_ROWS.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-6 ${i > 0 ? 'border-t border-white/10 pt-2' : ''}`}
                  >
                    {i === 0 ? (
                      <>
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse shadow-[0_0_8px_#39FF14]" aria-hidden="true" />
                          <span className="text-white/50 text-[10px] uppercase">{label}</span>
                        </span>
                        <span className="text-[#39FF14] font-bold text-[11px]">{value}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-white/50 text-[10px] uppercase">{label}</span>
                        <span className="text-white/90 text-[11px] font-semibold">{value}</span>
                      </>
                    )}
                  </div>
                ))}
              </motion.aside>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Subtle Divider */}
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
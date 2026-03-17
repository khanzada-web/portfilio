'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiDatabase, FiCpu, FiLock } from 'react-icons/fi';

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '100+', label: 'Projects Live'   },
  { value: '20+',  label: 'Countries Reached' },
] as const;

const NODES = [
  { icon: <FiLock />,     label: 'Security', pos: 'top-0 left-1/2 -translate-x-1/2' },
  { icon: <FiCpu />,      label: 'Compute',  pos: 'bottom-12 right-0'               },
  { icon: <FiGlobe />,    label: 'Network',  pos: 'bottom-12 left-0'                },
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
      className="bg-[#060B16] py-24 relative overflow-hidden font-orbitron text-[#39FF14]"
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Heading & Stats ── */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="h-[1px] w-12 bg-[#39FF14]" aria-hidden="true" />
                <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase">
                  Global_Deployment
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight"
              >
                Scale Without <br />
                <span className="text-[#39FF14]">Boundaries.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/50 text-base leading-relaxed lowercase tracking-wider max-w-md"
            >
              From decentralized protocols to enterprise SaaS, I've deployed 100+ systems across
              global edge networks — ensuring low-latency access and 99.9% uptime for users worldwide.
            </motion.p>

            {/* Stats */}
            <dl className="grid grid-cols-2 gap-6 pt-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="border-l-2 border-[#39FF14]/30 pl-4 group">
                  <dt className="text-[10px] uppercase tracking-widest text-[#39FF14]/60 font-bold order-last">
                    {label}
                  </dt>
                  {/* ✅ <dl>/<dt>/<dd> used — semantically correct for labelled stats */}
                  <dd className="text-3xl font-bold text-white font-mono group-hover:text-[#39FF14] transition-colors">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ── Right: Node Visualisation ── */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-[420px]">

              {/* Rotating outer ring */}
              <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="w-64 h-64 border border-[#39FF14]/10 rounded-full flex justify-center items-center"
                  aria-hidden="true"
                >
                  <div className="w-48 h-48 border border-[#39FF14]/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                </motion.div>

                {/* Central icon */}
                <div className="absolute p-6 bg-[#060B16] border border-[#39FF14]/40 rounded-full shadow-[0_0_30px_rgba(57,255,20,0.2)]">
                  <FiDatabase className="text-[#39FF14] text-4xl" aria-hidden="true" />
                </div>
              </div>

              {/* Orbiting nodes */}
              {NODES.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.3, type: 'spring' }}
                  viewport={{ once: true }}
                  className={`absolute ${node.pos} flex flex-col items-center gap-2 z-10 group`}
                >
                  <div className="w-14 h-14 bg-[#060B16] border border-[#39FF14]/30 rounded-xl flex items-center justify-center text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.1)] group-hover:border-[#39FF14] group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all">
                    <div className="group-hover:scale-110 transition-transform" aria-hidden="true">
                      {node.icon}
                    </div>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold group-hover:text-[#39FF14] transition-colors">
                    {node.label}
                  </span>
                  <div className="w-[1px] h-10 bg-gradient-to-t from-[#39FF14]/30 to-transparent" aria-hidden="true" />
                </motion.div>
              ))}
            </div>

            {/* Terminal overlay */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              aria-label="System status"
              className="absolute top-0 right-0 bg-black/80 backdrop-blur-md border border-[#39FF14]/20 p-5 rounded-sm font-mono text-[9px] space-y-2 z-20 shadow-2xl"
            >
              {TERMINAL_ROWS.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`flex items-center justify-between gap-8 ${i > 0 ? 'border-t border-white/5 pt-2' : ''}`}
                >
                  {i === 0 ? (
                    // First row has a live indicator dot
                    <>
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse shadow-[0_0_5px_#39FF14]" aria-hidden="true" />
                        <span className="text-white/40 uppercase">{label}:</span>
                      </span>
                      <span className="text-[#39FF14]">{value}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white/40 uppercase">{label}:</span>
                      <span className={`text-[#39FF14] ${i === 3 ? 'text-[8px] opacity-50' : ''}`}>{value}</span>
                    </>
                  )}
                </div>
              ))}
            </motion.aside>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
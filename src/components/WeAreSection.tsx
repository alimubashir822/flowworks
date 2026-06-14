'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '500k+', label: 'API Calls Processed' },
  { value: '98%', label: 'Average Client Retention' },
  { value: '45+', label: 'Custom Systems Deployed' },
  { value: '24/7', label: 'Autonomous Uptime' },
];

export default function WeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false });

  return (
    <section
      id="weare"
      ref={sectionRef}
      className="bg-dark-grid-subtle py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* Left Column: Creative Image Illustration */}
        <div className="lg:col-span-6 w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full h-[518px] flex items-center justify-center"
          >
            {/* Slow Floating Motion Wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,210,255,0.18)] bg-black/40 group cursor-none"
            >
              {/* Operations Scale Image */}
              <img 
                src="/operations-scale.png" 
                alt="FlowWorks AI Operations Automation Flow"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D2FF]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none" />

              {/* FLOATING METRIC OVERLAYS */}
              
              {/* Overlay 1: Live Status tag */}
              <div className="absolute top-[12%] left-[8%] glass-panel px-3 py-1.5 rounded-xl border border-white/10 shadow-2xl flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
                </span>
                <span className="text-[9px] font-mono text-gray-300 uppercase tracking-widest leading-none">
                  AI Pipeline: Active
                </span>
              </div>

              {/* Overlay 2: Efficiency Metric Box */}
              <div className="absolute bottom-[12%] right-[8%] glass-panel px-4 py-2.5 rounded-xl border border-white/10 shadow-2xl space-y-1 transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider block">Operational Scale</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-display font-bold text-[#10B981]">+380%</span>
                  <span className="text-[8px] text-gray-400 font-sans font-light">Efficiency Gain</span>
                </div>
              </div>

              {/* Custom border highlight inside the container */}
              <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-white/15 transition-all duration-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Copy & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="lg:col-span-6 space-y-8"
        >
          <div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
              Our Capabilities
            </p>
            <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none uppercase">
              Automating manual operations to unlock <span className="text-[#00D2FF]">exponential</span> scale.
            </h2>
          </div>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans font-light">
            FlowWorks AI operates at the intersection of machine intelligence, robust API architectures, and localized search growth. We deploy custom workflows that replace mechanical spreadsheet work with intelligent cloud actions.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="space-y-1"
              >
                <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[10px] text-gray-500 font-mono tracking-wider uppercase leading-none">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

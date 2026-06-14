'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Hexagon, Layers, TrendingUp, Globe, MousePointerClick } from 'lucide-react';
import HeroAutomationArtwork from '@/components/HeroAutomationArtwork';

export default function HeroSection() {
  const stats = [
    { icon: <Hexagon className="w-4 h-4 text-[#00D2FF]" />, value: '50+', label: 'AI Projects Delivered' },
    { icon: <Layers className="w-4 h-4 text-[#00D2FF]" />, value: '30+', label: 'Industries Served' },
    { icon: <TrendingUp className="w-4 h-4 text-[#00D2FF]" />, value: '99%', label: 'Client Satisfaction' },
    { icon: <Globe className="w-4 h-4 text-[#00D2FF]" />, value: 'USA', label: 'Based Agency' },
  ];

  return (
    <section className="relative min-h-screen bg-dark-grid flex flex-col justify-center pt-28 pb-16 px-6 sm:px-12 overflow-hidden">
      {/* Dynamic ambient glowing circles */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D2FF]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Main hero grid */}
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left text column */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-[#00D2FF] font-medium">
            <span className="text-xs">✦</span> PREMIUM AI AUTOMATION & SOFTWARE AGENCY
          </div>

          {/* Heading */}
          <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] uppercase">
            WE CODE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#0088FF] to-[#8B5CF6] filter drop-shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              INTELLIGENT
            </span><br />
            SYSTEMS<span className="text-[#00D2FF]">.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
            AI agents, automation, and custom software systems built to scale your business into the future.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#lead-form-section"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#00D2FF] text-white font-bold rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-[#00D2FF]/30 cursor-none"
            >
              Get Free AI Audit <ArrowUpRight className="w-4 h-4" />
            </a>
            
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-white/30 text-white font-semibold rounded-lg text-sm transition-all bg-white/5 cursor-none"
            >
              Our Story <Play className="w-3.5 h-3.5 text-white fill-white" />
            </a>
          </div>

          {/* Bottom Stats Row */}
          <div className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm max-w-2xl">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 border-r last:border-r-0 border-white/5 pr-2 last:pr-0">
                  <div className="flex items-center gap-1.5">
                    {stat.icon}
                    <span className="text-white font-bold text-base font-display">{stat.value}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 font-mono tracking-tight uppercase leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column rendering dynamic visualizer instead of static image */}
        <div className="lg:col-span-6 flex items-center justify-center relative">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full flex items-center justify-center"
          >
            <HeroAutomationArtwork />
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]"
          />
        </div>
        <p className="text-white/40 font-mono text-[9px] uppercase tracking-widest">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}

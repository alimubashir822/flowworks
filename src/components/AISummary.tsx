import React from "react";
import { Sparkles, Quote, Award } from "lucide-react";

export interface AISummaryStat {
  label: string;
  value: string;
}

interface AISummaryProps {
  tldr: string;
  takeaways: string[];
  insight?: {
    author: string;
    role: string;
    quote: string;
  };
  stats?: AISummaryStat[];
}

export default function AISummary({ tldr, takeaways, insight, stats = [] }: AISummaryProps) {
  return (
    <section 
      aria-label="AI Search Summary Overview" 
      className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#00D2FF]/20 bg-gradient-to-br from-[#00D2FF]/5 via-transparent to-[#8B5CF6]/5 space-y-6 relative overflow-hidden my-8"
    >
      {/* Decorative glows */}
      <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-[#8B5CF6]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-24 -top-24 w-48 h-48 bg-[#00D2FF]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#00D2FF] animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] font-semibold">
          AI Summary & Key Takeaways
        </span>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        
        {/* TL;DR & Bullet Takeaways */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Quick Abstract (TL;DR)</h4>
            <p className="text-sm text-gray-200 leading-relaxed font-sans font-light">
              {tldr}
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Key Takeaways</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-sans list-none p-0 m-0">
              {takeaways.map((item, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <span className="text-[#00D2FF] font-bold">&rarr;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architect Insight / Quote */}
        <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-white/5 lg:pl-6">
          {insight ? (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-[#8B5CF6]" />
                Architect Insight
              </h4>
              <blockquote className="border-l-2 border-[#8B5CF6] pl-4 italic text-xs text-gray-400 font-sans leading-relaxed">
                "{insight.quote}"
              </blockquote>
              <div className="pl-4">
                <p className="text-xs font-semibold text-white">{insight.author}</p>
                <p className="text-[10px] font-mono text-gray-500">{insight.role}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#8B5CF6]" />
                FlowWorks Standard
              </h4>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Our custom pipelines implement secure sandbox testing models, real-time logging sync, and private deployment grids to maximize operational speedup metrics.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Stats Row */}
      {stats.length > 0 && (
        <div className="pt-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</span>
              <span className="block text-lg font-bold font-display text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

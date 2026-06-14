'use client';

import React from 'react';
import { FileText, TrendingUp, Cpu, PhoneCall } from 'lucide-react';
import MultiStepLeadForm from './MultiStepLeadForm';

export default function CTASection() {
  const auditBenefits = [
    {
      icon: <FileText className="w-5 h-5 text-[#00D2FF]" />,
      title: "Custom Integration Blueprint",
      description: "A tailored systems flowchart detailing exact API connections, data pipelines, and agent structures."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />,
      title: "ROI & Payback Projection",
      description: "Financial modeling mapping development investment against labor cost reductions and error offsets."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#00D2FF]" />,
      title: "Feasibility Scorecard",
      description: "A structured complexity grade ranking workflow tasks by automated feasibility vs manual necessity."
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-[#8B5CF6]" />,
      title: "45-Min Architect Session",
      description: "Direct video consult with a senior operations architect to review, dissect, and refine your blueprint."
    }
  ];

  return (
    <section id="lead-form-section" className="bg-dark-grid py-24 px-6 sm:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Premium ambient glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00D2FF]/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[130px] pointer-events-none z-0" />
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Value Proposition */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-xs font-mono tracking-wider text-[#00D2FF] font-medium">
            <span className="text-xs">✦</span> LIMITED-TIME FREE COMPILATION
          </div>
          
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] uppercase">
            Schedule Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#0088FF] to-[#8B5CF6] filter drop-shadow-[0_0_15px_rgba(0,210,255,0.35)]">
              AI Operations Audit
            </span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Submit your operational parameters and systems profile. Our engineering team will compile a production-ready automation diagnostic completely free of charge.
          </p>
          
          {/* Audit Benefits List */}
          <div className="space-y-6 pt-4 max-w-lg">
            {auditBenefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:border-[#00D2FF]/30 group-hover:bg-[#00D2FF]/5">
                  {benefit.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-sm font-semibold text-white tracking-wide uppercase flex items-center gap-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column: Multi-Step Lead Form */}
        <div className="lg:col-span-6 w-full relative">
          {/* Glow backdrop decorator */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00D2FF]/25 to-[#8B5CF6]/25 rounded-2xl blur-xl opacity-30 pointer-events-none" />
          <div className="relative">
            <MultiStepLeadForm />
          </div>
        </div>
        
      </div>
    </section>
  );
}

'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Calculator, Shield, BookOpen } from "lucide-react";
import { RelatedResource } from "@/lib/seo-relations";

const ResourceIconMap: Record<string, React.ComponentType<any>> = {
  "pricing-guide": BookOpen,
  "ai-compliance-audit": Shield,
  "seo-ranking-checklist": FileText,
  "integration-blueprint": FileText,
  "roi-calculator": Calculator
};

interface RelatedResourcesProps {
  resources: RelatedResource[];
  title?: string;
}

export default function RelatedResources({
  resources,
  title = "Blueprints & Operational Resources"
}: RelatedResourcesProps) {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="h-[1px] w-8 bg-emerald-500" />
        <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((res) => {
          const Icon = ResourceIconMap[res.slug] || FileText;

          return (
            <div
              key={res.slug}
              className="glass-panel p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#10B981]/[0.01] flex flex-col justify-between glass-panel-hover group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 rounded-xl flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base group-hover:text-emerald-400 transition-colors uppercase leading-snug">
                    {res.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Access FlowWorks proprietary operational blueprint guidelines for this sector.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5">
                <Link
                  href={res.href}
                  className="w-full py-2 bg-white/5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-[#00D2FF] hover:text-black border border-white/10 hover:border-transparent text-[10px] font-mono font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 cursor-none"
                >
                  Access Resource <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

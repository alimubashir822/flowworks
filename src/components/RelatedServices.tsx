'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, MessageSquare, TrendingUp, Mic, Target, Calendar, Bot, Database, Zap, Settings, FileSearch, Cpu, Laptop, SearchCode, Smartphone } from "lucide-react";
import { SERVICES } from "@/lib/location-data";

const IconMap: Record<string, React.ComponentType<any>> = {
  Users,
  MessageSquareText: MessageSquare,
  MessageSquare,
  TrendingUp,
  Mic,
  Target,
  Calendar,
  Bot,
  Database,
  Zap,
  Settings,
  FileSearch,
  Cpu,
  Laptop,
  SearchCode,
  Smartphone
};

interface RelatedServicesProps {
  relatedSlugs: string[];
  activeSlug?: string;
  title?: string;
}

export default function RelatedServices({
  relatedSlugs,
  activeSlug,
  title = "Related AI & Automation Services"
}: RelatedServicesProps) {
  // Filter and map metadata
  const filteredServices = SERVICES.filter(
    (s) => relatedSlugs.includes(s.slug) && s.slug !== activeSlug
  ).slice(0, 3); // cap at 3 related cards

  if (filteredServices.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="h-[1px] w-8 bg-[#00D2FF]" />
        <h3 className="text-xs font-mono uppercase tracking-wider text-[#00D2FF]">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const Icon = IconMap[service.icon] || Zap;

          return (
            <div
              key={service.slug}
              className="glass-panel p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#8B5CF6]/[0.01] flex flex-col justify-between glass-panel-hover group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/5 group-hover:border-[#00D2FF]/30 group-hover:bg-[#00D2FF]/5 rounded-xl flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#00D2FF] transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base group-hover:text-[#00D2FF] transition-colors uppercase leading-snug">
                    {service.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full py-2 bg-white/5 hover:bg-gradient-to-r hover:from-[#00D2FF] hover:to-[#8B5CF6] hover:text-black border border-white/10 hover:border-transparent text-[10px] font-mono font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 cursor-none"
                >
                  Explore Service <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

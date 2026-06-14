'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, HeartPulse, Sparkles, Building2, Stethoscope, Activity, Dumbbell, Heart, Scissors, Flower2, Building, HardHat, Home, Grid, Pipette, Wind, Zap, Scale, Calculator, Coins, ShieldCheck, Landmark, Presentation, UserCheck, Users, ShoppingCart, Store, Factory, Truck, Plane, Car, Compass, Bed, MapPin, Utensils, Layers, Cpu, Laptop, Rocket, TrendingUp, Globe } from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/industry-data";

const IconMapper: Record<string, React.ComponentType<any>> = {
  HeartPulse, Sparkles, Building2, Stethoscope, Activity, Dumbbell, Heart, Scissors, Flower2,
  Building, HardHat, Home, Grid, Pipette, Wind, Zap, Scale, Calculator, Coins, ShieldCheck,
  Landmark, Presentation, UserCheck, Users, ShoppingCart, Store, Factory, Truck, Plane, Car,
  Compass, Bed, MapPin, Utensils, Layers, Cpu, Laptop, Rocket, TrendingUp, Globe
};

interface RelatedIndustriesProps {
  relatedSlugs: string[];
  activeSlug?: string;
  title?: string;
}

export default function RelatedIndustries({
  relatedSlugs,
  activeSlug,
  title = "Target Industry Solutions"
}: RelatedIndustriesProps) {
  const filteredIndustries = INDUSTRIES_DATA.filter(
    (i) => relatedSlugs.includes(i.slug) && i.slug !== activeSlug
  ).slice(0, 3); // cap at 3 items

  if (filteredIndustries.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="h-[1px] w-8 bg-[#8B5CF6]" />
        <h3 className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6]">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredIndustries.map((ind) => {
          const IndustryIcon = IconMapper[ind.iconName] || Globe;

          return (
            <div
              key={ind.slug}
              className="glass-panel p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#8B5CF6]/[0.01] flex flex-col justify-between glass-panel-hover group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/5 group-hover:border-[#8B5CF6]/30 group-hover:bg-[#8B5CF6]/5 rounded-xl flex items-center justify-center transition-colors">
                  <IndustryIcon className="w-5 h-5 text-gray-400 group-hover:text-[#8B5CF6] transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base group-hover:text-[#8B5CF6] transition-colors uppercase leading-snug">
                    {ind.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                    {ind.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5">
                <Link
                  href={`/industries?select=${ind.slug}`}
                  className="w-full py-2 bg-white/5 hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#00D2FF] hover:text-black border border-white/10 hover:border-transparent text-[10px] font-mono font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 cursor-none"
                >
                  View Solutions <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

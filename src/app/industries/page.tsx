"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiStepLeadForm from "@/components/MultiStepLeadForm";
import SEO from "@/components/seo";
import { ShieldAlert, Zap, Compass, Building, HeartPulse, Shield, Wallet, ShoppingCart } from "lucide-react";

const industriesList = [
  {
    name: "FinTech & Banking",
    icon: <Wallet className="w-8 h-8 text-[#00D2FF]" />,
    desc: "Automating transaction reconciliation, invoice mapping, and client onboardings while maintaining bank-grade encryption frameworks.",
    highlights: ["SOC-2 level data security", "Automatic QuickBooks & Stripe syncing", "Real-time client ledger updates"]
  },
  {
    name: "Logistics & Supply Chain",
    icon: <Compass className="w-8 h-8 text-[#8B5CF6]" />,
    desc: "Streamlining inventory syncing, dispatch coordinates, tracking notifications, and custom vendor invoicing schedules automatically.",
    highlights: ["Instant shipment tracking updates", "Warehouse inventory catalog syncing", "AI OCR invoice processing logs"]
  },
  {
    name: "Healthcare & Medical Networks",
    icon: <HeartPulse className="w-8 h-8 text-[#00D2FF]" />,
    desc: "Secure patient onboarding pipelines, dynamic appointment booking calendars, and intelligent voice reminder flows with latency < 500ms.",
    highlights: ["HIPAA-compliant data pipelines", "Dynamic voice call appointment alerts", "Patient documentation categorization"]
  },
  {
    name: "Real Estate & Property Management",
    icon: <Building className="w-8 h-8 text-[#8B5CF6]" />,
    desc: "Deploying automated B2B sales leads scoring, tenant portal support agents, and programmatic listings SEO frameworks.",
    highlights: ["Auto-lead scoring & sync to CRM", "24/7 AI tenant assistant response", "Programmatic SEO for property pages"]
  },
  {
    name: "E-Commerce & Digital Brands",
    icon: <ShoppingCart className="w-8 h-8 text-emerald-400" />,
    desc: "AI sales agents answering pricing queries, dynamic order status syncs, and automated email cold marketing outreaches.",
    highlights: ["AI order follow-ups and surveys", "OpenAI Vision catalog processing", "Auto-personalized cart email campaigns"]
  }
];

export default function IndustriesPage() {
  return (
    <>
      <SEO
        type="Organization"
        description="FlowWorks AI vertical operations automation solutions for Fintech, Logistics, Healthcare, E-commerce, and Real Estate."
      />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              Vertical Solutions
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none">
              Industries We Transform
            </h1>
            <p className="text-lg text-gray-400">
              We design, build, and deploy custom AI agents and workflow architectures optimized for high-value business verticals.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesList.map((ind, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between glass-panel-hover"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                    {ind.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase">{ind.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{ind.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">Key Results:</h4>
                  {ind.highlights.map((hl, i) => (
                    <div key={i} className="flex gap-2 items-center text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Form */}
          <div id="lead-form-section" className="pt-12 border-t border-white/10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="font-display text-3xl font-bold text-white mb-2">Claim Your Industry Automation Blueprint</h2>
              <p className="text-xs text-gray-400">
                Outlines custom integration vectors specifically mapped to your industry.
              </p>
            </div>
            <MultiStepLeadForm />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

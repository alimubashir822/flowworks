"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiStepLeadForm from "@/components/MultiStepLeadForm";
import SEO from "@/components/seo";
import { Check, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";

const tiers = [
  {
    name: "AI Operations Audit",
    price: "Free",
    period: "one-off",
    desc: "Understand your company's automation potential and obtain a customized implementation blueprint.",
    features: [
      "20-minute architecture workshop",
      "Tailored automation PDF flowchart",
      "Feasibility and ROI assessments",
      "No credit card required"
    ],
    cta: "Claim Free Audit",
    popular: false
  },
  {
    name: "Growth & Automation",
    price: "$3,500",
    period: "month",
    desc: "Complete operational overhaul: sync databases, automate workflows, and deploy live support bots.",
    features: [
      "Custom Make.com & Zapier pipelines",
      "Intelligent Chatbot tuned on your docs",
      "Lead generation scraper & outreach sync",
      "Monthly workflow maintenance & support",
      "Dedicated Slack channel with engineers"
    ],
    cta: "Start Scaling Now",
    popular: true
  },
  {
    name: "Enterprise Custom",
    price: "Custom",
    period: "project",
    desc: "Bespoke software, React Native mobile apps, custom LLM fine-tunes, and programmatic SEO arrays.",
    features: [
      "Full Next.js frontend website design",
      "React Native iOS & Android apps",
      "Bespoke Vector Database setups",
      "Technical & Programmatic SEO mapping",
      "Dedicated lead architect & support SLA"
    ],
    cta: "Book Consultation",
    popular: false
  }
];

export default function PricingPage() {
  const scrollForm = () => {
    const leadFormElement = document.getElementById("lead-form-section");
    if (leadFormElement) {
      leadFormElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO
        type="Organization"
        description="FlowWorks AI transparent premium pricing packages for audits, workflow automations, and enterprise software engineering."
      />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        {/* Glow circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4 text-center mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              Simple Transparent Plans
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none">
              Investment Tiers
            </h1>
            <p className="text-lg text-gray-400">
              Clear, value-driven pricing structures tailored for scaling businesses and enterprise teams.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`glass-panel p-8 rounded-2xl border flex flex-col justify-between relative glass-panel-hover min-h-[500px] ${
                  tier.popular 
                    ? "border-[#00D2FF] glow-blue" 
                    : "border-white/5"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white uppercase">{tier.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{tier.desc}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold font-display text-white">{tier.price}</span>
                    {tier.period && <span className="text-xs text-gray-500 font-mono">/ {tier.period}</span>}
                  </div>

                  <div className="h-[1px] bg-white/5" />

                  <div className="space-y-3">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex gap-2 items-start text-xs text-gray-300">
                        <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={scrollForm}
                    className={`w-full py-3 rounded-lg text-xs font-bold transition-all duration-200 cursor-none ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] text-white hover:shadow-cyan-500/20 shadow-md"
                        : "bg-white/5 border border-white/10 hover:border-white/20 text-white"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div id="lead-form-section" className="pt-12 border-t border-white/10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="font-display text-3xl font-bold text-white mb-2">Claim Your Operational Audit</h2>
              <p className="text-xs text-gray-400">
                Book a consultation block with our development partners today.
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

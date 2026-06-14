'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronDown, 
  Bot, 
  ArrowRight, 
  HeartPulse, 
  ShoppingBag, 
  Home as HomeIcon, 
  Landmark, 
  ShieldCheck, 
  Zap,
  Activity,
  Layers,
  TrendingUp
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IndustryItem {
  icon: React.ReactNode;
  name: string;
  bullets: string[];
}

interface UseCaseItem {
  title: string;
  scenario: string;
  result: string;
}

export default function SEOContentSection() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const features: FeatureItem[] = [
    {
      icon: <Bot className="w-5 h-5 text-[#00D2FF]" />,
      title: "24/7 AI Support Chatbots",
      description: "Deploy autonomous customer care agents that resolve billing, subscription, and FAQ queries instantly in natural language."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#8B5CF6]" />,
      title: "Omnichannel Sync Hub",
      description: "Connect conversation context across Web Chat, Email templates, and SMS, ensuring users never repeat their histories."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
      title: "Secure Database & CRM Sync",
      description: "Reconcile invoices and deal status changes natively between Salesforce, HubSpot, Stripe, and legacy APIs."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0035FF]" />,
      title: "Automated PII Scrubbing",
      description: "Mask sensitive details (credit cards, phone lines) at the API boundary, guaranteeing SOC 2 compliance."
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      title: "Event-Driven Webhooks",
      description: "Trigger real-time document drafting, folder creation, and QuickBooks invoice generation when events fire."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#00D2FF]" />,
      title: "Programmatic Search Engines",
      description: "Deploy automated keyword extractors and markdown compilers to scale location-based landing pages."
    }
  ];

  const industries: IndustryItem[] = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#00D2FF]" />,
      name: "E-Commerce",
      bullets: [
        "Automated order status checking & tracking link lookups",
        "Instant duplicate charge reversals on Stripe API",
        "Contextual product recommendations & sizes verification"
      ]
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-[#8B5CF6]" />,
      name: "Healthcare",
      bullets: [
        "Patient calendar coordination & doctor checkup schedules",
        "HIPAA-compliant medical document classification",
        "Automated prescriptions refill confirmation logs"
      ]
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-green-400" />,
      name: "Real Estate",
      bullets: [
        "Automated property inquiry response & details routing",
        "Qualified leads scoring before booking showing slots",
        "MLS database synchronization & pricing updates"
      ]
    },
    {
      icon: <Landmark className="w-6 h-6 text-yellow-400" />,
      name: "Finance & Legal",
      bullets: [
        "PII redacting at the edge database boundary",
        "Salesforce CRM and Stripe ledger reconciliation audits",
        "Contract drafting & DocuSign workflow triggers"
      ]
    }
  ];

  const useCases: UseCaseItem[] = [
    {
      title: "Customer Support Automation",
      scenario: "A client was overwhelmed by support tickets during product launches, causing queue delays and dropping CSAT scores.",
      result: "We deployed an autonomous AI support agent connected to their Stripe and Zendesk interfaces. The agent resolved duplicate charges, updated preferences, and successfully handled 82% of tickets instantly."
    },
    {
      title: "Outbound Lead Appointment Setting",
      scenario: "B2B sales reps spent hours tracking down digital leads, researching profiles, and coordinating booking emails.",
      result: "We integrated conversational setters that qualify prospects based on budget bounds, match calendar slots via Cal.com, and automatically email technical briefs."
    },
    {
      title: "Database Reconciliation Logs",
      scenario: "Financial auditors manually compared Salesforce deals against Stripe invoices to check payment balances.",
      result: "We built serverless automation microservices that audit 140+ daily accounts, matching records and flagging failed transaction alerts to Slack channels."
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "How does AI customer support automation cost compared to human staff?",
      answer: "While human staffing involves compounding salaries, onboarding latency, and shift overhead, AI agents run at marginal hosting costs. FlowWorks charges a flat development fee followed by platform maintenance—bypassing user seat-license taxes entirely."
    },
    {
      question: "Can AI support agents completely replace customer service teams?",
      answer: "No. AI agents automate Tier-1 administrative tickets (resets, tracking, billing changes). When a case requires emotional nuance or complex judgment, the agent summarizes the history and routes it to your Tier-2 human staff, creating a hybrid workflow."
    },
    {
      question: "How secure is our database info during automation runs?",
      answer: "Security is built natively into our architecture. All operations process via TLS 1.3 transit encryption. We enforce real-time regex/NER scrubbing to redact Personally Identifiable Information (PII) before LLM analysis."
    },
    {
      question: "What platforms and CRM networks do you integrate?",
      answer: "We build integrations for HubSpot, Salesforce, Stripe, Zendesk, Pinecone DB, Make, Google Drive, and legacy SQL/REST systems using clean APIs."
    }
  ];

  return (
    <section className="bg-dark-grid py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-28 relative z-10">
        
        {/* Header section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] bg-[#00D2FF]/10 px-3 py-1 rounded-full border border-[#00D2FF]/20">
            Resource Guide
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
            AI Support & Operational Automation for Businesses
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Eliminate mechanical billing friction, customer backlogs, and database errors with custom agent systems.
          </p>
        </div>

        {/* 1. Problem & How AI Solves It Side-by-Side comparative blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Problem Block */}
          <div className="glass-panel p-8 rounded-2xl border border-red-500/15 bg-red-500/[0.01] hover:bg-red-500/[0.02] transition-colors duration-300 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-red-200 uppercase tracking-tight">The Legacy Bottleneck</h3>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
              Businesses lose prospective clients because support teams cannot respond instantly. Personnel spend valuable hours answering repetitive tickets and copying ledger details across directories, leading to compound salary costs, manual errors, and backlog delays.
            </p>
            
            <div className="border-t border-red-500/10 pt-4 space-y-2">
              <span className="text-[10px] font-mono text-red-400/60 uppercase tracking-widest block">Compounded Bottlenecks:</span>
              <ul className="text-xs text-gray-400 space-y-2 list-disc pl-4 font-mono">
                <li>Hours-long queues drop CSAT satisfaction</li>
                <li>Manual entry clerical typos trigger invoice errors</li>
                <li>Seat-license cost scales exponentially with headcount</li>
              </ul>
            </div>
          </div>

          {/* Solution Block */}
          <div className="glass-panel p-8 rounded-2xl border border-[#00D2FF]/20 bg-[#00D2FF]/[0.01] hover:bg-[#00D2FF]/[0.02] transition-colors duration-300 space-y-6 shadow-[0_4px_30px_-10px_rgba(0,210,255,0.15)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00D2FF]/10 flex items-center justify-center text-[#00D2FF] border border-[#00D2FF]/20">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#00D2FF] uppercase tracking-tight">The Automation Solution</h3>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed font-sans font-light">
              FlowWorks deploys custom AI support agents and automated operations pipelines that operate 24/7. We integrate stateful virtual workers that query knowledge vectors, execute database syncs, reverse Stripe invoices, and bridge complex edge cases to human managers.
            </p>
            
            <div className="border-t border-[#00D2FF]/10 pt-4 space-y-2">
              <span className="text-[10px] font-mono text-[#00D2FF]/60 uppercase tracking-widest block">System Deliverables:</span>
              <ul className="text-xs text-gray-300 space-y-2 list-disc pl-4 font-mono">
                <li>Sub-second resolution latency 24/7/365</li>
                <li>100% data validation checks before sync</li>
                <li>Proprietary ownership of all deployed systems</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 2. Features Grid */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">System Capabilities</h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6]">Architected for Operational Speed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 space-y-4 hover:border-[#00D2FF]/30 transition-all duration-300 bg-[#0c0c0e]/30 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#00D2FF]/10 group-hover:text-[#00D2FF] transition-all duration-300">
                  {feat.icon}
                </div>
                <h4 className="font-display font-semibold text-lg text-white group-hover:text-[#00D2FF] transition-colors">
                  {feat.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans font-light">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Target Industries Section */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">Industries We Serve</h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">Bespoke Solutions for Dynamic Markets</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#8B5CF6]/[0.01] hover:border-[#8B5CF6]/30 transition-all duration-300 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-gray-300">
                    {ind.icon}
                  </div>
                  <h4 className="font-display font-bold text-white uppercase text-sm tracking-wider">
                    {ind.name}
                  </h4>
                </div>
                <ul className="text-[11px] text-gray-400 space-y-2.5 font-sans leading-relaxed">
                  {ind.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 items-start">
                      <span className="text-[#8B5CF6] shrink-0 mt-0.5">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Use Cases Details */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">Real-World Use Cases</h3>
            <p className="text-xs font-mono uppercase tracking-widest text-green-400">Proven Operational Efficiency</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 bg-black/20 flex flex-col justify-between space-y-4 hover:border-green-400/20 transition-all duration-300">
                <div className="space-y-3">
                  <h4 className="font-display font-semibold text-lg text-white border-b border-white/5 pb-2">
                    {uc.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans font-light">
                    <strong className="text-gray-300 block font-mono text-[9px] uppercase tracking-wider mb-1">Scenario:</strong>
                    {uc.scenario}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-green-500/[0.02] border border-green-500/10 text-xs text-gray-300 leading-relaxed font-sans font-light">
                  <strong className="text-green-400 block font-mono text-[9px] uppercase tracking-wider mb-1">Result:</strong>
                  {uc.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FAQs Accordion */}
        <div className="space-y-12 border-t border-white/5 pt-20">
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">Frequently Asked Questions</h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">Resolving Integration Objections</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-panel rounded-xl border border-white/5 overflow-hidden transition-all duration-300"
                  style={{ borderColor: isOpen ? 'rgba(0, 210, 255, 0.3)' : 'rgba(255, 255, 255, 0.05)' }}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:text-[#00D2FF] transition-colors cursor-none"
                  >
                    <span className="font-display font-medium text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-gray-500"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 font-sans font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. CTA Link to Audit */}
        <div className="glass-panel p-10 rounded-2xl border border-[#00D2FF]/20 bg-gradient-to-r from-black/40 via-[#8B5CF6]/5 to-[#00D2FF]/5 text-center space-y-6 max-w-4xl mx-auto shadow-[0_15px_40px_rgba(0,210,255,0.08)]">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
            Ready to Unlock Exponential Operational Scale?
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Book a complimentary system architecture audit and get a customized data-flow automation chart tailored for your workflows.
          </p>
          <div className="pt-2">
            <a
              href="#lead-form-section"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#00D2FF] text-white font-bold rounded-xl text-sm transition-all duration-300 shadow-lg shadow-[#00D2FF]/25 hover:shadow-[#8B5CF6]/35 cursor-none"
            >
              Request Free Operations Audit <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

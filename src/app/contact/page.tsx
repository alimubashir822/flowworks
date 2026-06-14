import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import MultiStepLeadForm from "@/components/MultiStepLeadForm";
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact FlowWorks AI | Premium AI Automation Agency",
  description: "Get in touch with our senior AI architects. Schedule an operations audit, map your integration pipelines, and design custom software solutions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Global Headquarters",
      value: "100 Pine Street, San Francisco, CA 94111",
      desc: "Our primary engineering and design operations hub.",
      color: "#00D2FF"
    },
    {
      icon: Phone,
      title: "Direct Telephony Line",
      value: "+1-800-555-0199",
      desc: "Talk to a customer coordinator during operational hours.",
      color: "#8B5CF6"
    },
    {
      icon: Mail,
      title: "Corporate Email Communications",
      value: "hello@flowworks.ai",
      desc: "Submit request documentation, RFPs, or general queries.",
      color: "emerald"
    },
    {
      icon: Clock,
      title: "Business Support Hours",
      value: "Monday – Friday: 9:00 AM – 6:00 PM PST",
      desc: "Our systems run 24/7, with human architects on desk as listed.",
      color: "yellow"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to get a response after submitting a query?",
      answer: "All operations audit submissions are reviewed by a senior system architect. We target a response latency of under 4 hours, containing a customized initial recommendations blueprint."
    },
    {
      question: "Can we sign a Non-Disclosure Agreement (NDA) before sharing systems access?",
      answer: "Yes. We mandate strict confidentiality. You can request our standard corporate NDA or submit your legal team's framework before the initial strategy session."
    },
    {
      question: "Do you offer on-site consultations or custom modeling?",
      answer: "Yes. While we build and manage systems remotely, we coordinate on-site alignment meetings and sandboxes walkthroughs for enterprise clients across major US metro regions."
    }
  ];

  return (
    <>
      {/* Local Business Schema Injection */}
      <SEO type="LocalBusiness" />
      
      {/* Breadcrumb Schema Injection */}
      <SEO
        type="Breadcrumb"
        breadcrumbs={[
          { name: "Home", item: "https://flowworks.ai" },
          { name: "Contact", item: "https://flowworks.ai/contact" }
        ]}
      />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white relative">
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D2FF]/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 space-y-16 relative z-10">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: "Contact", item: "/contact" }]} />

          {/* Page Header */}
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] bg-[#00D2FF]/10 px-3 py-1.5 rounded-lg border border-[#00D2FF]/20 w-max block">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white leading-none">
              Connect With Our <span className="gradient-text">Architects</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Have questions about integrating AI employees or custom database pipelines? Submit your profile parameters or connect with our SF headquarters.
            </p>
          </div>

          {/* Grid Layout: Contact Info & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Contact parameters & Details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="grid grid-cols-1 gap-4">
                {contactDetails.map((detail, idx) => {
                  const Icon = detail.icon;
                  return (
                    <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2 glass-panel-hover">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#00D2FF]" />
                        </div>
                        <h3 className="font-display font-bold text-white text-sm uppercase">{detail.title}</h3>
                      </div>
                      <p className="text-sm font-mono text-[#00D2FF] break-all pt-1">{detail.value}</p>
                      <p className="text-xs text-gray-400 font-sans leading-relaxed">{detail.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Trust Badge */}
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl flex gap-3 items-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  All communication channels are encrypted and monitored under strict corporate governance standards.
                </p>
              </div>

            </div>

            {/* Right side: Interactive Lead capturing */}
            <div id="lead-form-section" className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4 mb-8">
                <h2 className="font-display text-2xl font-bold uppercase text-white">Operations Audit Form</h2>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Outline your systems stack and describe your workflow bottlenecks. A system developer will prepare a tailored optimization blueprint before our call.
                </p>
              </div>

              <MultiStepLeadForm />
            </div>

          </div>

          {/* Contact specific FAQ accordion section */}
          <section className="space-y-8 max-w-4xl mx-auto pt-8 border-t border-white/5">
            <div className="text-center space-y-2">
              <h2 className="font-display text-3xl font-bold uppercase text-white flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#8B5CF6]" />
                Contact Inquiries FAQ
              </h2>
              <p className="text-xs text-gray-400">Common questions about connecting with FlowWorks AI support</p>
            </div>

            <div className="space-y-4 pt-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
                  <h4 className="font-display font-bold text-white text-sm uppercase flex items-center gap-2">
                    <span className="text-[#00D2FF] font-mono">&rarr;</span> {faq.question}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans pl-4">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiStepLeadForm from "@/components/MultiStepLeadForm";
import SEO from "@/components/seo";
import { Eye, Shield, Users, Target, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About FlowWorks AI | Premium AI Automation Agency",
  description: "Learn about the mission, vision, story, and elite software architects powering FlowWorks AI's industry-leading systems.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Marcus Vance",
      role: "Founder & Chief AI Architect",
      desc: "Ex-Google DeepMind engineer specializing in autonomous LLM routing graphs and workflow optimizations.",
    },
    {
      name: "Elena Rostova",
      role: "Head of Custom Software Development",
      desc: "Specialist in highly performant Rust and Go microservice backend clusters and cloud scalability.",
    },
    {
      name: "Darnell Mercer",
      role: "Director of Programmatic Growth",
      desc: "SEO architect responsible for generating 50M+ organic views for high-scale SaaS platforms.",
    },
  ];

  return (
    <>
      <SEO
        type="Organization"
        name="FlowWorks AI"
        description="Premium AI Automation & Custom Software Development Agency"
      />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        {/* Decorative ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              Who We Are
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">
              Engineering the Future of Automation
            </h1>
            <p className="text-lg text-gray-400 pt-2 leading-relaxed">
              We build premium, custom AI systems and software architectures that unlock unprecedented growth for businesses across the United States.
            </p>
          </div>

          {/* Mission & Vision grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4 glow-blue">
              <div className="w-10 h-10 rounded-lg bg-[#00D2FF]/10 flex items-center justify-center text-[#00D2FF]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                To eliminate operational friction by injecting state-of-the-art AI automation, custom software, and programmatic growth engines directly into business workflows. We aim to help modern enterprises save thousands of manual hours and scale seamlessly.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4 glow-purple">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We envision a future where software builds itself, AI agents manage administrative overhead, and companies focus entirely on human relationships and design. We are creating that infrastructure block by block.
              </p>
            </div>
          </div>

          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Our Story: From Small Scripts to Enterprise Systems
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                FlowWorks AI was founded in San Francisco with a simple premise: legacy software is failing modern enterprises. In an era of advanced LLMs and fast cloud APIs, businesses shouldn't be copy-pasting data across hundreds of spreadsheets.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We began by building small custom bots for real estate and manufacturing clients. As client demand grew, we scaled our platform to support complex multi-agent frameworks, enterprise SaaS architectures, and high-performance programmatic SEO arrays.
              </p>
              <div className="space-y-2 pt-2">
                {["100% Customized Architectures", "Secure SOC-2 Compliant Pipelines", "Proven 10x Operational Speed Improvements"].map((point, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-xs font-mono text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphic block or stats */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-white/5 border border-white/5 space-y-6 text-center">
              <div className="text-5xl font-bold font-display text-white">20M+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">Tasks Automated Weekly</div>
              <div className="h-[1px] bg-white/10" />
              <div className="text-5xl font-bold font-display text-white">99.9%</div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6]">API Uptime Maintained</div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="space-y-8 pt-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-white flex items-center justify-center gap-2">
                <Users className="w-6 h-6 text-[#00D2FF]" />
                Powering the Architecture
              </h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                Elite engineers, designers, and growth marketers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 space-y-3 glass-panel-hover">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00D2FF] to-[#8B5CF6] flex items-center justify-center font-bold text-white text-lg">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h4 className="font-display font-semibold text-lg text-white">{member.name}</h4>
                  <span className="block text-xs font-mono text-[#00D2FF]">{member.role}</span>
                  <p className="text-xs text-gray-400 leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Capture Section */}
          <div id="lead-form-section" className="pt-12 border-t border-white/10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="font-display text-3xl font-bold text-white mb-2">Ready to Scale Your Systems?</h2>
              <p className="text-xs text-gray-400">
                Book a consultation with our senior architects and claim your free automation audit.
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

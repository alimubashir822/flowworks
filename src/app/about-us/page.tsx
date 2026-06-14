import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Eye, Shield, Users, Target, CheckCircle2, Cpu, Code2, Server, HelpCircle, Layers } from "lucide-react";

export const metadata = {
  title: "About FlowWorks AI | Premium AI Automation Agency",
  description: "Learn about the mission, vision, story, and elite software architects powering FlowWorks AI's industry-leading systems.",
  alternates: {
    canonical: "/about",
  },
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

  const steps = [
    {
      num: "01",
      title: "Discovery & Audit",
      desc: "We analyze your operations and map manual workloads to identify high-ROI automation opportunities."
    },
    {
      num: "02",
      title: "System Architecture",
      desc: "Our architects model integration node maps, database schemas, and data security routes."
    },
    {
      num: "03",
      title: "Sandbox Staging",
      desc: "We build and test systems in safe staging environments with mock data before production."
    },
    {
      num: "04",
      title: "Production Deployment",
      desc: "We launch custom applications and agents directly into your cloud server infrastructure."
    },
    {
      num: "05",
      title: "Optimization SLA",
      desc: "We continuously audit transaction logs, update models, and adapt pathways to scale output."
    }
  ];

  const pillars = [
    {
      icon: Code2,
      title: "TypeScript & Next.js",
      desc: "We compile fast frontends and robust server environments, delivering sub-second load speeds and structured layouts that search crawlers trust."
    },
    {
      icon: Cpu,
      title: "Advanced LLMs & RAG",
      desc: "We integrate state-of-the-art models (Claude 3.5 Sonnet, GPT-4o) with vector databases (Pinecone, pgvector) for accurate, contextual reasoning."
    },
    {
      icon: Server,
      title: "Go & Rust Microservices",
      desc: "For heavy backend data loads and custom CRM sync pipes, we deploy highly scalable, memory-efficient microservice APIs."
    },
    {
      icon: Layers,
      title: "Cloud & VPC Deployments",
      desc: "We deploy architectures on AWS Bedrock, Azure, or GCP, ensuring private database channels and custom firewalls."
    }
  ];

  const securityPoints = [
    {
      title: "Zero LLM Data Retention",
      desc: "We enforce private API configurations. Your proprietary corporate datasets and customer interaction logs are never stored by model vendors, nor are they ever used to train public models."
    },
    {
      title: "Real-time PII Masking",
      desc: "All outgoing query prompts transit through custom security filters that redact personally identifiable info (PII) like SSNs, billing details, and phone numbers at the network boundary."
    },
    {
      title: "SOC 2 Type II Alignment",
      desc: "We design and deploy systems following strict SOC 2 controls, utilizing HTTPS TLS 1.3 transit encryption, AES-256 resting encryption, and OAuth 2.0 access setups."
    }
  ];

  const faqs = [
    {
      question: "What makes FlowWorks different from off-the-shelf automation platforms?",
      answer: "FlowWorks does not lease generic SaaS subscriptions. We engineer bespoke, production-ready codebases and AI agents configured to your exact Standard Operating Procedures (SOPs). You retain 100% intellectual property ownership, paying minimal cloud hosting costs without licensing seat taxes."
    },
    {
      question: "Are your AI agents HIPAA and SOC-2 compliant?",
      answer: "Yes. We sign Business Associate Agreements (BAAs) for healthcare firms and configure private Virtual Private Clouds (VPCs). By implementing real-time PII redaction and zero-retention parameters, our architectures pass strict regulatory audits."
    },
    {
      question: "What is the average timeline for custom software and AI deployments?",
      answer: "A standard workflow automation or customer chatbot takes roughly 2 to 4 weeks. High-scale custom React Native mobile applications or multi-agent enterprise backend platforms typically span 6 to 12 weeks."
    },
    {
      question: "Do you offer post-deployment maintenance and updates?",
      answer: "Yes. We provide Dedicated support SLAs that cover API version changes, model updates, security monitoring, database cleanups, and prompt optimizations to guarantee maximum uptime."
    }
  ];

  return (
    <>
      <SEO
        type="Organization"
        name="FlowWorks AI"
        description="Learn how FlowWorks AI builds premium, custom AI employees, custom software architectures, and technical growth systems that scale businesses."
      />
      <SEO type="Person" teamMembers={team} />
      <SEO type="FAQ" faqs={faqs} />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white relative">
        {/* Decorative ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 space-y-16 relative z-10">
          <Breadcrumbs items={[{ name: "About", item: "/about" }]} />

          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              Who We Are
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none uppercase">
              Engineering the Future of Automation
            </h1>
            <p className="text-lg text-gray-400 pt-2 leading-relaxed font-sans font-light">
              We build premium, custom AI systems and software architectures that unlock unprecedented growth for businesses across the United States.
            </p>
          </div>

          {/* Mission & Vision grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4 glow-blue">
              <div className="w-10 h-10 rounded-lg bg-[#00D2FF]/10 flex items-center justify-center text-[#00D2FF]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white uppercase">Our Mission</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                To eliminate operational friction by injecting state-of-the-art AI automation, custom software, and programmatic growth engines directly into business workflows. We help modern enterprises save thousands of manual hours and scale seamlessly.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4 glow-purple">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white uppercase">Our Vision</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                We envision a future where software builds itself, AI agents manage administrative overhead, and companies focus entirely on human relationships and design. We are creating that infrastructure block by block.
              </p>
            </div>
          </div>

          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
                Our Story: From Small Scripts to Enterprise Systems
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                FlowWorks AI was founded in San Francisco with a simple premise: legacy software is failing modern enterprises. In an era of advanced LLMs and fast cloud APIs, businesses shouldn't be copy-pasting data across hundreds of spreadsheets.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
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

          {/* Our 5-Step Operations Blueprint */}
          <div className="space-y-12 pt-8 border-t border-white/5">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-white uppercase">
                The Operations Blueprint
              </h2>
              <p className="text-xs text-[#00D2FF] uppercase tracking-widest font-mono">
                From discovery analysis to dynamic runtime optimizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#00D2FF]/20 transition-all duration-300">
                  <span className="block text-3xl font-display font-extrabold text-white/10 group-hover:text-[#00D2FF]/20 transition-colors duration-300">
                    {step.num}
                  </span>
                  <h4 className="font-display font-bold text-white text-base uppercase">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Pillars */}
          <div className="space-y-12 pt-8 border-t border-white/5">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-white uppercase">
                Architectural Pillars & Stack
              </h2>
              <p className="text-xs text-[#8B5CF6] uppercase tracking-widest font-mono">
                Bespoke technology stack optimized for sub-second speeds and SEO scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5 flex gap-5 items-start glass-panel-hover">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D2FF] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-white text-lg uppercase">{pillar.title}</h4>
                      <p className="text-sm text-gray-400 font-sans leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Security & Governance */}
          <div className="glass-panel p-10 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#8B5CF6]/[0.02] space-y-8">
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-bold text-white uppercase flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#00D2FF]" />
                Security Governance & Compliance Control
              </h2>
              <p className="text-sm text-gray-400 font-sans">
                We safeguard client data by implementing bank-grade compliance procedures natively in every pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {securityPoints.map((point, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-display font-bold text-white text-base uppercase">{point.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="space-y-8 pt-8 border-t border-white/5">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-white uppercase flex items-center justify-center gap-2">
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
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded FAQ Accordion */}
          <div className="space-y-12 pt-8 border-t border-white/5">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-white uppercase flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#8B5CF6]" />
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                Everything you need to know about our engineering standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                  <h4 className="font-display font-bold text-white text-sm uppercase flex items-start gap-2">
                    <span className="text-[#00D2FF] font-mono">&rarr;</span> {faq.question}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans pl-4">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Capture Section */}
          <CTASection />
        </div>
      </main>

      <Footer />
    </>
  );
}

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiStepLeadForm from "@/components/MultiStepLeadForm";
import SEO from "@/components/seo";
import { SERVICES, STATES, CITIES } from "@/lib/location-data";
import { SERVICES_COPY_DATA } from "@/lib/services-copy-data";
import {
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Award,
  Globe,
  Database,
  CornerDownRight,
  ShieldAlert,
  Sparkles,
  Settings,
  SearchCode,
  Calendar,
  Cpu,
  Smartphone,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import ChatSimulation from "@/components/ChatSimulation";
import RoiCalculator from "@/components/RoiCalculator";
import FAQAccordion from "@/components/FAQAccordion";

const getIcon = (name: string) => {
  switch (name) {
    case "Settings": return Settings;
    case "Zap": return Zap;
    case "Database": return Database;
    case "Award": return Award;
    case "Globe": return Globe;
    case "CornerDownRight": return CornerDownRight;
    case "ShieldCheck": return ShieldCheck;
    case "SearchCode": return SearchCode;
    case "Calendar": return Calendar;
    case "Cpu": return Cpu;
    case "Smartphone": return Smartphone;
    case "TrendingUp": return TrendingUp;
    case "ShieldAlert": return ShieldAlert;
    case "Sparkles": return Sparkles;
    case "MessageSquare": return MessageSquare;
    default: return Zap;
  }
};

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const copy = SERVICES_COPY_DATA[serviceSlug];
  if (copy) {
    return {
      title: copy.seoTitle,
      description: copy.seoDesc,
      alternates: {
        canonical: `https://flowworks.ai/services/${serviceSlug}`,
      },
      openGraph: {
        title: copy.seoTitle,
        description: copy.seoDesc,
        url: `https://flowworks.ai/services/${serviceSlug}`,
        siteName: "FlowWorks AI",
        locale: "en_US",
        type: "website",
        images: [
          {
            url: `https://flowworks.ai/images/og-${serviceSlug}.png`,
            width: 1200,
            height: 630,
            alt: `FlowWorks AI - ${service.name} for Enterprise`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: copy.seoTitle,
        description: copy.seoDesc,
        images: [`https://flowworks.ai/images/og-${serviceSlug}.png`],
      },
    };
  }

  return {
    title: `${service.name} Services | FlowWorks AI`,
    description: service.fullDesc,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  const copy = SERVICES_COPY_DATA[serviceSlug];

  // If we have custom detailed copywriting, render the premium custom layout
  if (copy) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${service.name} Deployment`,
      "serviceType": `AI Automation & ${service.name} Integration`,
      "provider": {
        "@type": "Organization",
        "name": "FlowWorks AI",
        "url": "https://flowworks.ai"
      },
      "description": copy.seoDesc,
      "areaServed": {
        "@type": "Country",
        "name": "US"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Contact for Pricing",
        "description": "Enterprise implementation options. Contact for customized roadmap and platform volume details."
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "48"
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": copy.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const breadcrumbs = [
      { name: "Home", item: "https://flowworks.ai" },
      { name: "Services", item: "https://flowworks.ai#services" },
      { name: service.name, item: `https://flowworks.ai/services/${serviceSlug}` },
    ];

    return (
      <>
        <SEO type="Service" serviceName={service.name} description={copy.seoDesc} />
        <SEO type="Breadcrumb" breadcrumbs={breadcrumbs} />
        
        {/* Inject customized schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Navbar />

        <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D2FF]/5 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />

          <div className="max-w-[1400px] mx-auto px-6 space-y-24">
            
            {/* Section 1: Hero Zone */}
            <section className="text-center space-y-6 max-w-4xl mx-auto pt-8">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] bg-[#00D2FF]/10 px-3 py-1 rounded-full border border-[#00D2FF]/20">
                  Premium B2B Automation
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                {copy.heroHook.includes(".") ? (
                  <>
                    {copy.heroHook.split(".")[0]}. 
                    <span className="gradient-text block mt-2">{copy.heroHook.split(".")[1]}</span>
                  </>
                ) : (
                  copy.heroHook
                )}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
                {copy.heroSubhead}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="#lead-form-section"
                  className="px-8 py-4 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] hover:from-[#00c0eb] hover:to-[#7c4ee4] rounded-xl text-black font-semibold shadow-lg shadow-[#00D2FF]/25 hover:shadow-[#00D2FF]/45 transition-all text-center cursor-none"
                >
                  Book a Live Demo
                </Link>
                <Link
                  href={copy.widgetType === "calculator" ? "#roi-calculator-section" : "#simulation-section"}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D2FF]/30 rounded-xl text-white font-semibold transition-all text-center cursor-none"
                >
                  {copy.widgetType === "calculator" ? "Calculate ROI" : "See Interactive Demo"}
                </Link>
              </div>
            </section>

            {/* Section 2: The Bottleneck vs. The Breakthrough */}
            <section className="space-y-12">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <h2 className="font-display text-3xl font-bold text-white uppercase tracking-tight">The Paradigm Shift</h2>
                <p className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6]">Legacy Friction vs. Autonomous Execution</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: The Staffing Bottleneck */}
                <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6 bg-red-500/[0.01] hover:bg-red-500/[0.02] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-red-200">The Legacy Bottleneck</h3>
                  </div>
                  
                  <div className="space-y-4 font-sans text-sm text-gray-400">
                    {copy.bottlenecks.map((item, idx) => (
                      <div key={idx} className="space-y-1 border-l-2 border-red-500/30 pl-4">
                        <h4 className="font-semibold text-gray-200 text-xs uppercase font-mono tracking-wider">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: The AI Agent Breakthrough */}
                <div className="glass-panel p-8 rounded-2xl border border-[#00D2FF]/20 space-y-6 bg-[#00D2FF]/[0.01] hover:bg-[#00D2FF]/[0.02] transition-all duration-300 shadow-[0_4px_30px_-10px_rgba(0,210,255,0.15)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00D2FF]/10 flex items-center justify-center text-[#00D2FF] border border-[#00D2FF]/20">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#00D2FF]">The Automation Breakthrough</h3>
                  </div>
                  
                  <div className="space-y-4 font-sans text-sm text-gray-400">
                    {copy.breakthroughs.map((item, idx) => (
                      <div key={idx} className="space-y-1 border-l-2 border-[#00D2FF]/30 pl-4">
                        <h4 className="font-semibold text-gray-100 text-xs uppercase font-mono tracking-wider">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Core Capabilities */}
            <section className="space-y-12">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <h2 className="font-display text-3xl font-bold text-white uppercase tracking-tight">Core Capabilities</h2>
                <p className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">Architected for Enterprise Scale</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {copy.capabilities.map((cap, idx) => {
                  const Icon = getIcon(cap.icon);
                  return (
                    <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 space-y-3 glass-panel-hover animate-fade-in">
                      <div className="w-12 h-12 rounded-lg bg-[#00D2FF]/10 flex items-center justify-center text-[#00D2FF]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-display font-semibold text-lg text-white">{cap.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans">
                        {cap.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 4 & ROI Calculator / Simulation Widget */}
            <section id="roi-calculator-section" className="space-y-12">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <h2 className="font-display text-3xl font-bold text-white uppercase tracking-tight">Interactive Showcase</h2>
                <p className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6]">
                  {copy.widgetType === "calculator" ? "Calculate your operational savings" : "See the automation workflow in real-time"}
                </p>
              </div>

              {copy.widgetType === "chat" ? (
                <div id="simulation-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <h3 className="font-display text-2xl font-bold text-white">Live Execution Simulator</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">
                      Watch how our custom automated agents process structured workflows in real-time. Our scripts represent standard production setups connected securely to CRM networks, databases, and billing APIs.
                    </p>
                    <div className="space-y-2">
                      <div className="flex gap-2 items-center text-xs font-mono text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span>Natural language processing & API syncs</span>
                      </div>
                      <div className="flex gap-2 items-center text-xs font-mono text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span>Direct database transactional changes</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <ChatSimulation script={copy.chatScript} />
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto">
                  <RoiCalculator />
                </div>
              )}
            </section>

            {/* Section 5: Enterprise Security & Compliance Proof */}
            <section className="glass-panel p-10 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-[#8B5CF6]/[0.02] space-y-8">
              <div className="space-y-2">
                <h2 className="font-display text-3xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-8 h-8 text-[#00D2FF]" />
                  Security & Compliance Built for Enterprise Standards
                </h2>
                <p className="text-sm text-gray-400 font-sans">
                  Rest easy knowing your customer interactions are protected by institutional-grade protocols.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-[#00D2FF]">Zero LLM Retention</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    We establish private API routing. Your proprietary customer chat transcripts and training data are never stored by third-party model providers, nor are they ever used to train public models.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-[#8B5CF6]">Automated PII Scrubbing</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    All messages undergo real-time scrubbing. Personally Identifiable Information (PII) like credit cards, SSNs, and phone numbers are redacted instantly at the network boundary before the LLM processes them.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-green-400">Audited Compliance</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    Our architecture is fully compliant with SOC 2 Type II controls and GDPR requirements, and we sign Business Associate Agreements (BAAs) for organizations requiring HIPAA adherence.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Dynamic FAQ Accordion */}
            <section className="space-y-12">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <h2 className="font-display text-3xl font-bold text-white uppercase tracking-tight">Frequently Asked Questions</h2>
                <p className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">Resolving technical objections</p>
              </div>

              <FAQAccordion faqs={copy.faqs} />
            </section>

            {/* Lead Capture Form */}
            <section id="lead-form-section" className="pt-12 border-t border-white/10">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h2 className="font-display text-3xl font-bold text-white mb-2">Ready to Scale Your Systems?</h2>
                <p className="text-xs text-gray-400 font-sans">
                  Book a consultation with our senior architects and get a customized integration blueprint for your operations stack.
                </p>
              </div>
              <MultiStepLeadForm />
            </section>

          </div>
        </main>

        <Footer />
      </>
    );
  }

  // Fallback to legacy static route mapping if copy is not found
  const stateLinks = Object.values(STATES).map((state) => ({
    name: state.name,
    href: `/${service.slug}-services-${state.slug}`,
  }));

  const cityLinks = Object.values(CITIES).slice(0, 8).map((city) => ({
    name: city.name,
    href: `/${service.slug}-${city.slug}`,
  }));

  const faqs = [
    {
      question: `How does FlowWorks AI deploy ${service.name}?`,
      answer: `We start with a thorough analysis of your business architecture, define target integration nodes, write clean modular interfaces, and run automated testing cycles to guarantee secure operation.`,
    },
    {
      question: "What is the timeline for custom deployment?",
      answer: "A standard automation workflow takes 2-4 weeks. Large scale enterprise solutions or comprehensive custom applications typically span 6-12 weeks.",
    },
    {
      question: "Are there ongoing management fees?",
      answer: "We offer tailored monthly optimization and maintenance packages. However, you retain full ownership of the custom code and infrastructure.",
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://flowworks.ai" },
    { name: "Services", item: "https://flowworks.ai#services" },
    { name: service.name, item: `https://flowworks.ai/services/${service.slug}` },
  ];

  return (
    <>
      <SEO type="Service" serviceName={service.name} description={service.fullDesc} />
      <SEO type="FAQ" faqs={faqs} />
      <SEO type="Breadcrumb" breadcrumbs={breadcrumbs} />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group cursor-none"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
                  Premium Agency Solutions
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">
                  {service.name}
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed pt-2 font-sans font-light">
                  {service.fullDesc}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-2">
                  <ShieldCheck className="w-5 h-5 text-[#00D2FF]" />
                  <span className="block text-xs font-mono text-gray-400">Enterprise Grade</span>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-2">
                  <Zap className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="block text-xs font-mono text-gray-400">Rapid Delivery</span>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="block text-xs font-mono text-gray-400">100% Custom</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-display text-xl font-semibold text-white">
                  Target Use Cases & Implementations
                </h3>
                <div className="space-y-3">
                  {service.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm leading-relaxed font-sans">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-3">
                    Locations Served (States)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stateLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#00D2FF]/30 text-xs text-gray-400 hover:text-white transition-all cursor-none"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-3">
                    Target Cities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cityLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#8B5CF6]/30 text-xs text-gray-400 hover:text-white transition-all cursor-none"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form-section" className="lg:col-span-5 lg:sticky lg:top-28">
              <MultiStepLeadForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

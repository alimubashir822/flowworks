'use client';

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/seo";
import MultiStepLeadForm from "@/components/MultiStepLeadForm";
import { INDUSTRIES_DATA, IndustryInfo } from "@/lib/industry-data";
import {
  HeartPulse, Sparkles, Building2, Stethoscope, Activity, Dumbbell, Heart, Scissors, Flower2,
  Building, HardHat, Home, Grid, Pipette, Wind, Zap, Scale, Calculator, Coins, ShieldCheck,
  Landmark, Presentation, UserCheck, Users, ShoppingCart, Store, Factory, Truck, Plane, Car,
  Compass, Bed, MapPin, Utensils, Layers, Cpu, Laptop, Rocket, TrendingUp, Radio, ZapOff, Sprout,
  HeartHandshake, FileText, GraduationCap, BookOpen, Globe, Search, ArrowRight, Check, Award,
  ChevronDown, HelpCircle, User, ShieldAlert, Cpu as CpuIcon, Layers as LayersIcon, Clock, Settings
} from "lucide-react";

// Dynamic Lucide Icon Mapper
const IconMapper: Record<string, React.ComponentType<any>> = {
  HeartPulse, Sparkles, Building2, Stethoscope, Activity, Dumbbell, Heart, Scissors, Flower2,
  Building, HardHat, Home, Grid, Pipette, Wind, Zap, Scale, Calculator, Coins, ShieldCheck,
  Landmark, Presentation, UserCheck, Users, ShoppingCart, Store, Factory, Truck, Plane, Car,
  Compass, Bed, MapPin, Utensils, Layers, Cpu, Laptop, Rocket, TrendingUp, Radio, ZapOff, Sprout,
  HeartHandshake, FileText, GraduationCap, BookOpen, Globe
};

// Major industries for the matrix
const MATRIX_INDUSTRIES = [
  { slug: "healthcare", name: "Healthcare", iconName: "HeartPulse" },
  { slug: "real-estate", name: "Real Estate", iconName: "Building" },
  { slug: "law-firms", name: "Law Firms", iconName: "Scale" },
  { slug: "ecommerce", name: "E-commerce", iconName: "ShoppingCart" },
  { slug: "financial-services", name: "Financial Services", iconName: "Coins" },
  { slug: "saas-companies", name: "SaaS & Tech", iconName: "Cpu" },
];

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryInfo>(
    INDUSTRIES_DATA.find(i => i.slug === "healthcare") || INDUSTRIES_DATA[0]
  );
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeMatrixSlug, setActiveMatrixSlug] = useState("healthcare");

  // Dynamic Categories
  const categories = useMemo(() => {
    return ["All", "Medical & Wellness", "Real Estate & Trades", "Professional Services", "Commerce & Logistics", "Tech & SaaS"];
  }, []);

  // Filter Logic
  const filteredIndustries = useMemo(() => {
    let result = [...INDUSTRIES_DATA];

    if (selectedCategory !== "All") {
      result = result.filter(ind => ind.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        ind =>
          ind.name.toLowerCase().includes(query) ||
          ind.shortDesc.toLowerCase().includes(query) ||
          ind.challenges.some(ch => ch.toLowerCase().includes(query)) ||
          ind.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  // Paginated List
  const paginatedIndustries = useMemo(() => {
    return filteredIndustries.slice(0, visibleCount);
  }, [filteredIndustries, visibleCount]);

  const hasMore = filteredIndustries.length > visibleCount;

  // Selected matrix industry details
  const activeMatrixIndustry = useMemo(() => {
    return INDUSTRIES_DATA.find(i => i.slug === activeMatrixSlug) || INDUSTRIES_DATA[0];
  }, [activeMatrixSlug]);

  const selectAndScrollToExplorer = (industry: IndustryInfo) => {
    setSelectedIndustry(industry);
    const explorerEl = document.getElementById("industry-explorer-section");
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // FAQs data list
  const faqsList = [
    {
      question: "How can AI help my specific industry?",
      answer: "AI helps by replacing manual administration (spreadsheet syncing, PDF data scraping), automating customer interactions (24/7 client booking, voice agents, chat agents), and enhancing visibility through programmatic SEO. Every vertical has specific workflows that AI can speed up by 10x."
    },
    {
      question: "Which industries benefit most from AI automation?",
      answer: "High-volume transactional sectors benefit first: Healthcare (patient scheduling), Real Estate & Trades (lead routing/dispatch), Law & Accounting (PDF document ingestion/compliance audits), and E-commerce (retention chat agents/customer service)."
    },
    {
      question: "Do you build custom industry solutions or use templates?",
      answer: "We build bespoke custom integrations and AI workers tailored precisely to your company protocols. We do not rent out generic SaaS; you own the code, intellectual property, and hosting structure."
    },
    {
      question: "Can your AI agents integrate with our existing software?",
      answer: "Yes. We design pipelines that connect directly to standard ERPs and CRMs (epic, Dentrix, Salesforce, HubSpot, Jobber, QuickBooks, Linear) as well as legacy database layers through API or secure web scraping."
    },
    {
      question: "Do you provide ongoing post-launch support?",
      answer: "Yes. We offer Dedicated Support SLAs, security patches monitoring, model refines, and continuous system optimizations to keep your autonomous operations running 24/7."
    },
    {
      question: "How long does a typical industry implementation take?",
      answer: "A standard automation workflow or chatbot takes 2 to 4 weeks. Enterprise projects involving full custom application builds or specialized vector models take 6 to 12 weeks."
    }
  ];

  return (
    <>
      {/* Structured SEO Schemas */}
      <SEO
        type="Breadcrumb"
        breadcrumbs={[
          { name: "Home", item: "https://flowworks.ai" },
          { name: "Industries", item: "https://flowworks.ai/industries" }
        ]}
      />
      <SEO
        type="FAQ"
        faqs={faqsList}
      />
      <SEO
        type="Organization"
        description="Discover how FlowWorks deploys premium AI automation, custom software systems, and SEO growth across 40+ major industries including Healthcare, Real Estate, Legal, and Tech."
      />

      <Navbar />

      <main className="min-h-screen bg-dark-grid pt-32 pb-24 text-white overflow-hidden">
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 space-y-20 relative z-10">
          
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] bg-[#00D2FF]/10 px-3 py-1.5 rounded-lg border border-[#00D2FF]/20">
                Enterprise Verticals
              </span>
              <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white leading-none">
                AI & Automation <br />
                <span className="gradient-text">Built for Every</span> Industry
              </h1>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
                We help organizations automate operations, improve customer experiences, increase revenue, and scale efficiently with AI-powered solutions tailored to their industry.
              </p>
              
              {/* Statistics Dashboard */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 max-w-lg">
                <div className="space-y-1">
                  <p className="text-xl sm:text-2xl font-bold font-display text-[#00D2FF]">99.9%</p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Latency Free</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xl sm:text-2xl font-bold font-display text-[#8B5CF6]">10x</p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Ops Speedup</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xl sm:text-2xl font-bold font-display text-emerald-400">0%</p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Admin Overhead</p>
                </div>
              </div>

              {/* Inbound triggers */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="#lead-form-section"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] hover:from-[#00c0eb] hover:to-[#7c4ee4] text-black font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-cyan-500/20 cursor-none"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  href="#matrix-section"
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold text-sm transition-all cursor-none"
                >
                  See Solutions Matrix
                </Link>
              </div>
            </div>

            {/* Hero Animation Visual - Connecting Industries Nodes */}
            <div className="lg:col-span-5 h-[350px] sm:h-[400px] glass-panel rounded-3xl border border-white/5 overflow-hidden relative flex items-center justify-center bg-black/40">
              <div className="absolute inset-0 bg-dark-grid-subtle opacity-50" />
              
              {/* Floating Central Node */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.03, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#00D2FF] to-[#8B5CF6] p-[1.5px] z-20 flex items-center justify-center shadow-lg shadow-[#00D2FF]/20"
              >
                <div className="w-full h-full bg-[#050505] rounded-[14px] flex flex-col items-center justify-center text-center">
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">FlowWorks</span>
                  <span className="text-xs font-display font-extrabold text-[#00D2FF]">CORE AI</span>
                </div>
              </motion.div>

              {/* Orbiting Industry Nodes */}
              {[
                { name: "Medical", angle: 0, color: "#00D2FF", icon: HeartPulse },
                { name: "Property", angle: 60, color: "#8B5CF6", icon: Building },
                { name: "Retail", angle: 120, color: "#10B981", icon: ShoppingCart },
                { name: "Legal", angle: 180, color: "#3B82F6", icon: Scale },
                { name: "Logistics", angle: 240, color: "#F59E0B", icon: Truck },
                { name: "SaaS", angle: 300, color: "#EC4899", icon: Cpu }
              ].map((node, i) => {
                const radius = 110;
                const x = Math.cos((node.angle * Math.PI) / 180) * radius;
                const y = Math.sin((node.angle * Math.PI) / 180) * radius;
                
                return (
                  <React.Fragment key={i}>
                    {/* Glowing Connection Vector */}
                    <motion.div
                      initial={{ opacity: 0.1 }}
                      animate={{ opacity: [0.1, 0.4, 0.1] }}
                      transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                      className="absolute w-[2px] origin-top bg-gradient-to-b from-[#00D2FF]/30 to-transparent pointer-events-none"
                      style={{
                        height: radius,
                        left: "50%",
                        top: "50%",
                        transform: `translate(-50%, -50%) rotate(${node.angle - 90}deg) translateY(${radius/2}px)`
                      }}
                    />
                    
                    {/* Industry Node Bubble */}
                    <motion.div
                      animate={{
                        y: [y, y - 5, y]
                      }}
                      transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center z-20 cursor-none hover:border-[#00D2FF] hover:bg-black/60 group"
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      data-cursor-hover
                    >
                      <node.icon className="w-5 h-5 text-gray-400 group-hover:text-[#00D2FF] transition-colors" />
                      <span className="text-[7px] font-mono text-gray-500 uppercase mt-1 hidden group-hover:block transition-all">{node.name}</span>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </section>

          {/* Search, Category Filters, and Grid Section */}
          <section className="space-y-8">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6">
              
              {/* Controls Header */}
              <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
                
                {/* Search Bar */}
                <div className="relative flex-1 max-w-xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search 40+ industries (e.g. dental, roofing, law, banking)..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(9); // Reset pagination
                    }}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 hover:border-[#00D2FF]/30 focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all cursor-none font-sans"
                  />
                </div>

                {/* Counter */}
                <div className="text-xs font-mono text-gray-500 self-end lg:self-auto">
                  Showing <span className="text-white font-semibold">{filteredIndustries.length}</span> matching industries
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(9); // Reset pagination
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border cursor-none ${
                      selectedCategory === cat
                        ? "bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]/40 shadow-[0_0_15px_rgba(0,210,255,0.1)]"
                        : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-[#00D2FF]/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid display */}
            {filteredIndustries.length === 0 ? (
              <div className="glass-panel p-12 text-center rounded-2xl border border-white/5 space-y-4">
                <p className="text-gray-400 text-lg">No industries found matching your search term.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-white font-mono uppercase tracking-wider transition-all cursor-none"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {paginatedIndustries.map((ind, index) => {
                    const IndustryIcon = IconMapper[ind.iconName] || Globe;
                    
                    return (
                      <motion.div
                        key={ind.slug}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.25) }}
                        layout
                        className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between glass-panel-hover group"
                      >
                        <div className="space-y-4">
                          {/* Header: Icon & Category */}
                          <div className="flex justify-between items-center">
                            <div className="w-10 h-10 bg-white/5 border border-white/5 group-hover:border-[#00D2FF]/30 group-hover:bg-[#00D2FF]/5 rounded-xl flex items-center justify-center transition-colors">
                              <IndustryIcon className="w-5 h-5 text-gray-400 group-hover:text-[#00D2FF] transition-colors" />
                            </div>
                            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                              {ind.category}
                            </span>
                          </div>

                          {/* Details */}
                          <h3 className="font-display text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors uppercase leading-snug">
                            {ind.name}
                          </h3>
                          <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                            {ind.shortDesc}
                          </p>

                          {/* Challenges preview */}
                          <div className="space-y-1.5 pt-3 border-t border-white/5">
                            <p className="text-[10px] font-mono uppercase text-gray-500">Core Challenges:</p>
                            {ind.challenges.slice(0, 2).map((ch, i) => (
                              <div key={i} className="flex gap-2 items-center text-[10px] text-gray-400">
                                <ShieldAlert className="w-3.5 h-3.5 text-[#8B5CF6]/80 flex-shrink-0" />
                                <span className="truncate">{ch}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* View Solutions Link */}
                        <div className="pt-6 mt-4">
                          <button
                            onClick={() => selectAndScrollToExplorer(ind)}
                            className="w-full py-2.5 bg-white/5 hover:bg-gradient-to-r hover:from-[#00D2FF] hover:to-[#8B5CF6] hover:text-black border border-white/10 hover:border-transparent text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all cursor-none flex items-center justify-center gap-1"
                          >
                            View Solutions <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}

            {/* Pagination Controls */}
            {hasMore && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setVisibleCount(prev => prev + 9)}
                  className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D2FF]/40 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold transition-all cursor-none"
                >
                  Show More Industries
                </button>
              </div>
            )}
          </section>

          {/* Industry Solutions Explorer Section */}
          <section id="industry-explorer-section" className="scroll-mt-24 space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#00D2FF]" />
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#00D2FF]">Industry Solutions Explorer</h2>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D2FF]/1 via-transparent to-[#8B5CF6]/1 pointer-events-none rounded-3xl" />
              
              {/* Selected Industry Card Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00D2FF]/10 border border-[#00D2FF]/20 rounded-xl flex items-center justify-center">
                    {React.createElement(IconMapper[selectedIndustry.iconName] || Globe, {
                      className: "w-6 h-6 text-[#00D2FF]"
                    })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">Focus Area</span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase mt-0.5">{selectedIndustry.name}</h3>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  We deploy purpose-built automation nodes, custom workflows, and tailored CRM integrations designed to scale {selectedIndustry.name} operations.
                </p>

                {/* Key Metrics / Benefits */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Anticipated Impact:</p>
                  {selectedIndustry.benefits.map((ben, i) => (
                    <div key={i} className="flex gap-2.5 items-center text-xs text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#lead-form-section"
                    className="px-5 py-3 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] text-black font-semibold text-xs rounded-xl text-center cursor-none shadow-md hover:shadow-cyan-500/15"
                  >
                    Get a Custom Automation Plan
                  </Link>
                  <Link
                    href="#lead-form-section"
                    className="px-5 py-3 bg-white/5 border border-white/10 hover:border-[#00D2FF]/30 text-white font-semibold text-xs rounded-xl text-center cursor-none"
                  >
                    Talk to an AI Expert
                  </Link>
                </div>
              </div>

              {/* Selected Industry Solutions Details */}
              <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-white/5 lg:pl-8">
                
                {/* 1. Common Challenges */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Common Workflows Bottlenecks</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedIndustry.challenges.map((ch, i) => (
                      <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-start gap-2.5">
                        <ShieldAlert className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 leading-snug">{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Recommended Services */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Recommended Service Suite</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedIndustry.services.map((ser, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 bg-[#00D2FF]/5 border border-[#00D2FF]/20 text-[#00D2FF] text-xs font-mono uppercase tracking-wider rounded-lg"
                      >
                        {ser}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Real-world Use Case */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Transformation Blueprints</h4>
                  {selectedIndustry.useCases.map((uc, i) => (
                    <div key={i} className="p-4 bg-[#8B5CF6]/5 border border-[#8B5CF6]/10 rounded-xl space-y-2">
                      <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#00D2FF]" /> {uc.title}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {uc.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* Industry Solution Matrix Section */}
          <section id="matrix-section" className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#8B5CF6]" />
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6]">Industry Solution Matrix</h2>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 space-y-6">
              <div className="max-w-2xl space-y-2">
                <h3 className="font-display text-2xl font-bold uppercase text-white leading-tight">Interactive Service Mapping</h3>
                <p className="text-xs text-gray-400">
                  Select a core industry below to inspect the service matrix and discover which automations bring the highest operational returns.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Industry Selection Column */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-2 h-fit">
                  {MATRIX_INDUSTRIES.map((ind) => {
                    const IndIcon = IconMapper[ind.iconName] || Globe;
                    const isActive = activeMatrixSlug === ind.slug;
                    
                    return (
                      <button
                        key={ind.slug}
                        onClick={() => setActiveMatrixSlug(ind.slug)}
                        className={`p-4 rounded-xl border flex flex-col gap-3 justify-between items-start text-left transition-all cursor-none ${
                          isActive
                            ? "bg-[#00D2FF]/5 border-[#00D2FF] text-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.1)]"
                            : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                        }`}
                        data-cursor-hover
                      >
                        <IndIcon className={`w-6 h-6 ${isActive ? "text-[#00D2FF]" : "text-gray-500"}`} />
                        <span className="text-xs font-mono uppercase font-bold tracking-wider">{ind.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Matrix Detail Display Box */}
                <div className="lg:col-span-7 bg-black/30 border border-white/5 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] uppercase">
                      <Settings className="w-4 h-4 text-[#00D2FF] animate-spin" style={{ animationDuration: '6s' }} />
                      <span>Matrix Diagnostics for {activeMatrixIndustry.name}</span>
                    </div>
                    <h4 className="font-display text-xl font-bold uppercase text-white">Recommended Integration Mappings</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Below are the highly recommended services calculated to bring instant efficiency returns and remove manual workload for {activeMatrixIndustry.name}.
                    </p>
                  </div>

                  {/* Service nodes details */}
                  <div className="space-y-3">
                    {activeMatrixIndustry.services.map((ser, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3.5 bg-white/5 border border-white/5 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
                          <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">{ser}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] uppercase font-bold">
                          High Priority
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-[10px] font-mono text-gray-500">Includes secure sandbox modeling</span>
                    <Link
                      href="#lead-form-section"
                      className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D2FF]/30 text-white font-mono text-xs uppercase tracking-wider rounded-xl cursor-none"
                    >
                      See Industry Solutions
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* Why Industries Choose Us Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#00D2FF]" />
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#00D2FF]">Why Industries Partner With Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Industry Expertise",
                  desc: "We dive deep into your specific processes, understanding constraints from HIPAA in healthcare to MLS in real estate.",
                  icon: UserCheck
                },
                {
                  title: "AI-First Approach",
                  desc: "We don't just patch systems; we build intelligent agents capable of logic-routing and natural interactions.",
                  icon: CpuIcon
                },
                {
                  title: "End-to-End Implementation",
                  desc: "Our senior architects handle UX planning, database pipelines, api configurations, and launching scripts.",
                  icon: Settings
                },
                {
                  title: "Ongoing Optimization",
                  desc: "We closely review performance data, patch APIs, update models, and adapt structures post-deployment.",
                  icon: TrendingUp
                },
                {
                  title: "Proven Frameworks",
                  desc: "We utilize established SOC2 compliant structures and vector search caching pipelines to save time.",
                  icon: LayersIcon
                },
                {
                  title: "Custom Development",
                  desc: "We own complete stack expertise (Next.js, Node, React Native, Python, Vector databases) for custom scale.",
                  icon: Laptop
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 glass-panel-hover">
                  <div className="w-10 h-10 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#00D2FF]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies Preview Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#8B5CF6]" />
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6]">Case Studies Preview</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  industry: "Healthcare",
                  challenge: "Manual patient booking pipelines causing 22% call abandonment rate.",
                  solution: "Deployed HIPAA-secure AI Voice Agent connected to Dentrix calendar.",
                  outcome: "98% Booking automation, 0% queue abandonment, CSAT increased to 4.9/5."
                },
                {
                  industry: "Real Estate & Trades",
                  challenge: "Lead response delays of 4 hours led to lost customer contract opportunities.",
                  solution: "Deployed SMS Sales Agent with automated CRM lead scoring parameters.",
                  outcome: "Lead response times dropped below 15 seconds, sales conversions increased by 3.2x."
                },
                {
                  industry: "Law Firms",
                  challenge: "Intake screening and paperwork indexing consuming 15 paralegal hours weekly.",
                  solution: "Custom OCR document parser with automated workflow database mappings.",
                  outcome: "Client intake times reduced from 30 minutes to 45 seconds, zero administration errors."
                }
              ].map((cs, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between glass-panel-hover">
                  <div className="space-y-4">
                    <span className="px-2.5 py-1 rounded bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-[10px] font-mono uppercase tracking-wider font-semibold">
                      {cs.industry}
                    </span>
                    <div className="space-y-2 pt-2">
                      <p className="text-xs text-gray-400"><strong className="text-white font-mono uppercase text-[9px] block mb-1">Challenge:</strong> {cs.challenge}</p>
                      <p className="text-xs text-gray-400"><strong className="text-white font-mono uppercase text-[9px] block mb-1">Solution:</strong> {cs.solution}</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <p className="text-xs text-emerald-400 font-mono font-semibold uppercase tracking-wider">
                      ★ Outcome: {cs.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dynamic Multi-Step Lead Section */}
          <section id="lead-form-section" className="bg-dark-grid py-12 px-6 border border-white/5 rounded-3xl relative overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
                Collaboration Setup
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
                Claim Your Industry Automation Blueprint
              </h2>
              <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
                Outlines custom integration vectors specifically mapped to your industry. Schedule your AI operations audit now.
              </p>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <MultiStepLeadForm />
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="font-display text-3xl font-bold uppercase text-white">Frequently Asked Questions</h2>
              <p className="text-xs text-gray-400">Everything you need to know about setting up industry AI automation</p>
            </div>

            <div className="space-y-4 pt-4">
              {faqsList.map((faq, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 space-y-3">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#00D2FF] shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pl-7">
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

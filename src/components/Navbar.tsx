'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowUpRight, Cpu, Users, MessageSquare, TrendingUp, Mic, Target, Calendar, Bot, Database, Zap, Settings, FileSearch, Laptop, Search, Smartphone } from 'lucide-react';

const serviceCategories = [
  {
    title: 'AI Agents',
    items: [
      { label: 'AI Employees as a Service', href: '/services/ai-employees-as-a-service', desc: 'Fully managed virtual workforce reimagined.', icon: <Users className="w-4 h-4 text-[#00D2FF]" /> },
      { label: 'AI Customer Support Agents', href: '/services/ai-customer-support-agents', desc: 'Support that never sleeps, automated support.', icon: <MessageSquare className="w-4 h-4 text-[#00D2FF]" /> },
      { label: 'AI Sales Agents', href: '/services/ai-sales-agents', desc: 'Nurture leads and close deals automatically.', icon: <TrendingUp className="w-4 h-4 text-[#00D2FF]" /> },
      { label: 'AI Voice Agents', href: '/services/ai-voice-agents', desc: 'Natural conversations, automated at scale.', icon: <Mic className="w-4 h-4 text-[#00D2FF]" /> },
    ]
  },
  {
    title: 'Growth & Revenue',
    items: [
      { label: 'AI Lead Gen Automation', href: '/services/ai-lead-generation-automation', desc: 'Prospecting targets on autopilot.', icon: <Target className="w-4 h-4 text-[#8B5CF6]" /> },
      { label: 'AI Appointment Setting', href: '/services/ai-appointment-setting', desc: 'Book meetings automatically.', icon: <Calendar className="w-4 h-4 text-[#8B5CF6]" /> },
      { label: 'AI Chatbot Development', href: '/services/ai-chatbot-development', desc: 'Conversational AI built for your brand.', icon: <Bot className="w-4 h-4 text-[#8B5CF6]" /> },
    ]
  },
  {
    title: 'Operations & Automation',
    items: [
      { label: 'CRM Automation', href: '/services/crm-automation', desc: 'Your CRM works for you, automatically.', icon: <Database className="w-4 h-4 text-emerald-400" /> },
      { label: 'Workflow Automation', href: '/services/workflow-automation', desc: 'Streamline every process and bottleneck.', icon: <Zap className="w-4 h-4 text-emerald-400" /> },
      { label: 'Business Process Automation', href: '/services/business-process-automation', desc: 'Automate work, amplify output.', icon: <Settings className="w-4 h-4 text-emerald-400" /> },
    ]
  },
  {
    title: 'Strategy & Core',
    items: [
      { label: 'AI Consulting', href: '/services/ai-consulting', desc: 'Strategic guidance for real impact.', icon: <FileSearch className="w-4 h-4 text-yellow-400" /> },
      { label: 'Custom AI Solutions', href: '/services/custom-ai-solutions', desc: 'Bespoke systems built for you.', icon: <Cpu className="w-4 h-4 text-yellow-400" /> },
      { label: 'Website Design & Dev', href: '/services/website-design-and-development', desc: 'Premium responsive frontends.', icon: <Laptop className="w-4 h-4 text-yellow-400" /> },
      { label: 'SEO Services', href: '/services/seo-services', desc: 'Programmatic search ranking.', icon: <Search className="w-4 h-4 text-yellow-400" /> },
      { label: 'App Design & Dev', href: '/services/app-design-and-development', desc: 'React Native iOS & Android apps.', icon: <Smartphone className="w-4 h-4 text-yellow-400" /> },
    ]
  }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      name: "X-Twitter",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Pinterest",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
          <path d="M12.24 2C6.6 2 2 6.6 2 12.24c0 4.3 2.64 8 6.46 9.54-.1-.8-.19-2-.03-2.86.14-.6.93-3.97.93-3.97s-.24-.47-.24-1.17c0-1.1.64-1.92 1.43-1.92.67 0 1 .5 1 1.1 0 .68-.43 1.7-.66 2.64-.18.78.4 1.42 1.17 1.42 1.4 0 2.48-1.48 2.48-3.6 0-1.88-1.35-3.2-3.28-3.2-2.24 0-3.55 1.68-3.55 3.4 0 .68.26 1.4.59 1.8.06.08.07.15.05.23l-.22.9c-.04.14-.12.17-.27.1-1-.46-1.63-1.9-1.63-3.06 0-2.5 1.8-4.8 5.25-4.8 2.76 0 4.9 1.97 4.9 4.6 0 2.74-1.73 4.95-4.14 4.95-.8 0-1.57-.42-1.83-.92l-.5 1.9c-.18.68-.67 1.53-1 2.06 1 .3 2 .47 3 .47 5.64 0 10.24-4.6 10.24-10.24C22.5 6.6 17.9 2 12.24 2z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[99999] px-6 sm:px-12 py-6 flex items-center justify-between bg-black/15 backdrop-blur-lg border-b border-white/5">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline cursor-none">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 bg-[#00D2FF] opacity-20 blur-sm rounded-lg" />
            <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#00D2FF] relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight font-display">
            FlowWorks <span className="text-[#00D2FF]">AI</span>
          </span>
        </Link>

        {/* Center: Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Services Mega Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 cursor-none py-2">
              Services <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-[40%] top-full w-[800px] bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[99999]"
                >
                  <div className="grid grid-cols-4 gap-6">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-4">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] font-semibold border-b border-white/5 pb-2">
                          {category.title}
                        </h4>
                        <div className="flex flex-col gap-3">
                          {category.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="group flex gap-2 items-start text-xs text-gray-400 hover:text-white transition-colors cursor-none"
                              onClick={() => setMegaOpen(false)}
                            >
                              <div className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                                {item.icon}
                              </div>
                              <div className="space-y-0.5">
                                <span className="block font-medium leading-tight group-hover:text-[#00D2FF] transition-colors">
                                  {item.label}
                                </span>
                                <span className="block text-[10px] text-gray-500 leading-tight">
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#weare" className="text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-none">
            Industries
          </Link>
          <Link href="/case-study" className="text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-none">
            Case Studies
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-none">
            Blog
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-none">
            About Us
          </Link>
        </nav>

        {/* Right: CTA & Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#lead-form-section"
            className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#00D2FF]/40 text-white font-semibold text-xs transition-all duration-300 hover:bg-[#00D2FF]/10 hover:border-[#00D2FF] hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] font-display cursor-none"
          >
            Book a Free Audit <ArrowUpRight className="w-3.5 h-3.5 text-[#00D2FF]" />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 text-white transition-colors cursor-none relative z-[999999]"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#050505]/98 z-[99998] flex flex-col justify-center px-12 sm:px-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto overflow-y-auto max-h-[85vh]">
              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-white hover:text-[#00D2FF] text-2xl sm:text-4xl font-display font-semibold transition-colors cursor-none">
                  HOME
                </Link>
                <Link href="/about" onClick={() => setOpen(false)} className="text-white hover:text-[#00D2FF] text-2xl sm:text-4xl font-display font-semibold transition-colors cursor-none">
                  ABOUT US
                </Link>
                <Link href="/case-study" onClick={() => setOpen(false)} className="text-white hover:text-[#00D2FF] text-2xl sm:text-4xl font-display font-semibold transition-colors cursor-none">
                  CASE STUDIES
                </Link>
                <Link href="/blog" onClick={() => setOpen(false)} className="text-white hover:text-[#00D2FF] text-2xl sm:text-4xl font-display font-semibold transition-colors cursor-none">
                  BLOG
                </Link>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500">Our Services</h4>
                  <div className="grid grid-cols-2 gap-2 pl-2 border-l border-white/10">
                    {serviceCategories.flatMap(c => c.items).slice(0, 8).map(item => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-xs text-gray-400 hover:text-white transition-colors cursor-none"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Icons inside side menu */}
                <div className="pt-6 border-t border-white/10 flex gap-4 items-center">
                  {socialLinks.map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={s.name}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00D2FF] hover:border-[#00D2FF] transition-all cursor-none"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </nav>
              
              <div className="hidden lg:flex flex-col gap-6 text-left border-l border-white/10 pl-12">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">HQ Address</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    100 Pine Street<br />
                    San Francisco, CA 94111<br />
                    United States
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Email</h4>
                  <p className="text-gray-300 text-sm">hello@flowworks.ai</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

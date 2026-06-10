'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Bot, Cpu, Users, Settings, Zap } from 'lucide-react';

const categories = [
  { id: 'agents', name: 'AI Agents' },
  { id: 'growth', name: 'Growth & Revenue' },
  { id: 'operations', name: 'Operations & Automation' },
  { id: 'strategy', name: 'Strategy & Custom' }
];

const services = [
  {
    category: 'agents',
    slug: 'ai-employees-as-a-service',
    number: '01',
    title: 'AI Employees as a Service',
    description: 'Deploy fully custom, autonomous AI employees that integrate with your email, Slack, databases, and internal tools. They work 24/7 without management overhead.',
    tags: ['Autonomous Agents', 'Operations Managers', 'Virtual Assistants'],
  },
  {
    category: 'agents',
    slug: 'ai-customer-support-agents',
    number: '02',
    title: 'AI Customer Support Agents',
    description: 'Deploy high-performance, context-aware AI support agents that resolve tickets, process returns, and answer client queries around the clock.',
    tags: ['Zendesk Sync', 'Sentiment Analysis', 'WhatsApp Chatbots'],
  },
  {
    category: 'agents',
    slug: 'ai-sales-agents',
    number: '03',
    title: 'AI Sales Agents',
    description: 'Inject AI sales agents into your pipeline to prospect targets, customize cold outreaches, score leads, and nurture relationships on autopilot.',
    tags: ['Cold Outreaches', 'Lead Sourcing', 'Drip Nurtures'],
  },
  {
    category: 'agents',
    slug: 'ai-voice-agents',
    number: '04',
    title: 'AI Voice Agents',
    description: 'Deploy voice agents that speak with natural inflection, handling inbound customer inquiries and outbound follow-up calls with latency under 500ms.',
    tags: ['Receptionist Agents', 'Latencies < 500ms', 'Phone Integrations'],
  },
  {
    category: 'growth',
    slug: 'ai-lead-generation-automation',
    number: '05',
    title: 'AI Lead Generation Automation',
    description: 'Build automated engines that scrape search signals, filter qualified LinkedIn profiles, and draft personalized sequences to maximize conversion rates.',
    tags: ['Directory Scraping', 'Data Enrichment', 'Apollo / Hunter API'],
  },
  {
    category: 'growth',
    slug: 'ai-appointment-setting',
    number: '06',
    title: 'AI Appointment Setting',
    description: 'Deploy AI appointment setters that chat with prospects, check calendar availability, resolve scheduling conflicts, and book sales meetings directly.',
    tags: ['Calendly Sync', 'Outbound Schedulers', 'Reminders'],
  },
  {
    category: 'growth',
    slug: 'ai-chatbot-development',
    number: '07',
    title: 'AI Chatbot Development',
    description: 'We design and develop intelligent conversational chatbots trained on your internal documentation, product guides, and corporate tone guidelines.',
    tags: ['Internal Knowledge Base', ' tone guidelines', 'E-commerce Help'],
  },
  {
    category: 'operations',
    slug: 'crm-automation',
    number: '08',
    title: 'CRM Automation',
    description: 'Connect your HubSpot, Salesforce, or custom CRM to automate lead routing, deal stage progressions, data sanitization, and alert sequences.',
    tags: ['HubSpot & Salesforce', 'Lead Assignment', 'Data Cleansing'],
  },
  {
    category: 'operations',
    slug: 'workflow-automation',
    number: '09',
    title: 'Workflow Automation',
    description: 'Link legacy databases with modern cloud APIs using custom script architectures, Make.com, or Zapier grids for frictionless operation.',
    tags: ['Make / Zapier', 'Invoice Automation', 'QuickBooks Sync'],
  },
  {
    category: 'operations',
    slug: 'business-process-automation',
    number: '10',
    title: 'Business Process Automation',
    description: 'We audit, redesign, and automate complex company operations, from employee onboarding cycles to high-scale supply chain logistics updates.',
    tags: ['Supply Chain Sync', 'Contract Processing', 'HR Reviews'],
  },
  {
    category: 'strategy',
    slug: 'ai-consulting',
    number: '11',
    title: 'AI Consulting',
    description: 'We align with executive teams to analyze operation structures, assess AI readiness, evaluate ROI potential, and draft engineering roadmaps.',
    tags: ['AI Workshops', 'ML Feasibility Studies', 'ROI Frameworks'],
  },
  {
    category: 'strategy',
    slug: 'custom-ai-solutions',
    number: '12',
    title: 'Custom AI Solutions',
    description: 'For workflows requiring specialized systems, we engineer bespoke LLM fine-tunes, custom vector search layers, and custom data processing graphs.',
    tags: ['LLM Fine-tunes', 'Vector Databases', 'Semantic Search'],
  },
  {
    category: 'strategy',
    slug: 'website-design-and-development',
    number: '13',
    title: 'Website Design & Dev',
    description: 'We design and develop custom, premium Next.js frontends featuring glassmorphism elements, GSAP/Framer animations, and top-tier conversions.',
    tags: ['Next.js App Router', 'Tailwind CSS v4', 'Animations'],
  },
  {
    category: 'strategy',
    slug: 'seo-services',
    number: '14',
    title: 'SEO Services',
    description: 'Maximize organic outreach using custom programmatic architectures, high-fidelity metadata schemas, and speed optimization audits.',
    tags: ['Programmatic Pages', 'Core Web Vitals', 'JSON-LD Schema'],
  },
  {
    category: 'strategy',
    slug: 'app-design-and-development',
    number: '15',
    title: 'App Design & Dev',
    description: 'High-performance React Native apps featuring offline support, native animations, hardware sensor integration, and push alerts.',
    tags: ['React Native', 'Expo Deployments', 'Sensor Hooks'],
  }
];

export default function ServicesSection() {
  const [activeCat, setActiveCat] = useState('agents');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const filteredServices = services.filter(s => s.category === activeCat);

  return (
    <section
      id="services"
      ref={ref}
      className="bg-dark-grid py-24 px-6 sm:px-12 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-2">
            <span className="text-[#00D2FF] font-mono text-xs uppercase tracking-widest font-semibold block">
              What We Build
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              Our Capabilities
            </h2>
          </div>
          <Link
            href="#lead-form-section"
            className="text-xs font-mono text-[#00D2FF] hover:text-[#8B5CF6] transition-colors border-b border-dashed border-[#00D2FF]/40 pb-1 cursor-none"
          >
            Claim Free Custom Audit &rarr;
          </Link>
        </motion.div>

        {/* Interactive Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-none ${
                activeCat === cat.id
                  ? 'bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] text-white font-bold'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid (filtered by category) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between glass-panel-hover"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-gray-500">{service.number}</span>
                    <span className="text-[10px] font-mono text-[#00D2FF] uppercase tracking-widest">FlowWorks</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase group-hover:text-[#00D2FF]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-[10px] font-mono text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#00D2FF] hover:text-[#8B5CF6] font-mono transition-colors cursor-none mt-2 sm:mt-0 shrink-0"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

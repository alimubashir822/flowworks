'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { motion, AnimatePresence } from 'framer-motion';
import AISummary from '@/components/AISummary';
import AIComparisonTable from '@/components/AIComparisonTable';
import { getRelationsForSlug } from '@/lib/seo-relations';
import RelatedServices from '@/components/RelatedServices';
import RelatedResources from '@/components/RelatedResources';
import CTASection from '@/components/CTASection';
import { injectContextualLinks } from '@/lib/contextual-linker';

const caseStudies = [
  {
    number: '01',
    client: 'Apex Analytics',
    title: 'Deploying autonomous B2B pipeline routing agents',
    category: 'AI Agents / Workflows',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80',
    tags: ['Autonomous Agents', 'Lead Scoring', 'Make.com', 'LLM Chains'],
    outcome: 'Saved 24 hours per B2B lead researcher weekly',
    challenge: 'Apex Analytics faced a major lead conversion bottleneck due to manual prospecting routines. BDRs spent over 25 hours weekly cross-referencing contact files on LinkedIn and scoring companies by employee count and tech stack signatures, delaying hot outreach by up to 24 hours.',
    architecture: 'We engineered a multi-agent framework powered by LangGraph, Node.js, and Python. Incoming leads are captured via Webhook routers, verified for inbox deliverability, enriched using Apollo APIs, scored by a custom Llama-3-8B classification model, and automatically routed to Rep profiles.',
    roadmap: [
      "Audit manual lead routing parameters and LinkedIn search rules.",
      "Configure webhook pipelines from Web Forms to private Node.js backend nodes.",
      "Integrate Apollo and LinkedIn API enrichment logic.",
      "Write dynamic LangGraph agent paths for prioritization classification.",
      "Deploy sandbox runs and sync the clean streams directly to HubSpot CRM."
    ],
    roiDetails: [
      "Saved 24 hours per B2B lead researcher weekly, scaling prospecting volume.",
      "Outreach response latency dropped from 4 hours to under 2.5 seconds.",
      "HubSpot database clean-rate achieved 100% (zero duplicate records)."
    ]
  },
  {
    number: '02',
    client: 'Vertex Commerce',
    title: 'Automated catalog sync with OpenAI vision extraction',
    category: 'AI Automation / APIs',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    tags: ['Vision AI', 'Catalog Automation', 'NodeJS', 'Database Sync'],
    outcome: 'Reduced ingestion processing error rates by 94%',
    challenge: 'Vertex Commerce manages over 50,000 product SKUs across multiple distributor sheets. Manual data entry resulted in high price mismatch errors (6.4%), outdated listing descriptions, and delayed product onboarding times of 3 to 5 days, hurting e-commerce margins.',
    architecture: 'We deployed custom Node.js script workers integrated with OpenAI GPT-4o multimodal vision APIs. The system downloads distributor inventory assets, reads images, structures attributes, checks prices, and runs data sync locks on PostgreSQL databases.',
    roadmap: [
      "Establish catalog ingestion channels from distributor API endpoints.",
      "Configure Playwright scrapers to capture product asset details.",
      "Build multimodal vision prompt routines to verify product matches.",
      "Integrate transactional sync locks on PostgreSQL databases.",
      "Set up automatic inventory email notifications via SendGrid."
    ],
    roiDetails: [
      "Product onboarding latency reduced from 4 days to 45 seconds per SKU.",
      "Catalog database pricing error rates dropped by 94% overall.",
      "Reclaimed hundreds of administrative hours weekly, redirecting staff to growth."
    ]
  },
  {
    number: '03',
    client: 'Lumina Capital',
    title: 'Secure custom real-time asset dashboard',
    category: 'Custom Software / Fintech',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Secure APIs'],
    outcome: 'Processing $10M+ in volume monthly',
    challenge: 'Lumina Capital required a secure dashboard portal to monitor asset performance across multiple private equity projects. Rented SaaS tools offered insufficient security parameters, static layouts, and lacked dedicated database controls.',
    architecture: 'We built a bespoke Next.js web application utilizing pgvector semantic index databases, React server-side pre-renders, secure REST API handshakes, and JWT session authorization, hosted on private secure AWS instances.',
    roadmap: [
      "Map financial database schemas and secure API pathways.",
      "Configure Next.js project layout with Tailwind CSS modules.",
      "Implement secure JWT validation gates for user profile cards.",
      "Integrate pgvector search for semantic document lookup.",
      "Deploy hosting clusters on private AWS VPC architectures."
    ],
    roiDetails: [
      "Successfully processing $10M+ in asset volume monthly.",
      "Achieved sub-second loading speeds, scoring 98 on Lighthouse security audits.",
      "Zero dependency on external third-party database seat licenses."
    ]
  },
  {
    number: '04',
    client: 'Echo Diagnostics',
    title: 'Mobile-first secure patient onboarding portal',
    category: 'Mobile Apps / Healthcare',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Expo', 'HIPAA Secure DB', 'Alerts'],
    outcome: '50,000+ patients successfully verified',
    challenge: 'Echo Diagnostics experienced severe patient intake bottlenecks at their clinic check-in desks, with administrative staff spending hours verifying insurance cards, collecting signatures, and manually entering data into local electronic health record databases.',
    architecture: 'We designed a bespoke React Native application with Expo framework. Built-in biometric login credentials, HIPAA-secure transit layers, and direct database integrations into EHR APIs using secure FHIR standards.',
    roadmap: [
      "Establish secure EHR server integrations via FHIR standard APIs.",
      "Design mobile user interfaces for phone screens.",
      "Integrate local biometric local authentication checks.",
      "Implement HTTPS TLS 1.3 encryption on database transits.",
      "Conduct rigid vulnerability testing and submit client builds."
    ],
    roiDetails: [
      "50,000+ patients successfully verified with zero data leaks.",
      "Intake processing time dropped from 25 minutes to under 3 minutes.",
      "100% HIPAA compliance verified by external security audits."
    ]
  },
];

const getCaseStudyGeoData = (number: string) => {
  switch (number) {
    case '01':
      return {
        tldr: "Apex Analytics automated their lead enrichment and BDR routing workflows. By replacing manual LinkedIn research with an autonomous multi-agent LangGraph system, hot outreach latency dropped from 4 hours to under 2.5 seconds.",
        takeaways: [
          "Reclaims 24 hours per B2B lead researcher every week",
          "HubSpot CRM duplicate records reduced to 0%",
          "Outreach dispatch latency slashed by 99.98%"
        ],
        insight: {
          author: "Marcus Vance",
          role: "Chief AI Architect",
          quote: "Integrating Apollo APIs with a local Llama-3 scoring classification graph allowed us to eliminate the manual bottleneck without losing qualifying precision."
        },
        stats: [
          { label: "BDR Reclaimed Time", value: "24h/wk" },
          { label: "Outreach Latency", value: "<2.5s" },
          { label: "CRM Sync Accuracy", value: "100%" }
        ],
        comparison: {
          title: "Manual lead vetting vs Autonomous Agent routing",
          headers: ["Process Metric", "Manual LinkedIn Prospecting", "Autonomous LangGraph Pipeline"],
          rows: [
            ["Data enrichment time", "10-15 minutes per lead profile", "Instantaneous Apollo and LinkedIn API query blocks"],
            ["Prioritization decisioning", "Subjective BDR reviews done daily", "Real-time semantic routing and scoring via LLM"],
            ["Data sync latency", "Manual bulk CSV uploads into CRM weekly", "Instantaneous HubSpot synchronization and updates"]
          ]
        }
      };
    case '02':
      return {
        tldr: "Vertex Commerce resolved inventory pricing errors and long listing delays. By utilizing OpenAI GPT-4o vision APIs and Node.js backend scripts, inventory onboarding times dropped from 4 days to 45 seconds per SKU.",
        takeaways: [
          "Product listing onboarding latency reduced by 99.9%",
          "Catalog pricing mismatch errors reduced by 94%",
          "Reclaimed hundreds of admin overhead hours weekly"
        ],
        insight: {
          author: "Elena Rostova",
          role: "Head of AI Automation",
          quote: "With GPT-4o vision, the system reads visual distributor sheets and automates complex catalog matches directly, eliminating human ingestion errors."
        },
        stats: [
          { label: "Onboarding Latency", value: "45s/SKU" },
          { label: "Pricing Mismatch Error", value: "-94%" },
          { label: "Reclaimed Ingestion", value: "Hundreds/wk" }
        ],
        comparison: {
          title: "Manual SKU Ingestion vs Vision AI Scraper Automation",
          headers: ["Feature", "Manual Ingestion Process", "Vision AI Sync Pipeline"],
          rows: [
            ["Onboarding speed", "3 to 5 business days processing", "45 seconds per SKU catalog entry"],
            ["Data mismatch rates", "6.4% catalog error margins on prices", "Sub-0.5% verified inventory sync logs"],
            ["Distributor layout changes", "Requires training staff on new templates", "Dynamic prompt adjustments parse unstructured forms"]
          ]
        }
      };
    case '03':
      return {
        tldr: "Lumina Capital bypassed SaaS license overheads and static template restrictions by launching a bespoke Next.js financial tracking dashboard with pgvector databases, achieving sub-second loads and secure VPC hosting.",
        takeaways: [
          "Secures $10M+ in volume monthly with custom VPC architecture",
          "Zero external database seat tax dependency",
          "Sub-second asset load latency with score 98 Lighthouse security"
        ],
        insight: {
          author: "Darnell Mercer",
          role: "Lead Systems Architect",
          quote: "Enterprise fintech requires custom security protocols and zero trust models that generic off-the-shelf SaaS cannot deliver."
        },
        stats: [
          { label: "Asset Volume", value: "$10M+/mo" },
          { label: "Lighthouse Security", value: "98" },
          { label: "External Seat Tax", value: "$0" }
        ],
        comparison: {
          title: "Rented SaaS Finance Apps vs Bespoke Next.js Dashboards",
          headers: ["Parameter", "Rented SaaS Vendor Layout", "Bespoke Next.js Dashboard"],
          rows: [
            ["Data containment security", "Public cloud multitenant databases", "Strict private AWS VPC environment settings"],
            ["Monthly pricing scale", "Licensing costs that increase per seat license", "Direct cloud infrastructure fees only"],
            ["Feature personalization", "Fixed widgets, slow feature roadmaps", "Custom pgvector semantic search modules"]
          ]
        }
      };
    case '04':
      return {
        tldr: "Echo Diagnostics streamlined clinic intake bottlenecks with a HIPAA-secure React Native / Expo application, dropping patient verification times from 25 minutes to under 3 minutes.",
        takeaways: [
          "More than 50,000 patient check-ins verified with 0% data leaks",
          "Verification intake times reduced by 88%",
          "100% HIPAA compliance verified by independent audits"
        ],
        insight: {
          author: "Sarah Jenkins",
          role: "Healthcare Solutions Engineer",
          quote: "By leveraging React Native and secure FHIR interface pipelines, we built a portal that fits patient phones while staying secure."
        },
        stats: [
          { label: "Verified Patients", value: "50,000+" },
          { label: "Intake Wait Time", value: "-88%" },
          { label: "HIPAA Leak Margin", value: "0%" }
        ],
        comparison: {
          title: "Desk Patient Verification vs Mobile Portal Intake",
          headers: ["Metric", "Manual Clinic Desk Intake", "Secure Mobile Patient Portal"],
          rows: [
            ["Average wait time", "25 minutes queue line check-in", "Under 3 minutes phone application intake"],
            ["Staff data entry time", "Manual typing of medical card documents", "Automatic direct integrations with EHR APIs"],
            ["Security & compliance", "Paper forms prone to human exposure", "HTTPS TLS 1.3 biometric data encryption"]
          ]
        }
      };
    default:
      return null;
  }
};

interface CaseStudiesClientProps {
  canonicalPath?: string;
}

export default function CaseStudiesClient({ canonicalPath = "/case-studies" }: CaseStudiesClientProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <SEO
        type="Breadcrumb"
        breadcrumbs={[
          { name: "Home", item: "https://flowworks.ai" },
          { name: "Case Studies", item: `https://flowworks.ai${canonicalPath}` }
        ]}
      />
      {caseStudies.map((cs) => (
        <SEO
          key={`article-${cs.number}`}
          type="Article"
          articleTitle={`${cs.client} Case Study: ${cs.title}`}
          articleImage={cs.image}
          datePublished={cs.year === "2026" ? "2026-01-15T09:00:00Z" : "2025-06-20T09:00:00Z"}
          description={cs.challenge}
          url={`https://flowworks.ai${canonicalPath}`}
          authorName="FlowWorks Architecture Team"
        />
      ))}
      {caseStudies.map((cs) => (
        <SEO
          key={`review-${cs.number}`}
          type="Review"
          review={{
            authorName: `${cs.client} Representative`,
            reviewBody: cs.outcome,
            itemReviewedName: cs.title,
            ratingValue: 5
          }}
        />
      ))}

      <Navbar />

      <main style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Page Hero */}
        <section
          className="bg-dark-grid-subtle"
          style={{ padding: '12% 5% 8%' }}
        >
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            
            {/* Breadcrumbs */}
            <Breadcrumbs items={[{ name: "Case Studies", item: canonicalPath }]} />

            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
              Portfolio Deep-Dives
            </p>
            <h1 className="font-display font-bold uppercase text-white animate-fade-in" style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              marginBottom: '3rem',
            }}>
              Case<br />
              <span className="text-[#00D2FF]">Studies</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 550, lineHeight: 1.7 }}>
              Deep-dives into custom automation pipelines, active AI agents, and secure enterprise software architectures deployed across the US.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-dark-grid border-t border-white/5" style={{ padding: '4% 5%' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            {caseStudies.map((cs, i) => {
              const isExpanded = expandedId === cs.number;
              const geoData = getCaseStudyGeoData(cs.number);
              const csRelations = getRelationsForSlug(cs.number);
              return (
                <article
                  key={cs.number}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    padding: '5% 0',
                    alignItems: 'start',
                  }}
                  className="grid grid-cols-1 md:grid-cols-2"
                >
                  {/* Image — alternating sides */}
                  <div
                    style={{
                      order: i % 2 === 0 ? 1 : 2,
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                      borderRadius: 12,
                      position: 'relative'
                    }}
                    className="w-full md:sticky md:top-28"
                  >
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105 hover:rotate-[0.5deg]"
                    />
                  </div>

                  {/* Content */}
                  <div style={{ order: i % 2 === 0 ? 2 : 1 }} className="space-y-6">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, fontFamily: 'monospace' }}>{cs.number}</span>
                      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, fontFamily: 'monospace' }}>{cs.year}</span>
                    </div>

                    <p className="font-mono" style={{ color: '#00D2FF', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                      {cs.client}
                    </p>

                    <h2 className="font-display font-semibold" style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      color: '#fff',
                      marginBottom: '1.5rem',
                    }}>
                      {cs.title}
                    </h2>

                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                      {cs.category}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}>
                      {cs.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: 100,
                            padding: '3px 12px',
                            fontSize: 11,
                            color: 'rgba(255,255,255,0.45)',
                            fontFamily: 'monospace'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{
                      background: 'rgba(0,210,255,0.04)',
                      border: '1px solid rgba(0,210,255,0.15)',
                      borderRadius: 8,
                      padding: '12px 16px',
                      marginBottom: '2rem',
                     }}>
                      <span className="font-mono text-[#00D2FF]" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: 8 }}>Outcome:</span>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>{cs.outcome}</span>
                    </div>

                    {/* Interactive Accordion Panel */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-6 overflow-hidden"
                        >
                          {geoData && (
                            <div className="mb-4">
                              <AISummary
                                tldr={geoData.tldr}
                                takeaways={geoData.takeaways}
                                insight={geoData.insight}
                                stats={geoData.stats}
                              />
                            </div>
                          )}

                          <div className="space-y-2">
                            <h4 className="text-xs font-mono uppercase text-[#00D2FF] tracking-wider">The Challenge</h4>
                            <p 
                              className="text-xs text-gray-400 leading-relaxed font-sans"
                              dangerouslySetInnerHTML={{ __html: injectContextualLinks(cs.challenge) }}
                            />
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-xs font-mono uppercase text-[#8B5CF6] tracking-wider">The System Architecture</h4>
                            <p 
                              className="text-xs text-gray-400 leading-relaxed font-sans"
                              dangerouslySetInnerHTML={{ __html: injectContextualLinks(cs.architecture) }}
                            />
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-xs font-mono uppercase text-[#00D2FF] tracking-wider">Implementation Roadmap</h4>
                            <ol className="list-decimal pl-4 space-y-1.5 text-xs text-gray-400 font-sans">
                              {cs.roadmap.map((step, idx) => (
                                <li key={idx}>{step}</li>
                              ))}
                            </ol>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Quantified ROI Metrics</h4>
                            <ul className="list-disc pl-4 space-y-1.5 text-xs text-emerald-300 font-sans">
                              {cs.roiDetails.map((roi, idx) => (
                                <li key={idx}>{roi}</li>
                              ))}
                            </ul>
                          </div>

                          {geoData && geoData.comparison && (
                            <div className="mt-6">
                              <AIComparisonTable
                                title={geoData.comparison.title}
                                headers={geoData.comparison.headers}
                                rows={geoData.comparison.rows}
                              />
                            </div>
                          )}

                          {csRelations && (
                            <div className="mt-8 pt-8 border-t border-white/5 space-y-8">
                              <RelatedServices relatedSlugs={csRelations.services} title="Services Deployed in Project" />
                              <RelatedResources resources={csRelations.resources} title="Operational Blueprints Used" />
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => toggleExpand(cs.number)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        color: '#fff',
                        background: 'none',
                        border: 'none',
                        fontSize: 14,
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        paddingBottom: 4,
                        transition: 'all 0.3s',
                        fontFamily: 'Space Grotesk, sans-serif',
                        cursor: 'none'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#8B5CF6';
                        e.currentTarget.style.borderColor = '#8B5CF6';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      }}
                    >
                      {isExpanded ? "Hide Details" : "View Details"} <span>{isExpanded ? "↑" : "→"}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}

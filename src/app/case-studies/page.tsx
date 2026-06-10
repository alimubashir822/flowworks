"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#050505', minHeight: '100vh' }}>
        {/* Page Hero */}
        <section
          className="bg-dark-grid-subtle"
          style={{ padding: '18% 5% 8%' }}
        >
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
              Portfolio
            </p>
            <h1 className="font-display font-bold uppercase text-white" style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              marginBottom: '3rem',
            }}>
              Case<br />
              <span className="text-[#00D2FF]">Studies</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 480, lineHeight: 1.7 }}>
              Deep-dives into custom automation pipelines, active AI agents, and secure enterprise software architectures.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-dark-grid" style={{ padding: '4% 5%' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            {caseStudies.map((cs, i) => (
              <article
                key={cs.number}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '4rem',
                  padding: '5% 0',
                  alignItems: 'center',
                }}
              >
                {/* Image — alternating sides */}
                <div
                  style={{
                    order: i % 2 === 0 ? 1 : 2,
                    aspectRatio: '4/3',
                    overflow: 'hidden',
                    borderRadius: 12,
                  }}
                >
                  <img
                    src={cs.image}
                    alt={cs.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05) rotate(1deg)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1) rotate(0)')}
                  />
                </div>

                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
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
                    background: 'rgba(0,210,255,0.08)',
                    border: '1px solid rgba(0,210,255,0.2)',
                    borderRadius: 8,
                    padding: '12px 16px',
                    marginBottom: '2rem',
                  }}>
                    <span className="font-mono text-[#00D2FF]" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: 8 }}>Outcome:</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>{cs.outcome}</span>
                  </div>

                  <a
                    href="#"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      color: '#fff',
                      textDecoration: 'none',
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
                    View Details <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

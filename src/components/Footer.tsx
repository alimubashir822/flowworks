'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      ref={ref}
      style={{ background: '#050505', padding: '8% 5% 4%', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* CTA Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{ marginBottom: '6rem' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'monospace' }}>
            Let's Build Together
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 className="font-display" style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: '#fff',
              textTransform: 'uppercase',
              maxWidth: '70%',
            }}>
              Automate Your<br />
              <span className="text-[#00D2FF]">Future</span><br />
              Today.
            </h2>

            <motion.a
              href="mailto:hello@flowworks.ai"
              whileHover={{ scale: 1.02, backgroundColor: '#00D2FF', color: '#000', borderColor: '#00D2FF' }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 100,
                padding: '16px 32px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 600,
                transition: 'all 0.2s',
                flexShrink: 0,
                fontFamily: 'Space Grotesk, sans-serif',
                cursor: 'none'
              }}
            >
              hello@flowworks.ai
              <span style={{ fontSize: 18 }}>→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 32, height: 32, background: '#00D2FF', borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>
            <span style={{ color: '#fff', fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'Space Grotesk, sans-serif' }}>FlowWorks <span className="text-[#00D2FF]">AI</span></span>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {['Home', 'About', 'AI Automation', 'Software Dev', 'Audit Form'].map((item, idx) => {
              const hrefs = ['/', '/about', '/services/ai-automation', '/services/custom-software-development', '#lead-form-section'];
              return (
                <a
                  key={item}
                  href={hrefs[idx]}
                  style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none', transition: 'color 0.3s', cursor: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00D2FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['TW', 'LN', 'GH', 'MD'].map(s => (
              <a
                key={s}
                href="#"
                style={{
                  width: 36, height: 36,
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', fontSize: 11, textDecoration: 'none',
                  transition: 'all 0.3s',
                  fontWeight: 600,
                  fontFamily: 'monospace',
                  cursor: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#00D2FF';
                  e.currentTarget.style.color = '#00D2FF';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>
            © {year} FlowWorks AI. All rights reserved. Premium AI Automation Agency.
          </p>
        </div>
      </div>
    </footer>
  );
}

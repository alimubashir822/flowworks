'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Pinterest",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M12.24 2C6.6 2 2 6.6 2 12.24c0 4.3 2.64 8 6.46 9.54-.1-.8-.19-2-.03-2.86.14-.6.93-3.97.93-3.97s-.24-.47-.24-1.17c0-1.1.64-1.92 1.43-1.92.67 0 1 .5 1 1.1 0 .68-.43 1.7-.66 2.64-.18.78.4 1.42 1.17 1.42 1.4 0 2.48-1.48 2.48-3.6 0-1.88-1.35-3.2-3.28-3.2-2.24 0-3.55 1.68-3.55 3.4 0 .68.26 1.4.59 1.8.06.08.07.15.05.23l-.22.9c-.04.14-.12.17-.27.1-1-.46-1.63-1.9-1.63-3.06 0-2.5 1.8-4.8 5.25-4.8 2.76 0 4.9 1.97 4.9 4.6 0 2.74-1.73 4.95-4.14 4.95-.8 0-1.57-.42-1.83-.92l-.5 1.9c-.18.68-.67 1.53-1 2.06 1 .3 2 .47 3 .47 5.64 0 10.24-4.6 10.24-10.24C22.5 6.6 17.9 2 12.24 2z"/>
        </svg>
      )
    }
  ];

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
            {socialLinks.map(s => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                style={{
                  width: 36, height: 36,
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'all 0.3s',
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
                {s.icon}
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

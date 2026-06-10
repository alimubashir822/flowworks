'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const works = [
  {
    number: '01',
    title: 'Apex AI Agent',
    category: 'AI Agents / Workflows',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    title: 'Helix Data Syncer',
    category: 'Enterprise Automation / APIs',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '03',
    title: 'Prime SaaS CRM',
    category: 'Custom Software / React',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '04',
    title: 'Quantum SEO Engine',
    category: 'Programmatic SEO / Growth',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function SelectedWorks() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="selected-works"
      ref={ref}
      className="bg-dark-grid-subtle"
      style={{ padding: '8% 5%', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'monospace' }}>
            Featured Cases
          </p>
          <h2 className="font-display text-white uppercase" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}>
            Selected Works
          </h2>
        </motion.div>

        {/* Work list */}
        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          onMouseLeave={() => setHovered(null)}
        >
          {works.map((work, i) => (
            <motion.div
              key={work.number}
              className="work-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              style={{
                opacity: hovered !== null && hovered !== i ? 0.35 : 1,
              }}
            >
              <div className="work-item-inner">
                <span className="work-item-number text-gray-500 font-mono">{work.number}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span className="work-item-title text-white font-display font-semibold hover:text-[#00D2FF] transition-colors">{work.title}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexShrink: 0 }}>
                  <span className="work-item-category text-gray-400 font-mono text-xs uppercase">{work.category}</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, fontFamily: 'monospace' }}>{work.year}</span>
                  <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)' }}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating preview */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            className="work-preview-float border border-white/10 glow-blue"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            style={{
              left: mousePos.x + 30,
              top: mousePos.y - 140,
              pointerEvents: 'none',
            }}
          >
            <img src={works[hovered].image} alt={works[hovered].title} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

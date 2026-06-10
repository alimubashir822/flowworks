'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const caseStudies = [
  {
    client: 'NovaMind AI',
    title: 'Designing the future of AI interaction',
    category: 'Product Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80',
    color: '#0035FF',
  },
  {
    client: 'Vertex Commerce',
    title: 'A seamless checkout that tripled conversion',
    category: 'UX Design / Dev',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
    color: '#111',
  },
  {
    client: 'Lumina Finance',
    title: 'Brand identity for the next-gen bank',
    category: 'Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    color: '#1a1a1a',
  },
  {
    client: 'Echo Health',
    title: 'Mobile-first care management platform',
    category: 'Mobile App',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    color: '#0d1a0d',
  },
];

export default function WorksGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="works"
      ref={ref}
      className="bg-light-grid"
      style={{ padding: '8% 5%' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}
        >
          <div>
            <p style={{ color: 'rgba(0,0,0,0.4)', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Case Studies
            </p>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#111',
              textTransform: 'uppercase',
            }}>
              Our Work
            </h2>
          </div>
          <a
            href="/case-study"
            style={{
              color: '#111',
              fontSize: 14,
              textDecoration: 'none',
              borderBottom: '1px solid rgba(0,0,0,0.3)',
              paddingBottom: 4,
              opacity: 0.5,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
          >
            View All →
          </a>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: '2px' }}>
          {caseStudies.map((cs, i) => (
            <motion.a
              key={cs.client}
              href="/case-study"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                display: 'block',
                textDecoration: 'none',
                position: 'relative',
                aspectRatio: '4/3',
                overflow: 'hidden',
                background: cs.color,
              }}
              whileHover={{ scale: 1.0 }}
            >
              {/* Image */}
              <motion.img
                src={cs.image}
                alt={cs.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.75,
                }}
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
              }} />

              {/* Content */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                color: '#fff',
              }}>
                <p style={{ fontSize: 11, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>
                  {cs.client} · {cs.category} · {cs.year}
                </p>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  {cs.title}
                </h3>
              </div>

              {/* Arrow */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: 40,
                height: 40,
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(4px)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 18,
              }}>
                ↗
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

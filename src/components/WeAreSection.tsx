'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '500k+', label: 'API Calls Processed' },
  { value: '98%', label: 'Average Client Retention' },
  { value: '45+', label: 'Custom Systems Deployed' },
  { value: '24/7', label: 'Autonomous Uptime' },
];

export default function WeAreSection() {
  const orbitRef = useRef<SVGCircleElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false });

  useEffect(() => {
    let angle = 0;
    let raf: number;
    const orbit = () => {
      angle += 0.3;
      if (orbitRef.current) {
        const cx = 150 + Math.cos((angle * Math.PI) / 180) * 90;
        const cy = 150 + Math.sin((angle * Math.PI) / 180) * 90;
        orbitRef.current.setAttribute('cx', String(cx));
        orbitRef.current.setAttribute('cy', String(cy));
      }
      raf = requestAnimationFrame(orbit);
    };
    raf = requestAnimationFrame(orbit);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="weare"
      ref={sectionRef}
      className="bg-dark-grid-subtle"
      style={{ padding: '10% 5%', overflow: 'hidden' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: orbit animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg viewBox="0 0 300 300" width="100%" style={{ maxWidth: 400 }}>
            {/* Outer ring */}
            <circle cx="150" cy="150" r="130" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
            {/* Inner ring */}
            <circle cx="150" cy="150" r="90" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            {/* Center dot */}
            <circle cx="150" cy="150" r="8" fill="#00D2FF" />
            <circle cx="150" cy="150" r="3" fill="#fff" />
            {/* Orbiting dot */}
            <circle ref={orbitRef} cx="240" cy="150" r="6" fill="#8B5CF6" opacity="0.8" />
            {/* NF text in center */}
            <text x="150" y="148" textAnchor="middle" fill="rgba(0,210,255,0.12)" fontSize="48" fontWeight="700" dy="0.35em" fontFamily="Space Grotesk, sans-serif">NF</text>
          </svg>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
            Our Capabilities
          </p>
          <h2 className="font-display" style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#fff',
            marginBottom: '2rem',
          }}>
            Automating manual operations to unlock <span className="text-[#00D2FF]">exponential</span> scale.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.8, marginBottom: '3rem', maxWidth: 480 }}>
            FlowWorks AI operates at the intersection of machine intelligence, robust API architectures, and localized search growth. We deploy custom workflows that replace mechanical spreadsheet work with intelligent cloud actions.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <p className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ReelsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="reels"
      ref={ref}
      className="reels-section"
      style={{ padding: '10% 5%' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          Showreel 2025
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: '#fff',
            textTransform: 'uppercase',
            marginBottom: '4rem',
          }}
        >
          See What<br />
          We Build.
        </motion.h2>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            aspectRatio: '16/9',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80"
            alt="Showreel thumbnail"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
          />
          {/* Play button */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: '#fff',
                border: 'none',
                cursor: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#000">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.button>
          </div>

          {/* Duration */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              right: '1.5rem',
              color: 'rgba(255,255,255,0.8)',
              fontSize: 13,
              fontWeight: 500,
              background: 'rgba(0,0,0,0.5)',
              padding: '4px 12px',
              borderRadius: 100,
              backdropFilter: 'blur(4px)',
            }}
          >
            2:47
          </div>
        </motion.div>
      </div>
    </section>
  );
}

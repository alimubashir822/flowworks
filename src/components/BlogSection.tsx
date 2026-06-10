'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section
      id="posts"
      ref={ref}
      className="bg-dark-grid-subtle py-24 px-6 sm:px-12 border-t border-white/5"
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}
        >
          <div>
            <p className="text-[#00D2FF]" style={{ fontSize: 13, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'monospace' }}>
              Thinking & Writing
            </p>
            <h2 className="font-display font-bold text-white uppercase" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}>
              Latest Posts
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              color: '#00D2FF',
              fontSize: 14,
              textDecoration: 'none',
              borderBottom: '1px dashed rgba(0, 210, 255, 0.4)',
              paddingBottom: 4,
              transition: 'all 0.3s',
            }}
            className="cursor-none hover:text-[#8B5CF6]"
          >
            View All &rarr;
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '1px', border: '1px solid rgba(255,255,255,0.06)' }}>
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                padding: '2.5rem',
                cursor: 'none',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Image */}
              <div style={{ aspectRatio: '16/10', borderRadius: 8, overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{
                  color: '#00D2FF',
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 500,
                  border: '1px solid rgba(0, 210, 255, 0.3)',
                  padding: '2px 10px',
                  borderRadius: 100,
                  fontFamily: 'monospace'
                }}>
                  {post.category}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, fontFamily: 'monospace' }}>
                  {post.readTime}
                </span>
              </div>

              <h3 className="font-display font-semibold" style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                color: '#fff',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
              }}>
                {post.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {post.excerpt}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'monospace' }}>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>{post.date}</span>
                
                <Link href={`/blog/${post.slug}`} className="text-[#00D2FF] hover:text-[#8B5CF6] text-lg cursor-none">
                  &rarr;
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

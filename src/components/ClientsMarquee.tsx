'use client';

const clients = [
  'Google', 'Microsoft', 'Apple', 'Meta', 'Amazon', 'Netflix', 'Spotify', 'Airbnb',
  'Uber', 'Stripe', 'Shopify', 'Figma', 'Notion', 'Vercel', 'OpenAI', 'Anthropic',
];

export default function ClientsMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="bg-dark-grid"
      style={{ padding: '6% 0', overflow: 'hidden' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="gradient-text" style={{ fontSize: 13, letterSpacing: '0.24em', textTransform: 'uppercase', fontWeight: 400 }}>
          Trusted by World-Class Companies
        </p>
      </div>

      {/* Marquee with fade edges */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '20%',
          background: 'linear-gradient(90deg, #000, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '20%',
          background: 'linear-gradient(90deg, transparent, #000)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div className="marquee-track" style={{ display: 'inline-flex', gap: '3rem', alignItems: 'center' }}>
          {doubled.map((client, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: 'clamp(14px, 1.5vw, 20px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
              }}>
                {client}
              </span>
              <span style={{ color: '#0035FF', fontSize: 24, opacity: 0.6 }}>·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

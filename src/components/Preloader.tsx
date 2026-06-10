'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            document.body.classList.remove('is-loading');
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 4) + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div
      className="preloader"
      style={{
        opacity: count >= 100 ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: done ? 'none' : 'all',
      }}
    >
      <span className="preloader-counter">{Math.min(count, 100)}</span>
    </div>
  );
}

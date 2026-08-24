import { useEffect, useRef, useState } from 'react';

const TICKS = Array.from({ length: 12 }, (_, i) => i * 30);

export default function AttitudeIndicator() {
  const [tilt, setTilt] = useState({ roll: 0, pitch: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        setTilt({ roll: nx * 22, pitch: ny * 14 });
        frame.current = null;
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="border border-blueprint/40 aspect-square w-full max-w-[220px]">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <clipPath id="ai-bezel">
            <circle cx="100" cy="100" r="88" />
          </clipPath>
        </defs>

        {/* Bezel tick marks (static) */}
        <g stroke="#3A6EA5" strokeWidth="1">
          {TICKS.map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 100 + Math.sin(rad) * 82;
            const y1 = 100 - Math.cos(rad) * 82;
            const x2 = 100 + Math.sin(rad) * 92;
            const y2 = 100 - Math.cos(rad) * 92;
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* Rotating horizon group */}
        <g clipPath="url(#ai-bezel)">
          <g
            style={{
              transform: `rotate(${tilt.roll}deg) translateY(${tilt.pitch}px)`,
              transformOrigin: '100px 100px',
              transition: 'transform 0.05s linear',
            }}
          >
            <rect x="-20" y="100" width="240" height="200" fill="#3A6EA5" fillOpacity="0.18" />
            <line x1="-20" y1="100" x2="220" y2="100" stroke="#3A6EA5" strokeWidth="1.5" />
            <line x1="-20" y1="70" x2="220" y2="70" stroke="#3A6EA5" strokeWidth="0.75" strokeDasharray="6 6" />
            <line x1="-20" y1="130" x2="220" y2="130" stroke="#3A6EA5" strokeWidth="0.75" strokeDasharray="6 6" />
          </g>
        </g>

        <circle cx="100" cy="100" r="88" fill="none" stroke="#3A6EA5" strokeWidth="1.5" />

        {/* Fixed center aircraft symbol */}
        <g stroke="#D8542A" strokeWidth="2.5" strokeLinecap="round">
          <line x1="70" y1="100" x2="90" y2="100" />
          <line x1="110" y1="100" x2="130" y2="100" />
          <circle cx="100" cy="100" r="2.5" fill="#D8542A" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

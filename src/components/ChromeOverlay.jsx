import { useEffect, useState } from 'react';

const CORNERS = [
  'top-3 left-3',
  'top-3 right-3',
  'bottom-3 left-3',
  'bottom-3 right-3',
];

function CornerMark({ position }) {
  return (
    <div className={`fixed ${position} w-3 h-3 pointer-events-none z-40`}>
      <span className="absolute top-1/2 left-0 w-full h-px bg-blueprint/40" />
      <span className="absolute left-1/2 top-0 h-full w-px bg-blueprint/40" />
    </div>
  );
}

export default function ChromeOverlay() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      {CORNERS.map((position) => (
        <CornerMark key={position} position={position} />
      ))}

      <div className="fixed bottom-0 left-0 right-0 h-8 border-t border-blueprint/30 bg-charcoal/90 flex items-center justify-between px-4 text-[11px] font-mono text-muted z-40">
        <span>MD-001 · REV.2026</span>
        <span>
          X:{String(Math.max(0, Math.round(pos.x))).padStart(4, '0')} Y:{String(Math.max(0, Math.round(pos.y))).padStart(4, '0')}
        </span>
      </div>
    </>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', name: 'PROFILE', sheet: '01' },
  { path: '/projects', name: 'PROJECTS', sheet: '02' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-charcoal/95 border-b border-blueprint/30">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-mono">
        <div className="flex items-center gap-3 text-cream text-sm tracking-widest">
          <span className="border border-blueprint/50 px-2 py-1 text-blueprint">MD-001</span>
          <span className="hidden sm:inline text-muted">MICHAEL DIAS / ENGINEERING PORTFOLIO</span>
        </div>
        <div className="flex gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-xs sm:text-sm tracking-widest transition-colors ${
                  isActive ? 'text-redline' : 'text-muted hover:text-cream'
                }`}
              >
                SHEET/{link.sheet} — {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-redline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

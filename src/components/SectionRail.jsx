import { useEffect, useState } from 'react';

export default function SectionRail({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-5">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          aria-label={label ?? id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          className={`h-px transition-all duration-300 ${
            activeId === id ? 'w-6 bg-redline' : 'w-3 bg-muted/40 hover:bg-muted'
          }`}
        />
      ))}
    </div>
  );
}

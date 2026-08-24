import { motion } from 'framer-motion';
import imuDemo from '../assets/IMU-fusion-demo.gif';
import beaconDemo from '../assets/beacon_navigation_demo.mp4';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projects = [
  {
    id: 1,
    part: 'P.01',
    title: 'IMU Sensor Fusion',
    description:
      'Developed a 9-DOF complementary filter using quaternions and C++ for high performance real-time attitude estimation and visualization using a RayLib front end. Wrote filter PID loops, and and integrated third-party libraries using CMake.',
    tech: ['C++', 'C', 'CMake', 'RayLib'],
    github: 'https://github.com/MichaelDias9/IMU-Sensor-Fusion',
    media: { type: 'gif', src: imuDemo, caption: 'REC — 9DOF COMPLEMENTARY FILTER, QUATERNION ATTITUDE' },
  },
  {
    id: 3,
    part: 'P.02',
    title: 'FPV Drone Build',
    description:
      'Selected and matched motor KV, 5" propellers, ESC ratings, and 4S-6S LiPo. Soldered high-current power systems and integrated the flight controller, receiver, and video system. Configured Betaflight firmware and performed PID tuning.',
    tech: ['Electronics', 'Soldering', 'Betaflight', 'PID Tuning'],
    github: '#',
    media: { type: 'diagram', variant: 'drone', caption: 'FIG.02 — FRAME LAYOUT, 5" QUAD' },
  },
  {
    id: 4,
    part: 'P.03',
    title: 'Indoor Localization — Beacon Navigation',
    description:
      'Developed a mobile app for GPS denied indoor navigation by combining pedometer data and a custom localization Bluetooth beacons. Built a Python (Flask) backend and implemented an Extended Kalman Filter for sensor fusion.',
    tech: ['React Native', 'Python/Flask', 'Extended Kalman Filter'],
    github: '#',
    media: {
      type: 'video',
      device: 'iphone15pro',
      src: beaconDemo,
      caption: 'REC — IMU/BLE FUSION, EXTENDED KALMAN FILTER',
    },
  },
  {
    id: 2,
    part: 'P.04',
    title: '3D Printer Exhaust Venting',
    description:
      'Designed and 3D printed a modular exhaust and ducting system. Modeled components in FreeCAD to optimize airflow paths and fitment tolerances. Iterated through multiple print/test cycles.',
    tech: ['FreeCAD', '3D Printing', 'Rapid Prototyping'],
    github: '#',
    media: { type: 'diagram', variant: 'duct', caption: 'FIG.04 — DUCT ASSEMBLY, AIRFLOW PATH' },
  },
];

function CornerTicks() {
  return (
    <>
      {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 left-0 -rotate-90', 'bottom-0 right-0 rotate-180'].map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} w-3 h-3 border-blueprint pointer-events-none`}
          style={{ borderWidth: '2px 0 0 2px' }}
        />
      ))}
    </>
  );
}

function DuctDiagram() {
  return (
    <svg viewBox="0 0 300 170" className="w-full h-full">
      <rect x="20" y="30" width="70" height="50" fill="none" stroke="#3A6EA5" strokeWidth="1" />
      <path d="M90 55 C 150 55, 150 100, 220 100" fill="none" stroke="#3A6EA5" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="220" y="80" width="60" height="40" fill="none" stroke="#3A6EA5" strokeWidth="1" />
      <path d="M100 55 L115 50 L115 60 Z" fill="#D8542A" />
      <text x="16" y="20" fill="#c9c4b8" fontSize="9" fontFamily="'IBM Plex Mono', monospace">
        FIG.04 — DUCT ASSEMBLY
      </text>
    </svg>
  );
}

function DroneDiagram() {
  const arms = [
    [40, 30],
    [260, 30],
    [40, 140],
    [260, 140],
  ];
  return (
    <svg viewBox="0 0 300 170" className="w-full h-full">
      <rect x="135" y="70" width="30" height="30" fill="none" stroke="#3A6EA5" strokeWidth="1" />
      {arms.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <line x1="150" y1="85" x2={cx} y2={cy} stroke="#3A6EA5" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="14" fill="none" stroke="#D8542A" strokeWidth="1" />
        </g>
      ))}
      <text x="16" y="20" fill="#c9c4b8" fontSize="9" fontFamily="'IBM Plex Mono', monospace">
        FIG.02 — FRAME LAYOUT, 5" QUAD
      </text>
    </svg>
  );
}

function PhoneFrame({ media }) {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="relative w-[220px]">
        <div
          className="relative rounded-[2.75rem] border-[3px] border-blueprint/60 bg-charcoal p-[7px]"
          style={{ aspectRatio: '886 / 1920' }}
        >
          {/* action button + volume rocker */}
          <span className="absolute -left-[3px] top-[16%] w-[3px] h-[4%] bg-blueprint/60" />
          <span className="absolute -left-[3px] top-[24%] w-[3px] h-[7%] bg-blueprint/60" />
          <span className="absolute -left-[3px] top-[34%] w-[3px] h-[7%] bg-blueprint/60" />
          {/* power button */}
          <span className="absolute -right-[3px] top-[26%] w-[3px] h-[9%] bg-blueprint/60" />

          <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-black">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={media.src} type="video/mp4" />
            </video>
            {/* dynamic island */}
            <div className="absolute top-[1.6%] left-1/2 -translate-x-1/2 w-[30%] aspect-[2.8/1] rounded-full bg-charcoal border border-blueprint/50 z-10" />
          </div>
        </div>

        {/* dimension callout */}
        <div className="flex items-center gap-1.5 mt-2 text-[10px] text-muted/70">
          <span className="text-blueprint">├</span>
          <span className="flex-1 border-t border-dashed border-blueprint/40" />
          <span>70.6mm</span>
          <span className="flex-1 border-t border-dashed border-blueprint/40" />
          <span className="text-blueprint">┤</span>
        </div>
      </div>

      <div className="text-[10px] tracking-widest text-muted text-center">DEVICE — IPHONE 15 PRO</div>
    </div>
  );
}

function MediaViewport({ media }) {
  return (
    <div className="relative border border-blueprint/50 aspect-video bg-charcoal overflow-hidden">
      <CornerTicks />
      {media.type === 'gif' && <img src={media.src} alt="" className="w-full h-full object-cover" />}
      {media.type === 'video' && (
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={media.src} type="video/mp4" />
        </video>
      )}
      {media.type === 'diagram' && media.variant === 'duct' && <DuctDiagram />}
      {media.type === 'diagram' && media.variant === 'drone' && <DroneDiagram />}
    </div>
  );
}

export default function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.98 }}
      variants={staggerContainer}
      className="flex-grow flex flex-col max-w-6xl mx-auto w-full pt-8 pb-24 px-6 sm:px-10 gap-4 font-mono"
    >
      <div className="flex flex-col mb-4">
        <motion.h1 variants={fadeIn} className="font-serif text-4xl md:text-5xl text-cream mb-2">
          Projects
        </motion.h1>
        <motion.p variants={fadeIn} className="text-sm text-muted max-w-2xl">
          Sheet 02 — a selection of recent builds, logged with stack, source, and demos.
        </motion.p>
      </div>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            variants={fadeIn}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 py-14 border-t border-blueprint/20 ${
              i === projects.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className={`flex flex-col gap-2 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
              {project.media.device === 'iphone15pro' ? (
                <PhoneFrame media={project.media} />
              ) : (
                <MediaViewport media={project.media} />
              )}
              <div
                className={`text-[11px] tracking-widest text-blueprint ${
                  project.media.device === 'iphone15pro' ? 'text-center' : ''
                }`}
              >
                {project.media.caption}
              </div>
            </div>

            <div className={`flex flex-col gap-4 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="text-xs text-muted tracking-widest">{project.part}</div>
              <h2 className="font-serif text-3xl text-cream">{project.title}</h2>
              <div className="text-xs">
                <span className="text-blueprint tracking-widest">STACK</span>
                <span className="text-muted"> — {project.tech.join(', ')}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{project.description}</p>
              {project.github === '#' ? (
                <span className="text-xs text-muted/60 tracking-wide w-fit">REPO — PRIVATE / UNAVAILABLE</span>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blueprint hover:text-redline tracking-wide w-fit"
                >
                  → REPO
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

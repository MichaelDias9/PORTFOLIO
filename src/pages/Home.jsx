import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AttitudeIndicator from '../components/AttitudeIndicator';
import SectionRail from '../components/SectionRail';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const specFields = [
  ['ROLE', 'Embedded Systems / Prototyping'],
  ['FOCUS', 'Sensor Fusion, CAD, Firmware'],
  ['BASED', 'London, ON'],
  ['STATUS', 'Open to Work'],
  ['CONTACT', 'diasm0301@gmail.com'],
];

const skillGroups = [

  {
    label: 'Programming & Development',
    items: [
      'C',
      'C++',
      'CMake',
      'Python',
      'SQL',
      'Git / GitHub',
      'Claude Code',
      'Windows / Linux / MacOS',
    ]
  },

  {
    label: 'Embedded & Firmware',
    items: [
      'STM32',
      'STM32CubeIDE',
      'Bare-Metal Firmware',
      'FreeRTOS',
      'Concurrency',
      'Sensor Drivers',
      'Interrupts & Timers',
      'DMA',
      'Unit Testing / CTest',
    ]
  },

  {
    label: 'Electronics & Controls',
    items: [
      'Circuit & PCB Schematics',
      'Multimeter Debugging',
      'Analog & Digital Electronics',
      'PWM',
      'Servo Control',
      'Motor & ESC Control',
      'IMU / Sensor Integration',
      'PLC Programming',
      'Industrial Automation',
    ]
  },

  {
    label: 'Design & Prototyping',
    items: [
      '3D Printing',
      'PLA / PETG / TPU',
      'OrcaSlicer',
      'FreeCAD',
      'Parametric CAD',
      'Custom Parts',
      'Functional Prototyping',
      'PCB Soldering',
      'Wire Crimping',
    ]
  },

  {
    label: 'Communication Protocols',
    items: [
      'I²C',
      'SPI',
      'UART',
      'CAN',
    ]
  },
];

const sections = [
  { id: 'profile', label: '00' },
  { id: 'experience', label: '01' },
  { id: 'education', label: '02' },
  { id: 'skills', label: '03' },
];

export default function Home() {
  return (
    <>
      <SectionRail sections={sections} />
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: -20 }}
        variants={staggerContainer}
        className="flex-grow flex flex-col max-w-6xl mx-auto w-full pb-24 pt-8 px-6 sm:px-10 gap-16 font-mono"
      >
        {/* MASTHEAD */}
        <motion.section id="profile" variants={fadeIn} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 flex flex-col gap-6">
            <AttitudeIndicator />
            <div className="border border-blueprint/30 p-4 text-xs leading-relaxed">
              <div className="flex justify-between border-b border-blueprint/20 pb-1 mb-1">
                <span className="text-muted">NAME</span>
                <span className="text-cream">MICHAEL DIAS</span>
              </div>
              <div className="flex justify-between border-b border-blueprint/20 pb-1 mb-1">
                <span className="text-muted">ROLE</span>
                <span className="text-cream">EMBEDDED / MAKER</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">STATUS</span>
                <span className="text-redline">OPEN TO WORK</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-6">
            <h1 className="font-serif text-5xl md:text-6xl text-cream leading-[1.05]">Michael Dias</h1>
            <p className="text-sm text-muted leading-relaxed max-w-2xl">
              Hands-on maker and computer science graduate with a passion for challenging technical problems, strong experience in embedded systems, rapid prototyping, and problem-driven engineering. Comfortable designing in CAD, programming microcontrollers, soldering electronics, and iterating physical systems from concept to functional hardware.
            </p>

            <table className="text-xs w-full max-w-md">
              <tbody>
                {specFields.map(([k, v]) => (
                  <tr key={k} className="border-b border-blueprint/15">
                    <td className="py-1.5 pr-4 text-muted w-24 align-top">{k}</td>
                    <td className="py-1.5 text-cream">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section id="experience" variants={fadeIn} className="flex flex-col gap-8">
          <h2 className="font-serif text-3xl text-cream">Experience</h2>

          <div className="relative">
            <svg className="w-full h-6" preserveAspectRatio="none">
              <line x1="0" y1="12" x2="100%" y2="12" stroke="#3A6EA5" strokeWidth="1" />
              <line x1="0" y1="6" x2="0" y2="18" stroke="#3A6EA5" strokeWidth="1" />
              <line x1="100%" y1="6" x2="100%" y2="18" stroke="#3A6EA5" strokeWidth="1" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="relative pl-6 border-l border-blueprint/30">
                <div className="text-xs text-redline mb-1">FEB — AUG 2024</div>
                <h3 className="font-serif text-xl text-cream">Indoor Localization App</h3>
                <div className="text-xs text-muted mb-2">Startup</div>
                <p className="text-sm text-muted/90 leading-relaxed">
                  Developed a mobile app combining pedometer and Bluetooth beacons. Built a Python (Flask) backend and implemented an Extended Kalman Filter for sensor fusion.
                </p>
                <Link to="/projects" className="block text-xs text-blueprint hover:text-redline mt-2 w-fit">
                  → SEE SHEET 02 / P.03
                </Link>
              </div>

              <div className="relative pl-6 border-l border-blueprint/30">
                <div className="text-xs text-muted mb-1">2021 — PRESENT</div>
                <h3 className="font-serif text-xl text-cream">Warehouse Logistics</h3>
                <div className="text-xs text-muted mb-2">The Beer Store — Part Time</div>
                <p className="text-sm text-muted/90 leading-relaxed">
                  Operated electric ride-on pallet jacks in a safety-critical environment. Planned pallet builds and truck loading for efficient deliveries.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section id="education" variants={fadeIn} className="flex flex-col gap-4">
          <h2 className="font-serif text-3xl text-cream">Education</h2>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-y border-blueprint/20">
                <td className="py-3 pr-4 text-cream font-medium">B.Sc. Computer Science</td>
                <td className="py-3 pr-4 text-muted">Western University</td>
                <td className="py-3 pr-4 text-muted">2019 — 2023</td>
                <td className="py-3 text-redline text-xs">Dean's Honor List</td>
              </tr>
            </tbody>
          </table>
        </motion.section>

        {/* SKILLS */}
        <motion.section id="skills" variants={fadeIn} className="flex flex-col gap-6">
          <h2 className="font-serif text-3xl text-cream">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
            {skillGroups.map(({ label, items }) => (
              <div key={label}>
                <div className="text-xs tracking-widest text-blueprint mb-2 border-b border-blueprint/30 pb-1">
                  {label.toUpperCase()}
                </div>
                <ul className="flex flex-col gap-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted">
                      <span className="w-1.5 h-1.5 bg-redline shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section variants={fadeIn} className="flex flex-col gap-2 text-sm">
          <h2 className="font-serif text-3xl text-cream mb-2">Contact</h2>
          <div className="border border-blueprint/30 p-4 bg-charcoal flex flex-col gap-1">
            <div>
              <span className="text-blueprint">$</span>{' '}
              <a href="mailto:diasm0301@gmail.com" className="text-cream hover:text-redline">
                mailto:diasm0301@gmail.com
              </a>
            </div>
            <div>
              <span className="text-blueprint">$</span> <span className="text-cream">tel:226-977-4245</span>
            </div>
            <div>
              <span className="text-blueprint">$</span> <span className="text-cream">geo:Edgehill Crescent, London, ON</span>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}

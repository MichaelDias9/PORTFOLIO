import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ChromeOverlay from './components/ChromeOverlay';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />
      <ChromeOverlay />
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;

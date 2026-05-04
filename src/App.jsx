import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Ethics from './components/Ethics';
import Contact from './components/Contact';

import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-cyan/50 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ x, y }}
    />
  );
};

function App() {
  return (
    <main className="bg-bg-deep min-h-screen selection:bg-accent-cyan selection:text-bg-deep">
      <MouseFollower />
      <Navbar />
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Ethics />
      <Contact />
    </main>
  );
}

export default App;

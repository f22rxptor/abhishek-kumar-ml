import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="sticky top-0 left-0 right-0 z-50 px-6 py-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-12 py-6 !rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center font-bold text-white text-lg shadow-lg">
            AK
          </div>
          <span className="font-extrabold tracking-tighter text-2xl hidden md:block">ABHISHEK</span>
        </div>
        
        <div className="flex items-center gap-12 text-lg">
          <a href="#experience" className="nav-link font-medium">Experience</a>
          <a href="#projects" className="nav-link font-medium">Projects</a>
          <a href="#skills" className="nav-link font-medium">Skills</a>
          <a href="#contact" className="px-10 py-4 rounded-2xl bg-white text-black hover:scale-105 transition-all shadow-2xl font-bold">
            Get in touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

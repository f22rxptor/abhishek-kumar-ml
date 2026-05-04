import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "ML & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Bias Detection", "Fairness Testing"],
  "Cloud & Web": ["AWS", "Google Vertex AI", "React.js", "FastAPI", "Flutter"],
  "Languages": ["Python", "JavaScript", "SQL", "R", "Java"]
};

const SkillCategory = ({ title, items, index }) => {
  return (
    <motion.div 
      className="glass-card p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, i) => (
          <motion.span 
            key={i}
            className="px-4 py-2 rounded-xl bg-white/5 border border-glass-border text-sm font-medium hover:bg-accent-cyan/10 hover:border-accent-cyan/40 transition-all cursor-default"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="accent-gradient">Mastery</span></h2>
          <p className="text-secondary max-w-xl mx-auto">
            A specialized toolkit focused on building high-performance AI systems with a deep commitment to transparency and ethics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCategory key={i} title={category} items={items} index={i} />
          ))}
        </div>
      </div>
      
      {/* Visual representation of 3D Orbit (Simplified for performance) */}
      <div className="mt-20 flex justify-center opacity-30 pointer-events-none">
        <div className="relative w-96 h-48 border border-white/10 rounded-full rotate-x-60 flex items-center justify-center">
            <div className="absolute w-20 h-20 bg-accent-cyan/20 blur-2xl rounded-full"></div>
            <motion.div 
              className="absolute w-4 h-4 bg-accent-cyan rounded-full shadow-[0_0_15px_#00D4FF]"
              animate={{ 
                rotate: 360,
                x: [180, 0, -180, 0, 180],
                y: [0, 40, 0, -40, 0],
                zIndex: [10, -10, -10, 10, 10]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
             <motion.div 
              className="absolute w-3 h-3 bg-accent-purple rounded-full shadow-[0_0_15px_#7000FF]"
              animate={{ 
                rotate: 360,
                x: [-180, 0, 180, 0, -180],
                y: [0, -40, 0, 40, 0],
                zIndex: [-10, 10, 10, -10, -10]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
        </div>
      </div>
    </section>
  );
};

export default Skills;

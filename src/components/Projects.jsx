import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Code2, BrainCircuit, Activity } from 'lucide-react';

const projects = [
  {
    title: "EquiLens AI",
    category: "AI Ethics & Interpretability",
    description: "An open-source bias auditing dashboard using Counterfactual Fairness, SHAP, and LIME for AI interpretability.",
    icon: <BrainCircuit size={24} className="text-accent-cyan" />,
    tech: ["Python", "SHAP", "LIME", "React"],
    color: "rgba(0, 212, 255, 0.1)",
    github: "https://github.com/f22-rxptor/EquiLens-AI",
    demo: "https://equilens-ai.vercel.app"
  },
  {
    title: "Lina",
    category: "Healthcare AI",
    description: "AI-powered diabetes risk prediction and personalized health assistant for early intervention.",
    icon: <Activity size={24} className="text-accent-purple" />,
    tech: ["TensorFlow", "FastAPI", "React", "AWS"],
    color: "rgba(112, 0, 255, 0.1)",
    github: "https://github.com/f22-rxptor/Lina-Healthcare",
    demo: "https://lina-ai.vercel.app"
  },
  {
    title: "FPGA Epilepsy Detection",
    category: "Hardware & ML",
    description: "Hardware-based signal processing system for real-time seizure detection using low-latency FPGA acceleration.",
    icon: <Code2 size={24} className="text-accent-blue" />,
    tech: ["Verilog", "Python", "Signal Processing"],
    color: "rgba(0, 102, 255, 0.1)",
    github: "https://github.com/f22-rxptor/FPGA-Epilepsy",
    demo: "#"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="glass-card group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-white/5 border border-glass-border">
            {project.icon}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary opacity-60">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-display group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-secondary leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-glass-border text-xs font-medium">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-glass-border">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-accent-cyan transition-colors"
          >
            <Terminal size={18} /> Source
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-accent-cyan transition-colors"
          >
            Live Demo <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="accent-gradient">Innovation</span></h2>
          <p className="text-secondary text-lg">
            A collection of projects bridging the gap between cutting-edge AI performance and ethical accountability.
          </p>
        </div>
        <div className="h-px flex-grow bg-glass-border mb-4 hidden md:block mx-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

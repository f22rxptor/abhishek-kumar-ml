import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Apple (Client: Student Tribe)",
    role: "ML Engineer",
    period: "Recent",
    description: "Evaluated AI-generated image edits with 99%+ accuracy and performed detailed image annotation for model improvement.",
    color: "#00D4FF"
  },
  {
    company: "Apex Planet",
    role: "Full Stack Web Developer",
    period: "Recent",
    description: "Developed React.js applications, optimized performance by 40%, and implemented secure API integrations.",
    color: "#7000FF"
  },
  {
    company: "AICTE",
    role: "Data Engineering Intern",
    period: "Internship",
    description: "Leveraged AWS (EC2, S3, Lambda) to reduce operational costs by 25%.",
    color: "#0066FF"
  }
];

const ExperienceItem = ({ exp, index }) => {
  return (
    <motion.div 
      className="relative pl-12 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Timeline Rail */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-glass-border">
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-bg-deep shadow-lg"
          style={{ backgroundColor: exp.color, boxShadow: `0 0 10px ${exp.color}` }}
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
        />
      </div>

      <div className="glass-card p-8 group hover:border-accent-cyan/50 transition-all duration-500">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-display group-hover:text-accent-cyan transition-colors">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 text-secondary mt-1">
              <Briefcase size={16} />
              <span className="font-medium text-white">{exp.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-glass-border text-sm group-hover:bg-accent-cyan/10 transition-colors">
            <Calendar size={14} />
            {exp.period}
          </div>
        </div>
        <p className="text-secondary leading-relaxed group-hover:text-white/80 transition-colors">
          {exp.description}
        </p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="accent-gradient">Journey</span></h2>
        <div className="h-1 w-20 bg-accent-cyan mx-auto rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;

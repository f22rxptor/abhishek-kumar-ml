import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Eye, BarChart as Scale, Fingerprint } from 'lucide-react';

const Ethics = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-bg-space/50">
      <div className="glass-card p-12 relative overflow-hidden">
        {/* Shard Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/5 rotate-45 translate-x-32 -translate-y-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/5 -rotate-45 -translate-x-32 translate-y-32 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">AI Ethics & <span className="accent-gradient">Transparency</span></h2>
            <p className="text-xl text-secondary leading-relaxed mb-16">
              "My mission is to dismantle the black box of AI. By integrating interpretability tools like SHAP and LIME, I ensure that every model I build is not just accurate, but accountable and fair."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <BadgeCheck className="text-accent-cyan" />, label: "Bias Auditing", desc: "Rigorous testing for disparate impact" },
              { icon: <Eye className="text-accent-purple" />, label: "Explainability", desc: "Local & global feature importance" },
              { icon: <Scale className="text-accent-blue" />, label: "Fairness", desc: "Mathematical parity across demographics" },
              { icon: <Fingerprint className="text-white" />, label: "Governance", desc: "Regulatory compliance & best practices" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
              >
                <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-glass-border">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2">{item.label}</h4>
                <p className="text-xs text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20 pt-10 border-t border-glass-border grid grid-cols-1 md:grid-cols-2 gap-10 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent-cyan mb-4">Responsible Innovation</h4>
              <p className="text-secondary text-sm leading-loose">
                Implementing Counterfactual Fairness to ensure that an individual's outcome remains consistent across sensitive attributes. Reducing inequalities through data-driven advocacy.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent-purple mb-4">The Human Element</h4>
              <p className="text-secondary text-sm leading-loose">
                AI is a tool for human empowerment. My work at EquiLens focuses on providing stakeholders with the visual evidence needed to trust and deploy AI systems in critical domains like healthcare and finance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ethics;

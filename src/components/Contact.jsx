import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Globe, ArrowRight, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card p-12 md:p-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let's build something <span className="accent-gradient">fair.</span>
            </h2>
            <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
              Currently seeking collaborations on projects that push the boundaries of AI while keeping human equity at the center.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a 
                href="mailto:f22.rxptor@gmail.com" 
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-bg-space font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
              >
                <Mail size={20} /> Get in touch
              </a>
              <div className="flex items-center gap-6">
                <a 
                  href="https://linkedin.com/in/abhishekkumar-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-glass-border hover:bg-white/10 hover:border-accent-cyan transition-colors"
                  title="LinkedIn"
                >
                  <MessageSquare size={20} className="text-accent-cyan" />
                </a>
                <a 
                  href="https://github.com/f22-rxptor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-glass-border hover:bg-white/10 hover:border-accent-purple transition-colors"
                  title="GitHub"
                >
                  <Globe size={20} className="text-accent-purple" />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-glass-border">
              <div className="flex items-center gap-3 text-secondary">
                <MapPin size={18} className="text-accent-cyan" />
                <span className="text-sm font-medium">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium">Open for new opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className="mt-20 text-center text-secondary text-sm tracking-wide opacity-80">
          <p>Architected with Precision & <span className="text-accent-purple">❤️</span> by Abhishek Kumar</p>
          <p className="mt-2 text-[10px] opacity-30 uppercase tracking-[0.3em]">AI Ethics • ML Engineering • Full-Stack Development</p>
          <p className="mt-4 text-[10px] opacity-20 uppercase tracking-widest">© 2026 Abhishek Kumar. All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

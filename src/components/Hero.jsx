import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const EquiLensSphere = () => {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.mouse;
    
    // Smoothly rotate based on time and mouse position
    mesh.current.rotation.x = Math.cos(time / 4) * 0.1 + y * 0.3;
    mesh.current.rotation.y = Math.sin(time / 4) * 0.1 + x * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 100, 200]} scale={2.4} ref={mesh}>
        <MeshDistortMaterial
          color="#00D4FF"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000FF" />
          <EquiLensSphere />
        </Canvas>
      </div>
 
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-display leading-[0.9]">
            ABHISHEK <span className="accent-gradient">KUMAR</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light max-w-2xl mx-auto leading-relaxed mb-8">
            ML Engineer | AI Developer | Full-Stack Engineer | AI Ethics Specialist
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-accent-cyan transition-all font-medium">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 max-w-xl mx-auto glass-card p-8 border-l-4 border-l-accent-cyan shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p className="text-xl italic font-light leading-relaxed text-white">
            "To build transparent, fair AI systems that reduce inequalities and drive responsible innovation."
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

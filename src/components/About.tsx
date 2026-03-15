import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-white text-black py-32 px-8 md:px-24 z-20">
      <div className="grain-bg absolute inset-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-9xl font-bold leading-none tracking-tighter font-display"
            >
              Architecting <br /> Digital <br /> Excellence.
            </motion.h2>
            <div className="w-32 h-1 bg-black"></div>
          </div>
          <div className="flex flex-col justify-end space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl font-light leading-relaxed max-w-2xl"
            >
              Misael is a Software Engineer specializing in high-performance web interfaces and immersive 3D experiences.
              Bridging the gap between engineering rigor and artistic vision.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <span className="px-4 py-2 border border-black/20 rounded-full text-xs font-medium">FULLSTACK</span>
              <span className="px-4 py-2 border border-black/20 rounded-full text-xs font-medium">WEBGL</span>
              <span className="px-4 py-2 border border-black/20 rounded-full text-xs font-medium">SOLUTIONS ARCHITECT</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

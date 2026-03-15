import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center z-10 text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-premium-dark opacity-50"></div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-6xl md:text-9xl font-extrabold tracking-tight mb-4 font-display"
      >
        MISAEL JORDY
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-lg md:text-xl font-light tracking-[0.3em] uppercase opacity-60"
      >
        Software Engineer & Interactive Designer
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-white"></div>
      </motion.div>
    </section>
  );
}

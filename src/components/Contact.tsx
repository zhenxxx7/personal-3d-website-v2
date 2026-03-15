import React from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-white text-black py-24 px-8 border-t border-black/5 z-20">
      <div className="grain-bg absolute inset-0"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none font-display"
          >
            Let's <br />Talk.
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:hello@misaeljordy.com" 
            className="text-xl md:text-2xl font-light underline decoration-1 underline-offset-8 hover:text-accent-blue transition-colors cursor-none"
          >
            hello@misaeljordy.com
          </motion.a>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right">
          <div className="space-y-2 mb-12">
            <p className="text-xs uppercase tracking-widest font-bold">Social</p>
            <div className="flex flex-col gap-1 text-gray-500 uppercase text-[10px] tracking-widest">
              <a href="#" className="hover:text-black transition-colors cursor-none">LinkedIn</a>
              <a href="#" className="hover:text-black transition-colors cursor-none">GitHub</a>
              <a href="#" className="hover:text-black transition-colors cursor-none">Twitter (X)</a>
              <a href="#" className="hover:text-black transition-colors cursor-none">Dribbble</a>
            </div>
          </div>
          <p className="text-[10px] tracking-widest uppercase opacity-40">
            © 2024 Misael Jordy — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

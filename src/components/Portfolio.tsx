import React from 'react';
import { motion } from 'motion/react';
import omnisightImg from '../assets/projects/omnisight.png';
import jstreamImg from '../assets/projects/jstream.png';
import nexusImg from '../assets/projects/nexus.png';
import drupalImg from '../assets/projects/drupal.png';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative min-h-screen bg-premium-dark py-32 px-6 md:px-20 z-20 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header (static) */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl font-bold mb-4 font-display"
          >
            Work Showcase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 tracking-widest uppercase text-sm"
          >
            Systems Architecture / 2025 - 2026
          </motion.p>
        </div>

        {/* Traditional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto pb-12">
          
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
            className="md:col-span-8 md:row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative cursor-none"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <span className="text-xs tracking-widest opacity-50 uppercase">01 / Cloud Infrastructure</span>
              <h3 className="text-4xl font-bold mt-4 font-display">NEXUS PAAS</h3>
              <p className="mt-4 text-gray-400 max-w-lg">
                A lightweight self-hosted Platform as a Service for Node.js and React. Simplifies server orchestration with automated git-to-deploy workflows on Ubuntu.
              </p>
            </div>
            <div className="relative w-full aspect-video bg-neutral-900 rounded-xl overflow-hidden mt-8 border border-white/5 z-10">
              <img 
                src={nexusImg} 
                alt="Nexus PAAS" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            className="md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 flex flex-col justify-between group relative cursor-none overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-xs tracking-widest opacity-50 uppercase">02 / System Admin</span>
              <h3 className="text-2xl font-bold mt-2 font-display">DRUPAL & WORDPRESS</h3>
              <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">
                High-performance Ubuntu server orchestration for Drupal and WordPress CMS. Optimized for stability, multi-site management, and security.
              </p>
            </div>
            <div className="absolute inset-0 z-0">
               <img 
                src={drupalImg} 
                alt="Drupal Cloud Engine" 
                className="w-full h-full object-cover opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}
            className="md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 flex flex-col justify-between group relative cursor-none overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-xs tracking-widest opacity-50 uppercase">03 / Entertainment</span>
              <h3 className="text-2xl font-bold mt-2 font-display">JSTREAM</h3>
            </div>
            <div className="absolute inset-0 z-0">
               <img 
                src={jstreamImg} 
                alt="JStream" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />
            </div>
            <p className="relative z-10 text-[10px] text-gray-400 mt-4 leading-relaxed line-clamp-2">
              Premium streaming platform specialized in curated Chinese short-dramas and cinematic mini-series.
            </p>
          </motion.div>

          {/* Project 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
            className="md:col-span-12 md:row-span-1 glass-card rounded-3xl p-12 flex flex-col md:flex-row items-center gap-10 group overflow-hidden relative cursor-none"
          >
            <div className="flex-1 relative z-10">
              <span className="text-xs tracking-widest opacity-50 uppercase">04 / Game Tooling</span>
              <h3 className="text-5xl font-extrabold mt-4 font-display">OMNISIGHT RADAR</h3>
              <p className="mt-6 text-gray-400 max-w-md">
                A stealth tactical radar for CS2. Beyond the frontend, I engineered the payment gateway integration and a robust admin dashboard for real-time monitoring of users, transactions, and system updates.
              </p>
              <a href="https://omnisight.pro" target="_blank" rel="noopener noreferrer">
                <button className="mt-8 px-8 py-3 bg-white text-black font-bold text-sm tracking-widest hover:bg-accent-blue hover:text-white transition-all w-fit uppercase cursor-none">
                  Explore Project
                </button>
              </a>
            </div>
            <div className="flex-1 w-full h-full min-h-[300px] bg-neutral-900 rounded-2xl border border-white/5 relative overflow-hidden z-10">
              <img 
                src={omnisightImg} 
                alt="Omnisight Radar" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative min-h-screen bg-premium-dark py-32 px-6 md:px-20 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4 font-display"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 tracking-widest uppercase text-sm"
          >
            Case Studies / 2023 - 2024
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[1200px]">
          {/* Large Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 md:row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative cursor-none"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <span className="text-xs tracking-widest opacity-50 uppercase">01 / Fintech</span>
              <h3 className="text-4xl font-bold mt-4 font-display">NEON BANKING</h3>
            </div>
            <div className="relative w-full aspect-video bg-neutral-900 rounded-xl overflow-hidden mt-8 border border-white/5 z-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6WW2ReTgvyoiiuiqCSDwhD7o0j2fRi3VzQlYEECrrYMaMG1d-LQPmGlkqlAyHZwKPN_QldSEKD_1fBGgrlnpk2S_rm67XsTz1jo2i52iuf7ebFgufj4c9NwtMHJ2MpSZYLja8NKruPKW98IG2itjnC9GkqBRWAL6zr9jTLKfIIPRQx2Ju7Tvowqpvdbr9JjzER1AvMHovUZrPq6HeWF7YNaCVK3SGIczSdfifYmn-AYVQxWLwfd0yVhEqSo-85QMvtsfJLcUE-DuK" 
                alt="Neon Banking" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Medium Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 flex flex-col justify-between group relative cursor-none"
          >
            <div className="relative z-10">
              <span className="text-xs tracking-widest opacity-50 uppercase">02 / E-Comm</span>
              <h3 className="text-2xl font-bold mt-2 font-display">LUXE ATELIER</h3>
            </div>
            <div className="h-40 bg-neutral-900 rounded-xl mt-4 border border-white/5 flex items-center justify-center relative z-10">
              <span className="text-white/20 text-xs font-mono">RENDER_001.JPG</span>
            </div>
          </motion.div>

          {/* Medium Project 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 flex flex-col justify-between group relative cursor-none"
          >
            <div className="relative z-10">
              <span className="text-xs tracking-widest opacity-50 uppercase">03 / AI</span>
              <h3 className="text-2xl font-bold mt-2 font-display">CYPHER CORE</h3>
            </div>
            <div className="h-40 bg-neutral-900 rounded-xl mt-4 border border-white/5 flex items-center justify-center relative z-10">
              <span className="text-white/20 text-xs font-mono">RENDER_002.JPG</span>
            </div>
          </motion.div>

          {/* Wide Project 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-12 md:row-span-1 glass-card rounded-3xl p-12 flex flex-col md:flex-row items-center gap-10 group overflow-hidden relative cursor-none"
          >
            <div className="flex-1 relative z-10">
              <span className="text-xs tracking-widest opacity-50 uppercase">04 / WebGL Experience</span>
              <h3 className="text-5xl font-extrabold mt-4 font-display">KINETIC ENGINE</h3>
              <p className="mt-6 text-gray-400 max-w-md">
                Experimental interactive 3D platform built for digital artists to visualize sound through geometry.
              </p>
              <button className="mt-8 px-8 py-3 bg-white text-black font-bold text-sm tracking-widest hover:bg-accent-blue hover:text-white transition-all uppercase cursor-none">
                Explore Project
              </button>
            </div>
            <div className="flex-1 w-full h-full min-h-[300px] bg-neutral-900 rounded-2xl border border-white/5 relative overflow-hidden z-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt5dELYJxWN7RsN6IErXkcYVme-l89gAxj-bYv_oh1i6mnJUva-Lu_CtB3UzwoBtLVmor8Y0znj1r8_5pSM8wCJADVXsMa18RGI9l9VZeIZD3j8dCDY5RrpTR7p79a42u5O-acZBcD100djAunFrbzm-OQvLoyHrU2eDU8PSScIkwyqEVo7jU-DuiabTsSI_rTcCEppk7awNFq9rpcYtiTmfdjT2REgnGVX2RjESTuvLqQqT0kw32wx91GOpgiu3C7WWoBxAPlIINy" 
                alt="Kinetic Engine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

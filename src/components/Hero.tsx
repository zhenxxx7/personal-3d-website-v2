import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  useEffect(() => {
    let isScrolling = false;
    let lastScrollY = window.scrollY;
    
    // Prevent the user from interrupting the smooth scroll midway
    const blockScroll = (e: Event) => {
      if (isScrolling) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', blockScroll, { passive: false });
    window.addEventListener('touchmove', blockScroll, { passive: false });
    
    const handleScroll = () => {
      if (isScrolling) return; // Completely ignore updates while locked in an auto-scroll
      
      const currentScrollY = window.scrollY;
      const targetY = window.innerHeight + 600; // Perfect progress = 1 point
      const isScrollingDown = currentScrollY > lastScrollY;
      
      // Auto-scroll DOWN from Hero to About 
      if (isScrollingDown && currentScrollY > 10 && currentScrollY < targetY - 100) {
        isScrolling = true;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        
        setTimeout(() => {
          isScrolling = false;
        }, 1300); // Wait for the smooth scroll to finish safely
      }
      // Auto-scroll UP from About to Hero
      else if (!isScrollingDown && currentScrollY < targetY - 10 && currentScrollY > 100) {
        isScrolling = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setTimeout(() => {
          isScrolling = false;
        }, 1300);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', blockScroll);
      window.removeEventListener('touchmove', blockScroll);
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center z-10 text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-premium-dark opacity-50"></div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-6xl md:text-9xl font-extrabold tracking-tight mb-4 font-display"
      >
        Misael Jordy
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

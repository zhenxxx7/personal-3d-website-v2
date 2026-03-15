import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
      <div className="text-2xl font-bold tracking-tighter font-display">ZX</div>
      <div className="flex items-center gap-4">
        <div className="w-32 h-[1px] bg-white/20 relative overflow-hidden hidden md:block">
          <motion.div 
            className="absolute inset-0 bg-white origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
        <div className="text-xs font-mono tracking-widest tabular-nums">
          {percent.toString().padStart(2, '0')}%
        </div>
      </div>
    </nav>
  );
}

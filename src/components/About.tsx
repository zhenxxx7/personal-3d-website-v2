import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate } from 'motion/react';

const LiquidBadge = ({ desktop, mobile }: { desktop: string; mobile: string; key?: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs tuned for a reactive, elastic jelly bounce
  const springX = useSpring(x, { stiffness: 400, damping: 8, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 400, damping: 8, mass: 0.6 });

  const scaleX = useTransform([springX, springY], ([sx, sy]: [number, number]) => {
    return 1 + (Math.abs(sx) * 0.0015) - (Math.abs(sy) * 0.0005);
  });
  const scaleY = useTransform([springX, springY], ([sx, sy]: [number, number]) => {
    return 1 + (Math.abs(sy) * 0.002) - (Math.abs(sx) * 0.0005);
  });
  const skewX = useTransform(springX, sx => sx * 0.02);

  const backgroundHighlight = useTransform([springX, springY], ([sx, sy]: [number, number]) => {
    return `radial-gradient(100px circle at calc(50% + ${sx}px) calc(50% + ${sy}px), rgba(0,0,0,0.3) 0%, transparent 100%)`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center justify-center p-1 cursor-none group"
    >
      <motion.div
        style={{ scaleX, scaleY, skewX }}
        className="absolute inset-0 bg-white/5 rounded-full border border-white/20 backdrop-blur-xl overflow-hidden z-[-1]"
      >
        <motion.div 
          style={{ background: backgroundHighlight }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        />
      </motion.div>
      
      <span className="relative z-10 px-6 py-2.5 text-sm md:text-[15px] font-medium tracking-wide capitalize whitespace-nowrap hidden md:block pointer-events-none">
        {desktop}
      </span>
      <span className="relative z-10 px-5 py-2.5 text-sm font-medium tracking-wide capitalize whitespace-nowrap md:hidden pointer-events-none">
        {mobile}
      </span>
    </motion.div>
  );
};

export default function About() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Map the local scroll progress of this exact 200vh section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Calculate the "Ash Sweep" mask boundaries from left (0%) to right (100%)
  // Happening earlier in the scroll (0.4 to 0.55) to make room for the 3 texts
  const sweepTransparent = useTransform(scrollYProgress, [0.4, 0.55], [-50, 100]);
  const sweepOpaque = useTransform(scrollYProgress, [0.4, 0.55], [0, 150]);
  
  // Creates a harsh to soft clipping mask that reveals transparency
  const maskImage = useMotionTemplate`linear-gradient(to right, rgba(0,0,0,0) ${sweepTransparent}%, rgba(0,0,0,1) ${sweepOpaque}%)`;
  
  // Adds a dust blur mimicking ash dissipation while sweeping
  const sweepBlur = useTransform(scrollYProgress, [0.4, 0.55], ["blur(0px)", "blur(20px)"]);
  
  // Physically drift the content to the right as it turns to ash, simulating being blown away
  const sweepX = useTransform(scrollYProgress, [0.4, 0.55], ["0px", "100px"]);

  // --- Cinematic Void Text Phase 1 ---
  const t1w1Opacity = useTransform(scrollYProgress, [0.55, 0.56], [0, 1]);
  const t1w1Y = useTransform(scrollYProgress, [0.55, 0.56], [20, 0]);
  const t1w2Opacity = useTransform(scrollYProgress, [0.56, 0.57], [0, 1]);
  const t1w2Y = useTransform(scrollYProgress, [0.56, 0.57], [20, 0]);
  const t1w3Opacity = useTransform(scrollYProgress, [0.57, 0.58], [0, 1]);
  const t1w3Y = useTransform(scrollYProgress, [0.57, 0.58], [20, 0]);
  // HOLD (Tahan): 0.58 -> 0.65
  const text1GroupOpacity = useTransform(scrollYProgress, [0.65, 0.67], [1, 0]);

  // --- Cinematic Void Text Phase 2 ---
  const t2w1Opacity = useTransform(scrollYProgress, [0.69, 0.70], [0, 1]);
  const t2w1Y = useTransform(scrollYProgress, [0.69, 0.70], [20, 0]);
  const t2w2Opacity = useTransform(scrollYProgress, [0.70, 0.71], [0, 1]);
  const t2w2Y = useTransform(scrollYProgress, [0.70, 0.71], [20, 0]);
  const t2w3Opacity = useTransform(scrollYProgress, [0.71, 0.72], [0, 1]);
  const t2w3Y = useTransform(scrollYProgress, [0.71, 0.72], [20, 0]);
  // HOLD (Tahan): 0.72 -> 0.79
  const text2GroupOpacity = useTransform(scrollYProgress, [0.79, 0.81], [1, 0]);

  // --- Cinematic Void Text Phase 3 ---
  const t3w1Opacity = useTransform(scrollYProgress, [0.83, 0.84], [0, 1]);
  const t3w1Y = useTransform(scrollYProgress, [0.83, 0.84], [20, 0]);
  const t3w2Opacity = useTransform(scrollYProgress, [0.84, 0.85], [0, 1]);
  const t3w2Y = useTransform(scrollYProgress, [0.84, 0.85], [20, 0]);
  const t3w3Opacity = useTransform(scrollYProgress, [0.85, 0.86], [0, 1]);
  const t3w3Y = useTransform(scrollYProgress, [0.85, 0.86], [20, 0]);
  // HOLD (Tahan): 0.86 -> 0.94

  // --- Phase Warp: Triggers on Text 3 (0.94 to 0.98) ---
  const warpScale = useTransform(scrollYProgress, [0.94, 0.98], [1, 15]);
  const warpBlur = useTransform(scrollYProgress, [0.94, 0.98], ["blur(0px)", "blur(20px)"]);
  const text3GroupOpacity = useTransform(scrollYProgress, [0.96, 0.98], [1, 0]); 



  const isAutoScrolling = useRef(false);
  const lastScrollY = useRef(0);

  // Custom forced smooth scroll that CANNOT be interrupted by user scrolling
  const forceSmoothScroll = useCallback((targetY: number, duration: number, onComplete?: () => void) => {
    isAutoScrolling.current = true;
    const startY = window.scrollY;
    const diff = targetY - startY;
    const startTime = performance.now();

    // Always use easeInOut for absolute smoothness (cinematic start and stop)
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easingFn = easeInOutCubic;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFn(progress);
      
      window.scrollTo(0, startY + diff * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure we land exactly on target
        window.scrollTo(0, targetY);
        if (onComplete) {
          onComplete();
        } else {
          // Small delay before unlocking to let browser settle
          setTimeout(() => {
            isAutoScrolling.current = false;
          }, 200);
        }
      }
    };
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    // --- WHEEL BLOCKER: Kill user scroll momentum during auto-scroll ---
    const handleWheel = (e: WheelEvent) => {
      if (isAutoScrolling.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    // Must be { passive: false } to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });

    // --- Unified Scroll Logic for Text Reveal + Auto-Scroll triggers ---
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // --- Text Reveal Logic ---
      if (currentScrollY >= window.innerHeight + 500) {
        setIsRevealed(true);
      } else if (currentScrollY < window.innerHeight + 590) {
        setIsRevealed(false);
      }

      // Block triggers during active auto-scroll
      if (isAutoScrolling.current) return;

      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;
      const aboutHeight = aboutSection.offsetHeight;
      const aboutBottom = aboutTop + aboutHeight;
      const viewportHeight = window.innerHeight;
      const scrollDistance = aboutHeight - viewportHeight;

      const aboutIdleY = viewportHeight + 600;
      const targetDismissY = aboutTop + (scrollDistance * 0.35);

      // --- Auto-Scroll 1: Dismiss 3D Ball (Downwards) ---
      if (isScrollingDown && currentScrollY > aboutIdleY + 20 && currentScrollY < targetDismissY - 100) {
        forceSmoothScroll(targetDismissY, 1300);
        return;
      }

      // --- Auto-Scroll 2: Return 3D Ball (Upwards) ---
      if (isScrollingUp && currentScrollY < targetDismissY - 20 && currentScrollY > aboutIdleY + 100) {
        forceSmoothScroll(aboutIdleY, 1300);
        return;
      }

      // --- Downward Auto-Scroll (The Warp Drive) ---
      const warpTriggerY = aboutTop + (scrollDistance * 0.92);
      if (isScrollingDown && currentScrollY >= warpTriggerY && currentScrollY < aboutBottom - 50) {
        // Scroll flawlessly from warp trigger directly into the Portfolio showcase.
        forceSmoothScroll(aboutBottom, 3000); // Slowed down significantly for a smoother cinematic transition
        return;
      }

      // --- Upward Auto-Scroll: Two-Step System ---
      const portfolioTop = aboutBottom;

      // Phase A: Snap to the TOP of Portfolio first
      if (isScrollingUp && currentScrollY > portfolioTop + 50 && currentScrollY < portfolioTop + viewportHeight * 1.5) {
        forceSmoothScroll(portfolioTop, 1000);
        return;
      }

      // Phase B: Rewind back to About (Smooth continuous backwards scroll)
      // Only triggers if the user scrolls up intentionally while already resting at the top boundary.
      if (isScrollingUp && currentScrollY >= portfolioTop - 20 && currentScrollY <= portfolioTop + 50) {
        // NO TELEPORTS! Just a smooth continuous scroll backwards.
        const targetY = aboutTop + (scrollDistance * 0.86);
        forceSmoothScroll(targetY, 2000);
        return;
      }
    };
    
    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [forceSmoothScroll]);

  return (
    <section ref={sectionRef} id="about" className="relative h-[600vh] bg-transparent text-white mix-blend-difference z-20">
      {/* Sticky container makes the content stay in the center while scrolling through the 600vh section */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-8 md:px-24 overflow-hidden">


        {/* Phase 1 Text Container */}
        <motion.div 
          style={{ opacity: text1GroupOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
           <div className="flex gap-4 md:gap-6 text-2xl md:text-5xl font-display font-light tracking-[0.2em] uppercase text-white/50">
              <motion.span style={{ opacity: t1w1Opacity, y: t1w1Y }}>Keep</motion.span>
              <motion.span style={{ opacity: t1w2Opacity, y: t1w2Y }} className="font-bold text-white">Scrolling</motion.span>
              <motion.span style={{ opacity: t1w3Opacity, y: t1w3Y }}>Deeper</motion.span>
           </div>
        </motion.div>

        {/* Phase 2 Text Container */}
        <motion.div 
          style={{ opacity: text2GroupOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
           <div className="flex gap-4 md:gap-6 text-2xl md:text-5xl font-display font-light tracking-[0.2em] uppercase text-white/50">
              <motion.span style={{ opacity: t2w1Opacity, y: t2w1Y }}>Into</motion.span>
              <motion.span style={{ opacity: t2w2Opacity, y: t2w2Y }}>The</motion.span>
              <motion.span style={{ opacity: t2w3Opacity, y: t2w3Y }} className="font-bold text-white text-3xl md:text-6xl tracking-[0.3em]">Unknown</motion.span>
           </div>
        </motion.div>

        {/* Phase 3 Text Container (This is the one that warps) */}
        <motion.div 
          style={{ opacity: text3GroupOpacity, scale: warpScale, filter: warpBlur }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
           <div className="flex gap-4 md:gap-6 text-2xl md:text-5xl font-display font-light tracking-[0.2em] uppercase text-[#ff2a2a]/80">
              <motion.span style={{ opacity: t3w1Opacity, y: t3w1Y }}>Initiating</motion.span>
              <motion.span style={{ opacity: t3w2Opacity, y: t3w2Y }}>Warp</motion.span>
              <motion.span style={{ opacity: t3w3Opacity, y: t3w3Y }} className="font-bold text-[#ff2a2a]">Sequence</motion.span>
           </div>
        </motion.div>

        {/* Ash Sweep Container */}
        <motion.div 
          className="max-w-7xl mx-auto w-full relative z-10"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
            filter: sweepBlur,
            x: sweepX
          }}
        >
          {/* Split Two-Column Grid Aligned at the Top */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Title Section */}
            <div className="space-y-8 pt-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-[0.85] tracking-tight font-display text-white/95">
                {["Architecting", "Digital", "Ecosystems."].map((word, wordIndex) => (
                  <div key={wordIndex} className="overflow-visible pb-1 md:pb-2">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
                        animate={isRevealed ? { opacity: 1, filter: "blur(0px)", scale: 1 } : { opacity: 0 }}
                        transition={{ duration: isRevealed ? 0.8 : 0, delay: isRevealed ? (wordIndex * 8 + charIndex) * 0.04 : 0, ease: "easeOut" }}
                        className="inline-block"
                        style={{ willChange: "filter, opacity, transform" }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </h2>
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isRevealed ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ transformOrigin: "left" }}
                className="w-24 md:w-32 h-1 bg-white"
              />
            </div>

            {/* Right Column: Description & Badges */}
            <div className="space-y-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: isRevealed ? 0.8 : 0, delay: isRevealed ? 0.9 : 0 }}
                className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-xl text-[#d1d1d6]"
              >
                Software Engineer specializing in modern frontend ecosystems (React/Next.js), immersive WebGL experiences, scalable PaaS cloud infrastructures, and complex WordPress architectures. Dedicated to transforming intricate system requirements into seamless, beautifully interactive interfaces.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: isRevealed ? 0.8 : 0, delay: isRevealed ? 1.1 : 0 }}
                className="flex flex-wrap gap-4"
              >
                {[
                  { desktop: "PaaS & Cloud Infrastructure", mobile: "PaaS Systems" },
                  { desktop: "Modern Frontend & WebGL", mobile: "React & 3D" },
                  { desktop: "WordPress Architecture", mobile: "WordPress" }
                ].map((skill, index) => (
                  <LiquidBadge key={index} desktop={skill.desktop} mobile={skill.mobile} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let scrollPos = 0;
    let animationFrameId: number;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      scrollPos = window.scrollY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll);
    resize();

    class Crystal {
      x!: number;
      y!: number;
      size!: number;
      speedX!: number;
      speedY!: number;
      opacity!: number;

      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update(progress: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        const scale = Math.max(0.6, 1 - scrollPos / 1500);
        const pushX = (this.x - width / 2) * (scrollPos / 5000);
        const pushY = (this.y - height / 2) * (scrollPos / 5000);

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();

        if (ctx) {
          // Fade to dark particles as progress -> 1
          const r = Math.round(59 - (43 * progress));
          const g = Math.round(130 - (112 * progress));
          const b = Math.round(246 - (226 * progress));
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
          ctx.beginPath();
          // Decrease size reduction
          ctx.arc(this.x + pushX, this.y + pushY, this.size * Math.max(0.8, scale), 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const particles: Crystal[] = [];
    for (let i = 0; i < 150; i++) {
      particles.push(new Crystal());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Calculate progress strictly FOR THE SECOND SECTION (About section)
      // Hero section is 100vh. The sticky About section is from 100vh to 200vh.
      const aboutStart = height;
      // Complete the background fade and tilt within the first 600px of scrolling in About
      const aboutEnd = height + 600;
      let progress = 0;
      
      if (scrollPos > aboutStart) {
        progress = Math.min(1, (scrollPos - aboutStart) / (aboutEnd - aboutStart));
      }

      // 2. Draw cinematic black letterbox (only appears inside the second section)
      if (progress > 0) {
        // Fade in full white background
        ctx.fillStyle = `rgba(255, 255, 255, ${progress})`;
        ctx.fillRect(0, 0, width, height);

        // --- Closing Phase: Black bars grow from 12% to 50% (meeting in the middle) ---
        // The About section is h-[600vh], scroll distance = 500vh.
        // Warp phase is at 0.94-0.98 of scrollYProgress.
        // We need to map a scroll range for the close animation.
        const aboutSectionEl = document.getElementById('about');
        let closeProgress = 0;
        if (aboutSectionEl) {
          const aboutSectionTop = aboutSectionEl.offsetTop;
          const aboutSectionHeight = aboutSectionEl.offsetHeight;
          const aboutScrollDistance = aboutSectionHeight - height; // 500vh
          const closeStart = aboutSectionTop + (aboutScrollDistance * 0.90); // Starts earlier for a slower close
          const closeEnd = aboutSectionTop + (aboutScrollDistance * 0.985);
          if (scrollPos > closeStart) {
            const rawProgress = Math.min(1, (scrollPos - closeStart) / (closeEnd - closeStart));
            // EaseInCubic: starts slow, accelerates → bars creep in gently then snap shut
            closeProgress = rawProgress * rawProgress * rawProgress;
          }
        }

        const minBarHeight = height * 0.12; // Starting 12% height per bar
        const maxBarHeight = height * 0.5;  // Ending 50% (meet in the middle)
        const baseBarHeight = minBarHeight * Math.pow(progress, 0.8);
        // Interpolate from base (12%) to max (50%) using eased closeProgress
        let currentBarHeight = baseBarHeight + (maxBarHeight - baseBarHeight) * closeProgress;
        // Add 2px overlap when closing to prevent subpixel white line leak
        if (closeProgress > 0) currentBarHeight = Math.ceil(currentBarHeight) + 2;

        ctx.fillStyle = '#0a0a0a';
        // Top bar sliding down
        ctx.fillRect(0, 0, width, currentBarHeight);
        // Bottom bar sliding up
        ctx.fillRect(0, height - currentBarHeight, width, currentBarHeight);
      }

      // 3. Size and 3D angle animations based strictly on 'progress' (section 2)
      // Start scaling down only when progress > 0
      const scaleFactor = Math.max(0.6, 1 - (progress * 0.4));
      
      // Calculate 3D pitch angle (0 at top, max 75 degrees)
      const maxPitch = (75 * Math.PI) / 180;
      const pitch = progress * maxPitch;
      const tilt = Math.cos(pitch);

      // --- 3D Object Dismiss Phase ---
      // Object stays visible during Hero and the letterbox transition.
      // AFTER the letterbox/white bg is fully formed (scrollPos > aboutEnd),
      // the object slides UP and fades out before the text ash-sweep begins.
      let panY = 0;
      let objectOpacity = 1;

      if (scrollPos <= aboutEnd) {
        // Phase 1: Hero + Transition — gentle parallax, fully visible
        panY = scrollPos * 0.15;
      } else {
        // Phase 2: Dismiss — accelerate upward IMMEDIATELY on the first scroll inside About
        const dismissDistance = height * 0.6; // Much shorter distance! (0.6 viewport height)
        const dismissProgress = Math.min(1, (scrollPos - aboutEnd) / dismissDistance);
        
        // Fly up aggressively using a slight acceleration curve
        const easedProgress = Math.pow(dismissProgress, 1.2);
        panY = aboutEnd * 0.15 + (easedProgress * height * 1.8);
        objectOpacity = Math.max(0, 1 - dismissProgress * 1.8); // Fully gone halfway through the dismiss distance
      }

      ctx.save();
      ctx.globalAlpha = objectOpacity;
      
      // Translate to center with computed parallax
      ctx.translate(width / 2, height / 2 - panY);
      
      // Apply scale
      ctx.scale(scaleFactor, scaleFactor);

      // Make lines brighter, transition to dark on white background
      const colorVal = Math.round(255 - (239 * progress));
      const strokeAlpha = 0.3 + (0.5 * progress); // Becomes more opaque when dark
      ctx.strokeStyle = `rgba(${colorVal}, ${colorVal}, ${colorVal}, ${strokeAlpha})`;

      // Use performance.now() for smooth animation
      const rotationSpeed = performance.now() * 0.0006; // Adjusted speed

      // 1. Draw squares (Accretion disk) WITH tilt
      ctx.save();
      // Compress Y axis to simulate 3D rotation
      ctx.scale(1, tilt);
      // Adjust line width to compensate for the vertical compression
      ctx.lineWidth = 1.5 / Math.sqrt(tilt || 0.001);

      // Draw first square (rotating right)
      ctx.save();
      ctx.rotate(rotationSpeed);
      ctx.beginPath();
      ctx.strokeRect(-200, -200, 400, 400);
      ctx.stroke();
      ctx.restore();

      // Draw second square (rotating left, initial offset of 45 degrees so they form a star at rest)
      ctx.save();
      ctx.rotate(-rotationSpeed + Math.PI / 4);
      ctx.beginPath();
      ctx.strokeRect(-200, -200, 400, 400);
      ctx.stroke();
      ctx.restore();

      // Restore tilt settings
      ctx.restore();

      // 2. Draw the circle (Black hole) WITHOUT tilt, on top of the squares
      ctx.lineWidth = 1.5;
      // Fill dark to occlude the lines behind it, creating the black hole volume
      ctx.fillStyle = '#0a0a0a'; 
      ctx.beginPath();
      ctx.arc(0, 0, 150, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Restore global transform + globalAlpha
      ctx.restore();

      particles.forEach((p) => p.update(progress));
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

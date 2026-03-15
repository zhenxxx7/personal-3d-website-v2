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
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const scale = Math.max(0.2, 1 - scrollPos / 1000);
        const pushX = (this.x - width / 2) * (scrollPos / 5000);
        const pushY = (this.y - height / 2) * (scrollPos / 5000);

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();

        if (ctx) {
          ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity * scale})`;
          ctx.beginPath();
          ctx.arc(this.x + pushX, this.y + pushY, this.size * scale, 0, Math.PI * 2);
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

      const scaleFactor = Math.max(0.1, 1 - scrollPos / 800);
      const rotation = Date.now() * 0.001;

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(rotation);
      ctx.scale(scaleFactor, scaleFactor);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 4);
        ctx.strokeRect(-200, -200, 400, 400);
        ctx.arc(0, 0, 150, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      particles.forEach((p) => p.update());
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

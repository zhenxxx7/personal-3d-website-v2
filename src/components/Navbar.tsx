import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
      <div className="text-2xl font-bold tracking-tighter font-display">MJ.</div>
      <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-light">
        <a href="#about" className="hover:text-accent-blue transition-colors cursor-none">About</a>
        <a href="#portfolio" className="hover:text-accent-blue transition-colors cursor-none">Works</a>
        <a href="#contact" className="hover:text-accent-blue transition-colors cursor-none">Contact</a>
      </div>
    </nav>
  );
}

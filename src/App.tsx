/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import CanvasBackground from './components/CanvasBackground';

export default function App() {
  return (
    <div className="selection:bg-accent-blue selection:text-white">
      <CustomCursor />
      <Navbar />
      <CanvasBackground />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

'use client';

import { Hero, About, StarsCanvas, RedirectModal, Skills } from '@components';
import { useReducedMotion } from '../hooks/useReducedMoton';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div>
      {/*{!prefersReducedMotion && <StarsCanvas />}*/}
      <Hero />
      <About />
      <Skills />
      {/* 
        TODO: ADD PROJECTS
      */}
      <Contact />
      <Footer />
    </div>
  );
}

'use client';

import { Hero, About, Stars, Contact, Footer, RedirectModal, Skills, Projects } from '@components';
import { useReducedMotion } from '../hooks/useReducedMoton';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div>
      {/*{!prefersReducedMotion && <Stars />}*/}
      <RedirectModal />
      <Hero />
      <About />
      <Skills />
      {/* 
        TODO: ADD PROJECTS
      */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

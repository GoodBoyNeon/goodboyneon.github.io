'use client';

import { Hero, About, Stars, Contact, Footer, Skills, Projects } from '@components';
import { useReducedMotion } from '../hooks';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div>
      {!prefersReducedMotion && <Stars />}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

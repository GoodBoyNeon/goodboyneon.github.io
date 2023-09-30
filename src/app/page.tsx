'use client';

import {
  Hero,
  About,
  Stars,
  Contact,
  Footer,
  RedirectModal,
  Skills,
  Projects,
} from '@components';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div>
      {!prefersReducedMotion && <Stars />}
      {/* <RedirectModal /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

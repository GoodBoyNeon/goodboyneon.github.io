'use client';

import {
  Hero,
  About,
  Stars,
  Contact,
  Footer,
  Skills,
  Projects,
  Overlays,
} from '@components';
import { useState } from 'react';
import { useReducedMotion } from '../hooks';

export default function Portfolio() {
  const prefersReducedMotion = useReducedMotion()
  const [renderStars, setRenderStars] = useState(!prefersReducedMotion);
  return (
    <div>
      <Overlays setRenderStars={setRenderStars} renderStars={renderStars} />
      {renderStars && <Stars />}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

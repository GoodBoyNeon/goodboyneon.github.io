'use client';

import { useReducedMotion } from '@/hooks';
import {
  About,
  Contact,
  Footer,
  Hero,
  Overlays,
  Projects,
  Skills,
  Stars,
} from '@components';
import { useState } from 'react';

export default function Portfolio() {
  const reducedMotion = useReducedMotion();
  const [renderStars, setRenderStars] = useState(!reducedMotion);

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

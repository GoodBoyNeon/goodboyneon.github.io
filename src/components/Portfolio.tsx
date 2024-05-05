'use client';

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
  const [renderStars, setRenderStars] = useState(false);

  // setRenderStars(false); // DELETE LINE IN PRODUCTION

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

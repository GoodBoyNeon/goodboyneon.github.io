"use client";

import { Hero } from "@components";
import About from "../components/About";
import StarsCanvas from "../components/stars/Canvas";
import RedirectModal from "../components/RedirectModal";

export default function Home() {
  return (
    <div>
      <StarsCanvas />
      <RedirectModal />
      <Hero />
      <About />
    </div>
  );
}

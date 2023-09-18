"use client";

import { Hero } from "@components";
import About from "../components/About";
import StarsCanvas from "../components/stars/Canvas";

export default function Home() {
  return (
    <div>
      <StarsCanvas />
      <Hero />
      <About />
    </div>
  );
}

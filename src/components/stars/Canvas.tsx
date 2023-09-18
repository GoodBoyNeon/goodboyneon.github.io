import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Scene from "./Scene";

const ThreeCanvas = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[-1]">
      <Canvas id="three-canvas-container">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;

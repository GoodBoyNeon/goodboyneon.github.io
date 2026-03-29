"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { CanvasTexture, MathUtils, Points } from "three";

const generateStarCanvas = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const center = size / 2;

  const glow = ctx.createRadialGradient(center, center, 0, center, center, center);

  glow.addColorStop(0, "rgba(140, 200, 255, 1)");
  glow.addColorStop(0.2, "rgba(120, 180, 255, 0.6)");
  glow.addColorStop(0.5, "rgba(100, 160, 255, 0.2)");
  glow.addColorStop(1, "rgba(100, 160, 255, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 2; i++) {
    const core = ctx.createRadialGradient(
      center,
      center,
      0,
      center,
      center,
      center * 0.15
    );
    core.addColorStop(0, "rgba(255, 255, 255, 1)");
    core.addColorStop(0.4, "rgba(230, 245, 255, 0.9)");
    core.addColorStop(1, "rgba(180, 220, 255, 0)");
    ctx.fillStyle = core;
    ctx.fillRect(0, 0, size, size);
  }

  return new CanvasTexture(canvas);
};

const Scene = () => {
  const mesh = useRef<Points>(null);
  const starsCount = 3600;

  const vertices = useMemo(() => {
    const v = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      v[i] = MathUtils.randFloatSpread(210);
    }
    return v;
  }, [starsCount]);

  const starTexture = useMemo(() => generateStarCanvas(), []);

  // const starMap = useTexture("star.png");

  useFrame(state => {
    const top = document.body.getBoundingClientRect().top;
    state.camera.position.set(top * -0.0002, top * -0.002, top * -0.01);
  });

  return (
    <>
      {/* Mesh */}
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute args={[vertices, 3]} attach={"attributes-position"} />
        </bufferGeometry>
        <pointsMaterial
          color={"#ffffff"}
          size={1}
          map={starTexture}
          transparent
          depthWrite={false}
          alphaTest={0.01}
          sizeAttenuation
        />
      </points>
    </>
  );
};

const Stars = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 -z-10 opacity-[0.45]">
      <Canvas id="three-canvas-container">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Stars;

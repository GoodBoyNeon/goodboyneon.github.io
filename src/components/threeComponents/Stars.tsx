"use client";
import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { MathUtils, Points } from "three";

const Scene = () => {
  const mesh = useRef<Points>(null);

  const starsCount = 3000;

  const vertices = useMemo(() => {
    const v = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      v[i] = MathUtils.randFloatSpread(275);
    }
    return v;
  }, [starsCount]);

  const starMap = useTexture("star.png");

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
        <pointsMaterial color={"#fff"} size={0.25} map={starMap} />
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

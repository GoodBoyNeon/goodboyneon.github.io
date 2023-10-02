'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useMemo, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { MathUtils, BufferAttribute, Points } from 'three';
import { useFrame } from '@react-three/fiber';

const Scene = () => {
  const mesh = useRef<Points>(null);

  const starsCount = 1000;

  const vertices = useMemo(() => {
    // const v = new Array(starsCount).fill(0).map(() => Math.random() * 600 - 300);
    const v = new Array(starsCount)
      .fill(0)
      .map(() => MathUtils.randFloatSpread(100));
    return new BufferAttribute(new Float32Array(v), 3);
  }, [starsCount]);

  const starMap = useTexture('star.png');

  useFrame(state => {
    const top = document.body.getBoundingClientRect().top;
    state.camera.position.set(top * -0.0002, top * -0.002, top * -0.01);
  });

  return (
    <>
      {/* Mesh */}
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute attach={'attributes-position'} {...vertices} />
        </bufferGeometry>
        <pointsMaterial color={'#fff'} size={0.25} map={starMap} />
      </points>
    </>
  );
};

const Stars = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 opacity-[0.45]">
      <Canvas id="three-canvas-container">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Stars;

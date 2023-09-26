"use client";
import React, { useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { BufferAttribute, Points } from "three";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const mesh = useRef<Points>(null);

  const starsCount = 8000;

  const vertices = useMemo(() => {
    const v = new Array(starsCount)
      .fill(0)
      .map(() => Math.random() * 600 - 300);
    return new BufferAttribute(new Float32Array(v), 3);
  }, [starsCount]);

  const starMap = useTexture("star.png");

  useFrame((state) => {
    const top = document.body.getBoundingClientRect().top;
    state.camera.position.set(top * -0.002, top * -0.002, top * -0.08);
  });

  return (
    <>
      {/* Mesh */}
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute attach={"attributes-position"} {...vertices} />
        </bufferGeometry>
        <pointsMaterial
          color={"#94a3b8"}
          size={0.7}
          opacity={0.3}
          map={starMap}
        />
      </points>
    </>
  );
};

export default Scene;
/*
const vertices = new Float32Array(starsCount);

for (let i = 0; i < starsCount; i++) {
  // vertices[i] = (Math.random() - 0.5) * 100;
  vertices[i] = Math.random() * 600 - 300;
}

const points = useMemo(() => {
  const p = new Array(count).fill(0).map(() => (0.5 - Math.random()) * 7.5);
  return new BufferAttribute(new Float32Array(p), 3);
}, [count]);


  const moveCamera = () => {
    const top = document.body.getBoundingClientRect().top;
    camera.current?.position.set(top * -0.0002, top * -0.002, top * -0.01);
    console.log(top);
  };

  document.body.onscroll = moveCamera;
*/

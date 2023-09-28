'use client'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

const ComputerMesh = () => {
  const computer = useGLTF('./retroComputer/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={'black'}></hemisphereLight>
      <pointLight intensity={1}>
        <primitive object={computer.scene} />
      </pointLight>
    </mesh>
  );
};

const RetroComputer = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={<ComputerMesh />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        ></OrbitControls>
        <ComputerMesh />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RetroComputer;

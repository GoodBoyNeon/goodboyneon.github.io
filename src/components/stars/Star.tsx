import { useTexture } from "@react-three/drei";
import React from "react";
import { BufferGeometry, PointsMaterial } from "three";

const Star = () => {
  const starTexture = useTexture("../../../public/star.png");
  let starMaterial = new PointsMaterial({
    color: 0xffffff,
    size: 0.5,
    map: starTexture,
  });
  const geometry = new BufferGeometry();
  return (
    <group>
      <mesh geometry={geometry} material={starMaterial}></mesh>
    </group>
  );
};

export default Star;

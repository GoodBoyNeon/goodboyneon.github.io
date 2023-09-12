import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TextureLoader,
  WebGLRenderer,
} from "three";
import Star from "./Star";

const StarsScene: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new Scene();

      const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      const renderer = new WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      container.current?.appendChild(renderer.domElement);
      camera.position.setZ(30);
      camera.position.setX(-3);

      renderer.render(scene, camera);

      // Lighting
      const ambientLight = new AmbientLight(0xffffff);
      scene.add(ambientLight);

      // Stars
      const starGeometry = new BufferGeometry();
      const starsCount = 6000;

      const vertices = new Float32Array(starsCount);

      for (let i = 0; i < starsCount; i++) {
        // vertices[i] = (Math.random() - 0.5) * 100;
        vertices[i] = Math.random() * 600 - 300;
      }

      starGeometry.setAttribute("position", new BufferAttribute(vertices, 3));

      // Texture
      let starTexture = new TextureLoader().load("./public/star.png");

      // Material
      let starMaterial = new PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        map: starTexture,
      });

      const stars = new Points(starGeometry, starMaterial);
      scene.add(stars);

      // Controls
      const moveCamera = () => {
        const top = document.body.getBoundingClientRect().top;
        camera.position.set(top * -0.0002, top * -0.002, top * -0.01);
      };

      document.body.onscroll = moveCamera;
      moveCamera();

      // Animate
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    }
  }, []);
  return (
    <Canvas>
      <Environment preset="city" />
      <Star />
    </Canvas>
  );
};

export default StarsScene;

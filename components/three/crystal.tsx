"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function CrystalMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  const scrollTarget = useRef(0);
  const scrollCur = useRef(0);

  useFrame((state, dt) => {
    // map page scroll → rotation for a cinematic, scroll-linked feel
    if (typeof window !== "undefined") {
      const max = document.body.scrollHeight - window.innerHeight;
      scrollTarget.current = max > 0 ? window.scrollY / max : 0;
    }
    scrollCur.current = THREE.MathUtils.damp(
      scrollCur.current,
      scrollTarget.current,
      3,
      dt,
    );
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15 + scrollCur.current * 6;
      mesh.current.rotation.x = 0.3 + scrollCur.current * 2;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={mesh}>
        <dodecahedronGeometry args={[1.25, 0]} />
        <meshPhysicalMaterial
          transmission={1}
          thickness={1.6}
          roughness={0.04}
          ior={1.7}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0.05}
          color="#dff2ff"
          attenuationColor="#4fc3ff"
          attenuationDistance={2.2}
          specularIntensity={1}
          envMapIntensity={1.4}
          transparent
        />
      </mesh>
    </Float>
  );
}

export default function Crystal() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={40} color="#7dd6ff" />
      <pointLight position={[-5, -3, -2]} intensity={18} color="#1b6ea8" />
      <CrystalMesh />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 4, 4]} scale={[8, 8, 1]} color="#9fe0ff" />
        <Lightformer intensity={1.4} position={[-4, -2, 3]} scale={[5, 5, 1]} color="#0d2438" />
        <Lightformer intensity={2} position={[4, 1, -3]} scale={[5, 5, 1]} color="#ffffff" />
      </Environment>
      <EffectComposer>
        <Bloom intensity={1.1} luminanceThreshold={0.2} luminanceSmoothing={0.5} mipmapBlur radius={0.8} />
      </EffectComposer>
    </Canvas>
  );
}

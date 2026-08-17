"use client";

import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { LifecyclePhase } from "@/lib/lifecycle";

// visual targets per phase: shell opacity, core intensity, particle spread, dissolve
const VIS: Record<
  LifecyclePhase,
  { shell: number; core: number; spread: number; dissolve: number; ring: number }
> = {
  idle: { shell: 0.12, core: 0.15, spread: 2.4, dissolve: 0.9, ring: 0.15 },
  authenticate: { shell: 0.2, core: 0.25, spread: 1.9, dissolve: 0.7, ring: 0.3 },
  authorize: { shell: 0.32, core: 0.32, spread: 1.6, dissolve: 0.5, ring: 0.45 },
  provision: { shell: 0.5, core: 0.4, spread: 1.35, dissolve: 0.35, ring: 0.6 },
  isolate: { shell: 0.72, core: 0.55, spread: 1.05, dissolve: 0.12, ring: 0.85 },
  execute: { shell: 0.85, core: 1.0, spread: 1.0, dissolve: 0.0, ring: 1.0 },
  stream: { shell: 0.85, core: 0.85, spread: 1.0, dissolve: 0.0, ring: 1.0 },
  audit: { shell: 0.7, core: 0.5, spread: 1.02, dissolve: 0.05, ring: 0.7 },
  destroy: { shell: 0.25, core: 0.2, spread: 2.9, dissolve: 0.95, ring: 0.2 },
};

const RIM_VERT = /* glsl */ `
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * normal);
    vView = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;
const RIM_FRAG = /* glsl */ `
  varying vec3 vN;
  varying vec3 vView;
  uniform vec3 uColor;
  uniform float uPower;
  uniform float uOpacity;
  void main() {
    float f = 1.0 - abs(dot(normalize(vN), normalize(vView)));
    f = pow(f, uPower);
    gl_FragColor = vec4(uColor * f * 2.2, f * uOpacity);
  }
`;

function damp(cur: number, target: number, lambda: number, dt: number) {
  return THREE.MathUtils.damp(cur, target, lambda, dt);
}

function Scene({ phase }: { phase: LifecyclePhase }) {
  const group = useRef<THREE.Group>(null);
  const glass = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const rimMat = useRef<THREE.ShaderMaterial>(null);
  const points = useRef<THREE.Points>(null);
  const ring = useRef<THREE.Mesh>(null);
  const state = useRef({ shell: 0.12, core: 0.15, spread: 2.4, dissolve: 0.9, ring: 0.15 });

  const N = 900;
  const { basePos, dirs } = useMemo(() => {
    const basePos = new Float32Array(N * 3);
    const dirs = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      // fibonacci sphere for even shell distribution
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * 2.399963229728653;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      basePos[i * 3] = x;
      basePos[i * 3 + 1] = y;
      basePos[i * 3 + 2] = z;
      dirs[i * 3] = x;
      dirs[i * 3 + 1] = y;
      dirs[i * 3 + 2] = z;
    }
    return { basePos, dirs };
  }, []);

  const posAttr = useMemo(() => new Float32Array(basePos), [basePos]);

  useFrame((st, dt) => {
    const t = VIS[phase];
    const s = state.current;
    const l = 2.2;
    s.shell = damp(s.shell, t.shell, l, dt);
    s.core = damp(s.core, t.core, l, dt);
    s.spread = damp(s.spread, t.spread, l, dt);
    s.dissolve = damp(s.dissolve, t.dissolve, l, dt);
    s.ring = damp(s.ring, t.ring, l, dt);

    if (group.current) {
      group.current.rotation.y += dt * 0.12;
      group.current.rotation.x = Math.sin(st.clock.elapsedTime * 0.15) * 0.08;
    }
    if (glass.current) {
      const m = glass.current.material as THREE.MeshPhysicalMaterial;
      m.opacity = s.shell;
      m.emissiveIntensity = s.core * 0.25;
      const sc = 1 + (1 - s.shell) * 0.05;
      glass.current.scale.setScalar(sc);
    }
    if (core.current) {
      const m = core.current.material as THREE.MeshBasicMaterial;
      m.opacity = s.core;
      const pulse = 1 + Math.sin(st.clock.elapsedTime * 3) * 0.06 * s.core;
      core.current.scale.setScalar((0.34 + s.core * 0.12) * pulse);
    }
    if (rimMat.current) {
      rimMat.current.uniforms.uOpacity.value = 0.35 + s.ring * 0.65;
    }
    if (ring.current) {
      ring.current.rotation.z += dt * 0.5;
      (ring.current.material as THREE.MeshBasicMaterial).opacity = s.ring * 0.5;
      ring.current.scale.setScalar(1);
    }
    if (points.current) {
      const arr = (points.current.geometry.getAttribute("position") as THREE.BufferAttribute)
        .array as Float32Array;
      const spread = s.spread;
      const wob = st.clock.elapsedTime;
      for (let i = 0; i < N; i++) {
        const bx = basePos[i * 3];
        const by = basePos[i * 3 + 1];
        const bz = basePos[i * 3 + 2];
        const rad = 1.18 * spread + Math.sin(wob + i) * 0.02;
        arr[i * 3] = dirs[i * 3] * rad + bx * 0.0;
        arr[i * 3 + 1] = dirs[i * 3 + 1] * rad;
        arr[i * 3 + 2] = dirs[i * 3 + 2] * rad;
      }
      points.current.geometry.getAttribute("position").needsUpdate = true;
      const pm = points.current.material as THREE.PointsMaterial;
      pm.opacity = THREE.MathUtils.clamp(1 - s.dissolve, 0.08, 0.9);
    }
  });

  const rimUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#4fc3ff") },
      uPower: { value: 2.6 },
      uOpacity: { value: 0.6 },
    }),
    [],
  );

  return (
    <group ref={group}>
      {/* glass shell */}
      <mesh ref={glass}>
        <icosahedronGeometry args={[1.15, 6]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.4}
          roughness={0.12}
          metalness={0}
          transmission={0.9}
          thickness={1.2}
          ior={1.3}
          color="#0c1420"
          emissive="#0a2740"
          emissiveIntensity={0.2}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>

      {/* fresnel rim */}
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.15, 5]} />
        <shaderMaterial
          ref={rimMat}
          vertexShader={RIM_VERT}
          fragmentShader={RIM_FRAG}
          uniforms={rimUniforms}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* emissive core */}
      <mesh ref={core}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#8fe3ff" transparent opacity={0.6} />
      </mesh>

      {/* orbital data ring */}
      <mesh ref={ring} rotation={[Math.PI / 2.3, 0.3, 0]}>
        <torusGeometry args={[1.55, 0.006, 8, 128]} />
        <meshBasicMaterial color="#4fc3ff" transparent opacity={0.4} />
      </mesh>

      {/* particle shell */}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[posAttr, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color="#bfeaff"
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <ambientLight intensity={0.35} />
      <pointLight position={[3, 2, 4]} intensity={30} color="#4fc3ff" />
      <pointLight position={[-4, -2, -3]} intensity={12} color="#2a6ea8" />

      <Environment resolution={128}>
        <Lightformer intensity={2} position={[0, 3, 3]} scale={[6, 6, 1]} color="#6fd0ff" />
        <Lightformer intensity={1.2} position={[-3, -1, 2]} scale={[4, 4, 1]} color="#183048" />
      </Environment>
    </group>
  );
}

export default function RuntimeOrb({ phase }: { phase: LifecyclePhase }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene phase={phase} />
      <EffectComposer>
        <Bloom
          intensity={1.15}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.4}
          mipmapBlur
          radius={0.75}
        />
      </EffectComposer>
    </Canvas>
  );
}

// silence unused import in some TS configs
export type _E = ThreeElements;

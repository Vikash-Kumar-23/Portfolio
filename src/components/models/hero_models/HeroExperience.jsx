import { useRef, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

function FloatingRoom({ isMobile }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating/breathing idle motion
      groupRef.current.position.y = -3.5 + Math.sin(t * 1.2) * 0.12;
      // Smooth 3D mouse-tracking tilt
      const targetRotY = -Math.PI / 4 + Math.sin(t * 0.5) * 0.04 + state.pointer.x * 0.2;
      const targetRotX = -state.pointer.y * 0.1;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.7 : 1}
      position={[0, -3.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    >
      <Room />
    </group>
  );
}

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        enableDamping={true}
        dampingFactor={0.05}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <FloatingRoom isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;

import { Float, Image, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const TechIconImageCard = ({ icon }) => {
  const scale = icon.scale || 3.5;
  const rotation = icon.rotation || [0, 0, 0];
  const position = icon.position || [0, 0, 0];

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <Image
          url={icon.imgPath}
          scale={[scale, scale, 1]}
          position={position}
          rotation={rotation}
          transparent
        />
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconImageCard;

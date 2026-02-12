import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const Sphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(TextureLoader, "/textures/space.jpg");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.5;
      sphereRef.current.scale.setScalar(1 + Math.sin(t) * 0.1);
    }
  });

  return (
    <group>
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 80, 80]} />
        <meshStandardMaterial
          map={texture}
          emissiveIntensity={15}
          transparent
          opacity={1}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

    </group>
  );
};

export default Sphere;

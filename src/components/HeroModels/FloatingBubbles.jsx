import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingBubbles = ({ count = 50 }) => {
  const group = useRef();

  const bubbles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          Math.random() * 15 - 5,
          (Math.random() - 0.5) * 20,
        ],
        scale: 0.2 + Math.random() * 0.5,
        speed: 0.002 + Math.random() * 0.003,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    bubbles.forEach((bubble, i) => {
      const mesh = group.current.children[i];
      if (mesh) {
        // Floating animation
        mesh.position.y += bubble.speed;
        mesh.rotation.y += bubble.rotationSpeed;
        
        // Reset when bubble goes too high
        if (mesh.position.y > 10) {
          mesh.position.y = -10;
          mesh.position.x = (Math.random() - 0.5) * 20;
          mesh.position.z = (Math.random() - 0.5) * 20;
        }
      }
    });
  });

  return (
    <group ref={group}>
      {bubbles.map((bubble, i) => (
        <mesh key={i} position={bubble.position} scale={bubble.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingBubbles;

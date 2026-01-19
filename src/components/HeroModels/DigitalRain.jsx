import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const DigitalRain = ({ count = 100 }) => {
  const group = useRef();

  const drops = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 30,
          Math.random() * 20 - 10,
          (Math.random() - 0.5) * 30,
        ],
        speed: 0.02 + Math.random() * 0.03,
        length: 2 + Math.random() * 8,
        opacity: 0.3 + Math.random() * 0.7,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    drops.forEach((drop, i) => {
      const mesh = group.current.children[i];
      if (mesh) {
        // Falling animation
        mesh.position.y -= drop.speed;
        
        // Reset when drop goes too low
        if (mesh.position.y < -15) {
          mesh.position.y = 15;
          mesh.position.x = (Math.random() - 0.5) * 30;
          mesh.position.z = (Math.random() - 0.5) * 30;
        }
      }
    });
  });

  return (
    <group ref={group}>
      {drops.map((drop, i) => (
        <mesh key={i} position={drop.position}>
          <boxGeometry args={[0.1, drop.length, 0.1]} />
          <meshStandardMaterial
            color="#00ff41"
            transparent
            opacity={drop.opacity}
            emissive="#00ff41"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

export default DigitalRain;

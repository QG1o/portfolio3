import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const EnergyOrbs = ({ count = 30 }) => {
  const group = useRef();

  const orbs = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 25,
        ],
        scale: 0.2 + Math.random() * 0.4,
        speed: 0.01 + Math.random() * 0.02,
        pulseSpeed: 0.05 + Math.random() * 0.05,
        color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6),
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    orbs.forEach((orb, i) => {
      const mesh = group.current.children[i];
      if (mesh) {
        // Orbital movement
        const time = state.clock.elapsedTime;
        const radius = 3 + Math.sin(time * 0.5 + i) * 2;
        const angle = time * orb.speed + i * 0.5;
        
        mesh.position.x = Math.cos(angle) * radius;
        mesh.position.z = Math.sin(angle) * radius;
        mesh.position.y = Math.sin(time * 0.3 + i) * 3;
        
        // Pulsing effect
        const pulse = 1 + Math.sin(time * orb.pulseSpeed) * 0.3;
        mesh.scale.setScalar(orb.scale * pulse);
        
        // Color animation
        const material = mesh.material;
        material.color.setHSL(
          (time * 0.1 + i * 0.1) % 1,
          0.8,
          0.6
        );
      }
    });
  });

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={orb.color}
            transparent
            opacity={0.7}
            emissive={orb.color}
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

export default EnergyOrbs;

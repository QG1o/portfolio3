import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function GitLogo(props) {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.006;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null}>
            {/* Git Branch - Main Branch */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.2} />
            </mesh>

            {/* Git Branch - Horizontal Branch */}
            <mesh position={[0, 0.3, 0]} castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.2} />
            </mesh>

            {/* Git Branch - Vertical Branch */}
            <mesh position={[0.4, 0.3, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.2} />
            </mesh>

            {/* Git Branch - Diagonal Branch */}
            <mesh position={[-0.4, 0.3, 0]} castShadow receiveShadow rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.2} />
            </mesh>

            {/* Git Branch Points - Top */}
            <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.3} />
            </mesh>

            {/* Git Branch Points - Right */}
            <mesh position={[0.4, 0.6, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.3} />
            </mesh>

            {/* Git Branch Points - Left */}
            <mesh position={[-0.4, 0.6, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.3} />
            </mesh>

            {/* Git Branch Points - Bottom */}
            <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.3} />
            </mesh>

            {/* Git Center Node */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial color="#F05032" emissive="#F05032" emissiveIntensity={0.4} />
            </mesh>
        </group>
    );
}

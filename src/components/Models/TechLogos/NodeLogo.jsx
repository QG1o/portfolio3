import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function NodeLogo(props) {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.008;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null}>
            {/* Node.js Hexagon Base */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.6, 0.6, 0.1, 6]} />
                <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.2} />
            </mesh>

            {/* Node.js Hexagon Top */}
            <mesh position={[0, 0, 0.05]} castShadow receiveShadow>
                <cylinderGeometry args={[0.5, 0.5, 0.1, 6]} />
                <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.2} />
            </mesh>

            {/* Node.js Hexagon Bottom */}
            <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
                <cylinderGeometry args={[0.5, 0.5, 0.1, 6]} />
                <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.2} />
            </mesh>

            {/* Node.js Inner Circle */}
            <mesh position={[0, 0, 0.1]} castShadow receiveShadow>
                <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.1} />
            </mesh>

            {/* Node.js Inner Circle Bottom */}
            <mesh position={[0, 0, -0.1]} castShadow receiveShadow>
                <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.1} />
            </mesh>

            {/* Node.js Center Dot */}
            <mesh position={[0, 0, 0.15]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.3} />
            </mesh>

            {/* Node.js Center Dot Bottom */}
            <mesh position={[0, 0, -0.15]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.3} />
            </mesh>
        </group>
    );
}

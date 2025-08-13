import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function PythonLogo(props) {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null}>
            {/* Python Snake Body */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.2, 0.2, 1.5, 8]} />
                <meshStandardMaterial color="#3776AB" emissive="#3776AB" emissiveIntensity={0.1} />
            </mesh>

            {/* Python Snake Head */}
            <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial color="#3776AB" emissive="#3776AB" emissiveIntensity={0.1} />
            </mesh>

            {/* Python Snake Tail */}
            <mesh position={[0, -0.8, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.15, 0.05, 0.6, 8]} />
                <meshStandardMaterial color="#3776AB" emissive="#3776AB" emissiveIntensity={0.1} />
            </mesh>

            {/* Python Eyes */}
            <mesh position={[0.1, 0.9, 0.15]} castShadow receiveShadow>
                <sphereGeometry args={[0.03, 8, 8]} />
                <meshStandardMaterial color="#FFD43B" emissive="#FFD43B" emissiveIntensity={0.3} />
            </mesh>

            <mesh position={[-0.1, 0.9, 0.15]} castShadow receiveShadow>
                <sphereGeometry args={[0.03, 8, 8]} />
                <meshStandardMaterial color="#FFD43B" emissive="#FFD43B" emissiveIntensity={0.3} />
            </mesh>

            {/* Python Pattern - Spots */}
            <mesh position={[0.15, 0.2, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#FFD43B" emissive="#FFD43B" emissiveIntensity={0.2} />
            </mesh>

            <mesh position={[-0.15, -0.2, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#FFD43B" emissive="#FFD43B" emissiveIntensity={0.2} />
            </mesh>
        </group>
    );
}

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ThreeLogo(props) {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null}>
            {/* Three.js Cube */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#000000" emissive="#000000" emissiveIntensity={0.1} />
            </mesh>

            {/* Three.js Cube Wireframe Edges */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.1, 1.1, 1.1]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} wireframe={true} />
            </mesh>

            {/* Three.js Inner Cube */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.3} />
            </mesh>

            {/* Three.js Corner Spheres */}
            <mesh position={[0.5, 0.5, 0.5]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[-0.5, 0.5, 0.5]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[0.5, -0.5, 0.5]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[-0.5, -0.5, 0.5]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[0.5, 0.5, -0.5]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[-0.5, 0.5, -0.5]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[0.5, -0.5, -0.5]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[-0.5, -0.5, -0.5]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

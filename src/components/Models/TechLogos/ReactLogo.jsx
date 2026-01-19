import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

export default function ReactLogo(props) {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null}>
            {/* React Atom - Central Sphere */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.2} />
            </mesh>

            {/* Electron Orbit 1 */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <torusGeometry args={[0.8, 0.05, 16, 32]} />
                <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} />
            </mesh>

            {/* Electron Orbit 2 */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[0.8, 0.05, 16, 32]} />
                <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} />
            </mesh>

            {/* Electron Orbit 3 */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow rotation={[-Math.PI / 3, 0, 0]}>
                <torusGeometry args={[0.8, 0.05, 16, 32]} />
                <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.3} />
            </mesh>

            {/* Electrons */}
            <mesh position={[0.8, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[-0.4, 0.69, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.5} />
            </mesh>

            <mesh position={[-0.4, -0.69, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

// components/Models/Computer-optimized.jsx
import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export function Computer(props) {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null} scale={[1.5, 1.5, 1.5]}>
            {/* Monitor */}
            <mesh position={[0, 1, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.4, 1.6, 0.2]} />
                <meshStandardMaterial color="#2a2a2a" />
            </mesh>
            
            {/* Monitor Stand */}
            <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.2, 0.8, 0.2]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
            
            {/* Monitor Base */}
            <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.6, 0.1, 0.4]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
            
            {/* Screen */}
            <mesh position={[0, 1, 0.12]} castShadow receiveShadow>
                <boxGeometry args={[2.2, 1.4, 0.02]} />
                <meshStandardMaterial color="#0066ff" emissive="#0066ff" emissiveIntensity={0.5} />
            </mesh>
            
            {/* Keyboard */}
            <mesh position={[0, -0.6, 0.6]} castShadow receiveShadow>
                <boxGeometry args={[1.6, 0.1, 0.5]} />
                <meshStandardMaterial color="#333333" />
            </mesh>
            
            {/* Mouse */}
            <mesh position={[0.8, -0.6, 0.6]} castShadow receiveShadow>
                <boxGeometry args={[0.3, 0.1, 0.4]} />
                <meshStandardMaterial color="#444444" />
            </mesh>
            
            {/* Computer Tower */}
            <mesh position={[-1.6, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.4, 1.6, 0.8]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
            
            {/* Tower Details */}
            <mesh position={[-1.6, 0.4, 0.42]} castShadow receiveShadow>
                <boxGeometry args={[0.36, 0.2, 0.02]} />
                <meshStandardMaterial color="#0066ff" emissive="#0066ff" emissiveIntensity={0.4} />
            </mesh>
            
            {/* Additional Tower LEDs */}
            <mesh position={[-1.6, 0.2, 0.42]} castShadow receiveShadow>
                <boxGeometry args={[0.36, 0.1, 0.02]} />
                <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.3} />
            </mesh>
            
            <mesh position={[-1.6, 0, 0.42]} castShadow receiveShadow>
                <boxGeometry args={[0.36, 0.1, 0.02]} />
                <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.3} />
            </mesh>
            
            {/* Desk */}
            <mesh position={[0, -1, 0]} castShadow receiveShadow>
                <boxGeometry args={[5, 0.2, 2]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            
            {/* Desk Legs */}
            <mesh position={[-2, -1.5, -0.8]} castShadow receiveShadow>
                <boxGeometry args={[0.1, 1, 0.1]} />
                <meshStandardMaterial color="#654321" />
            </mesh>
            <mesh position={[2, -1.5, -0.8]} castShadow receiveShadow>
                <boxGeometry args={[0.1, 1, 0.1]} />
                <meshStandardMaterial color="#654321" />
            </mesh>
            <mesh position={[-2, -1.5, 0.8]} castShadow receiveShadow>
                <boxGeometry args={[0.1, 1, 0.1]} />
                <meshStandardMaterial color="#654321" />
            </mesh>
            <mesh position={[2, -1.5, 0.8]} castShadow receiveShadow>
                <boxGeometry args={[0.1, 1, 0.1]} />
                <meshStandardMaterial color="#654321" />
            </mesh>
        </group>
    );
}
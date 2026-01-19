// ContactExperience.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Computer } from './Models/Computer-optimized';

const ContactExperience = () => {
    return (
        <Canvas camera={{position: [0, 3, 7], fov: 45}} shadows>
            <ambientLight intensity={0.5} color="#fff436" />
            <directionalLight
                position={[5, 5, 3]}
                intensity={2.5}
                color="#ffd9b3"
            />
            <directionalLight
                position={[5, 9, 1]}
                castShadow
                intensity={2.5}
                color="#ffd9b3"
            />

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2} // ✅ Typo korrigiert
            />

            <group position={[0, -1.5, -2]} castShadow>
                <Computer />
            </group>

            {/* Floor */}
            <mesh
                receiveShadow
                position={[0, -1.5, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#a46b2d" />
            </mesh>
        </Canvas>
    );
};

export default ContactExperience;
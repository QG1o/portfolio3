import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function GitLogo(props) {
    const groupRef = useRef();
    const texture = useLoader(TextureLoader, "/images/logos/git.svg");

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null}>
            {/* Official Git Logo on 3D Plane */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <planeGeometry args={[2, 2]} />
                <meshStandardMaterial
                    map={texture}
                    transparent={true}
                    opacity={1}
                    roughness={0.3}
                    metalness={0.2}
                />
            </mesh>
        </group>
    );
}

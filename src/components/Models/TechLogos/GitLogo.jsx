import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

/**
 * Render a rotating 3D plane displaying the official Git logo.
 *
 * The component mounts a group whose Y rotation is incremented every frame and renders a 2x2 plane
 * textured with "/images/logos/git.svg".
 *
 * @param {object} props - Props spread onto the root `<group>` element (e.g., position, scale, rotation).
 * @returns {JSX.Element} A React Three Fiber group containing a rotating textured plane mesh.
 */
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
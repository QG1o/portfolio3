import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

/**
 * Render a rotating 3D plane textured with the official Node.js logo.
 *
 * Loads the Node.js SVG texture, maps it onto a 2x2 plane mesh, and increments the group's
 * Y-axis rotation on each frame.
 *
 * @param {object} props - Props forwarded to the parent <group> element.
 * @returns {JSX.Element} A group containing the textured plane mesh for the Node.js logo.
 */
export default function NodeLogo(props) {
    const groupRef = useRef();
    const texture = useLoader(TextureLoader, "/images/logos/node.svg");

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null}>
            {/* Official Node.js Logo on 3D Plane */}
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
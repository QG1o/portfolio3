import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

/**
 * Renders a 3D group containing a plane textured with the official Python logo that continuously rotates around the Y axis.
 *
 * @param {object} props - Props forwarded to the root <group> element.
 * @returns {JSX.Element} A group with a 2x2 plane mesh using the loaded Python logo texture; the group rotates over time.
 */
export default function PythonLogo(props) {
    const groupRef = useRef();
    const texture = useLoader(TextureLoader, "/images/logos/python.svg");

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group {...props} ref={groupRef} dispose={null}>
            {/* Official Python Logo on 3D Plane */}
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
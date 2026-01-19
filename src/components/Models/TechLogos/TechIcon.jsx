import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import ReactLogo from "./ReactLogo";
import PythonLogo from "./PythonLogo";
import NodeLogo from "./NodeLogo";
import ThreeLogo from "./ThreeLogo";
import GitLogo from "./GitLogo";

export default function TechIcon({ name, scale = 1, rotation = [0, 0, 0], ...props }) {
    const logoComponents = {
        "React": ReactLogo,
        "Python": PythonLogo,
        "Node.js": NodeLogo,
        "Three.js": ThreeLogo,
        "Git": GitLogo,
    };

    const LogoComponent = logoComponents[name];

    if (!LogoComponent) {
        console.warn(`No logo component found for: ${name}`);
        return null;
    }

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={scale} rotation={rotation}>
                    <LogoComponent {...props} />
                </group>
            </Float>
        </Canvas>
    );
}

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import FloatingBubbles from './FloatingBubbles';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px '});



    return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 45 }}
    >
        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.8}
            target={[0, 0, 0]}
        />
        
      <HeroLights />

      <FloatingBubbles count={50} />


        <group
        scale={isMobile? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI /4, 0]}
        >

        </group>
        <Room />
    </ Canvas>
  )
}

export default HeroExperience;

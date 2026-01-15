import { Canvas } from '@react-three/fiber';
import HeroLights from './HeroLights';
import FloatingBubbles from './FloatingBubbles';

const HeroExperience = () => {
    return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
    >
      <HeroLights />

      <FloatingBubbles count={50} />

    </ Canvas>
  )
}

export default HeroExperience;

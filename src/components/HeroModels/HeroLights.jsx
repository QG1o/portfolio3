import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
      <spotLight 
      position={[2, 5, 6]} 
      intensity={20} 
      angle={0.8}
      penumbra={0.2}
      color="white"      
      />
      
      <spotLight 
      position={[4, 5, 6]} 
      intensity={100} 
      angle={0.2}
      penumbra={0.5}
      color="#4cc9f0"      
      />
      
      <spotLight 
      position={[2, 5, 6]} 
      intensity={100} 
      angle={0.2}
      penumbra={0.2}
      color="#9d4edd"      
      />
      
      <spotLight 
      position={[2, 5, 6]} 
      intensity={100} 
      angle={0.3}
      penumbra={0.2}
      color="#4cc9f0"      
      />

    <primitive
      object={new THREE.RectAreaLight('#9d4edd', 8, 3, 2)}
      position={[1, 1, 4]}
      intensity={15}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />


      <pointLight 
        position={[0, 1, 0]}
        intensity={10}
        color="#7209b7"
      />
      
      <pointLight 
        position={[1, 2, -2]}
        intensity={10}
        color="#0917b7ff"
      />

    </>
  );
};

export default HeroLights;

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const BMWM6 = ({ isMobile }) => {
  const car = useGLTF("./bmw_m6_rigged/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={50} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={50} />
      <primitive
        object={car.scene}
        scale={isMobile ? 1 : 2}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      />
    </mesh>
  );
};

const Bmwm6Canvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // Set the isMobile state based on the media query
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes in media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // remove the listener when component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      style={{width: '100vh', height: '30vh'}}
    >
      <ambientLight color="#ffffff" intensity={0.1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <BMWM6 isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Bmwm6Canvas;

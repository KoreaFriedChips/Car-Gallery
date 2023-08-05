//mercedes-benz_brabus_g900
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const MBG900 = ({ isMobile }) => {
  const car = useGLTF("./mercedes-benz-g900/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={50}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={50} />
      <primitive
        object={car.scene}
        scale={isMobile ? 1 : 3}
        position={isMobile ? [0, -3, -2.2] : [0, -3.0, -1.5]}
      />
    </mesh>
  );
};

const MBG900Canvas = () => {
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
      frameloop="demand"
      shadows={true}
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{width: '100vh', height: '40vh'}}
    >
      <ambientLight color="#ffffff" intensity={0.1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={true}
          maxPolarAngle={Math.PI / 1.1 }
          minPolarAngle={Math.PI / 3}
        />
        <MBG900 isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MBG900Canvas;

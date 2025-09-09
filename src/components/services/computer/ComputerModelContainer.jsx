import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage, Loader } from "@react-three/drei";

export const ComputerModelContainer = () => {
  return (
    <>
      <Canvas
        camera={{ position: [-1, 0, 1.8], zoom: 0.8 }}
        style={{ height: "100%", width: "100%" }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Stage 
            environment="night" 
            intensity={0.3}
            shadows={{
              type: 'contact',
              opacity: 0.4,
              blur: 3
            }}
          >
            <ComputerModel />
          </Stage>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

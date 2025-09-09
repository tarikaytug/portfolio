import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/computerModel.glb");
  
  const meshes = useMemo(() => {
    if (!nodes || !materials) return null;
    
    return (
      <group {...props} dispose={null}>
        <group position={[0.121, 0.007, 0]}>
          {nodes.Object_6 && (
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.MacBookPro}
              castShadow
              receiveShadow
            />
          )}
          {nodes.Object_8 && (
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.MacBookPro}
              castShadow
              receiveShadow
            />
          )}
        </group>
        {nodes.Object_4 && (
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.MacBookPro}
            castShadow
            receiveShadow
          />
        )}
      </group>
    );
  }, [nodes, materials, props]);

  return meshes;
}

useGLTF.preload("/computerModel.glb");

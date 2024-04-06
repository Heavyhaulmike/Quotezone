"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/excavator_cat.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-1.692, 0, 0]} scale={[-1, 1, 1]}>
          <mesh
            geometry={
              nodes.poclaintire1_pCylinder26_poclainaiStandardSurface139_0
                .geometry
            }
            material={materials.poclainaiStandardSurface139}
          />
          <mesh
            geometry={
              nodes.poclaintire1_pCylinder26_poclainaiStandardSurface139_0_1
                .geometry
            }
            material={materials.poclainaiStandardSurface139}
          />
        </group>
        <mesh
          geometry={
            nodes.poclainpolySurface828_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface829_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface830_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclaintire1_pCylinder25_poclainaiStandardSurface152_0
              .geometry
          }
          material={materials.poclainaiStandardSurface152}
        />
        <mesh
          geometry={
            nodes.poclaintire1_pCylinder25_poclainaiStandardSurface152_0_1
              .geometry
          }
          material={materials.poclainaiStandardSurface152}
        />
        <group position={[-0.15, -2.831, -2.728]} scale={0.499}>
          <mesh
            geometry={
              nodes.poclainpolySurface785_poclainaiStandardSurface153_0.geometry
            }
            material={materials.poclainaiStandardSurface153}
          />
          <mesh
            geometry={
              nodes.poclainpolySurface785_poclainaiStandardSurface146_0.geometry
            }
            material={materials.poclainaiStandardSurface146}
          />
        </group>
        <mesh
          geometry={nodes.poclainpPlane1_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0, -0.822, -1.744]}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder113_poclainaiStandardSurface38_0.geometry
          }
          material={materials.poclainaiStandardSurface38}
          position={[-0.127, -1.619, -2.806]}
          rotation={[0.063, 0, 0]}
          scale={[-0.421, 0.421, 0.421]}
        />
        <mesh
          geometry={nodes.poclainpCube97_poclainaiStandardSurface143_0.geometry}
          material={materials.poclainaiStandardSurface143}
        />
        <mesh
          geometry={nodes.poclainpCube1_poclainaiStandardSurface136_0.geometry}
          material={materials.poclainaiStandardSurface136}
          position={[0, 0, -1.33]}
          scale={[1.451, 1, 1]}
        />
        <mesh
          geometry={nodes.poclainpCube20_poclainaiStandardSurface151_0.geometry}
          material={materials.poclainaiStandardSurface151}
          position={[0.29, -0.042, -4.526]}
          scale={[0.207, 0.567, 1.267]}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface827_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface826_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface825_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface824_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface823_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface822_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface821_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface786_poclainaiStandardSurface154_0.geometry
          }
          material={materials.poclainaiStandardSurface154}
        />
        <mesh
          geometry={nodes.poclainpCube92_poclainlambert2_0.geometry}
          material={materials.poclainlambert2}
          position={[0, 0, -1.33]}
          scale={[1.388, 1, 0.956]}
        />
        <mesh
          geometry={nodes.poclainpCube93_poclainaiStandardSurface130_0.geometry}
          material={materials.poclainaiStandardSurface130}
        />
        <mesh
          geometry={nodes.poclainpCube96_poclainaiStandardSurface137_0.geometry}
          material={materials.poclainaiStandardSurface137}
          position={[0, -0.003, -0.019]}
          scale={0.986}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder111_poclainaiStandardSurface38_0.geometry
          }
          material={materials.poclainaiStandardSurface38}
          position={[0.157, -2.183, -2.835]}
          rotation={[0.063, 0, 0]}
          scale={0.421}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder112_poclainaiStandardSurface38_0.geometry
          }
          material={materials.poclainaiStandardSurface38}
          position={[-0.127, -2.183, -2.835]}
          rotation={[0.063, 0, 0]}
          scale={[-0.421, 0.421, 0.421]}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder109_poclainaiStandardSurface38_0.geometry
          }
          material={materials.poclainaiStandardSurface38}
          position={[0.157, -1.619, -2.806]}
          rotation={[0.063, 0, 0]}
          scale={0.421}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder16_poclainaiStandardSurface149_0.geometry
          }
          material={materials.poclainaiStandardSurface149}
          position={[-0.847, -1.369, -1.769]}
          scale={[0.83, 0.092, 0.83]}
        />
        <mesh
          geometry={nodes.poclainpCube5_poclainaiStandardSurface124_0.geometry}
          material={materials.poclainaiStandardSurface124}
          position={[-1.215, 1.638, 2.796]}
          scale={[0.483, 1, 1]}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface817_poclainaiStandardSurface144_0.geometry
          }
          material={materials.poclainaiStandardSurface144}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface818_poclainaiStandardSurface144_0.geometry
          }
          material={materials.poclainaiStandardSurface144}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface814_poclainaiStandardSurface145_0.geometry
          }
          material={materials.poclainaiStandardSurface145}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface813_poclainaiStandardSurface145_0.geometry
          }
          material={materials.poclainaiStandardSurface145}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface819_poclainaiStandardSurface144_0.geometry
          }
          material={materials.poclainaiStandardSurface144}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface815_poclainaiStandardSurface145_0.geometry
          }
          material={materials.poclainaiStandardSurface145}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface812_poclainaiStandardSurface147_0.geometry
          }
          material={materials.poclainaiStandardSurface147}
          position={[0.969, -0.356, -0.862]}
          scale={[1.804, 1, 1]}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder13_poclainaiStandardSurface123_0.geometry
          }
          material={materials.poclainaiStandardSurface123}
          position={[-1.205, 1.451, 0.554]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.171, 0.389, 0.171]}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder114_poclainaiStandardSurface123_0.geometry
          }
          material={materials.poclainaiStandardSurface123}
          position={[-1.223, 1.451, 0.554]}
          rotation={[-2.176, 0, Math.PI / 2]}
          scale={[0.171, 0.389, 0.171]}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface795_poclainaiStandardSurface147_0.geometry
          }
          material={materials.poclainaiStandardSurface147}
        />
        <mesh
          geometry={nodes.poclainpolySurface795_Default_Material_0.geometry}
          material={materials.Default_Material}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder115_poclainaiStandardSurface142_0.geometry
          }
          material={materials.poclainaiStandardSurface142}
          position={[3.433, 0, 0]}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder116_poclainaiStandardSurface142_0.geometry
          }
          material={materials.poclainaiStandardSurface142}
          position={[3.161, 0, -0.006]}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface834_poclainaiStandardSurface127_0.geometry
          }
          material={materials.poclainaiStandardSurface127}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface820_poclainaiStandardSurface144_0.geometry
          }
          material={materials.poclainaiStandardSurface144}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder118_poclainaiStandardSurface142_0.geometry
          }
          material={materials.poclainaiStandardSurface142}
          position={[-2.066, 0.007, 3.512]}
          scale={[-1, 1, 1]}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder117_poclainaiStandardSurface142_0.geometry
          }
          material={materials.poclainaiStandardSurface142}
          position={[-0.327, 0.007, 3.512]}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface816_poclainaiStandardSurface145_0.geometry
          }
          material={materials.poclainaiStandardSurface145}
        />
        <mesh
          geometry={
            nodes.poclainpCylinder119_poclainaiStandardSurface150_0.geometry
          }
          material={materials.poclainaiStandardSurface150}
          position={[0, -0.019, 0]}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface832_poclainaiStandardSurface127_0.geometry
          }
          material={materials.poclainaiStandardSurface127}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface833_poclainaiStandardSurface127_0.geometry
          }
          material={materials.poclainaiStandardSurface127}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface798_poclainaiStandardSurface147_0.geometry
          }
          material={materials.poclainaiStandardSurface147}
        />
        <mesh
          geometry={nodes.poclainpolySurface798_Default_Material_0.geometry}
          material={materials.Default_Material}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface800_poclainaiStandardSurface147_0.geometry
          }
          material={materials.poclainaiStandardSurface147}
        />
        <mesh
          geometry={nodes.poclainpolySurface800_Default_Material_0.geometry}
          material={materials.Default_Material}
        />
        <mesh
          geometry={nodes.poclainpCube14_poclainaiStandardSurface141_0.geometry}
          material={materials.poclainaiStandardSurface141}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface831_poclainaiStandardSurface129_0.geometry
          }
          material={materials.poclainaiStandardSurface129}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface799_poclainaiStandardSurface147_0.geometry
          }
          material={materials.poclainaiStandardSurface147}
        />
        <mesh
          geometry={nodes.poclainpolySurface799_Default_Material_0.geometry}
          material={materials.Default_Material}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface797_poclainaiStandardSurface147_0.geometry
          }
          material={materials.poclainaiStandardSurface147}
        />
        <mesh
          geometry={nodes.poclainpolySurface797_Default_Material_0.geometry}
          material={materials.Default_Material}
        />
        <mesh
          geometry={
            nodes.poclainpolySurface796_poclainaiStandardSurface147_0.geometry
          }
          material={materials.poclainaiStandardSurface147}
        />
        <mesh
          geometry={nodes.poclainpolySurface796_Default_Material_0.geometry}
          material={materials.Default_Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/excavator_cat.glb");

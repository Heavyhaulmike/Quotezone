"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stage } from "@react-three/drei";
import { Model as Truck } from "./3d/Truck";
import Loader from "./Loader";
import Form from "./Form";

export default function Scene() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2 w-full ">
        <Canvas>
          {/* <ambientLight />
          <pointLight position={[10, 10, 10]} /> */}
          <color attach="background" args={["#f0f0f0"]} />
          <Suspense fallback={<Loader />}>
            <Environment preset="sunset" />
            <Stage>
              <Truck />
            </Stage>
          </Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      <Form />
    </div>
  );
}

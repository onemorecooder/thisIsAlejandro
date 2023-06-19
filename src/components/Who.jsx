import { Canvas } from "@react-three/fiber";
import React from "react";
import { HiMinusSmall } from "react-icons/hi2";
import Blob from "./Blob/Blob";
/* import Spline from "@splinetool/react-spline"; */

const Who = () => {
  return (
    <div className="h-screen snap-center flex justify-center">
      <div className="h-full w-3/4 flex flex-col sm:flex-row justify-between">
        {/* lado izquierdo */}
        <div className="flex-1 order-last sm:order-first">
          {/* Contenido lado izquierdo */}
          {/* <Spline scene="https://prod.spline.design/9dTjW8kozdkmv1jo/scene.splinecode" /> */}
          <Canvas
            className="-mt-8 sm:mt-0 "
            camera={{ position: [0.0, 0.0, 8.0] }}
          >
            <Blob />
          </Canvas>
        </div>

        {/* lado derecho */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          <p className="font-extrabold text-5xl">Yes, that's me.</p>
          <div className="flex items-center">
            <HiMinusSmall className="text-6xl" />
            <p className="font-extrabold text-2xl text-gray-900">What I love</p>
          </div>
          <p className="font-light text-gray-200 text-2xl">
            I love creating websites, writing, drawing and 3D modeling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;

import React from "react";
import { HiMinusSmall } from "react-icons/hi2";
import Spline from "@splinetool/react-spline";

const Who = () => {
  return (
    <div className="h-screen snap-center flex justify-center">
      <div className="sm:h-screen h-fit w-3/4 flex flex-col sm:flex-row justify-between">
        {/* lado izquierdo */}
        <div className="sm:flex-1 order-last sm:order-first">
          {/* Contenido lado izquierdo */}
          <Spline scene="https://prod.spline.design/9dTjW8kozdkmv1jo/scene.splinecode" />
        </div>

        {/* lado derecho */}
        <div className="sm:flex-1 flex flex-col justify-center gap-2 sm:h-screen h-fit mt-20 sm:mt-0">
          <p className="font-extrabold text-4xl sm:text-8xl">Yes, that's me.</p>
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

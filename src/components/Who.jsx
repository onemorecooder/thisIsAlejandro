import React from "react";
import { HiMinusSmall } from "react-icons/hi2";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Who = () => {
  return (
    <div className="h-screen snap-center flex justify-center">
      <div className="h-screen w-3/4 flex justify-between">
        {/* lado izquierdo */}
        <div className="flex-1">
          {/* Contenido lado izquierdo */}
          <Spline scene="https://prod.spline.design/9dTjW8kozdkmv1jo/scene.splinecode" />
        </div>

        {/* lado derecho */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          <p className="font-extrabold text-8xl">Yes, that's me.</p>
          <div className="flex items-center">
            <HiMinusSmall className="text-6xl" />
            <p className="font-extrabold text-2xl text-gray-900">What I love</p>
          </div>
          <p className="font-light text-gray-200 text-2xl">
            I love creating websites, writing, drawing and 3D modeling.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-40 p-2 my-4 bg-gray-900 rounded-lg drop-shadow-lg text-md"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Who;

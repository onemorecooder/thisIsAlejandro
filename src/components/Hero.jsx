import React from "react";
import Navbar from "./Navbar";
import { HiMinusSmall } from "react-icons/hi2";
import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";
/* import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"; */
import Blob from "./Blob/Blob";

const Hero = () => {
  return (
    <div className="h-screen snap-center flex flex-col items-center justify-between relative">
      <Navbar />
      <div className="h-screen flex w-full justify-center items-center justify-items-center z-50 absolute pointer-events-none mt-16">
        <div className="w-full align-middle justify-items-center text-center">
          <p className="font-extrabold text-8xl">Code. Eat. Sleep.</p>
          <div className="flex items-center w-full justify-center align-middle">
            <HiMinusSmall className="text-6xl" />
            <p className="font-extrabold text-2xl text-gray-900">What I do</p>
          </div>
          <p className="font-light text-gray-200 text-2xl">
            I enjoy creating delightful, human-centered digital experiences.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-40 p-2 my-4 bg-gray-900 rounded-lg drop-shadow-lg text-md pointer-events-auto"
          >
            Learn More
          </motion.button>
        </div>
      </div>
      <div className="relative z-10 h-full w-screen">
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;

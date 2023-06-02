import React from "react";
import Navbar from "./Navbar";
import { HiMinusSmall } from "react-icons/hi2";
import { motion } from "framer-motion";

import mainImg from "../img/mainImg.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="h-screen snap-center flex flex-col items-center justify-between">
      <Navbar />
      <div className="h-screen w-3/4 flex justify-between">
        {/* lado izquierdo */}
        <div className="flex-1 flex flex-col items-end justify-center gap-2">
          <p className="font-extrabold text-8xl">Code. Eat. Sleep.</p>
          <div className="flex items-center">
            <HiMinusSmall className="text-6xl" />
            <p className="font-extrabold text-2xl text-gray-900">What I do</p>
          </div>
          <p className="font-light text-gray-200 text-2xl">
            I enjoy creatting delightful, human-centered digital experiences.
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

        {/* lado derecho */}
        <div className="flex-1 relative">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 200, 300]} scale={1.5}>
              <MeshDistortMaterial
                color="#64b0d1"
                attach="material"
                distort={0.5}
                speed={2}
                opacity={0.5}
              />
            </Sphere>
          </Canvas>
          <img
            src={mainImg}
            alt="mainimage"
            className="object-contain absolute top-0 bottom-0 left-0 right-0 m-auto animate-bounce animate-bounce-slow w-[450px] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

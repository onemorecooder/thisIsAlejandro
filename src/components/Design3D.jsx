import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob/Blob";
/* import Spline from "@splinetool/react-spline"; */

const container = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Design3D = () => {
  return (
    <div className=" w-screen flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-screen sm:w-2/4"
      >
        <div className="text-gray-900">
          <Canvas
            className="-mt-8 sm:mt-0 "
            camera={{ position: [0.0, 0.0, 8.0] }}
          >
            <Blob />
          </Canvas>
        </div>
      </motion.div>
    </div>
  );
};

export default Design3D;

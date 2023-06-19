import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const container = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const WebDesign = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="h-screen w-screen"
    >
      <Spline
        className="hidden md:block"
        scene="https://prod.spline.design/g3BQNwTcw3nWS2RI/scene.splinecode"
      />
      <Spline
        className="block md:hidden"
        scene="https://prod.spline.design/qbknwHsGtwkJVtZM/scene.splinecode"
      />
    </motion.div>
  );
};

export default WebDesign;

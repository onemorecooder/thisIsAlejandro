import React from "react";
import { motion } from "framer-motion";
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
    <motion.div variants={container} initial="hidden" animate="visible">
      <div className="text-gray-900">Design3D</div>
    </motion.div>
  );
};

export default Design3D;

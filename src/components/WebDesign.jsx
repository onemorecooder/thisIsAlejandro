import React from "react";
import { motion } from "framer-motion";

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
      className=" bg-white rounded-lg shadow-md"
    >
      <div className="text-gray-900">WebDesign</div>
    </motion.div>
  );
};

export default WebDesign;

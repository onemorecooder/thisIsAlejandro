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
    <div className=" w-screen flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=" bg-white rounded-lg shadow-md m-24 w-screen sm:w-2/4"
      >
        <div className="text-gray-900">Web Design</div>
      </motion.div>
    </div>
  );
};

export default WebDesign;

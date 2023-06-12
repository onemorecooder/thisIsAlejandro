import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Development = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <div className="text-gray-900">Development</div>
    </motion.div>
  );
};

export default Development;

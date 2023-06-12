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

const SocialMedia = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="h-screen w-3/4"
    >
      <Spline scene="https://prod.spline.design/2wGSRgCPjejBOcxr/scene.splinecode" />
    </motion.div>
  );
};

export default SocialMedia;

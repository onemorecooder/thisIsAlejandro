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
    <div className=" w-screen flex justify-center h-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="bg-slate-200 rounded-3xl shadow-md m-24 w-screen sm:w-2/4 h-4/6 "
      >
        <iframe
          title="retro-shop"
          src="https://retro-shop.vercel.app/"
          className="sm:w-full items-center justify-center w-screen h-full rounded-3xl"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default WebDesign;

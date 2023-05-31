import React from "react";
import img from "../img/logo.png";
import cv from "../img/cv.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/4 flex justify-between items-center pt-5">
        <div className="flex items-center gap-10">
          <img src={img} alt="logo" className="w-60"></img>
          <ul className="flex gap-10 cursor-pointer">
            <li>Home</li>
            <li>Studio</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={cv} alt="cv" className="w-10 cursor-pointer"></img>
          </motion.a>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-40 p-4 bg-gray-900 rounded-lg drop-shadow-lg"
          >
            Hire Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import img from "../img/logo.png";
import { motion } from "framer-motion";
import { GrDocumentUser } from "react-icons/gr";

import ExamplePdf from "../Resume-alejandro.pdf";

const Navbar = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/4 flex flex-col sm:flex-row justify-between items-center pt-5">
        <div className="flex items-center gap-10">
          <img src={img} alt="logo" className="w-60" />
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{
              scale: 1.2,
            }}
            href={ExamplePdf}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.9 }}
          >
            <GrDocumentUser className="w-10 h-10 cursor-pointer text-white" />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-40 p-4 bg-gray-900 rounded-lg drop-shadow-lg cursor-pointer text-center"
            href="https://www.linkedin.com/in/alejandro-jos%C3%A9-torres-piedra-543b1b15b"
          >
            Hire Now
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

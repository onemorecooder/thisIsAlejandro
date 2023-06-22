import React, { useState } from "react";
import { motion } from "framer-motion";
import WebDesign from "./WebDesign";
import Development from "./Development";
import Design3D from "./Design3D";
import Illustration from "./Illustration";
import CloseButton from "./CloseButton";

const data = ["Web Design", "Stack", "Illustration", "3D Design"];

const Works = () => {
  const [work, setWork] = useState("");
  const handleClose = () => {
    setWork("");
  };
  return (
    <div className="h-screen snap-center flex justify-center w-screen">
      <div className="flex w-screen">
        {/* body */}
        <div className="justify-center flex text-center w-screen items-center">
          <ul className="">
            {data.map((item) => (
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.9 }}
                className=" py-4 font-extrabold text-5xl sm:text-8xl cursor-pointer animate-text bg-gradient-to-r from-purple-900 via-purple-600 to-violet-300 bg-clip-text text-transparent"
                key={item}
                onClick={() => setWork(item)}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* modal */}
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {work === "Web Design" ? (
            <div className="h-screen">
              <CloseButton props={handleClose} />
              <WebDesign />
            </div>
          ) : work === "Illustration" ? (
            <div className="h-screen">
              <CloseButton props={handleClose} />
              <Illustration />
            </div>
          ) : work === "3D Design" ? (
            <div className="h-screen">
              <CloseButton props={handleClose} />
              <Design3D />
            </div>
          ) : work === "Stack" ? (
            <div className="h-screen">
              <CloseButton props={handleClose} />
              <Development />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;

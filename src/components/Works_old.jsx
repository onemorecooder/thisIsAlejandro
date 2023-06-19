import React, { useState } from "react";
import { motion } from "framer-motion";
import WebDesign from "./WebDesign";
import Development from "./Development";
import Design3D from "./Design3D";
import Illustration from "./Illustration";

const data = ["Web Design", "Development", "Illustration", "3D Design"];

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <div className="h-screen snap-center flex justify-center w-screen">
      <div className="flex w-screen">
        {/* left */}
        <div className="justify-end flex text-right w-1/2 items-center mr-24">
          <ul className="">
            {data.map((item) => (
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.9 }}
                className="py-4 font-extrabold text-8xl cursor-pointer animate-text bg-gradient-to-r from-purple-900 via-purple-600 to-violet-300 bg-clip-text text-transparent"
                key={item}
                onClick={() => setWork(item)}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
        {/* right */}
        {/* <div className=" w-1/2 flex flex-col justify-center gap-2 h-screen">
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Illustration" ? (
            <Illustration />
          ) : work === "3D Design" ? (
            <Design3D />
          ) : (
            <Development />
          )}
        </div> {/* <motion.div
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
        */}
      </div>
    </div>
  );
};

export default Works;

import React, { useState } from "react";
import { motion } from "framer-motion";
import WebDesign from "./WebDesign";
import Development from "./Development";
import Design3D from "./Design3D";
import Illustration from "./Illustration";
import SocialMedia from "./SocialMedia";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "3D Design",
  "Social Media",
];

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <div className="h-screen snap-center flex justify-center">
      <div className="w-3/4 flex justify-between">
        {/* left */}
        <div className="flex-1 flex items-center">
          <ul className="flex flex-col gap-2">
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
        <div className="flex-1 flex flex-col justify-center gap-2">
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Illustration" ? (
            <Illustration />
          ) : work === "3D Design" ? (
            <Design3D />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <SocialMedia />
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;

import React from "react";
import { motion } from "framer-motion";

import img from "../img/itachi.jpg";

import img1 from "../img/1.png";

import img2 from "../img/2.png";

import img3 from "../img/3.png";

import logo from "../img/Instagram.png";

const container = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Illustration = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className=" bg-white rounded-lg shadow-md m-24"
    >
      <div className="bg-stone-300 rounded-t-lg w-full h-6 flex gap-1 items-center justify-items-center mb-4">
        <div className="bg-red-400 h-3 w-3 rounded-full ml-1"></div>
        <div className="bg-yellow-200 h-3 w-3 rounded-full"></div>
        <div className="bg-green-300 h-3 w-3  rounded-full"></div>
      </div>
      <div className="p-5">
        <a href="https://www.instagram.com/">
          <img className="w-32" src={logo} alt="Profile"></img>
        </a>
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={img}
          alt="Profile"
        ></img>
        <h2 className="text-center text-2xl font-semibold mt-3 text-gray-600">
          alejandroillustrates
        </h2>
        <div className="flex gap-2 p-4 mx-auto align-middle justify-center font-light">
          <motion.button
            href="https://www.instagram.com/alejandroillustrates/"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-32 h-8 bg-blue-500 rounded-lg drop-shadow-lg"
          >
            Follow
          </motion.button>

          <motion.button
            href="https://www.instagram.com/alejandroillustrates/"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-32 bg-blue-500 rounded-lg drop-shadow-lg"
          >
            Send Message
          </motion.button>
        </div>
        <ul className="text-gray-600 mb-10 mx-14">
          <li>Alejandro Torres </li>
          <li className="font-light">Artista</li>
          <li>• ᴀɴɪᴍᴇ/ᴍᴀɴɢᴀ 💥</li>
          <li>• ɴᴀʀᴜᴛᴏ ꜰᴀɴ 🍥</li>
          <li>• ᴀᴄᴇᴘᴛᴏ ꜱᴜɢᴇʀᴇɴᴄɪᴀꜱ 📩</li>
          <li>
            • ᴄᴜᴇɴᴛᴀ ᴘʀɪɴᴄɪᴘᴀʟ:{" "}
            <a href="https://www.instagram.com/alejandrojtorresp/">
              @alejandrojtorresp
            </a>
          </li>
          <li>• ʙᴀʀᴄᴇʟᴏɴᴀ 📍</li>
        </ul>
        <hr />
        <div className="flex justify-center mt-5">
          <a href="https://www.instagram.com/p/ClHrWR_su1K/" className="mx-1">
            <motion.img
              whileHover={{ filter: "blur(2px)" }}
              className="w-56 h-56"
              src={img1}
              alt="Profile"
            ></motion.img>
          </a>
          <a href="https://www.instagram.com/p/Ck31YvDLyRz/" className="mx-1">
            <motion.img
              whileHover={{ filter: "blur(2px)" }}
              className="w-56 h-56"
              src={img2}
              alt="Profile"
            ></motion.img>
          </a>
          <a href="https://www.instagram.com/p/CSMsFeXC_zz/" className="mx-1">
            <motion.img
              whileHover={{ filter: "blur(2px)" }}
              className="w-56 h-56"
              src={img3}
              alt="Profile"
            ></motion.img>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Illustration;

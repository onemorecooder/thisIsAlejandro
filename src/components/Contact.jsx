import React from "react";
import { motion } from "framer-motion";
import Map from "./Map";

const Contact = () => {
  return (
    <div className="h-screen snap-center">
      <div className="w-full h-full flex justify-center gap-20 ">
        {/* left */}
        <div className="flex-1 flex items-center justify-end">
          <form action="" className="w-2/4 flex flex-col gap-10">
            <h1 className="font-light text-4xl">Contact Me</h1>
            <input
              type="text"
              placeholder="Name"
              className="py-4 pl-4 rounded-lg text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-4 pl-4 rounded-lg text-black"
            />
            <textarea
              rows={4}
              placeholder="Write your message"
              className="pb-20 pt-4 pl-4 rounded-lg text-black"
            ></textarea>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              className="py-4 bg-gray-900 rounded-lg drop-shadow-lg text-md"
            >
              Learn More
            </motion.button>
          </form>
        </div>

        {/* right */}
        <div className="flex-1">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;

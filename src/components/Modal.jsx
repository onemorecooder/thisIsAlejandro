import React from "react";
import { motion } from "framer-motion";

const Modal = ({ icon, message, setOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen"
    >
      <div className="relative bg-white rounded-lg p-6 text-center">
        <button
          type="button"
          onClick={() => setOpenModal(false)}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {icon}
        <p className="text-gray-700 my-2">{message}</p>
        <button
          type="button"
          onClick={() => setOpenModal(false)}
          className="w-40 p-2 mt-4 bg-gray-900 rounded-lg drop-shadow-lg text-md"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import Map from "./Map";
import Modal from "./Modal";

import { FaRegCheckCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_equz7fc",
        "template_xqsl6qs",
        form.current,
        "QPi9YcmyIW7WhYcMo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="h-screen snap-center">
      <div className="w-full h-full flex justify-center gap-20 ">
        {/* left */}
        <div className="flex-1 flex items-center justify-end">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full md:w-2/4 flex flex-col gap-10 p-4"
          >
            <h1 className="font-light text-4xl">Contact Me</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="py-4 pl-4 rounded-lg text-black"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="py-4 pl-4 rounded-lg text-black"
            />
            <textarea
              rows={4}
              placeholder="Write your message"
              name="message"
              className="pb-20 pt-4 pl-4 rounded-lg text-black"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              className="py-4 bg-gray-900 rounded-lg drop-shadow-lg text-md"
            >
              Learn More
            </motion.button>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-opacity-50 bg-neutral-950"
                >
                  <Modal
                    icon={
                      <FaRegCheckCircle className="text-slate-900 w-full text-5xl mt-4" />
                    }
                    message={
                      "Your message has been sent. I'll get back to you soon :)"
                    }
                    setOpenModal={setSuccess}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* right */}
        <div className="flex-1 hidden sm:block">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;

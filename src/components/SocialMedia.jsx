import React from "react";
import { motion } from "framer-motion";
/* import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
 */
const container = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SocialMedia = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
};

export default SocialMedia;

import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const CloseButton = ({ props }) => {
  return (
    <button
      onClick={props}
      className="flex w-full items-center p-4 justify-center justify-items-center"
    >
      <AiOutlineCloseCircle className="w-20 h-20" />
    </button>
  );
};

export default CloseButton;

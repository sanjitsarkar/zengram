import React from "react";

export const Modal = ({ setShowDropDown, children }) => {
  return (
    <div
      onClick={(e) => {
        // setShowDropDown(false);
        // e.preventDefault();
        // e.stopPropagation();
      }}
      className="grid place-content-center w-screen h-screen z-50 bg-lightBlue bg-opacity-10  fixed top-0 left-0 right-0  backdrop-blur-md "
    >
      {children}
    </div>
  );
};

import React from "react";

const AuthButton = ({
  color = "bg-primary",
  name,
  onClick,
  type = "submit",
}) => {
  return (
    <button
      type={`${type ? type : "button"}`}
      onClick={onClick}
      className={`
      w-full
      px-6
      py-2.5
      ${color}
      ${color === "bg-white" ? "text-lightBlue" : "text-white"}
      font-medium
      text-base
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-primary active:shadow-lg
      transition
      duration-150
      ease-in-out`}
    >
      {name}
    </button>
  );
};

export default AuthButton;

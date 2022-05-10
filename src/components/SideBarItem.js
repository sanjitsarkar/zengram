import React from "react";
import { Link } from "react-router-dom";

const SideBarItem = ({ name, Icon, activeName, onClick, index }) => {
  return (
    <li
      onClick={onClick}
      className={`inline-block w-1/4 md:w-48  hover:text-white focus:text-white ${
        name === activeName ? "text-white" : ""
      }`}
    >
      <Link
        className={`flex ${index === 0 ? "rounded-l-lg" : ""} ${
          index === 4 ? "rounded-r-lg" : ""
        } items-center sm:gap-2 justify-center sm:justify-start  md:rounded-r-xl py-6 sm:px-4   bg-white hover:border-b-4 hover:border-white hover:border-opacity-50 hover:bg-primary hover:bg-opacity-90 focus:bg-opacity-90  focus:border-b-4 focus:border-white focus:border-opacity-50 focus:bg-primary ease-in-out transition-all xsm:flex-col ${
          name === activeName
            ? "border-b-4 border-white border-opacity-50 bg-primary"
            : "border-b-4 border-slate-200"
        }`}
        to={`/${name.toLowerCase()}`}
      >
        {<Icon className="md:text-4xl text-3xl " />}
        <span className="md:text-lg text-sm sm:flex hidden">{name}</span>
      </Link>
    </li>
  );
};

export default SideBarItem;
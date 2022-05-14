import React from "react";
import { useSideBarItem } from "../context/sideBarItemContext";
import { sideBarItems } from "../utils";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const { activeName, setActiveName } = useSideBarItem("Home");

  return (
    <ul className="z-10  md:gap-1 justify-center md:justify-start xsm:justify-between  md:w-max w-screen   md:min-h-screen fixed bg-white md:bg-slate-100 bottom-0 md:top-16 md:mt-3 flex md:flex-col   text-lightBlue md:p-4">
      {sideBarItems.map((item, i) => (
        <SideBarItem
          key={i}
          {...item}
          index={i}
          activeName={activeName}
          onClick={() => setActiveName(item.name)}
        />
      ))}
    </ul>
  );
};

export default SideBar;

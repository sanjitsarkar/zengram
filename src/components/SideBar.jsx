import React from "react";
import {
  MdBookmark,
  MdExplore,
  MdHome,
  MdMessage,
  MdPerson,
} from "react-icons/md";
import { useSideBarItem } from "../context/sideBarItemContext";
import SideBarItem from "./SideBarItem";
const sideBarItems = [
  {
    name: "Home",
    Icon: MdHome,
  },
  {
    name: "Explore",
    Icon: MdExplore,
  },
  {
    name: "Bookmarks",
    Icon: MdBookmark,
  },
  {
    name: "Messages",
    Icon: MdMessage,
  },
  {
    name: "Profile",
    Icon: MdPerson,
  },
];
const SideBar = () => {
  const { activeName, setActiveName } = useSideBarItem("Home");

  return (
    <ul className="shadow-md sm:gap-1 justify-center md:justify-start xsm:justify-between  md:w-max w-screen   md:min-h-screen fixed md:bg-slate-200 bottom-0 md:top-16 md:mt-3 flex md:flex-col   text-lightBlue md:p-4">
      {sideBarItems.map((item, i) => (
        <SideBarItem
          {...item}
          index={i}
          activeName={activeName}
          onClick={() => setActiveName(activeName)}
        />
      ))}
      {/* <li className="inline-block text-white ">
        <Link
          className="flex   items-center gap-2  py-6 px-4 w-48 border-b-4 border-white border-opacity-50 bg-primary rounded-r-xl"
          to="/"
        >
          <MdHome className="text-4xl" />
          <span className="text-lg">Home</span>
        </Link>
      </li>
      <li className="inline-block hover:text-white focus:text-white">
        <Link
          className="flex   items-center gap-2 rounded-r-xl py-6 px-4 w-48 border-b-4 border-primary bg-white hover:border-b-4 hover:border-white hover:border-opacity-50 hover:bg-primary focus:border-b-4 focus:border-white focus:border-opacity-50 focus:bg-primary"
          to="/"
        >
          <MdExplore className="text-4xl" />
          <span className="text-lg">Home</span>
        </Link>
      </li>
      <li className="inline-block">
        <Link
          className="flex   items-center gap-2 rounded-r-xl py-6 px-4 w-48 border-b-4 border-primary bg-white"
          to="/"
        >
          <MdBookmark className="text-4xl" />
          <span className="text-lg">Bookmarks</span>
        </Link>
      </li>
      <li className="inline-block">
        <Link
          className="flex   items-center gap-2 rounded-r-xl py-6 px-4 w-48 border-b-4 border-primary bg-white  bg-white"
          to="/"
        >
          <MdMessage className="text-4xl" />
          <span className="text-lg">Messages</span>
        </Link>
      </li>
      <li className="inline-block">
        <Link
          className="flex   items-center gap-2 rounded-r-xl py-6 px-4 w-48  bg-white"
          to="/"
        >
          <MdPerson className="text-4xl" />
          <span className="text-lg">Profile</span>
        </Link>
      </li> */}
    </ul>
  );
};

export default SideBar;

import React, { useState } from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { MdClose, MdMenu } from "react-icons/md";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="fixed z-50  left-0 right-0 top-0 text-dark justify-between bg-white py-4 px-6 shadow-md flex items-center">
      <div className="left flex items-center gap-3">
        {!isNavOpen ? (
          <MdMenu
            className="cursor-pointer rounded-full p-2 w-10 h-10 shadow-md  sm:hidden"
            onClick={() => setIsNavOpen(true)}
          />
        ) : (
          <MdClose
            className="cursor-pointer rounded-full p-2 w-10 h-10 shadow-md sm:hidden"
            onClick={() => setIsNavOpen(false)}
          />
        )}
        <div className="site-title text-xl sm:inline-block hidden ">
          <img src="" alt="" />
          <h4>
            Zen
            <span className="text-primary">Gram</span>
          </h4>
        </div>
        <div className="input-box ease-in-out transition-all bg-lightBlue bg-opacity-10 focus-within:bg-opacity-5 focus-within:border-opacity-50 border border-transparent focus-within:border-primary sm:w-52 md:w-96  rounded-md flex  items-center">
          <BiSearch className="ml-3  text-xl text-dark" />
          <input
            type="search"
            name=""
            placeholder="Search something..."
            id=""
            className=" w-full pl-1 pr-3 py-2 outline-none bg-transparent"
          />
        </div>
      </div>
      <div
        className={` right ${
          isNavOpen ? "flex" : "hidden"
        }  sm:flex absolute top-20 sm:h-auto h-auto sm:relative sm:border-none border-2 border-primary sm:top-0 sm:left-0 p-5 sm:p-0   bg-lightBlue sm:bg-transparent left-2 rounded-md sm:rounded-none  flex-col sm:flex-row items-center  gap-4 shadow-lg sm:shadow-none`}
      >
        <BiBell className="w-10 h-10 p-2 focus:bg-lightBlue hover:bg-lightBlue focus:text-white hover:text-white transition-all ease-in-out rounded-full shadow-md bg-white text-white sm:text-darkBlue cursor-pointer" />
        <img
          className="shadow-sm cursor-pointer rounded-full w-10 h-10 "
          src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
          alt="profilePicture"
        />
      </div>
    </header>
  );
};

export default Header;
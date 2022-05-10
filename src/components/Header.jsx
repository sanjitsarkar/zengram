import React from "react";
import { BiBell, BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 text-dark justify-between bg-white py-4 px-6 shadow-md flex items-center">
      <div className="left flex items-center gap-3">
        <div className="site-title text-xl">
          <img src="" alt="" />
          <h4>
            Zen
            <span className="text-primary">Gram</span>
          </h4>
        </div>
        <div className="input-box ease-in-out transition-all bg-lightBlue bg-opacity-10 focus-within:bg-opacity-5 focus-within:border-opacity-50 border border-transparent focus-within:border-primary w-96  rounded-md flex  items-center">
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
      <div className="right flex items-center gap-2">
        <BiBell className="text-xl text-darkBlue cursor-pointer" />
        <img
          className="border-2 border-secondary shadow-sm cursor-pointer rounded-full w-42 h-42"
          src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
          alt="Avatar"
        />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { BiImageAdd, BiLocationPlus, BiVideo } from "react-icons/bi";
import { MdGif } from "react-icons/md";

const AddPostForm = () => {
  return (
    <div className="w-full md:p-6 p-4 rounded-lg shadow-lg bg-white   ">
      <div className="flex items-center gap-3 mb-3">
        <img
          className=" shadow-sm cursor-pointer rounded-full w-10 h-10 "
          src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG"
          alt="Avatar"
        />
        <span className="text-lightBlue">John Doe</span>
      </div>
      <form>
        <div className="form-group mb-6">
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        resize-none
        border-b-2
        text-gray-700
        bg-white bg-clip-padding
         border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
      "
            id="post_description"
            rows={3}
            placeholder="Hey, what's on your mind?"
            defaultValue={""}
          />
        </div>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-2 items-center">
            <BiImageAdd className="w-10 h-10 fill-lightBlue p-2 shadow-md rounded-full hover:bg-primary hover:fill-white focus:bg-primary focus:fill-white cursor-pointer transition-all ease-in-out" />
            <MdGif className="w-10 h-10 fill-lightBlue p-2 shadow-md rounded-full hover:bg-primary hover:fill-white focus:bg-primary focus:fill-white cursor-pointer transition-all ease-in-out" />
            <BiVideo className="w-10 h-10 fill-lightBlue p-2 shadow-md rounded-full hover:bg-primary hover:fill-white focus:bg-primary focus:fill-white cursor-pointer transition-all ease-in-out" />
            <BiLocationPlus className="w-10 h-10 fill-lightBlue p-2 shadow-md rounded-full hover:bg-primary hover:fill-white focus:bg-primary focus:fill-white cursor-pointer transition-all ease-in-out" />
          </div>
          <button
            type="submit"
            className="
      w-full
      md:w-auto
      px-6
      py-2.5
      bg-primary
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary-700 hover:shadow-lg
      focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-primary-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;

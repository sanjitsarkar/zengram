import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { PostCard } from "../../components";

const PostsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <button className="py-1 px-2 rounded-md shadow-lg bg-primary text-white">
          Trending
        </button>
        <button className=" flex gap-1 items-center py-1 px-3 rounded-md shadow-lg  text-lightBlue bg-white">
          Latest{" "}
          <span>
            <MdArrowDropDown size={20} />
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-4 ">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default PostsSection;

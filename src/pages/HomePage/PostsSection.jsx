import React, { useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { PostsWrapper } from "../../components";

import {
  fetchAllPosts,
  fetchUserFeedPosts,
} from "../../services/posts/postsService";


const PostsSection = ({ type = "all" }) => {
  const posts = useSelector((state) => state.posts);
  const allPosts = useSelector((state) => state.allPosts);
  const dispatch = useDispatch();
  useEffect(() => {

    if (type === "userFeed") {
      dispatch(fetchUserFeedPosts());
    } else if (type === "all") {
      dispatch(fetchAllPosts());
    }

  }, []);
  return (
    <PostsWrapper posts={type === "all" ? allPosts : posts}>
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
    </PostsWrapper>
  );
};

export default PostsSection;

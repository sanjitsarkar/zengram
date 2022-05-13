import React, { useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Loader, PostCard } from "../../components";
import { fetchPosts } from "../../services/posts/postsService";

const PostsSection = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
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
      {posts.status === "loading" && (
        <Loader status={"Please wait until your posts are loaded"} />
      )}
      {posts.status === "succeeded" && posts.data.length === 0 && (
        <span className="text-center text-base font-medium text-lightBlue">
          No posts to show
        </span>
      )}
      <div className="flex flex-col gap-4 ">
        {posts.status === "succeeded" &&
          posts.data.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default PostsSection;

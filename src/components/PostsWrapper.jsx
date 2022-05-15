import React from "react";
import Loader from "./Loader";
import PostCard from "./PostCard";

const PostsWrapper = ({ posts, children, width = "" }) => {
  return (
    <div className={` ${width} flex flex-col gap-4`}>
      {children}
      {posts.status === "loading" && <Loader type="medium" />}
      {posts.status === "succeeded" && posts.data.length === 0 && (
        <span className="text-center text-base font-medium text-lightBlue">
          No posts to show
        </span>
      )}
      <div className="flex flex-col gap-4 ">
        {posts.status === "succeeded" &&
          posts.data.map(
            (post) => post && <PostCard key={post._id} post={post} />
          )}
      </div>
    </div>
  );
};

export default PostsWrapper;
import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import PostCard from "./PostCard";

const PostsWrapper = ({ posts, children, width = "", type }) => {
  const archivedPosts = useSelector((state) => state.archivedPosts?.data);
  let isPostArchived;
  if (type === "archive") {
    isPostArchived = () => false;
  } else {
    isPostArchived = (id) => archivedPosts?.some((post) => post?._id === id);
  }
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
            (post) =>
              post &&
              !isPostArchived(post._id) && (
                <PostCard key={post._id} post={post} type={type} />
              )
          )}
      </div>
    </div>
  );
};

export default PostsWrapper;

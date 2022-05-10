import React from "react";
import { AddPostForm } from "../../components";
import NewsFeed from "./NewsFeed";

const PostsSection = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <AddPostForm />
      <NewsFeed />
    </div>
  );
};

export default PostsSection;

import React from "react";
import { useSelector } from "react-redux";
import { Layout, PostsWrapper } from "../../components";

const BookmarkedPage = () => {
  const bookmarkedPosts = useSelector((state) => state.bookmarkedPosts);
  
  return (
    <Layout>
      <PostsWrapper posts={bookmarkedPosts}>
        <h1 className="text-center text-xl text-lightBlue">Boomarked Posts</h1>
      </PostsWrapper>
    </Layout>
  );
};

export default BookmarkedPage;

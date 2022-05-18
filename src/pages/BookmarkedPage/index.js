import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, PostsWrapper } from "../../components";
import { fetchBookmarkedPosts } from "../../services/posts/postsService";

const BookmarkedPage = () => {
  const bookmarkedPosts = useSelector((state) => state.bookmarkedPosts);
  const userId = useSelector((state) => state.auth?.user?._id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookmarkedPosts(userId));
  }, []);
  return (
    <Layout>
      <PostsWrapper posts={bookmarkedPosts} width="md:w-5/6">
        <h1 className="text-center text-xl text-lightBlue">Boomarked Posts</h1>
      </PostsWrapper>
    </Layout>
  );
};

export default BookmarkedPage;

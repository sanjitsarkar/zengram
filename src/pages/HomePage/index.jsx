import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components";
import { fetchPosts } from "../../services/posts/postsService";
import PostsSection from "./PostsSection";

const HomePage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Layout>
      <PostsSection />
    </Layout>
  );
};

export default HomePage;

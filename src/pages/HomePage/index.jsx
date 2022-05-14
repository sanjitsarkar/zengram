import React from "react";
import { AddPostForm, Layout } from "../../components";
import PostsSection from "./PostsSection";
import StorySection from "./StorySection";

const HomePage = () => {
  return (
    <Layout>
      <div className="row gap-4 ">
        <div className="flex flex-col gap-8 md:w-5/6">
          <StorySection />
          <AddPostForm />
          <PostsSection type="userFeed" />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

import React from "react";
import { Layout, PostsSection } from "../../components";
import { SuggestionSection } from "../../components/SuggestionSection";
import { AddPostForm } from "./AddPostForm";

export const HomePage = () => {
  return (
    <Layout>
      <div className="flex gap-0 ">
        <div className="flex flex-col gap-8 md:w-8/12 w-full ">
          <AddPostForm />
          <PostsSection type="userFeed" />
        </div>
        <SuggestionSection />
      </div>
    </Layout>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Layout, PostsWrapper } from "../../components";
import { searchPostsByHashTag } from "../../services/posts/postsService";

const SearchedPostsPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const hashtag = searchParams.get("hashtag");
  const searchedPosts = useSelector((state) => state.searchedPosts);
  useEffect(() => {
    dispatch(searchPostsByHashTag(hashtag));
  }, [hashtag]);
  return (
    <Layout>
      <h1 className="text-lightBlue text-center  mt-8 text-xl font-semibold">
        <span className="text-lightBlue font-medium">
          {searchedPosts?.data.length} Post
          {searchedPosts?.data.length > 1 && "s"} found for hashtag
        </span>{" "}
        <span className="text-lightBlue text-opacity-80">#{hashtag}</span>
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center mt-5">
        <PostsWrapper posts={searchedPosts} width="md:w-4/5" />
      </div>
    </Layout>
  );
};

export default SearchedPostsPage;

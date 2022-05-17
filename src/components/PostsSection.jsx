import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { PostsWrapper } from ".";
import {
  fetchAllPosts,
  fetchAllTrendingPosts,
  fetchUserFeedPosts,
  fetchUserFeedTrendingPosts,
} from "../services/posts/postsService";
import Tab from "./Tab";

const PostsSection = ({ type = "all" }) => {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.auth?.user);
  const allPosts = useSelector((state) => state.allPosts);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Latest");
  useEffect(() => {
    if (type === "userFeed") {
      if (activeTab === "Latest") {
        dispatch(fetchUserFeedPosts(user._id));
      } else if (activeTab === "Trending") {
        dispatch(fetchUserFeedTrendingPosts(user._id));
      }
    } else if (type === "all") {
      if (activeTab === "Latest") {
        dispatch(fetchAllPosts());
      } else if (activeTab === "Trending") {
        dispatch(fetchAllTrendingPosts());
      }
    }
  }, [user, dispatch, type, activeTab]);
  return (
    <PostsWrapper posts={type === "all" ? allPosts : posts}>
      <div className="flex gap-4">
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          name="Latest"
          onClick={() => {}}
        >
          <span>
            <MdArrowDropDown size={20} />
          </span>
        </Tab>
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          name="Trending"
          onClick={() => {}}
        />
      </div>
    </PostsWrapper>
  );
};

export default PostsSection;

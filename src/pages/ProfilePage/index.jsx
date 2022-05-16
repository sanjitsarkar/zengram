import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Layout, Loader, PostsWrapper, Tab } from "../../components";
import { getProfileInfo } from "../../services/auth/authService";
import {
  fetchArchivedPosts,
  fetchUserCreatedPosts,
} from "../../services/posts/postsService";
import ProfileHeader from "./ProfileHeader";

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile);

  const location = useLocation();
  const dispatch = useDispatch();

  const userCreatedPosts = useSelector((state) => state.userCreatedPosts);
  const archivedPosts = useSelector((state) => state.archivedPosts);

  const [activeTab, setActiveTab] = useState("All Published Posts");
  let pathName = location.pathname.split("/");
  let profileId = pathName[pathName.length - 1];
  useEffect(() => {
    dispatch(getProfileInfo(profileId));
  }, [profileId]);
  useEffect(() => {
    if (activeTab === "All Published Posts") {
      dispatch(fetchUserCreatedPosts(profileId));
    } else if (activeTab === "All Archived Posts") {
      dispatch(fetchArchivedPosts(profileId));
    }
  }, [activeTab, profileId]);

  return (
    <Layout>
      {profile.status === "loading" && <Loader type="medium" />}
      {profile.status === "succeeded" && !profile.data && (
        <span className="text-center text-base font-medium text-lightBlue">
          No posts to show
        </span>
      )}
      {profile.status === "succeeded" && profile.data && (
        <div className="flex flex-col gap-4 ">
          <ProfileHeader profile={profile?.data} />
          <div className="flex gap-4 items-center">
            <Tab
              name="All Published Posts"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
            <Tab
              name="All Archived Posts"
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </div>
          <PostsWrapper
            type={activeTab === "All Published Posts" ? "published" : "archive"}
            posts={
              activeTab === "All Published Posts"
                ? userCreatedPosts
                : archivedPosts
            }
            width="md:w-5/6"
          />
        </div>
      )}
    </Layout>
  );
};

export default ProfilePage;

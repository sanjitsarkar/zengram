import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Layout, Loader, PostsWrapper } from "../../components";
import { getProfileInfo } from "../../services/auth/authService";
import { fetchUserCreatedPosts } from "../../services/posts/postsService";
import ProfileHeader from "./ProfileHeader";

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile);

  const location = useLocation();
  const dispatch = useDispatch();

  const userCreatedPosts = useSelector((state) => state.userCreatedPosts);

  useEffect(() => {
    let pathName = location.pathname.split("/");
    let profileId = pathName[pathName.length - 1];
    dispatch(getProfileInfo(profileId));
    dispatch(fetchUserCreatedPosts(profileId));
  }, [location]);

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
          <PostsWrapper posts={userCreatedPosts} width="md:w-5/6" />
        </div>
      )}
    </Layout>
  );
};

export default ProfilePage;

import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { updateUser } from "../../features/auth/authSlice";
import { updateProfile } from "../../features/profile/profileSlice";
import { followUser, unfollowUser } from "../../services/auth/authService";
import { COVER_PHOTO_PLACEHOLDER, PROFILE_PIC_PLACEHOLDER } from "../../utils";
import ProfileEditForm from "./ProfileEditForm.jsx";

const ProfileHeader = ({ profile }) => {
  const user = useSelector((state) => state.auth?.user);
  const postCount = useSelector(
    (state) => state.userCreatedPosts?.data?.length
  );
  const [isEditProfile, setIsEditProfile] = useState(false);
  const dispatch = useDispatch();
  const isFollowing = user?.following.includes(profile?._id);
  return (
    <div className="flex flex-col   bg-white  ">
      {isEditProfile && (
        <Modal>
          <ProfileEditForm
            profileInfo={profile}
            setIsEditProfile={setIsEditProfile}
          />
        </Modal>
      )}
      <img
        className="h-40 object-cover"
        src={profile.coverPictureURL ?? COVER_PHOTO_PLACEHOLDER}
        alt={profile.name}
      />
      <div className="flex flex-col p-6 ">
        <div className=" justify-center sm:justify-start  items-center     flex flex-wrap  gap-2  ">
          <img
            className="sm:w-32 w-28 h-28 sm:h-32 rounded-full border-8 shadow-sm aspect-square border-white object-cover relative bottom-14 sm:bottom-16  md:left-6 left-0 right-0 "
            src={profile.profilePictureURL ?? PROFILE_PIC_PLACEHOLDER}
            alt={profile.name}
          />
          <BiEditAlt
            onClick={() => {
              setIsEditProfile(true);
            }}
            className="cursor-pointer relative md:bottom-8 md:right-6 bottom-8 right-10 p-2 w-10 h-10 rounded-full shadow-md bg-lightBlue fill-white"
          />

          <div className="sm:ml-6 -mt-16   flex   flex-wrap  md:gap-10  gap-4 justify-around items-center">
            <div className="flex flex-col gap-2">
              <h1 className=" text-xl text-lightBlue">{profile.name}</h1>
              {user?._id !== profile?._id && !isFollowing && (
                <button
                  onClick={() => {
                    dispatch(followUser(profile?._id));

                    const newUser = {
                      ...user,
                      following: [...user.following, profile?._id],
                    };
                    const newProfile = {
                      ...profile,
                      followers: [...profile.followers, user?._id],
                    };
                    dispatch(updateProfile({ profile: newProfile }));
                    dispatch(updateUser({ user: newUser }));
                  }}
                  className="px-4 rounded-full py-1.5 bg-primary text-white "
                >
                  Follow
                </button>
              )}
              {user?._id !== profile?._id && isFollowing && (
                <button
                  onClick={() => {
                    dispatch(unfollowUser(profile?._id));
                    const _user = user;
                    const newUser = {
                      ...user,
                      following: _user.following.filter(
                        (id) => id !== profile?._id
                      ),
                    };
                    const _profile = profile;
                    const newProfile = {
                      ...profile,
                      followers: _profile.followers.filter(
                        (id) => id !== user?._id
                      ),
                    };
                    dispatch(updateProfile({ profile: newProfile }));
                    dispatch(updateUser({ user: newUser }));
                  }}
                  className="px-4 rounded-full py-1.5 bg-primary text-white "
                >
                  Unfollow
                </button>
              )}
            </div>
            <div className="flex  sm:mt-1 gap-6 text-lightBlue flex-wrap">
              <h1>
                <span className="font-semibold mr-2">{postCount} </span> post
                {postCount > 1 ? "s" : ""}
              </h1>
              <Link to={`/users/${profile._id}/followers`}>
                <span className="font-semibold mr-2">
                  {profile.followers.length}
                </span>
                follower{profile.followers.length > 1 ? "s" : ""}
              </Link>
              <Link to={`/users/${profile._id}/following`}>
                <span className="font-semibold mr-2">
                  {profile.following.length}
                </span>
                following
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:ml-6 sm:mt-6 md:mt-2   mt-6   flex gap-4 md:text-left text-center flex-wrap items-center md:justify-between justify-center  text-lightBlue">
          {profile.bio && (
            <p className="text-lightBlue text-opacity-95">
              {profile.bio ??
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,earum."}
            </p>
          )}
          {profile.portfolioUrl && (
            <a
              className="w-fit  px-4 rounded-full py-1.5 bg-slate-700 text-white"
              href={profile.portfolioUrl}
            >
              Check my portfolio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

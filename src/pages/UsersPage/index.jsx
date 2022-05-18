import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Layout, Loader } from "../../components";
import { updateUser } from "../../features/auth/authSlice";
import {
  followUser,
  getFollowers,
  getFollowing,
  unfollowUser,
} from "../../services/auth/authService";
import { PROFILE_PIC_PLACEHOLDER } from "../../utils";

const UsersPage = ({ type }) => {
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const [users, setUsers] = useState([]);
  const followers = useSelector((state) => state.followers);
  const following = useSelector((state) => state.following);
  const user = useSelector((state) => state.auth?.user);
  const isFollowing = (id) => user?.following.includes(id);
  useEffect(() => {
    if (type === "followers") {
      dispatch(getFollowers(profileId));
    } else {
      dispatch(getFollowing(profileId));
    }
  }, []);
  useEffect(() => {
    if (type === "followers") {
      setUsers(followers?.data?.followers);
    } else {
      setUsers(following?.data?.following);
    }
  }, [followers, following]);

  return (
    <Layout>
      <h1 className="text-lightBlue text-center  mt-6 text-xl">
        {type[0].toUpperCase() + type.substr(1)}
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        {followers.status === "loading" ||
          (following.status === "loading" && <Loader type="medium" />)}

        {users &&
          users.length > 0 &&
          users.map((_user) => (
            <div
              key={_user._id}
              className="p-4 rounded-md flex shadow-md justify-between items-center sm:w-96 w-full m-5 bg-white"
            >
              <div className="flex items-center gap-2">
                <img
                  src={_user.profilePictureURL ?? PROFILE_PIC_PLACEHOLDER}
                  alt="avatar"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <h3 className="text-xl text-lightBlue">{_user.name}</h3>
              </div>
              {!isFollowing(_user._id) ? (
                <button
                  onClick={() => {
                    const newUser = {
                      ...user,
                      following: [...user.following, _user?._id],
                    };
                    dispatch(updateUser(newUser));
                    dispatch(unfollowUser(_user._id));
                  }}
                  className="bg-primary text-white rounded-full px-4 py-2"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    const __user = _user;
                    const newUser = {
                      ...user,
                      following: __user.following.filter(
                        (id) => id !== _user?._id
                      ),
                    };
                    dispatch(updateUser(newUser));
                    dispatch(followUser(_user._id));
                  }}
                  className="bg-primary text-white rounded-full px-4 py-2"
                >
                  Follow
                </button>
              )}
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default UsersPage;

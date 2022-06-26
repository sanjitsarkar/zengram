import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "../services/auth/authService";
import { PROFILE_PIC_PLACEHOLDER } from "../utils";

const UserCard = forwardRef(({ _user, type }, loaderRef) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  const isFollowing = (id) => user?.following.includes(id);
  const isFollower = (id) => user?.followers.includes(id);
  return (
    <div
      ref={loaderRef}
      key={_user._id}
      className="p-4 sm:gap-8 gap-4 rounded-md flex flex-wrap   shadow-md justify-between sm:items-center min-w-96   bg-white"
    >
      <Link to={`/profile/${_user._id}`} className="flex items-center gap-2">
        <img
          src={_user.profilePictureURL ?? PROFILE_PIC_PLACEHOLDER}
          alt="avatar"
          className={`${
            type === "small" ? "w-6 h-6" : "w-12 h-12"
          }rounded-full  mr-4`}
        />
        <h3
          className={`${
            type === "small" ? "text-md" : "text-lg"
          } text-lightBlue`}
        >
          {_user.name.length > 15
            ? _user.name.substr(0, 15) + "..."
            : _user.name}
        </h3>
      </Link>
      {_user._id !== user?._id && isFollowing(_user._id) && (
        <button
          onClick={() => {
            dispatch(
              unfollowUser({
                followingId: _user._id,
                followerId: user?._id,
              })
            );
          }}
          className={`bg-primary text-white rounded-full text-sm px-3 py-2
          `}
        >
          Unfollow
        </button>
      )}
      {_user._id !== user?._id && !isFollowing(_user._id) && (
        <button
          onClick={() => {
            dispatch(
              followUser({
                followingId: _user._id,
                followerId: user?._id,
              })
            );
          }}
          className={`bg-primary text-white rounded-full text-sm px-3 py-2
          } `}
        >
          Follow {isFollower ? "Back" : ""}
        </button>
      )}
    </div>
  );
});

export default UserCard;

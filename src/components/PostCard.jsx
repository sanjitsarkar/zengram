import React from "react";
import { BiLike } from "react-icons/bi";
import { MdComment, MdMoreHoriz, MdShare } from "react-icons/md";
import { timeSince } from "../utils";

const PostCard = ({
  profileImageURL = "https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG",
  profileName = "John Doe",
  publishedAt = "2020-01-01T00:00:00.000Z",
  mediaURL = "http://res.cloudinary.com/dddfc84ni/image/upload/v1651546264/dl7s7nrhfr1lojeu32gk.jpg",
  postDescription = "This is my first post",
  likeCount = 10000,
  shareCount = 30,
  commentCount = 100,
}) => {
  return (
    <div className=" p-6 rounded-lg shadow-sm bg-white   gap-4 flex flex-col">
      <div className="flex  justify-between">
        <div className="flex items-center gap-3 mb-3">
          <img
            className=" shadow-sm cursor-pointer rounded-full w-10 h-10 "
            src={profileImageURL}
            alt="profilePicture"
          />
          <div className="flex flex-col">
            <span className="text-lightBlue">{profileName}</span>
            <span className="text-sm text-lightBlue text-opacity-70">
              {timeSince(publishedAt)} ago
            </span>
          </div>
        </div>
        <MdMoreHoriz className="fill-lightBlue cursor-pointer focus:bg-primary hover:bg-primary hover:fill-white focus:fill-white w-10 h-8 p-1 shadow-md rounded-md transition-all ease-in-out" />
      </div>
      <div className="flex flex-col gap-5">
        <img
          className="w-full object-cover h-72 "
          src={mediaURL}
          alt="postImage"
        />
        <p className="text-lightBlue leading-relaxed">{postDescription}</p>
      </div>
      <div className="flex gap-x-10 gap-y-4 items-center flex-wrap">
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          <BiLike
            size={25}
            className="fill-primary cursor-pointer order-1 md:-order-1"
          />
          <span className="text-lightBlue ">
            {likeCount} <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          <MdComment
            size={25}
            className="fill-primary cursor-pointer order-1 md:-order-1"
          />
          <span className="text-lightBlue">
            {commentCount} <span className="hidden md:inline">Comments</span>
          </span>
        </div>
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          <MdShare
            size={25}
            className="fill-primary cursor-pointer order-1 md:-order-1"
          />
          <span className="text-lightBlue">
            {shareCount} <span className="hidden md:inline">Shares</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

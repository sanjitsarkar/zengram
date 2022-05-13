import React, { useState } from "react";
import { BiArchive, BiLike, BiTrash } from "react-icons/bi";
import {
  MdArrowBack,
  MdArrowForward,
  MdBookmark,
  MdComment,
  MdEdit,
  MdMoreHoriz,
  MdShare,
} from "react-icons/md";
import { timeSince } from "../utils";
import DropDownOption from "./DropDownOption";

const PostCard = ({ post }) => {
  const {
    postedBy: { profilePictureURL, name },
    createdAt,
    mediaURLs,
    content,
    likes,
    shares,
    comments,
  } = post;
  const [activeMediaIndex, setactiveMediaIndex] = useState(0);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const nextMedia = () => {
    if (activeMediaIndex < mediaURLs.length - 1) {
      setactiveMediaIndex(activeMediaIndex + 1);
    } else {
      setactiveMediaIndex(0);
    }
  };
  const prevMedia = () => {
    if (activeMediaIndex > 0) {
      setactiveMediaIndex(activeMediaIndex - 1);
    } else {
      setactiveMediaIndex(mediaURLs.length - 1);
    }
  };
  const MediaSection = () => {
    if (mediaURLs.length > 0) {
      return (
        <div className="flex items-center gap-4 ">
          {mediaURLs.length > 1 && (
            <MdArrowBack
              onClick={prevMedia}
              className="fill-lightBlue relative left-10 rounded-full cursor-pointer focus:bg-primary hover:bg-primary hover:fill-white focus:fill-white w-10 h-10 p-1 shadow-md  transition-all ease-in-out"
            />
          )}
          <img
            className="w-full object-cover h-72 "
            src={mediaURLs[activeMediaIndex]}
            alt="postImage"
            loading="lazy"
          />
          {mediaURLs.length > 1 && (
            <MdArrowForward
              onClick={nextMedia}
              className="fill-lightBlue relative right-10 cursor-pointer focus:bg-primary hover:bg-primary hover:fill-white focus:fill-white w-10 h-10 p-1 shadow-md rounded-full transition-all ease-in-out"
            />
          )}
        </div>
      );
    }
  };
  const DropDown = () => {
    return (
      <div className="rounded-md p-1  flex flex-col   bg-slate-600 shadow-xl text-white absolute right-2 top-16">
        <DropDownOption
          Icon={MdBookmark}
          name="Bookmark Post"
          onClick={() => {}}
        />
        <DropDownOption Icon={MdEdit} name="Edit Post" onClick={() => {}} />
        <DropDownOption Icon={BiTrash} name="Delete Post" onClick={() => {}} />
        <DropDownOption
          Icon={BiArchive}
          name="Archive Post"
          onClick={() => {}}
        />
      </div>
    );
  };
  return (
    <div className=" p-6 relative rounded-lg shadow-sm bg-white   gap-4 flex flex-col">
      {isOptionClicked && <DropDown />}
      <div className="flex  justify-between">
        <div className="flex items-center gap-3 mb-3">
          <img
            className=" shadow-sm cursor-pointer rounded-full w-10 h-10 "
            src={profilePictureURL}
            alt="profilePicture"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="text-lightBlue">{name}</span>
            <span className="text-sm text-lightBlue text-opacity-70">
              {timeSince(createdAt)} ago
            </span>
          </div>
        </div>
        <MdMoreHoriz
          onClick={() =>
            setIsOptionClicked((prevIsOptionClicked) => !prevIsOptionClicked)
          }
          className="fill-lightBlue cursor-pointer focus:bg-primary hover:bg-primary hover:fill-white focus:fill-white w-10 h-8 p-1 shadow-md rounded-md transition-all ease-in-out"
        />
      </div>
      <div className="flex flex-col gap-5">
        <MediaSection />
        <p className="text-lightBlue leading-relaxed">{content}</p>
      </div>
      <div className="flex gap-x-10 gap-y-4 items-center flex-wrap">
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          <BiLike
            size={25}
            className="fill-primary cursor-pointer order-1 md:-order-1"
          />
          <span className="text-lightBlue ">
            {likes.length} <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          <MdComment
            size={25}
            className="fill-primary cursor-pointer order-1 md:-order-1"
          />
          <span className="text-lightBlue">
            {comments.length} <span className="hidden md:inline">Comments</span>
          </span>
        </div>
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          <MdShare
            size={25}
            className="fill-primary cursor-pointer order-1 md:-order-1"
          />
          <span className="text-lightBlue">
            {shares.length} <span className="hidden md:inline">Shares</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

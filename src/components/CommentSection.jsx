import React, { useEffect, useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeComment } from "../services/comments/commentsService";
import { PROFILE_PIC_PLACEHOLDER } from "../utils";
import { DropDownOption } from "./DropDownOption";
export const CommentSection = ({
  commentInfo,
  setIsCommentRemoved,
  setIsCommentAdded,
  setIsEditComment,
  setComment,
  setCommentId,
}) => {
  const {
    postId,
    _id,
    comment,
    commentedBy: { _id: id, profilePictureURL, name },
  } = commentInfo;
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownRef = useRef(null);
  const closeDropDown = (e) => {
    if (!dropDownRef?.current?.contains(e.target)) {
      setShowDropDown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeDropDown);
  }, [document, dropDownRef]);
  const DropDown = () => {
    return (
      <div
        ref={dropDownRef}
        className="z-10  rounded-md p-05  flex flex-col   bg-slate-600 shadow-xl text-white absolute right-0 top-10"
      >
        <DropDownOption
          Icon={BiEdit}
          type="small"
          name="Edit"
          onClick={() => {
            setIsEditComment(true);
            setComment(comment);
            setCommentId(_id);
           
            setShowDropDown(false);
          }}
        />
        <DropDownOption
          Icon={BiTrash}
          type="small"
          name="Delete"
          onClick={() => {
            dispatch(removeComment({ _id, postId }));
            setIsCommentRemoved(true);
            setIsCommentAdded(false);
          }}
        />
      </div>
    );
  };
  return (
    <div className="flex flex-wrap  gap-2 item-center  ">
      <Link to={`/profile/${id}`}>
        <img
          className=" shadow-sm cursor-pointer rounded-full w-8 h-8 "
          src={profilePictureURL ?? PROFILE_PIC_PLACEHOLDER}
          alt="profilePicture"
        />
      </Link>
      <div className="flex flex-col gap-1 w-full sm:min-w-max ">
        <div className="relative flex justify-between bg-lightBlue bg-opacity-5 p-2.5 rounded-md   w-full  sm:min-w-max">
          <div className="flex flex-col">
            <span className="text-lightBlue">{name}</span>
            <span className="text-sm text-lightBlue text-opacity-70">
              {comment}
            </span>
          </div>
          <MdMoreHoriz
            onClick={() =>
              setShowDropDown((prevshowDropDown) => !prevshowDropDown)
            }
            className="fill-lightBlue cursor-pointer focus:bg-primary hover:bg-primary hover:fill-white focus:fill-white w-6 h-6 p-1 shadow-md rounded-md transition-all ease-in-out"
          />
          {showDropDown && <DropDown />}
        </div>
      </div>
    </div>
  );
};

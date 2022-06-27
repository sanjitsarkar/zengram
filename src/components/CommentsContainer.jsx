import React, { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CommentSection } from ".";
import { useSocket } from "../context";
import {
  addComment,
  updateComment,
} from "../services/comments/commentsService";
import { formatUserInfo, PROFILE_PIC_PLACEHOLDER } from "../utils";
import { Loader } from "./Loader";
export const CommentsContainer = ({
  setIsCommentAdded,
  setIsCommentRemoved,
  commentCount,
  comments,
  userId,
  postId,
  postedBy,
  setSkip,
}) => {
  const dispatch = useDispatch();
  const { socket } = useSocket();
  const user = useSelector((state) => state.auth.user);
  const [comment, setComment] = useState("");
  const [commentId, setCommentId] = useState("");
  const [isEditComment, setIsEditComment] = useState(false);
  useEffect(() => {
    setIsCommentAdded(false);
    setIsCommentRemoved(false);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isEditComment) {
            dispatch(
              updateComment({
                comment,
                commentedBy: userId,
                postId,
                _id: commentId,
              })
            );
            setComment("");
            return;
          }
          dispatch(addComment({ comment, commentedBy: userId, postId }));
          setIsCommentAdded(true);
          socket.emit("sendNotification", {
            type: "comment",
            sender: formatUserInfo(user),
            reciever: postedBy._id,
            payload: postId,
          });
          setIsCommentRemoved(false);
          setComment("");
        }}
        className="flex flex-wrap items-center gap-3 mb-3"
      >
        <Link to={`/profile/${userId}`}>
          <img
            className=" shadow-sm cursor-pointer rounded-full w-8 h-8 "
            src={user.profilePictureURL ?? PROFILE_PIC_PLACEHOLDER}
            alt="profilePicture"
          />
        </Link>

        <input
          type="text"
          name=""
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment something"
          id=""
          className="px-2.5 h-auto py-1 outline-none text-lightBlue  ease-in-out transition-all bg-lightBlue bg-opacity-5 focus-within:bg-opacity-5 focus-within:border-opacity-50 border border-transparent focus-within:border-primary sm:w-4/5 w-full   rounded-md "
        />
        <button
          type="submit"
          className="px-2.5 py-1.5 bg-primary text-white flex items-center gap-2 rounded-full"
        >
          <span className="text-sm">{isEditComment ? "Update" : "Send"}</span>
          <MdSend size={15} />
        </button>
      </form>
      <div className="flex flex-col gap-2 ml-2">
        {comments.status === "loading" && <Loader type="mini" />}
        {comments.data.length > 0 &&
          comments.data.map((comment) => {
            return (
              <CommentSection
                setIsCommentRemoved={setIsCommentRemoved}
                setIsCommentAdded={setIsCommentAdded}
                commentInfo={comment}
                postedBy={postedBy}
                key={comment._id}
                setIsEditComment={setIsEditComment}
                setComment={setComment}
                setCommentId={setCommentId}
              />
            );
          })}

        {commentCount > 5 && (
          <div
            onClick={() => {
              setSkip((prevSkip) => prevSkip + 5);
            }}
            className="text-primary cursor-pointer"
          >
            Show more comments
          </div>
        )}
      </div>
    </div>
  );
};

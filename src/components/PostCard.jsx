import React, { useEffect, useState } from "react";
import { BiArchive, BiTrash } from "react-icons/bi";
import {
  MdArrowBack,
  MdArrowForward,
  MdBookmark,
  MdComment,
  MdEdit,
  MdFavorite,
  MdFavoriteBorder,
  MdMoreHoriz,
  MdShare,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useModal } from "../context/modalContext";
import { clearComments } from "../features/comments/commentsSlice";
import { dislikePost, likePost } from "../services/likePost/likePostService";
import {
  addPostToArchive,
  bookmarkPost,
  deletePost,
  removePostFromArchive,
  unBookmarkPost,
} from "../services/posts/postsService";
import { notify, timeSince } from "../utils";
import CommentsContainer from "./CommentsContainer";
import DropDownOption from "./DropDownOption";
import EditPostForm from "./EditPostForm";
import Modal from "./Modal";

const PostCard = ({ post, type }) => {
  const {
    _id,
    postedBy: { profilePictureURL, name, _id: id },
    createdAt,
    mediaURLs,
    content,
    likes,
    shares,
    comments,
  } = post;
  const [_likes, _setLikes] = useState(likes);
  const dispatch = useDispatch();
  const archivedPosts = useSelector((state) => state.archivedPosts?.data);
  const bookmarkedPosts = useSelector((state) => state.bookmarkedPosts?.data);
  const isPostBookmarked = bookmarkedPosts?.some((post) => post?._id === _id);
  const isPostArchived = archivedPosts?.some((post) => post?._id === _id);
  const [activeMediaIndex, setactiveMediaIndex] = useState(0);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const [isCommentClicked, setIsCommentClicked] = useState(false);
  const userId = useSelector((state) => state.auth?.user?._id);
  const _commentsData = useSelector((state) => state.comments);
  const { isModalOpen, setIsModalOpen } = useModal();
  const [isEditOptionClicked, setIsEditOptionClicked] = useState(false);
  useEffect(() => {
    if (_commentsData.status === "succeeded") {
      _setComments(_commentsData.data);
      dispatch(clearComments());
    }
  }, [_commentsData]);
  const [_comments, _setComments] = useState(comments);
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
            className="w-full object-contain h-72 "
            src={mediaURLs[activeMediaIndex].url}
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
      <div className="z-10 rounded-md p-1  flex flex-col   bg-slate-600 shadow-xl text-white absolute right-2 top-16">
        {type === "bookmarked" || isPostBookmarked ? (
          <DropDownOption
            Icon={MdBookmark}
            name="Unbookmark Post"
            onClick={() => {
              setIsOptionClicked(false);
              dispatch(unBookmarkPost(_id));
            }}
          />
        ) : (
          <DropDownOption
            Icon={MdBookmark}
            name="Bookmark Post"
            onClick={() => {
              setIsOptionClicked(false);
              dispatch(bookmarkPost(_id));
            }}
          />
        )}
        {userId === id && (
          <DropDownOption
            onClick={() => {
              setIsModalOpen(true);
              setIsEditOptionClicked(true);
            }}
            Icon={MdEdit}
            name="Edit Post"
          />
        )}
        {userId === id && (
          <DropDownOption
            Icon={BiTrash}
            name="Delete Post"
            onClick={() => {
              setIsOptionClicked(false);

              dispatch(deletePost(_id));
            }}
          />
        )}
        {!isPostArchived && userId === id && (
          <DropDownOption
            Icon={BiArchive}
            name="Archive Post"
            onClick={() => {
              setIsOptionClicked(false);
              dispatch(addPostToArchive(_id));
            }}
          />
        )}
        {type === "archive" && (
          <DropDownOption
            Icon={BiArchive}
            name="Remove from Archive"
            onClick={() => {
              setIsOptionClicked(false);
              dispatch(removePostFromArchive(_id));
            }}
          />
        )}
      </div>
    );
  };

  const [isPostLiked, setIsPostLiked] = useState(
    _likes?.some((like) => like === userId)
  );
  useEffect(() => {
    setIsPostLiked(_likes?.some((like) => like === userId));
  }, [_likes]);
  return (
    <div className=" p-6 relative rounded-lg shadow-sm bg-white   gap-4 flex flex-col">
      {userId === id && isModalOpen && isEditOptionClicked && (
        <Modal>
          <EditPostForm postInfo={post} />
        </Modal>
      )}
      {isOptionClicked && <DropDown />}
      <div className="flex  justify-between">
        <div className="flex items-center gap-3 mb-3">
          <Link to={`/profile/${id}`}>
            <img
              className=" shadow-sm cursor-pointer rounded-full w-10 h-10 "
              src={profilePictureURL}
              alt="profilePicture"
            />
          </Link>
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
        <p className="text-lightBlue leading-relaxed">
          {content?.split(" ").map((word, i) => {
            if (word.startsWith("#"))
              return (
                <Link
                  key={word}
                  to={`?hashtags=${word.slice(1)}`}
                  className={`text-primary ${i === 0 ? "mr-2" : "ml-2"}`}
                >
                  {word}
                </Link>
              );

            return word + " ";
          })}
        </p>
      </div>
      <div className="flex gap-x-10 gap-y-4 items-center flex-wrap">
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          {!isPostLiked ? (
            <MdFavoriteBorder
              onClick={() => {
                if (userId !== id) {
                  dispatch(
                    likePost({
                      likedBy: userId,
                      id: _id,
                      postedBy: id,
                    })
                  );
                  _setLikes((_prevLikes) => [..._prevLikes, userId]);
                } else {
                  notify("You can't like your own post", "error");
                }
              }}
              size={25}
              className="fill-primary cursor-pointer order-1 md:-order-1"
            />
          ) : (
            <MdFavorite
              onClick={() => {
                if (userId !== id) {
                  dispatch(
                    dislikePost({
                      dislikedBy: userId,
                      id: _id,
                      postedBy: id,
                    })
                  );
                  _setLikes(_likes.filter((like) => like !== userId));
                } else {
                  notify("You can't dislike your own post", "error");
                }
              }}
              size={25}
              className="fill-primary cursor-pointer order-1 md:-order-1"
            />
          )}

          <span className="text-lightBlue ">
            {_likes.length}{" "}
            <span className="hidden md:inline">
              Like
              {_likes.length > 1 ? "s" : ""}
            </span>
          </span>
        </div>
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          <MdComment
            onClick={() => {
              setIsCommentClicked(
                (prevIsCommentClicked) => !prevIsCommentClicked
              );
            }}
            size={25}
            className="fill-primary cursor-pointer order-1 md:-order-1"
          />
          <span className="text-lightBlue">
            {_comments.length}{" "}
            <span className="hidden md:inline">
              Comment
              {_comments.length > 1 ? "s" : ""}
            </span>
          </span>
        </div>
        <div className="flex md:gap-3 gap-1 items-center md:flex-row flex-col">
          <MdShare
            size={25}
            className="fill-primary cursor-pointer order-1 md:-order-1"
          />
          <span className="text-lightBlue">
            {shares.length}{" "}
            <span className="hidden md:inline">
              Share
              {shares.length > 1 ? "s" : ""}
            </span>
          </span>
        </div>
      </div>
      {isCommentClicked && (
        <CommentsContainer
          comments={_comments}
          setComments={_setComments}
          postId={_id}
          userId={userId}
          onClick={() => {}}
          postedBy={post.postedBy}
          profilePictureURL={profilePictureURL}
        />
      )}
    </div>
  );
};

export default PostCard;

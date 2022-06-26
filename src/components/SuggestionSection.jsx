import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSuggestedUsers } from "../features/suggestedUsers/suggestedUsersSlice";
import { searchUsers } from "../services/auth/authService";
import { Loader } from "./Loader";
import { NotAvailable } from "./NotAvailable";
import { UserList } from "./UserList";

export const SuggestionSection = () => {
  const suggestedUsers = useSelector((state) => state.suggestedUsers);
  const dispatch = useDispatch();
  const observer = useRef();
  const [skip, setSkip] = useState(0);

  const loaderRef = useCallback(
    (node) => {
      if (suggestedUsers.status === "loading") return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSkip(suggestedUsers.data.length);
        }
      });
      if (node) observer.current.observe(node);
    },
    [suggestedUsers]
  );
  useEffect(() => {
    dispatch(clearSuggestedUsers());
  }, []);
  useEffect(() => {
    dispatch(searchUsers({ skip }));
  }, [skip]);

  return (
    <div className="md:flex flex-col hidden items-center   w-3/12 fixed right-0 h-screen overflow-y-auto scrollbar-none mx-5">
      <h1 className=" text-lg text-lightBlue ">Suggested People</h1>
      <div className="flex flex-col gap-4 justify-center items-center mt-5">
        {suggestedUsers.status === "loading" && <Loader type="medium" />}
        {suggestedUsers.status !== "loading" &&
          suggestedUsers.data.length === 0 && (
            <NotAvailable title={`No suggested user available`} />
          )}
        {suggestedUsers.status !== "loading" &&
          suggestedUsers.data.length > 0 && (
            <UserList
              users={suggestedUsers.data}
              ref={loaderRef}
              type="small"
            />
          )}
      </div>
    </div>
  );
};

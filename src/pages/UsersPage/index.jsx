import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Layout, Loader, NotAvailable } from "../../components";
import { UserList } from "../../components/UserList";
import { useSearch } from "../../context";
import { clearSearchedUsers } from "../../features/searchedUsers/searchedUsersSlice";
import { searchUsers } from "../../services/auth/authService";

export const UsersPage = () => {
  const dispatch = useDispatch();
  let search = useLocation().search;
  search = new URLSearchParams(search).get("search");
  const { skip, setSkip } = useSearch();

  const searchedUsers = useSelector((state) => state.searchedUsers);

  const observer = useRef();
  const loaderRef = useCallback(
    (node) => {
      if (searchedUsers.status === "loading") return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSkip(searchedUsers.data.length);
        }
      });
      if (node) observer.current.observe(node);
    },
    [searchedUsers]
  );
  useEffect(() => {
    dispatch(clearSearchedUsers());
  }, []);
  useEffect(() => {
    dispatch(searchUsers({ search, skip }));
  }, [skip, search]);

  return (
    <Layout>
      <h1 className="text-lightBlue text-center  mt-8 text-xl font-semibold">
        <span className="text-lightBlue font-medium">Search Results for</span>{" "}
        <span className="text-lightBlue text-opacity-80">{search}</span>
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center mt-5">
        {searchedUsers.status === "loading" && <Loader type="medium" />}
        {searchedUsers.status === "succeeded" &&
          searchedUsers.data.length === 0 && (
            <NotAvailable title={`No user found`} />
          )}
        {searchedUsers.status === "succeeded" &&
          searchedUsers.data.length > 0 && (
            <UserList users={searchedUsers.data} ref={loaderRef} />
          )}
      </div>
    </Layout>
  );
};

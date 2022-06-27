import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { PrivateRoute } from "./components";
import { useSideBarItem } from "./context";
import {
  BookmarkedPage,
  ExplorePage,
  FollowersPage,
  FollowingPage,
  HomePage,
  LoginPage,
  MessagePage,
  PageNotFound,
  PostPage,
  ProfilePage,
  SearchedPostsPage,
  SignupPage,
  UsersPage,
} from "./pages";
function App() {
  const { setActiveName } = useSideBarItem();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveName("Home");
    } else {
      let name = location.pathname.split("/")[1];
      name = name.charAt(0).toUpperCase() + name.slice(1);
      setActiveName(name);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookmarks" element={<BookmarkedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile/:profileId" element={<ProfilePage />} />
          <Route path="/messages/" element={<MessagePage />} />
          <Route path="/messages/:conversationId" element={<MessagePage />} />
          <Route
            path="/users/:profileId/followers"
            element={<FollowersPage />}
          />
          <Route
            path="/users/:profileId/following"
            element={<FollowingPage />}
          />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<SearchedPostsPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

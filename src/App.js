import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { PrivateRoute } from "./components";
import { useSideBarItem } from "./context/sideBarItemContext";
import {
  BookmarkedPage,
  ExplorePage,
  HomePage,
  LoginPage,
  MessagePage,
  ProfilePage,
  SignupPage,
} from "./pages";
import {
  fetchArchivedPosts,
  fetchBookmarkedPosts,
} from "./services/posts/postsService";
function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);
  useEffect(() => {
    dispatch(fetchBookmarkedPosts());
    dispatch(fetchArchivedPosts());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <BookmarkedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <ExplorePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/messages/"
          element={
            <PrivateRoute>
              <MessagePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

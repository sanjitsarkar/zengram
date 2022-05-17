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
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookmarks" element={<BookmarkedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/messages/" element={<MessagePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PrivateRoute } from "./components";
import { BookmarkedPage, HomePage, LoginPage, SignupPage } from "./pages";
import {
  fetchArchivedPosts,
  fetchBookmarkedPosts,
} from "./services/posts/postsService";
function App() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    user && navigate("/");
  }, [user]);
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

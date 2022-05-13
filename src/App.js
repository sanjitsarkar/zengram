import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PrivateRoute } from "./components";
import { HomePage, LoginPage, SignupPage } from "./pages";
function App() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

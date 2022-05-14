import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRoute = () => {
  const auth = useSelector((state) => state.auth);

  return auth.user ? (
    <Navigate to="/" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default AuthRoute;

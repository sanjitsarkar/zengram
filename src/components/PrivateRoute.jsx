import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth.user ? children : <Navigate to="/login" replace />;
};
export default PrivateRoute;

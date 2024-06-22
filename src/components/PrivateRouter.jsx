import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../store/Context";

function PrivateRoute() {
  const { state } = useContext(userContext);
  return state.user.isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

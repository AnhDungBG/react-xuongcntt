import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../store/Context";
import AccessDenied from "../pages/AccessDenied";

function PrivateRoute() {
  const { isAuthenticated, user } = useContext(authContext);
  console.log(isAuthenticated, user);
  if (user?.role !== "admin") {
    return <AccessDenied />;
  }
  return <Outlet />;
}

export default PrivateRoute;

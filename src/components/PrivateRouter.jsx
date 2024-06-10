import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
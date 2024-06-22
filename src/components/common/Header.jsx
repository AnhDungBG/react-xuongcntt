import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../store/Context";

function Header() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);
  const logout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    navigate("/login");
  };
  return (
    <div className="row p-4">
      <div className="col-6">
        <ul className="d-flex items-center justify-around">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/feature">Feature</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <div className="user">
          {state.user.isAuth ? (
            `Hello ${state.user.user}`
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </div>
        <div className="">
          {state.user.isAuth ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const email = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.removeItem("user");
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
            <Link to="/feature">Feature</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          {email ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {email ? (
            ""
          ) : (
            <li>
              <Link to="/Register">Register</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="col-6"></div>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";

function Header() {
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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="col-6"></div>
    </div>
  );
}

export default Header;

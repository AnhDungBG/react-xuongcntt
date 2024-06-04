import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/admin">Home</Link>
            <Link to="/admin">Report</Link>
            <Link to="/admin">Users</Link>
          </li>
        </ul>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="sidebar">
                <h1>Hello Admin</h1>
                <ul>
                  <li>
                    <Link>Link</Link>
                  </li>
                  <li>
                    <Link>Link</Link>
                  </li>
                  <li>
                    <Link>Link</Link>
                  </li>
                  <li>
                    <Link>Link</Link>
                  </li>
                  <li>
                    <Link>Link</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};
LayoutAdmin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAdmin;

import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./LayoutAdmin.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { authContext } from "../../store/Context";

const LayoutAdmin = () => {
  const { user, logout } = useContext(authContext);

  return (
    <div className={`w-100 ${styles.dashboard}`}>
      <div className={` col-2 ${styles.sidebar}`}>
        <div className={`${styles.logo}`}>
          <img src="" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} />
              <Link to="/">Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faProductHunt} />
              <Link to="/admin">Products</Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faGear} />
              <Link to="/admin/products">Setting</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartSimple} />
              <Link to="/admin/products">Chart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={` col-10 ${styles.main_content}`}>
        <div className={`${styles.header_inner}`}>
          <div>
            <h2>Hello Admin</h2>
          </div>
          <div className={`${styles.user}`}>
            <button className={`${styles.mail}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button className={`${styles.notifications}`}>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <div className={`${styles.profile}`}>
              <img src={user.avatar} alt="user" />
              <ul className={`${styles.menuItems}`}>
                <li>
                  <button>My Profile</button> <br />
                </li>
                <li>
                  <button onClick={() => logout()}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.content}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
LayoutAdmin.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LayoutAdmin;

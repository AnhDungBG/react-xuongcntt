import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../store/Context";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Header() {
  const { user, isAuthenticated } = useContext(authContext);
  const [bg, setBG] = useState("old");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBG("new");
      } else {
        setBG("old");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={` container-fluid  ${styles.header}  ${styles[bg]} `}>
      <div className={`${styles.header_top} container `}>
        <Link to={"/"} className={`${styles.logo} `}>
          <img
            style={{ borderRadius: "50%" }}
            src="../../../src/assets/image/image.png"
            alt=""
          />
        </Link>
        <div className={`${styles.contact}`}>
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <p> GỌI NGAY: 19006750</p>
        </div>
        <div className={`${styles.info}`}>
          <ul>
            <li>
              {isAuthenticated ? (
                <Link to={"/admin"}>
                  <img
                    style={{ borderRadius: "50%" }}
                    src={user.avatar}
                    alt=""
                  />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              )}
            </li>
            <li>
              <Link to={"/cart"}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.header_nav} container`}>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Product</Link>
            </li>
            <li>
              <Link to={"#"}>About us</Link>
            </li>
            <li>
              <Link to={"#"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <form className={`${styles.header_search} `} action="">
          <input type="text" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;

import PropTypes from "prop-types";
import styles from "./Button.module.scss";
function Button({ children, type }) {
  return <button className={styles[type]}>{children}</button>;
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
export default Button;

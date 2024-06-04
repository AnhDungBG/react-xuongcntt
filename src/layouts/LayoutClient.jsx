import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PropTypes from "prop-types";
const LayoutClient = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
LayoutClient.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LayoutClient;

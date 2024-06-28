import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
function ProductCard({ data }) {
  return (
    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3 ">
      <div className={`${styles.productCard}`}>
        <Link to={`/product/${data.id}`} className={styles.imageLink}>
          <img src={data.thumbnail} alt={data.title} />
        </Link>
        <div className={`${styles.content}`}>
          <Link to={`/product/${data.id}`}>
            <h5 className="card-title">{data.title}</h5>
          </Link>
          <p className={`${styles.price}`}>${data.price}</p>
          <Button type="secondary">Mua ngay</Button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.node.isRequired,
};
export default ProductCard;

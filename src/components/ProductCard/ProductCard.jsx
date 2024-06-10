import { Link } from "react-router-dom";
import s from "./ProductCard.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
function ProductCard({ data }) {
  return (
    <div className={s.ProductCard}>
      <div className="card item" style={{ width: "18rem", height: "100%" }}>
        <Link to={`/products/${data.id}`}>
          <img
            src={data.thumbnail}
            alt=""
            className="card-img-top"
            style={{ height: "10rem", objectFit: "cover" }}
          />
        </Link>
        <div className="card-body">
          <Link to={`/products/${data.id}`}>
            <h2>{data.title}</h2>
          </Link>
          <p className="card-text">${data.price}</p>
          <p className="card-text">{data.description}</p>
        </div>
        <Button type="primary"> Button</Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.string.isRequired,
};
export default ProductCard;

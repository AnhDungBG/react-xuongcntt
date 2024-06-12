import { Link } from "react-router-dom";
import s from "./ProductCard.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
function ProductCard({ data }) {
  return (
    <div className={`card ${s.ProductCard}`}>
      <Link to={`/products/${data.id}`} className={s.imageLink}>
        <img
          src={data.thumbnail}
          alt={data.title}
          className="card-img-top"
          style={{ height: "10rem", objectFit: "cover" }}
        />
      </Link>
      <div className="card-body">
        <Link
          to={`/products/${data.id}`}
          className="text-decoration-none text-dark"
        >
          <h5 className="card-title">{data.title}</h5>
        </Link>
        <p className="card-text text-primary">${data.price}</p>
        <p className={`card-text ${s.description}`}>{data.description}</p>
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.string.isRequired,
};
export default ProductCard;

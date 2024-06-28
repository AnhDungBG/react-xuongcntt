import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function ProductCardAdmin({ product, handleDelete }) {
  return (
    <>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.brand}</td>
      <td>{product.price}</td>
      <td>{product.description || "Updating"}</td>
      <td>
        <img width="200px" src={product.thumbnail} alt="" />
      </td>

      <td style={{ display: "flex" }}>
        <button
          onClick={() => handleDelete(product.id)}
          className="btn btn-danger m-2 px-3"
        >
          Delete
        </button>
        <Link
          to={`/admin/product-form/${product.id}`}
          className="btn btn-primary px-3 py-2 text-center"
        >
          Edit
        </Link>
      </td>
    </>
  );
}
ProductCardAdmin.propTypes = {
  product: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ProductCardAdmin;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function ProductCardAdmin({ product, handleDelete }) {
  return (
    <>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description || "Updating"}</td>
      <td>
        <button
          onClick={() => handleDelete(product.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <Link
          to={`/admin/product-form/${product.id}`}
          className="btn btn-primary"
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

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Dashboard = ({ data, remove }) => {
  const removeProducts = (id) => {
    remove(id);
  };
  return (
    <div>
      <h1>Hello Admin</h1>
      <Link to="/admin/product-form" className="btn btn-primary">
        Add new product
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description || "Updating"}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeProducts(product.id);
                  }}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Dashboard.propTypes = {
  data: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
};
export default Dashboard;

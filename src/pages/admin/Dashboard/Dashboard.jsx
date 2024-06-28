import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../../../store/Context.jsx";
import { useProductActions } from "../../../store/MiddleWares.jsx";
import style from "./Dashboard.module.scss";
import ProductCardAdmin from "./../Product/ProductCardAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(productContext);
  const { products } = state;
  const { deleteProduct } = useProductActions(dispatch);
  const handleDelete = async (id) => {
    await deleteProduct(id);
    navigate("/admin");
  };

  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  };
  const handleFilterProduct = (e) => {
    setFilterValue(e.target.value);
  };
  const getProductList = () => {
    return products.filter(
      (product) =>
        product?.title?.toUpperCase()?.includes(searchValue?.toUpperCase()) &&
        (filterValue === "" ||
          product?.brand?.toUpperCase()?.includes(filterValue?.toUpperCase()))
    );
  };

  const productList = getProductList();

  return (
    <div className="mt-2">
      <Link to="/admin/product-form" className="btn btn-primary">
        Add new product
      </Link>
      <div className={`${style.filter__products}`}>
        <form className="search__bar">
          <input
            type="text"
            placeholder="Search product by title...."
            onChange={handleChangeValue}
            value={searchValue}
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className={`${style.filter}`}>
          <select onChange={handleFilterProduct} name="filter">
            <option value="">---Bộ lọc----</option>
            <option value="nike">Nike Air</option>
            <option value="puma">Puma</option>
            <option value="nike_jordan">Nike Jordan</option>
            <option value="nike_Air_Max">Nike Air Max</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <ProductCardAdmin product={product} handleDelete={handleDelete} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Dashboard;

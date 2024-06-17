import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../../store/Context.js";
import { useProductActions } from "../../store/MiddleWares";
import style from "../admin/Dashboard.module.scss";
import ProductCardAdmin from "./Product/ProductCardAdmin";
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
    <div>
      <h1>Hello Admin</h1>
      <Link to="/admin/product-form" className="btn btn-primary">
        Add new product
      </Link>
      <div className={`${style.filter__products}`}>
        <div className="search__bar">
          <input
            type="text"
            placeholder="Search product by title...."
            onChange={handleChangeValue}
            value={searchValue}
          />
        </div>
        <div>
          <select onChange={handleFilterProduct} name="filter">
            <option value="">---Bộ lọc----</option>
            <option value="iphone">Iphone</option>
            <option value="samsung">Samsung</option>
            <option value="xiaomi">Xiaomi</option>
            <option value="sony">Sony</option>
          </select>
        </div>
      </div>

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

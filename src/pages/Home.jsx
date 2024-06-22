import ProductCard from "../components/ProductCard/ProductCard";
import { useContext } from "react";
import { productContext } from "../store/Context.jsx";
function Home() {
  const { state } = useContext(productContext);
  const { products } = state;
  return (
    <div className="container w-100">
      <h1>List Products</h1>
      <div className="row w-100">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              style={{ height: "500px" }}
              key={product.id}
            >
              <ProductCard data={product} />
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Home;

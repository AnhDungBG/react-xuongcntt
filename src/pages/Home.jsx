import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard/ProductCard";
function Home({ data }) {
  return (
    <div className="container w-100">
      <h1>List Products</h1>
      <div className="row w-100">
        {data && data.length > 0 ? (
          data.map((product) => (
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
Home.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Home;

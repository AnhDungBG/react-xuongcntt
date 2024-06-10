import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";
function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <div className=" container">
      <div key={product.id} className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={product.thumbnail}
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-text">${product.price}</p>
              <p className="card-text">{product.description}</p>
              <button className="btn btn-danger">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

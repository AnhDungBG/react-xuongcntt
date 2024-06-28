import { useContext } from "react";
import styles from "./Products.module.scss";
import { productContext } from "../../store/Context";
import ProductCard from "../../components/ProductCard/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faModx } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Products() {
  const { state } = useContext(productContext);
  const { products } = state;
  return (
    <div className={`container-fluid mt-40 ${styles.products}`}>
      <div className={`${styles.banner}`}>
        <img src="../../../src/assets/image/products/banner-small.jpg" alt="" />
        <h2>Tất cả sản phẩm </h2>
      </div>
      <div className={`container ${styles.content}`}>
        <div className="row ">
          <div className={`col-3 ${styles.sidebar}`}>
            <div className={`${styles.category}`}>
              <h3>Danh mục</h3>
              <ul>
                <li>
                  <Link>Giày thể thao</Link>
                </li>
                <li>
                  <Link>Giày thời trang</Link>
                </li>
                <li>
                  <Link>Giày công sở</Link>
                </li>
                <li>
                  <Link>Giày dạ tiệc</Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.prices}`}>
              <div>
                <h3>Giá sản phẩm</h3>
                <ul>
                  <li>
                    <input type="checkbox" /> Dưới 100k
                  </li>
                  <li>
                    <input type="checkbox" /> 100k -200k
                  </li>
                  <li>
                    <input type="checkbox" /> 200k - 300k
                  </li>
                  <li>
                    <input type="checkbox" /> 300k - 500k
                  </li>
                </ul>
              </div>
              <div>
                <span>Loại</span>
                <ul>
                  <li>
                    <input type="checkbox" /> Giày nam
                  </li>
                  <li>
                    <input type="checkbox" /> Giày nữ
                  </li>
                </ul>
              </div>
              <div>
                <span>Thương hiệu</span>
                <ul>
                  <li>
                    <input type="checkbox" /> Nike Air
                  </li>
                  <li>
                    <input type="checkbox" /> Nike Air Max
                  </li>
                  <li>
                    <input type="checkbox" />
                    Nike Jordan
                  </li>
                  <li>
                    <input type="checkbox" />
                    Puma
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img src="../../../src/assets/image/products/image.png" alt="" />
            </div>
          </div>
          <div className={`col-9 `}>
            <div className={`${styles.filter}`}>
              <div className={`${styles.format}`}>
                <button>
                  <FontAwesomeIcon icon={faModx} />
                </button>
              </div>
              <div>
                <span>Sắp xếp theo</span>
                <select>
                  <option value="">--Mặc định---</option>
                  <option value="az">A - Z</option>
                  <option value="za">Z - A</option>
                </select>
              </div>
            </div>
            <div className="row">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

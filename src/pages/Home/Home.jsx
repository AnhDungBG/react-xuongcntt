import { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { productContext } from "../../store/Context";
import ProductCard from "./../../components/ProductCard/ProductCard";
import styles from "./Home.module.scss";
function Home() {
  const { state } = useContext(productContext);
  const { products } = state;

  return (
    <div className={styles.home}>
      <section className={styles.banner}>
        <img src="../../../src/assets/image/banner.jpg" alt="" />
      </section>
      <section className={`${styles.category} container`}>
        <p>Toàn bộ sản phẩm đều là hàng chính hãng</p>
        <h2>DANH MỤC SẢN PHẨM</h2>
        <ul>
          <li>
            <Link>
              <img src="../../../src/assets/image/category/1.png" alt="" />
            </Link>
            <span>Chạy bộ</span>
          </li>
          <li>
            <Link>
              <img src="../../../src/assets/image/category/2.png" alt="" />
            </Link>
            <span>Leo núi</span>
          </li>
          <li>
            <Link>
              <img src="../../../src/assets/image/category/3.png" alt="" />
            </Link>
            <span>Quần vợt</span>
          </li>
          <li>
            <Link>
              <img src="../../../src/assets/image/category/4.png" alt="" />
            </Link>
            <span>Giày bóng giổ</span>
          </li>
        </ul>
      </section>
      <section className={`${styles.products}`}>
        <h2>DEAL CỰC HẤP DẪN</h2>
        <div className={`${styles.content} container`}>
          <dov className={` row m-3`}>
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))
            ) : (
              <p>No products available</p>
            )}
          </dov>
        </div>
      </section>
      <div className={` container ${styles.best_seller}`}>
        <div className={`${styles.title}`}>
          <h4>LOOK BOOK</h4>
          <h2>GIÀY CHẠY BỘ BÁN NHIỀU NHẤT</h2>
          <p>
            Bước vào thế giới của sự thoải mái và phong cách vô song với những
            đôi giày đặc biệt này, chúng chắc chắn sẽ để lại ấn tượng lâu dài ở
            bất cứ nơi đâu bạn đến.
          </p>
          <div>
            <button>Giay nam</button>
            <button>Giay nu</button>
          </div>
        </div>
        <img src="../../../src/assets/image/bestseller/1.png" alt="" />
        <img src="../../../src/assets/image/bestseller/2.png" alt="" />
      </div>
    </div>
  );
}

export default Home;

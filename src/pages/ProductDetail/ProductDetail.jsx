import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.scss";
import instance from "../../axios";
import Button from "./../../components/Button/Button";
function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleChangeColor = (color) => {
    setSelectedColor(color);
  };
  const handleChangeSize = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <div className={`container mt-48`}>
      <div className="row">
        <div className={` ${styles.product} col-9  `}>
          <div className="row">
            <div className={`col-5 ${styles.image}`}>
              <img src={product.thumbnail} alt="" />
            </div>
            <div className={`col-7 ${styles.information}`}>
              <div className={`${styles.detail}`}>
                <h2> FLASH SALE</h2>
                <div className={`${styles.title}`}>
                  <h3>{product.title}</h3>
                  <p>
                    Thương hiệu : <span>{product.brand}</span>
                  </p>
                </div>
                <span>${+product.price * quantity}</span>
                <div>
                  <div className={`${styles.colors}`}>
                    Color :
                    {product?.colors?.map((color, index) => (
                      <button
                        key={`color-${index}`}
                        className={`${styles.color_option}  ${
                          styles[selectedColor === color.name ? "selected" : ""]
                        }`}
                        onClick={() => handleChangeColor(color.name)}
                      >
                        <img src={`${color.img}`} alt={color.name} />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className={`${styles.sizes}`}>
                    Size:
                    {product?.sizes?.map((size, index) => (
                      <button
                        key={`size-${index}`}
                        className={`${styles.size_option} ${
                          styles[selectedSize == size ? "selected" : ""]
                        }`}
                        onClick={() => handleChangeSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={`${styles.quantity}`}>
                  <p>Quantity:</p>
                  <div className={`${styles.detail}`}>
                    <button onClick={() => handleMinusQuantity()}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handlePlusQuantity()}>+</button>
                  </div>
                  <Button type="primary">Mua ngay</Button>
                </div>
                <div className={`${styles.properties}`}>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className={`${styles.incentives}`}>
                <ul>
                  <li>
                    <img
                      src="../../../src/assets/image/productDetail/1.png"
                      alt=""
                    />
                    <span>Đổi trả cực dễ chỉ cần số điện thoại</span>
                  </li>
                  <li>
                    <img
                      src="../../../src/assets/image/productDetail/2.png"
                      alt=""
                    />
                    <span>
                      Đổi trả cực dễ chỉ cần số điện thoạiMiễn phí vận chuyển
                      cho đơn hàng trên 200K
                    </span>
                  </li>
                  <li>
                    <img
                      src="../../../src/assets/image/productDetail/3.png"
                      alt=""
                    />
                    <span>60 ngày đổi trả vì bất kỳ lý do gì</span>
                  </li>
                  <li>
                    <img
                      src="../../../src/assets/image/productDetail/4.png"
                      alt=""
                    />
                    <span>Hotline 19006750 hỗ trợ từ 8h30 - 22h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.sidebar} col-3 `}>
          <section className={`${styles.sidebar_top}`}>
            <h2>KHUYẾN MÃI ĐẶC BIỆT !!!</h2>
            <p>Áp dụng Phiếu quà tặng/ Mã giảm giá theo ngành hàng.</p>
            <p>Giảm giá 10% khi mua từ 5 sản phẩm trở lên..</p>
            <p>
              Tặng 100.000₫ mua hàng tại website thành viên Halu Cosmetics, áp
              dụng khi mua Online tại Hà Nội và 1 số khu vực khác..
            </p>
          </section>
          <section className={`${styles.sidebar_bottom}`}>
            <h2>NHẬP MÃ: HLU10</h2>
            <span>Mã giảm 10% cho đơn hàng tối thiểu 500k.</span>
            <button>Sao chép mã</button>
          </section>{" "}
          <section className={`${styles.sidebar_bottom}`}>
            <h2>NHẬP MÃ: HLU10</h2>
            <span>Mã giảm 10% cho đơn hàng tối thiểu 500k.</span>
            <button>Sao chép mã</button>
          </section>{" "}
          <section className={`${styles.sidebar_bottom}`}>
            <h2>NHẬP MÃ: HLU10</h2>
            <span>Mã giảm 10% cho đơn hàng tối thiểu 500k.</span>
            <button>Sao chép mã</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

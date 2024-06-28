import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.footer_section}>
          <h3>HỆ THỐNG CỬA HÀNG TOÀN QUỐC</h3>
          <p>
            <strong>HALU Đội Cấn</strong>
            <br />
            Địa chỉ: Tòa Ladeco, 266 Đội Cấn - Ba Đình - Hà Nội
            <br />
            Hotline: 19006750
          </p>
          <p>
            <strong>HALU Lữ Gia</strong>
            <br />
            Địa chỉ: 70 Lữ Gia - Quận 11 - TP. Hồ Chí Minh
            <br />
            Hotline: 19006750
          </p>
        </div>
        <div className={styles.footer_section}>
          <h3>CHÍNH SÁCH</h3>
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
            <li>
              <a href="#">Hệ thống cửa hàng</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_section}>
          <h3>ĐĂNG KÝ NHẬN TIN</h3>
          <p>
            Đăng ký nhận bản tin của chúng tôi để nhận các sản phẩm mới, mã
            khuyến mại nhanh nhất
          </p>
          <form>
            <input type="email" placeholder="Email của bạn" />
            <button type="submit">Đăng ký</button>
          </form>
          <div className={styles.social_icons}>
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={`container ${styles.payment_icons}`}>
          <img src="https://via.placeholder.com/50" alt="Payment Method" />
          <img src="https://via.placeholder.com/50" alt="Payment Method" />
          <img src="https://via.placeholder.com/50" alt="Payment Method" />
          <img src="https://via.placeholder.com/50" alt="Payment Method" />
          <img src="https://via.placeholder.com/50" alt="Payment Method" />
          <img src="https://via.placeholder.com/50" alt="Payment Method" />
        </div>
        <p>© Bản quyền thuộc về AnhDung | Cung cấp bởi AnhDung</p>
      </div>
    </footer>
  );
}

export default Footer;

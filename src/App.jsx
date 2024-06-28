import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

import AuthForm from "./components/AuthForm/AuthForm";
import About from "./pages/About/About.jsx";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import Dashboard from "./pages/admin/Dashboard/Dashboard.jsx";
import ProductForm from "./pages/admin/Product/ProductForm";
import LayoutAdmin from "./layouts/Admin/LayoutAdmin.jsx";
import PrivateRoute from "./routes/PrivateRouter";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
function App() {
  const location = useLocation();
  const isAdminLayout = location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminLayout && <Header />}
      {/* client */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm isRegister />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />

        {/* admin */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/product-form" element={<ProductForm />} />
            <Route path="/admin/product-form/:id" element={<ProductForm />} />
          </Route>
        </Route>
      </Routes>
      {!isAdminLayout && <Footer />}
    </>
  );
}

export default App;

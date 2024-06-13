import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

import AuthForm from "./components/AuthForm/AuthForm";
import PrivateRoute from "./components/PrivateRouter";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Products from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/Product/ProductForm";
function App() {
  return (
    <>
      <Header />
      <main>
        {/* client */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm isRegister />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/products/:id" element={<Products />} />

          {/* admin */}
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/product-form" element={<ProductForm />} />
            <Route path="/admin/product-form/:id" element={<ProductForm />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

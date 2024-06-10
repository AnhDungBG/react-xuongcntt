import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import instance from "./axios";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

import { getProducts } from "./axios";
import AuthForm from "./components/AuthForm";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Products from "./pages/Products";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/Product/ProductForm";
import PrivateRoute from "./components/PrivateRouter";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const remove = (id) => {
    (async () => {
      await instance.delete(`products/${id}`);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    })();
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = async (data) => {
    if (data.id) {
      await instance.patch(`products/${data.id}`, data);
    } else {
      const res = await instance.post("products", data);
      setProducts([...products, res.data]);
    }
    const newProducts = await getProducts();
    setProducts(newProducts);

    if (confirm("add successful, redirect to admin page")) {
      navigate("/admin");
    }
  };
  return (
    <>
      <Header />
      <main>
        {/* client */}
        <Routes>
          <Route path="/" element={<Home data={products} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm isRegister />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/products/:id" element={<Products />} />

          {/* admin */}
          <Route path="/admin" element={<PrivateRoute />}>
            <Route
              path="/admin"
              element={<Dashboard remove={remove} data={products} />}
            />
            <Route
              path="/admin/product-form"
              element={<ProductForm onChange={handleSubmit} />}
            />
            <Route
              path="/admin/product-form/:id"
              element={<ProductForm onChange={handleSubmit} />}
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

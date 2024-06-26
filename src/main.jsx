import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { ProductProvider, AuthContextProvider } from "./store/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

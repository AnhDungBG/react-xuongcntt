import { productContext, authContext } from "./Context.jsx";
import { useEffect, useReducer, useState } from "react";
import { productReducer } from "./Reducer.jsx";
import { initState } from "./Reducer";
import PropTypes from "prop-types";
import instance from "../axios";
import { useNavigate } from "react-router-dom";
function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initState);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
}
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const { data } = await instance.get("/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data[0]);
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, []);
  const register = async (data) => {
    try {
      const res = await instance.post(`/register`, data);
      localStorage.setItem("token", res.accessToken);
      setUser(res.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };
  const login = async (data) => {
    try {
      const res = await instance.post(`/login`, data);
      localStorage.setItem("token", res.data.accessToken);
      console.log(res);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
  };
  return (
    <authContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </authContext.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ProductProvider, AuthContextProvider };

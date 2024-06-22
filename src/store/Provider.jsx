import { productContext, userContext } from "./Context.jsx";
import { useEffect, useReducer } from "react";
import { productReducer, userReducer } from "./Reducer.jsx";
import { initState } from "./Reducer";
import PropTypes from "prop-types";
import instance from "../axios";
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
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initState);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      {" "}
      {children}
    </userContext.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ProductProvider, UserProvider };

import Context from "./Context";
import { useEffect, useReducer } from "react";
import reducer from "./Reducer";
import { initState } from "./Reducer";
import PropTypes from "prop-types";
import instance from "../axios";
function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
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
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ProductProvider };

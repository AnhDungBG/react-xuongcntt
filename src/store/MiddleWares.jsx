import { useCallback } from "react";
import instance from "../axios";

const useProductActions = (dispatch) => {
  // add product

  const addProduct = useCallback(
    async (data) => {
      try {
        const res = await instance.post("products", data);
        dispatch({ type: "ADD_PRODUCT", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );
  // edit product

  const editProduct = useCallback(
    async ({ data, id }) => {
      try {
        const res = await instance.patch(`products/${id}`, data);
        dispatch({ type: "EDIT_PRODUCT", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );
  // delete product
  const deleteProduct = useCallback(
    async (id) => {
      try {
        await instance.delete(`products/${id}`);
        dispatch({ type: "DELETE_PRODUCT", payload: id });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );
  return { addProduct, editProduct, deleteProduct };
};
export { useProductActions };

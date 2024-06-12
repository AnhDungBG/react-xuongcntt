const initState = {
  products: [],
  user: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        ],
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      };
  }
};

export default reducer;
export { initState };

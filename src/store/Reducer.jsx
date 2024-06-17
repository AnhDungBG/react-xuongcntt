const initState = {
  products: [],
  user: { isAuth: false, user: null },
};

const productReducer = (state, action) => {
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
const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: {
          ...state.user,
          isAuth: true,
          user: action.payload,
        },
      };
    case "LOGOUT":
      return {
        ...state,
        user: {
          ...state.user,
          isAuth: false,
          user: null,
        },
      };
  }
};

export { initState, productReducer, userReducer };

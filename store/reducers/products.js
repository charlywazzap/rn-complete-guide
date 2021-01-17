import { PRODUCTS } from "../../assets/data/dummy-data";
import { Product } from "../../models/product";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actions/products";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId == "u1"),
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter((product) => product.id != action.pid),
        availableProducts: state.availableProducts.filter((product) => product.id != action.pid),
      };
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const prodIndex = state.userProducts.findIndex((prod) => prod.id == action.pid);

      const updatedProd = new Product(
        action.pid,
        state.userProducts[prodIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[prodIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[prodIndex] = updatedProd;
      const availprodIndex = state.availableProducts.findIndex((prod) => prod.id == action.pid);
      const updatedAvailProds = [...state.availableProducts];
      updatedAvailProds[availprodIndex] = updatedProd;
      return {
        ...state,
        availableProducts: updatedAvailProds,
        userProducts: updatedUserProducts,
      };

    default:
      return state;
  }
};

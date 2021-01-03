import { CartItem } from "../../models/cart";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      if (state.items[addedProduct.id]) {
        //already added
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].price + productPrice
        );
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: updatedCartItem },
          totalAmmount: state.totalAmount + productPrice,
        };
      }
      const newCartItem = new CartItem(1, productPrice, productTitle, productPrice);
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: newCartItem },
        totalAmmount: state.totalAmount + productPrice,
      };

      break;

    default:
      return state;
  }
};

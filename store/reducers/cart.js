import { CartItem } from "../../models/cart";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/orders";

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
          state.items[addedProduct.id].sum + productPrice
        );
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: updatedCartItem },
          totalAmount: state.totalAmount + productPrice,
        };
      }
      const newCartItem = new CartItem(1, productPrice, productTitle, productPrice);
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: newCartItem },
        totalAmount: state.totalAmount + productPrice,
      };

      break;
    
    case REMOVE_FROM_CART:
      const currentQty = state.items[action.pid].quantity;
      const currentItem = state.items[action.pid]
      const updatedCartItems = {...state.items}
      if (currentQty > 1) {
        // need to remove it
        const updatedCartItem = new CartItem(
          state.items[action.pid].quantity - 1,
          currentItem.productPrice,
          currentItem.productTitle,
          currentItem.sum - currentItem.productPrice
        );
        return {
          ...state,
          items: { ...state.items, [action.pid]: updatedCartItem },
          totalAmount: state.totalAmount - currentItem.productPrice,
        };
      }
     
      delete updatedCartItems[action.pid]
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - currentItem.productPrice
      }
    
    case ADD_ORDER:
      return {
        ...state,
        ...initialState
      }
    default:
      return state;
  }
};

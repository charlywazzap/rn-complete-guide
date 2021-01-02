import { PRODUCTS } from '../../assets/data/dummy-data'

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId == 'u1')
}

export const productsReducer = (state = initialState , actions) => {
  return state
}
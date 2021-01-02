import { MEALS } from '../../assets/data/dummy-data'

const initialState ={
  meals: MEALS,
  filteredMeals: MEALS,
  favoritesMeals: [] ,
}

export const mealsReducer = (state = initialState , action) => {
  return state;
}

import { MEALS } from '../../assets/data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState ={
  meals: MEALS,
  filteredMeals: MEALS,
  favoritesMeals: [] ,
}

export const mealsReducer = (state = initialState , action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritesMeals.findIndex(meal => meal.id == action.mealId)
       if (existingIndex >= 0) {
         const updateFavMeals = [...state.favoritesMeals]
         updateFavMeals.splice(existingIndex,1)
         return {...state, favoritesMeals:updateFavMeals }
       }
       const newMeal = state.meals.find(meal =>  meal.id == action.mealId)
       return {...state, favoritesMeals:state.favoritesMeals.concat(newMeal) }
    default:
      return state;
  }
  
}

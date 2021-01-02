import { MEALS } from "../../assets/data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritesMeals: [],
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });

      return { ...state, filteredMeals: updatedFilteredMeals };
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritesMeals.findIndex((meal) => meal.id == action.mealId);
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoritesMeals];
        updateFavMeals.splice(existingIndex, 1);
        return { ...state, favoritesMeals: updateFavMeals };
      }
      const newMeal = state.meals.find((meal) => meal.id == action.mealId);
      return { ...state, favoritesMeals: state.favoritesMeals.concat(newMeal) };
    default:
      return state;
  }
};

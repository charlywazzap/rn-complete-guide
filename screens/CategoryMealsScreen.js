import React from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import { MealList } from "../components/MealList";
import { useSelector } from 'react-redux'

export const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const MEALS = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = MEALS.filter((meal) => meal.categoriesIds.indexOf(categoryId) >= 0);

  return (
    <MealList 
      navigation={props.navigation}
      data={ displayedMeals }
    />
  );
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const categoryId = navData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,

  };
};
// replace will remove the curent page wit the one you specify, useful with logins for example
const styles = StyleSheet.create({
});

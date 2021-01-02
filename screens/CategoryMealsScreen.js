import React from "react";
import { StyleSheet, View } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import { MealList } from "../components/MealList";
import { useSelector } from 'react-redux'
import { DefaultText }  from "../components/DefaultText";

export const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const MEALS = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = MEALS.filter((meal) => meal.categoriesIds.indexOf(categoryId) >= 0);

  if (!displayedMeals || displayedMeals.length == 0  ){
    return (
      <View style={styles.container }>
        <DefaultText>
            No  Meals Found. Check your Filters! 
        </DefaultText>
      </View>
    )
  }

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

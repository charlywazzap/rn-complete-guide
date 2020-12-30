import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { CATEGORIES, MEALS } from "../assets/data/dummy-data";
import { MealList } from '../components/MealList'

export const FavoritiesScreen = props => {

  const displayedMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
  return (
    <MealList 
      navigation={props.navigation}
      data={ displayedMeals }
    />
  );
};

FavoritiesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your  Favorites',
  };
};

const styles = StyleSheet.create({
  screen:{
    flex:1 ,
    justifyContent: "center",
    alignItems: "center"
  }
});

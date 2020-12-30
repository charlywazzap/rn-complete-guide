import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { CATEGORIES, MEALS } from "../assets/data/dummy-data";
import { MealList } from '../components/MealList'
import { CustomHeaderButton } from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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
  console.log(navData)
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName={"ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};


const styles = StyleSheet.create({
  screen:{
    flex:1 ,
    justifyContent: "center",
    alignItems: "center"
  }
});

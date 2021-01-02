import React from 'react'
import {  StyleSheet} from 'react-native'
import { MealList } from '../components/MealList'
import { CustomHeaderButton } from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from 'react-redux'

export const FavoritiesScreen = props => {
  const displayedMeals = useSelector(state => state.meals.favoritesMeals)

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

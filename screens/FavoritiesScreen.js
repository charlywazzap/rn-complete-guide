import React from 'react'
import {  StyleSheet, View} from 'react-native'
import { MealList } from '../components/MealList'
import { CustomHeaderButton } from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from 'react-redux'
import { DefaultText } from '../components/DefaultText';

export const FavoritiesScreen = props => {
  const displayedMeals = useSelector(state => state.meals.favoritesMeals)
  if (!displayedMeals || displayedMeals.length == 0  ){
    return (
      <View style={styles.container }>
        <DefaultText>
            No Favorite Meals Found. Start Adding Some! 
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

FavoritiesScreen.navigationOptions = (navData) => {

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
  },
  container:{
    flex:1 , 
    justifyContent: 'center',
    alignItems: 'center'
  }
});

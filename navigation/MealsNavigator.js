import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailsScreen } from "../screens/MealDetailsScreen";
import { FavoritiesScreen } from "../screens/FavoritiesScreen";
import Colors from "../constants/colors";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavConfig = {
  //
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS == "android" ? Colors.primary : "",
    },
    headerTintColor: Platform.OS == "android" ? "white" : Colors.primary,
  },
};

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      headerTitle: "Meal Categories Priority",
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetails: {
      screen: MealDetailsScreen,
    },
  },
  {...NavConfig ,  initialRouteName: "Categories"}
);

const FavoritesStackNav = createStackNavigator(
  {
    Favorites: {
      screen: FavoritiesScreen,
      headerTitle: "Favorites",
    },
    MealDetails: {
      screen: MealDetailsScreen,
    },
  }, NavConfig);


const TabConfig =   {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarColor: Colors.primary,
      tabBarLabel: 'Categories',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
  Favorites: {
    screen: FavoritesStackNav,
    navigationOptions: {
      tabBarColor: Colors.primary,
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
}

const MealsFavNavigator =  Platform.OS == 'android' ?
createMaterialBottomTabNavigator (TabConfig, {
    //activeColor: Colors.accent,
    shifting: true
  })
: createBottomTabNavigator(
  TabConfig,
  {
    tabBarOptions: {
      activeTintColor: Colors.accent,
    },
  }
);

export const MealNav = createAppContainer(MealsFavNavigator);

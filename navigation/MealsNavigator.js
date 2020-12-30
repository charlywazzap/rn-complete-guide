import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailsScreen } from "../screens/MealDetailsScreen";
import { FavoritiesScreen } from "../screens/FavoritiesScreen";
import Colors from "../constants/colors";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavConfig = {
  initialRouteName: "Categories",
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
  NavConfig
);

const MealsFavNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarLabel: 'Categories',
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Favorites: {
      screen: FavoritiesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accent,
    },
  }
);

export const MealNav = createAppContainer(MealsFavNavigator);

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailsScreen } from "../screens/MealDetailsScreen";
import Colors from "../constants/colors"
import { Platform } from 'react-native'

const NavConfig = {
  initialRouteName: 'Categories',
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: Platform.OS == "android" ? Colors.primary : "",
    },
    headerTintColor: Platform.OS == "android" ? "white" : Colors.primary,
  }
}

 const MealNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    headerTitle: "Meal Categories Priority"
  },
  CategoryMeals: CategoryMealsScreen,
  MealDetails: { 
    screen: MealDetailsScreen,
  },
},NavConfig);



export const MealNav = createAppContainer(MealNavigator)



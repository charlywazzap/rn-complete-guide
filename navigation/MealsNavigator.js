import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailsScreen } from "../screens/MealDetailsScreen";
import { FavoritiesScreen} from '../screens/FavoritiesScreen'
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


const MealsFavNavigator = createBottomTabNavigator({
    Meals: {
      screen: MealNavigator
    },
    Favorites: FavoritiesScreen
})



export const MealNav = createAppContainer(MealsFavNavigator)



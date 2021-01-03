import Colors from '../constants/colors'
import { createStackNavigator } from "react-navigation-stack";
import { ProductOverviewScreen } from "../screens/shop/ProductOverviewScreen";
import colors from '../constants/colors';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { ProductDetailScren  }from '../screens/shop/ProductDetailScreen'
import { CartScreen } from '../screens/shop/CartScreen'

const ProductNavigator = createStackNavigator({
  ProductOverview: ProductOverviewScreen,
  ProductDetail: ProductDetailScren,
  Cart: CartScreen
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: Platform.OS == 'android' ? colors.primary : '',
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : colors.primary
  }
})

export const ProductNav = createAppContainer(ProductNavigator)
import Colors from '../constants/colors'
import { createStackNavigator } from "react-navigation-stack";
import { ProductOverviewScreen } from "../screens/shop/ProductOverviewScreen";
import colors from '../constants/colors';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { ProductDetailScren  }from '../screens/shop/ProductDetailScreen'

const ProductNavigator = createStackNavigator({
  ProductOverview: ProductOverviewScreen,
  ProductDetail: ProductDetailScren,
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: Platform.OS == 'android' ? colors.primary : '',
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : colors.primary
  }
})

export const ProductNav = createAppContainer(ProductNavigator)
import React from "react";
import Colors from "../constants/colors";
import { createStackNavigator } from "react-navigation-stack";
import { ProductOverviewScreen } from "../screens/shop/ProductOverviewScreen";
import colors from "../constants/colors";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { ProductDetailScren } from "../screens/shop/ProductDetailScreen";
import { CartScreen } from "../screens/shop/CartScreen";
import { OrdersScreen } from "../screens/shop/OrdersScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { UserProductScreen } from '../screens/user/UserProductScreen'

const defatulNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS == "android" ? colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS == "android" ? "white" : colors.primary,
};

const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScren,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => {
        return (
          <Ionicons name={Platform.OS == "android" ? "md-cart" : "ios-cart"} size={23} color={drawerConfig.tintColor} />
        );
      },
    },
    defaultNavigationOptions: defatulNavOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => {
        return (
          <Ionicons
            name={Platform.OS == "android" ? "md-list" : "ios-list"}
            size={23}
            color={drawerConfig.tintColor}
          />
        );
      },
    },
    defaultNavigationOptions: defatulNavOptions,
  }
);

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => {
        return (
          <Ionicons
            name={Platform.OS == "android" ? "md-create" : "ios-create"}
            size={23}
            color={drawerConfig.tintColor}
          />
        );
      },
    },
    defaultNavigationOptions: defatulNavOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Product: ProductNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTitnColor: Colors.primary,
    },
  }
);

export const ProductNav = createAppContainer(ShopNavigator);

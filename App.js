import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Fonts from "expo-font";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { productsReducer  } from './store/reducers/products'
import {  ProductNav} from './navigation/ShopNavigator'

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  let [fontsLoaded, error] = Fonts.useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ProductNav/>
    </Provider>
  );
}

//https://reactnative.dev/docs/flexbox
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

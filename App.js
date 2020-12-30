import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { MealNav } from './navigation/MealsNavigator';
import { Ionicons } from '@expo/vector-icons';
import * as Fonts from 'expo-font';



export default function App() {
  let [fontsLoaded, error] = Fonts.useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  console.log(error)
  return (
    <MealNav></MealNav>
  );
}

//https://reactnative.dev/docs/flexbox
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
});

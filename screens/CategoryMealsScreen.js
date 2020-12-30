import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from '../assets/data/dummy-data'

export const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

  return (
    <View style={styles.screen}>
      <Text>The Category Meals : {selectedCategory.title}</Text>
      <Button title={"Go to Details"} onPress={() => props.navigation.navigate("MealDetails")} />
      <Button title={"Go to back"} onPress={() => props.navigation.goBack()} />
      <Button title={"Go to back with pop (only works withstack navs)"} onPress={() => props.navigation.pop()} />
      <Button title={"Go to Details with replace"} onPress={() => props.navigation.replace("MealDetails")} /> 
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const categoryId = navData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

  return {
    headerTitle: selectedCategory.title
    
  }
}
// replace will remove the curent page wit the one you specify, useful with logins for example
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

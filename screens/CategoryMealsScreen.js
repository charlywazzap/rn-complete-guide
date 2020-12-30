import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button title={"Go to Details"} onPress={() => props.navigation.navigate("MealDetails")} />
      <Button title={"Go to back"} onPress={() => props.navigation.goBack()} />
      <Button title={"Go to back with pop (only works withstack navs)"} onPress={() => props.navigation.pop()} />
      <Button title={"Go to Details with replace"} onPress={() => props.navigation.replace("MealDetails")} /> 
    </View>
  );
};
// replace will remove the curent page wit the one you specify, useful with logins for example
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

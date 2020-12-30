import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../components/HeaderButton";

export const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title={"Go to back with pop (only works withstack navs)"} onPress={() => props.navigation.pop()} />
      <Button title={"Go to back to categories ( very top or root))"} onPress={() => props.navigation.popToTop()} />
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navData) => {
  const mealId = navData.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id == mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="star" />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

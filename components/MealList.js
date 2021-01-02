import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MealItem } from "./MealItem";
import { useSelector } from "react-redux";

export const MealList = (props) => {
  const favMeals = useSelector((state) => state.meals.favoritesMeals);
  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(item, idx) => item.id}
        data={props.data}
        renderItem={(itemData) => {
          const currentMealisFav = favMeals.some((meal) => meal.id === itemData.item.id);
          return (
            <MealItem
              {...itemData.item}
              onPress={() =>
                props.navigation.navigate({
                  routeName: "MealDetails",
                  params: { mealId: itemData.item.id, mealTitle: itemData.item.title, isFav: currentMealisFav },
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

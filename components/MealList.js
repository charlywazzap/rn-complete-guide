import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MealItem } from './MealItem'

export const MealList = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(item, idx) => item.id}
        data={props.data}
        renderItem={(itemData) => {
          return (
            <MealItem
              {...itemData.item}
              onPress={() =>
                props.navigation.navigate({ routeName: "MealDetails", params: { mealId: itemData.item.id, mealTitle: itemData.item.title } })
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

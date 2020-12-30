import React from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";

const renderGridItem = (navigation, itemdata) => {
  return (
    <CategoryGridTile
      title={itemdata.item.title}
      color={itemdata.item.color}
      onPress={() =>
        navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemdata.item.id,
          },
        })
      }
    />
  );
};

export const CategoriesScreen = (props) => {
  return (
    <FlatList
      keyExtractor={(item, idx) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem.bind(this, props.navigation)}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

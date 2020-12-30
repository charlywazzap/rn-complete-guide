import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES } from '../assets/data/dummy-data'

const renderGridItem = itemdata => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemdata.item.title}</Text>
    </View>
  )
}

export const CategoriesScreen = (props) => {
  return (
    <FlatList
      keyExtractor={(item, idx)=> item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={
        renderGridItem
      }
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex:1,
    margin: 15,
    height: 150,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

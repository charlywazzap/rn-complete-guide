import React from "react";
import {  StyleSheet,  FlatList } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { CustomHeaderButton } from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName={"ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
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

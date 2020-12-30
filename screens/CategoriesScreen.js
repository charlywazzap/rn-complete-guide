import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title={"Go to Meals"}
        onPress={() => {
          props.navigation.push("CategoryMeals");
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

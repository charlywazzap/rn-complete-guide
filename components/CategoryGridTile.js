import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";

export const CategoryGridTile = (props) => {
  let Wrapper = TouchableOpacity;

  if (Platform.OS == "android" && Platform.Version >= 21) {
    Wrapper = TouchableNativeFeedback;
  }
  return (
    <View style={{ ...styles.gridItem, ...props.style }}>
      <Wrapper {...props} style={{ flex:1 }} onPress={props.onPress}>
        <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Wrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden"
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: "right",
  },
});

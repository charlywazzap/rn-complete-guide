import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {props.title} {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  buttonText: {
    color: "white",
    fontSize: "open-sans",
    fontSize: 18,
  },
});

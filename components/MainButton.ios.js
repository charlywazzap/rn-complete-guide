import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform } from "react-native";
import colors from "../constants/colors";

export const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity ;
  return (
    <ButtonComponent onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {props.title} {props.children}
        </Text>
      </View>
    </ButtonComponent>
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
    fontSize: Dimensions.get('window').height < 500 ? 14 : 18,
  },
});

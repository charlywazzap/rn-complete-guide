import React from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import { DefaultText } from './DefaultText'

export const MealItem = (props) => {
  let Wrapper = TouchableOpacity;

  if (Platform.OS == "android" && Platform.Version >= 21) {
    Wrapper = TouchableNativeFeedback;
  }
  return (
    <View style={{ ...styles.item, ...props.style }}>
      <Wrapper {...props} style={{ flex: 1 }} onPress={props.onPress}>
        <View style={{ ...styles.container }}>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground style={styles.bgImage} source={{ uri: props.imageUrl }}>
              <View style={{ ...styles.titleContainer }}>
                <DefaultText numberOfLines={1} style={styles.title}>
                  {props.title}
                </DefaultText>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <DefaultText>{props.duration}</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </Wrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
   
  },
  item: {
    flex:1,
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    justifyContent: "center"
  },
  container: {
    margin: 10,
    overflow: "hidden",

  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 18,

    textAlign: "center",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    height: "15%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  mealRow: {
    flexDirection: "row",
  },
});

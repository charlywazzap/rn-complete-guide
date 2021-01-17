import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { DefaultText } from '../../components/DefaultText'
import { Card } from "../UI/Card";

export const ProductItem = (props) => {
  const Wrapper = Platform.OS == "android" && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Card style={styles.container}>
      <View style={styles.touchable}>
        <Wrapper onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.imageUrl }} />
            </View>
            <View style={styles.details}>
              <DefaultText style={styles.title}>{props.title}</DefaultText>
              <DefaultText style={styles.price}>${props.price.toFixed(2)}</DefaultText>
            </View>
            <View style={styles.actions}>
                {props.children}
            </View>
          </View>
        </Wrapper>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 20,
  },
  touchable:{
    overflow: "hidden",
    borderRadius:10,

  },
  imageContainer: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: "open-sans-bold",
    fontSize: 18,
    marginVertical: 0,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
});

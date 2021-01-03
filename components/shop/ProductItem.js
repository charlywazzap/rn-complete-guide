import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import colors from "../../constants/colors";
import { DefaultText } from '../../components/DefaultText'

export const ProductItem = (props) => {
  const Wrapper = Platform.OS == "android" && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View style={styles.container}>
      <View style={styles.touchable}>
        <Wrapper onPress={props.onViewDetails} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.imageUrl }} />
            </View>
            <View style={styles.details}>
              <DefaultText style={styles.title}>{props.title}</DefaultText>
              <DefaultText style={styles.price}>${props.price.toFixed(2)}</DefaultText>
            </View>
            <View style={styles.actions}>
              <Button color={colors.primary} title="View Details" onPress={props.onViewDetails} />
              <Button color={colors.primary} title="Add To Card" onPress={props.onAddToCart} />
            </View>
          </View>
        </Wrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      width:3,
      height: 7,
    },
    shadowOpacity: 0.26,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: "white",
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

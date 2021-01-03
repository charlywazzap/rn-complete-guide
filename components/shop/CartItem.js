import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DefaultText } from "../DefaultText";
import { Ionicons } from '@expo/vector-icons'

export const CartItem = (props) => {
  return (
    <View style={styles.container}>
      <DefaultText style={styles.itemData}>
        <DefaultText style={styles.quantity} >{props.quantity} </DefaultText>
        <DefaultText style={styles.text}> {props.title}</DefaultText>
      </DefaultText>
      <View style={styles.itemData}>
        <DefaultText style={styles.text}>${props.amount.toFixed(2) }</DefaultText>
        <TouchableOpacity style={styles.deleteButton}onPress={props.onRemove}>
            <Ionicons 
               name={ Platform.OS == 'android' ? 'md-trash' :'ios-trash'}
              size={23}
              color={'red'}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  itemData:{
    flexDirection: "row",
    alignItems: "center"
  },
  quantity :{
    fontSize: 16,
    color: '#888'
  },
  text :{
    fontFamily: "open-sans-bold",
    fontSize: 16
  },
  deleteButton:{
    marginLeft: 20,
  }
});

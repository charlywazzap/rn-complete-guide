import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../../constants/colors";
import { CartItem } from "./CartItem";

export const OrderItem = (props) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary} >
        <Text style={styles.total}>{props.totalAmount}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.button}>
        <Button color={colors.primary} title={'Order Details'}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem:{
    shadowColor: "black",
    shadowOffset: {
      width:3,
      height: 7,
    },
    shadowOpacity: 0.26,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 10,
    padding: 15
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%'
  },
  ammount: {
    fontSize:16,
    fontFamily: 'open-sans-bold'
  },
  date: {
    fontSize:16,
    fontFamily: 'open-sans'
  },
  button: {
    alignItems: 'center',
    marginVertical: 10
  }
});

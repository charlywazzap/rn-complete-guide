import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../../constants/colors";
import { Card } from "../UI/Card";
import { CartItem } from "./CartItem";

export const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary} >
        <Text style={styles.total}>{props.totalAmount}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.button}>
        <Button color={colors.primary} title={showDetails ? 'Hide Details' : 'Show Details'} onPress={() => setShowDetails(prevState => !prevState)}/>
      </View>
      {showDetails && 
      <View style={styles.cartItem}>
        {props.items.map(cartItem => (
          <CartItem
          key={cartItem.productId}
          quantity={cartItem.quantity}
          title={cartItem.productTitle}
          amount={cartItem.sum}
          />
        ))}
      </View>
       }
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem:{
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
  },
  cartItem:{
    width: '100%'
  }
});

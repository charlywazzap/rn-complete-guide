import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { DefaultText } from "../../components/DefaultText";
import { CartItem } from "../../components/shop/CartItem";
import { Card } from "../../components/UI/Card";
import colors from "../../constants/colors";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/orders";


export const CartScreen = (props) => {
  const dispatch = useDispatch()
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItems = useSelector((state) => {
    const transformedItems = []; 
    for (const key in state.cart.items) {
      transformedItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      })
    }
    return transformedItems.sort((a,b) => a.productId > b.productId ? 1: -1)
  });

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <DefaultText style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>{" "}
        </DefaultText>

        <Button title="Order Now" onPress={() => {
          dispatch(orderActions.addOrder(cartItems,cartTotalAmount))
        }} disabled={cartItems.length == 0}/>
      </Card>
      <View>
        <Text>Cart Items </Text>
        <FlatList 
          data={cartItems}
          keyExtractor={item =>  item.productId }
          renderItem={(itemData) =>
            <CartItem
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              deletable
              onRemove={()=>{
                dispatch(cartActions.removeFromCart(itemData.item.productId))
              }}
            />

          }
        />
      </View>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Your Cart'
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: colors.primary,
  },
});

import React from "react";
import { FlatList, Text, StyleSheet, Platform } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'
import { CustomHeaderButton } from "../../components/UI/CustomHeaderButton";


export const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      // keyExtractor={(item) => item.id}
      renderItem={ (itemData) => {
        return (
            <Text>{itemData.item.id}</Text>
        )
      } }
    />
  );
};

OrdersScreen.navigationOptions = (navData) => ({
  headerTitle: "Your Orders",
  headerLeft: () => {
    return (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Orders"
          iconName={Platform.OS == "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    );
  },
});

const styles = StyleSheet.create({});

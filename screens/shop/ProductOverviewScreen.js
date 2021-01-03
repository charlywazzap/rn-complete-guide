import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'
import { CustomHeaderButton } from "../../components/UI/CustomHeaderButton";

export const ProductOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => {
        return (
          <ProductItem
            {...itemData.item}
            onAddToCart={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
            onViewDetails={() => {
              props.navigation.navigate({
                routeName: "ProductDetail",
                params: {
                  productId: itemData.item.id,
                  productTitle: itemData.item.title,
                },
              });
            }}
          />
        );
      }}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
  headerRight: () => {
      return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item 
                title="Cart"
                iconName={Platform.OS == 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => {}}
              />
          </HeaderButtons>
      )
  }
};

const styles = StyleSheet.create({});

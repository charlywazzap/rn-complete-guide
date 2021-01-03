import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";

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
};

const styles = StyleSheet.create({});

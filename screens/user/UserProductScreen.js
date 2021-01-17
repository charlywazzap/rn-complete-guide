import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ProductItem } from "../../components/shop/ProductItem";
import { useSelector } from "react-redux";

export const UserProductScreen = (props) => {
  const userProducts = useSelector((state) => state.product.userProducts);
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return <ProductItem {...itemData.item} 
        onAddToCart={() => {
        }}
        onViewDetails={() => {}}
        
        />;
      }}
    />
  );
};

const styles = StyleSheet.create({});

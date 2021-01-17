import React from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";
import { ProductItem } from "../../components/shop/ProductItem";
import { useSelector } from "react-redux";
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'
import { CustomHeaderButton } from "../../components/UI/CustomHeaderButton";


export const UserProductScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
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

UserProductScreen.navigationOptions = (navData) => ({
  headerTitle: "Your Products",
  headerLeft: () => {
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
              title="Orders"
              iconName={Platform.OS == 'android' ? 'md-menu' : 'ios-menu'}
              onPress={() => {
                  navData.navigation.toggleDrawer()
              }}
            />
        </HeaderButtons>
    )
},
  headerRight: () => {
      return ( null
          // <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          //     <Item 
          //       title="Cart"
          //       iconName={Platform.OS == 'android' ? 'md-cart' : 'ios-cart'}
          //       onPress={() => {
          //           navData.navigation.navigate('Cart')
          //       }}
          //     />
          // </HeaderButtons>
      )
  }
});

const styles = StyleSheet.create({});

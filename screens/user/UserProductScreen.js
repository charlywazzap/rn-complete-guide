import React from "react";
import { View, Button, StyleSheet, FlatList, Platform } from "react-native";
import { ProductItem } from "../../components/shop/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButton, HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/UI/CustomHeaderButton";
import colors from "../../constants/colors";
import * as productActions from "../../store/actions/products";

export const UserProductScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const handleEditProduct = (id) => {
    props.navigation.navigate({
      routeName: "EditProduct",
      params: {
        productId: id,
      },
    });
  };
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <ProductItem
            {...itemData.item}
            onSelect={() => {
              handleEditProduct(itemData.item.id);
            }}
          >
            <Button
              color={colors.primary}
              title="Edit"
              onPress={() => {
                handleEditProduct(itemData.item.id);
              }}
            />
            <Button
              color={colors.primary}
              title="Delete"
              onPress={() => {
                dispatch(productActions.deleteProduct(itemData.item.id));
              }}
            />
          </ProductItem>
        );
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
          iconName={Platform.OS == "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    );
  },
  headerRight: () => {
    return (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Add"
        iconName={Platform.OS == 'android' ? 'md-create' : 'ios-create'}
        onPress={() => {
            navData.navigation.navigate('EditProduct')
        }}
      />
  </HeaderButtons>
    );

  },
});

const styles = StyleSheet.create({});

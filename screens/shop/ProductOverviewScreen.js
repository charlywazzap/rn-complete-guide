import React from "react";
import { View, Text, StyleSheet, FlatList, Button, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'
import { CustomHeaderButton } from "../../components/UI/CustomHeaderButton";
import colors from '../../constants/colors'

export const ProductOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const handleViewDetails = (id,title) => {
    props.navigation.navigate({
      routeName: "ProductDetail",
      params: {
        productId: id,
        productTitle: title,
      },
    })
  }
  const handleAddToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  }
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => {
        return (
          <ProductItem
            {...itemData.item}
            onSelect={handleViewDetails.bind(null,itemData.item.id,itemData.item.title)}
          >
              <Button color={colors.primary} title="View Details" onPress={handleViewDetails.bind(null,itemData.item.id,itemData.item.title)} />
              <Button color={colors.primary} title="Add To Card" onPress={() => {handleAddToCart(itemData.item)}} />
          </ProductItem>
        );
      }}
    />
  );
};

ProductOverviewScreen.navigationOptions = (navData) => ({
  headerTitle: "All Products",
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
      return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item 
                title="Cart"
                iconName={Platform.OS == 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => {
                    navData.navigation.navigate('Cart')
                }}
              />
          </HeaderButtons>
      )
  }
});

const styles = StyleSheet.create({});

import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { ProductItem } from '../../components/shop/ProductItem'

export const ProductOverviewScreen = props => {
     const products = useSelector(state => state.products.availableProducts)
    return (
            <FlatList 
                data={ products }
                renderItem={itemData => {
                    return (
                        <ProductItem 
                            {...itemData.item}
                            onAddToCart={() => {
                  
                            }}
                            onViewDetails={() => {
                                props.navigation.navigate({
                                    routeName: 'ProductDetail',
                                    params:{
                                        productId: itemData.item.id,
                                        productTitle: itemData.item.title
                                    }
                                })
                            }}
                        />
                    )
                }}
            />
    );
}


ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

const styles = StyleSheet.create({

})
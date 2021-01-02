import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

export const ProductOverviewScreen = props => {
     const products = useSelector(state => state.products.availableProducts)
    return (
            <FlatList 
                data={ products }
                renderItem={itemData => {
                    return (
                        <Text>{itemData.item.title}</Text>
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
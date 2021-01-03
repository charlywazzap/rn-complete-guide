import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'

export const ProductDetailScren = props => {
    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id == productId))
    return (
      <View>
        <Text>The Product Detail {selectedProduct.title}</Text>
      </View>
    );
}

ProductDetailScren.navigationOptions = navData => {
    return {
      headerTitle: navData.navigation.getParam('productTitle')

    }
}

const styles = StyleSheet.create({

})
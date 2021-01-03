import React from 'react'
import { View, Text, StyleSheet, Image, Button} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import colors from '../../constants/colors'

export const ProductDetailScren = props => {
    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id == productId))
    return (
      <ScrollView >
          <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
          <Button color={colors.primary} title="Add To Cart" onPress={() => {}}/>
          <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
    );
}

ProductDetailScren.navigationOptions = navData => {
    return {
      headerTitle: navData.navigation.getParam('productTitle')

    }
}

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 30,
  }
})
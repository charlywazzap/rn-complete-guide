import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

export const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button title={"Go to Details"} onPress={ () => props.navigation.navigate('MealDetails')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1 ,
    justifyContent: "center",
    alignItems: "center"
  }
});

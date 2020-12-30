import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

export const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen</Text>
      <Button title={"Go to back with pop (only works withstack navs)"} onPress={() => props.navigation.pop()} />
      <Button title={"Go to back to categories ( very top or root))"} onPress={() => props.navigation.popToTop()} />
      
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

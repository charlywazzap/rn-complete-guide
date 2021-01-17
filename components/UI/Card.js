import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const Card = props => {
    return (
      <View style={{...styles.card, ...props.style }}>
        {props.children}
      </View>
    );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width:1,
      height: 4,
    },
    shadowOpacity: 0.26,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: "white",
  }
})
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const DefaultText = props => {
    return (
      <Text {...props} style={{...styles.text, ...props.style}}>
        {props.children}
      </Text>
    );
}

const styles = StyleSheet.create({
  text:{
    fontFamily: 'open-sans'
  }
})
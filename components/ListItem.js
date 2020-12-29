import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const ListItem = props => {
    return (
      <View style={styles.listItem} >
        {props.children}
      </View>
    );
}

const styles = StyleSheet.create({
  listItem:{
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '60%'
  }
})
